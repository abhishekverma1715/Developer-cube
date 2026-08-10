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

    // 1. Scene & Full-screen Camera Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    // Adjusted camera distance for full screen coverage
    camera.position.set(0, 0, 3.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x60a5fa, 2.8); // Vibrant cyan-blue light
    dirLight1.position.set(4, 5, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xc084fc, 2.2); // Vibrant purple-pink light
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
      "#60a5fa", // Vibrant Blue
      "#a78bfa", // Electric Purple
      "#f472b6", // Neon Pink
      "#34d399", // Emerald Green
      "#38bdf8", // Sky Blue
      "#f59e0b", // Warm Amber
      "#ffffff", // Crisp White
    ];

    const gridAxis = (axis: "x" | "y" | "z", span = spread) =>
      stagger([-span, span], { grid: [gridSize, gridSize, gridSize], axis });

    // Continuous rotation of the whole 3D mesh
    const meshRotationAnim = animate(mesh, {
      rotateY: 360,
      rotateX: 360,
      duration: 26000,
      loop: true,
      ease: "linear",
    });

    // Per-instance staggered animations using Anime.js stagger
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

    // 5. Ambient Dust Particles across full screen
    const particleCount = 400;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 10;
      particlePos[i + 1] = (Math.random() - 0.5) * 10;
      particlePos[i + 2] = (Math.random() - 0.5) * 10;
    }
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.02,
      transparent: true,
      opacity: 0.45,
    });
    const dustParticles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(dustParticles);

    // 6. Interactive Mouse Parallax over full window
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
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
        dustParticles.rotation.y = elapsedTime * 0.03;

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Position offset for hero layout balance
        mesh.position.x = targetX * 0.4 + (window.innerWidth > 1024 ? 0.6 : 0);
        mesh.position.y = -targetY * 0.4;
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
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-screen" />;
}
