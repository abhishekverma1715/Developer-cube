"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { animate, stagger } from "animejs";
import { getInstances } from "animejs/adapters/three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x60a5fa, 2.5); // Cyan-blue light
    dirLight1.position.set(3, 4, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xc084fc, 2.0); // Purple-pink light
    dirLight2.position.set(-3, -2, -3);
    scene.add(dirLight2);

    // 3. InstancedMesh Setup
    const gridSize = 6; // 6 x 6 x 6 = 216 instances
    const totalInstances = gridSize * gridSize * gridSize;
    const cellSize = 1.6 / gridSize;
    const spread = ((gridSize - 1) / 2) * cellSize;

    const geometry = new THREE.BoxGeometry(cellSize * 0.75, cellSize * 0.75, cellSize * 0.75);
    const material = new THREE.MeshStandardMaterial({
      roughness: 0.25,
      metalness: 0.75,
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
      "#ffffff", // Crisp White
    ];

    const gridAxis = (axis: "x" | "y" | "z", span = spread) =>
      stagger([-span, span], { grid: [gridSize, gridSize, gridSize], axis });

    // Continuous rotation of the entire mesh
    const meshRotationAnim = animate(mesh, {
      rotateY: 360,
      rotateX: 360,
      duration: 24000,
      loop: true,
      ease: "linear",
    });

    // Staggered per-instance animation through per-instance proxies
    const instancesAnim = animate(instances, {
      color: palette,
      x: [gridAxis("x", spread * 0.25), gridAxis("x")],
      y: [gridAxis("y", spread * 0.25), gridAxis("y")],
      z: [gridAxis("z", spread * 0.25), gridAxis("z")],
      scale: [0.12, 0.28, 0.12],
      delay: stagger([0, 3000], {
        grid: [gridSize, gridSize, gridSize],
        from: "center",
        reversed: true,
      }),
      duration: 2200,
      loopDelay: 500,
      loop: true,
      alternate: true,
      ease: "inOutQuad",
    });

    // 5. Ambient Dust Particles
    const particleCount = 250;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 6;
      particlePos[i + 1] = (Math.random() - 0.5) * 6;
      particlePos[i + 2] = (Math.random() - 0.5) * 6;
    }
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.015,
      transparent: true,
      opacity: 0.4,
    });
    const dustParticles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(dustParticles);

    // 6. Interactive Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 0.5;
      mouseY = (y / rect.height) * 0.5;
    };

    container.addEventListener("mousemove", handleMouseMove);

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
        dustParticles.rotation.y = elapsedTime * 0.04;

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        camera.position.x = targetX * 0.8;
        camera.position.y = -targetY * 0.8;
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
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[380px] sm:min-h-[480px]" />;
}
