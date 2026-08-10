"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 12.6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Wireframe Cube - Pure Monochrome White/Grey
    const outerCubeGeo = new THREE.BoxGeometry(4.2, 4.2, 4.2);
    const outerCubeMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const outerCube = new THREE.Mesh(outerCubeGeo, outerCubeMat);
    mainGroup.add(outerCube);

    // 2. Inner Wireframe Cube
    const innerCubeGeo = new THREE.BoxGeometry(2.6, 2.6, 2.6);
    const innerCubeMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerCube = new THREE.Mesh(innerCubeGeo, innerCubeMat);
    mainGroup.add(innerCube);

    // 3. Icosahedron Core
    const icoGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const icoCore = new THREE.Mesh(icoGeo, icoMat);
    mainGroup.add(icoCore);

    // 4. Vertex Nodes
    const nodePositions: number[] = [];
    const posAttribute = icoGeo.attributes.position;
    for (let i = 0; i < posAttribute.count; i++) {
      nodePositions.push(posAttribute.getX(i), posAttribute.getY(i), posAttribute.getZ(i));
    }
    const nodesGeo = new THREE.BufferGeometry();
    nodesGeo.setAttribute("position", new THREE.Float32BufferAttribute(nodePositions, 3));
    const nodesMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 1.0,
    });
    const vertexNodes = new THREE.Points(nodesGeo, nodesMat);
    mainGroup.add(vertexNodes);

    // 5. 900 particles of dust - Monochrome White/Grey
    const particleCount = 900;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 16;
      particlePos[i + 1] = (Math.random() - 0.5) * 16;
      particlePos[i + 2] = (Math.random() - 0.5) * 16;
    }
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.03,
      transparent: true,
      opacity: 0.5,
    });
    const dustParticles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(dustParticles);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseX = (e.clientX - halfW) * 0.0008;
      mouseY = (e.clientY - halfH) * 0.0008;
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

    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        mainGroup.rotation.y = elapsedTime * 0.15;
        mainGroup.rotation.x = elapsedTime * 0.08;

        icoCore.rotation.y = -elapsedTime * 0.25;
        innerCube.rotation.z = elapsedTime * 0.1;

        dustParticles.rotation.y = elapsedTime * 0.03;

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        mainGroup.position.x = targetX * 2;
        mainGroup.position.y = -targetY * 2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[380px] sm:min-h-[480px]" />;
}
