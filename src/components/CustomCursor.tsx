"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId: number;

    const follow = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.25,
        y: prev.y + (pos.y - prev.y) * 0.25,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pos, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Pure White Center Dot */}
      <div
        className="fixed w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-[0_0_8px_#ffffff]"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      {/* Monochrome Ring */}
      <div
        className={`fixed border border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${
          isHovered ? "w-10 h-10 bg-white/10 border-white" : "w-7 h-7"
        }`}
        style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
      />
    </div>
  );
}
