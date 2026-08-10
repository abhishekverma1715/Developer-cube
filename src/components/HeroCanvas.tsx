"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { animate, stagger } from "animejs";
import { getInstances } from "animejs/adapters/three";
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
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.8);

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

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x60a5fa, 2.8); // Blue
    dirLight1.position.set(4, 5, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xc084fc, 2.2); // Purple
    dirLight2.position.set(-4, -3, -4);
    scene.add(dirLight2);

    // 3. InstancedMesh Setup (6x6x6 = 216 instances)
    const gridSize = 6;
    const totalInstances = gridSize * gridSize * gridSize;
    const cellSize = 1.8 / gridSize;
    const spread = ((gridSize - 1) / 2) * cellSize;

    const geometry = new THREE.BoxGeometry(cellSize * 0.75, cellSize * 0.75, cellSize * 0.75);
    const material = new THREE.MeshStandardMaterial({
      roughness: 0.2,
      metalness: 0.8,
    });

    const mesh = new THREE.InstancedMesh(geometry, material, totalInstances);
    scene.add(mesh);

    // 4. Anime.js InstancedMesh Proxy Adapter
    const instances = getInstances(mesh);

    const palette = [
      "#60a5fa", // Blue
      "#a78bfa", // Purple
      "#f472b6", // Pink
      "#34d399", // Emerald
      "#38bdf8", // Sky
      "#f59e0b", // Amber
      "#ffffff", // White
    ];

    const gridAxis = (axis: "x" | "y" | "z", span = spread) =>
      stagger([-span, span], { grid: [gridSize, gridSize, gridSize], axis });

    const meshRotationAnim = animate(mesh, {
      rotateY: 360,
      rotateX: 360,
      duration: 26000,
      loop: true,
      ease: "linear",
    });

    const instancesAnim = animate(instances, {
      color: palette,
      x: [gridAxis("x", spread * 0.25), gridAxis("x")],
      y: [gridAxis("y", spread * 0.25), gridAxis("y")],
      z: [gridAxis("z", spread * 0.25), gridAxis("z")],
      scale: [0.12, 0.3, 0.12],
      delay: stagger([0, 3200], {
        grid: [gridSize, gridSize, gridSize],
        from: "center",
        reversed: true,
      }),
      duration: 2400,
      loopDelay: 600,
      loop: true,
      alternate: true,
      ease: "inOutQuad",
    });

    // 5. Dust Particles (conditional on perfSettings.dust)
    let dustParticles: THREE.Points | null = null;
    let particlesGeo: THREE.BufferGeometry | null = null;
    let particlesMat: THREE.PointsMaterial | null = null;

    if (perfSettings?.dust !== false) {
      const particleCount = 400;
      particlesGeo = new THREE.BufferGeometry();
      const particlePos = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        particlePos[i] = (Math.random() - 0.5) * 10;
        particlePos[i + 1] = (Math.random() - 0.5) * 10;
        particlePos[i + 2] = (Math.random() - 0.5) * 10;
      }
      particlesGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
      particlesMat = new THREE.PointsMaterial({
        color: 0x94a3b8,
        size: 0.02,
        transparent: true,
        opacity: 0.45,
      });
      dustParticles = new THREE.Points(particlesGeo, particlesMat);
      scene.add(dustParticles);
    }

    // 6. Interactive Mouse & Free Orbit Motion
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

    // 7. Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        if (dustParticles) {
          dustParticles.rotation.y = elapsedTime * 0.03;
        }

        if (isFreeOrbit) {
          camera.position.x = Math.sin(elapsedTime * 0.4) * 4.2;
          camera.position.z = Math.cos(elapsedTime * 0.4) * 4.2;
          camera.position.y = Math.sin(elapsedTime * 0.2) * 1.5;
        } else {
          targetX += (mouseX - targetX) * 0.05;
          targetY += (mouseY - targetY) * 0.05;

          mesh.position.x = targetX * 0.4 + (window.innerWidth > 1024 ? 0.6 : 0);
          mesh.position.y = -targetY * 0.4;
          camera.position.set(0, 0, 3.8);
        }

        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };

    render();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      meshRotationAnim.pause();
      instancesAnim.pause();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particlesGeo?.dispose();
      particlesMat?.dispose();
      renderer.dispose();
    };
  }, [perfSettings, isFreeOrbit]);

  return <div ref={mountRef} className="w-full h-full min-h-screen" />;
}
