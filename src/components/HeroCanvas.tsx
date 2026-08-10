"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { PerfSettings } from "./PerformanceModal";

interface HeroCanvasProps {
  perfSettings?: PerfSettings;
  isFreeOrbit?: boolean;
}

export default function HeroCanvas({ perfSettings, isFreeOrbit }: HeroCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b12, 0.08);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 7.5);

    const resolutionScale = perfSettings?.resolution ?? 1.0;
    const msaaSamples = perfSettings?.msaa ?? 2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: msaaSamples > 0,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2) * resolutionScale);
    container.appendChild(renderer.domElement);

    // 2. Cinematic Mountain Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Golden Sun Light on Summit Peaks
    const sunLight = new THREE.DirectionalLight(0xd8b787, 3.5);
    sunLight.position.set(8, 12, 10);
    scene.add(sunLight);

    // Cyan Mountain Shadow Light
    const shadowLight = new THREE.DirectionalLight(0x8fd8ec, 2.0);
    shadowLight.position.set(-8, 6, -8);
    scene.add(shadowLight);

    // 3. Procedural 3D Mountain Terrain Geometry (Everest Ridge & Peaks)
    const gridWidth = 18;
    const gridHeight = 18;
    const segments = 120;

    const geometry = new THREE.PlaneGeometry(gridWidth, gridHeight, segments, segments);
    geometry.rotateX(-Math.PI / 2); // Lay flat on XZ plane

    const pos = geometry.attributes.position;
    const vertexCount = pos.count;

    // Multi-octave noise function for realistic mountain peaks & ridges
    const getMountainHeight = (x: number, z: number) => {
      const distFromCenter = Math.sqrt(x * x + z * z);
      const centerFactor = Math.max(0, 1 - distFromCenter / 9);

      // Octave 1: Main mountain mass
      let h = Math.sin(x * 0.3) * Math.cos(z * 0.3) * 1.8;
      // Octave 2: Summit peaks & sharp ridges
      h += Math.sin(x * 0.8 + z * 0.6) * 0.9;
      h += Math.cos(x * 1.4 - z * 1.2) * 0.45;
      // Octave 3: High frequency rock texture
      h += Math.sin(x * 3.0) * Math.cos(z * 3.0) * 0.15;

      // Primary Summit Peak at center
      const summit = Math.exp(-(x * x + z * z) * 0.12) * 3.8;

      return (h + summit) * (0.4 + centerFactor * 0.8);
    };

    // Apply heights & vertex colors
    const colors = new Float32Array(vertexCount * 3);

    for (let i = 0; i < vertexCount; i++) {
      const vx = pos.getX(i);
      const vz = pos.getZ(i);
      const vy = getMountainHeight(vx, vz);

      pos.setY(i, vy);

      // Color mapping based on elevation (Obsidian Base → Cyan Snow → Gold Summit)
      const normH = Math.min(1, Math.max(0, vy / 4.2));

      let r = 0.04;
      let g = 0.07;
      let b = 0.11;

      if (normH > 0.65) {
        // Gold Summit
        const factor = (normH - 0.65) / 0.35;
        r = THREE.MathUtils.lerp(0.56, 0.85, factor);
        g = THREE.MathUtils.lerp(0.85, 0.72, factor);
        b = THREE.MathUtils.lerp(0.92, 0.53, factor);
      } else if (normH > 0.35) {
        // Cyan Snowline
        const factor = (normH - 0.35) / 0.3;
        r = THREE.MathUtils.lerp(0.04, 0.56, factor);
        g = THREE.MathUtils.lerp(0.07, 0.85, factor);
        b = THREE.MathUtils.lerp(0.11, 0.92, factor);
      }

      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }

    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.computeVertexNormals();

    // 4. Solid Mountain Mesh + Futuristic Wireframe Grid Overlay
    const mountainMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.3,
      metalness: 0.7,
      flatShading: true,
    });

    const mountainMesh = new THREE.Mesh(geometry, mountainMat);
    scene.add(mountainMesh);

    // Overlay Wireframe Grid for High-Tech Aesthetic
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xd8b787,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireMesh = new THREE.Mesh(geometry, wireMat);
    wireMesh.position.y += 0.01; // Slightly offset to prevent z-fighting
    scene.add(wireMesh);

    // 5. Atmospheric Floating Snow & Dust Particles
    let dustParticles: THREE.Points | null = null;
    let particlesGeo: THREE.BufferGeometry | null = null;
    let particlesMat: THREE.PointsMaterial | null = null;

    if (perfSettings?.dust !== false) {
      const particleCount = 600;
      particlesGeo = new THREE.BufferGeometry();
      const particlePos = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        particlePos[i] = (Math.random() - 0.5) * 16;
        particlePos[i + 1] = Math.random() * 6;
        particlePos[i + 2] = (Math.random() - 0.5) * 16;
      }
      particlesGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
      particlesMat = new THREE.PointsMaterial({
        color: 0xd8b787,
        size: 0.025,
        transparent: true,
        opacity: 0.6,
      });
      dustParticles = new THREE.Points(particlesGeo, particlesMat);
      scene.add(dustParticles);
    }

    // 6. Interactive Mouse & Flyover Camera Motion
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion || perfSettings?.smoothMotion === false) return;
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseX = (e.clientX - halfW) / halfW;
      mouseY = (e.clientY - halfH) / halfH;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!mountRef.current) return;
      const newW = mountRef.current.clientWidth;
      const newH = mountRef.current.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    // 7. Render Loop with Cinematic Camera Sweep
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Rotate mountain slowly
        mountainMesh.rotation.y = elapsedTime * 0.05;
        wireMesh.rotation.y = elapsedTime * 0.05;

        // Snow particles drift
        if (dustParticles) {
          dustParticles.rotation.y = elapsedTime * 0.02;
        }

        if (isFreeOrbit) {
          // 360° Free Orbit Around Mountain Peak
          const orbitRadius = 8.5;
          camera.position.x = Math.sin(elapsedTime * 0.3) * orbitRadius;
          camera.position.z = Math.cos(elapsedTime * 0.3) * orbitRadius;
          camera.position.y = 3.5 + Math.sin(elapsedTime * 0.15) * 1.2;
          camera.lookAt(0, 1.2, 0);
        } else {
          // Smooth Mouse Parallax Flyover
          targetX += (mouseX - targetX) * 0.05;
          targetY += (mouseY - targetY) * 0.05;

          camera.position.x = targetX * 2.5;
          camera.position.y = 3.2 - targetY * 1.2;
          camera.position.z = 7.5;
          camera.lookAt(0, 1.0, 0);
        }
      }

      renderer.render(scene, camera);
    };

    render();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      mountainMat.dispose();
      wireMat.dispose();
      particlesGeo?.dispose();
      particlesMat?.dispose();
      renderer.dispose();
    };
  }, [perfSettings, isFreeOrbit]);

  return <div ref={mountRef} className="w-full h-full min-h-screen" />;
}
