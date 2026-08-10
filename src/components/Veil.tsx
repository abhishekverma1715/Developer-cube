"use client";

import { useEffect, useState } from "react";

interface VeilProps {
  onBegin: () => void;
  onPlayClick?: () => void;
}

export default function Veil({ onBegin, onPlayClick }: VeilProps) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsReady(true);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  const handleStart = () => {
    if (!isReady) return;
    onPlayClick?.();
    setIsDismissed(true);
    setTimeout(() => {
      onBegin();
    }, 600);
  };

  if (isDismissed) {
    return (
      <div className="fixed inset-0 z-50 bg-[#070b12] pointer-events-none transition-opacity duration-700 opacity-0" />
    );
  }

  return (
    <div
      onClick={handleStart}
      tabIndex={0}
      role="button"
      aria-label="Begin the digital ascent"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070b12] text-center select-none cursor-pointer p-6 transition-opacity duration-700"
    >
      <div className="max-w-md w-full flex flex-col items-center space-y-6">
        {/* Star Icon Mark */}
        <div className="text-[#d8b787] text-4xl animate-pulse">✦</div>

        {/* Title & Subtitle */}
        <div className="space-y-1">
          <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-white uppercase">
            Developer Cube
          </h1>
          <div className="font-serif italic text-xl sm:text-2xl text-[#d8b787] tracking-wider">
            the digital ascent
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full space-y-2 pt-4 font-mono-code text-[11px]">
          <div className="w-full h-1 bg-[#1e293b] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#d8b787] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-[#64748b] tracking-widest uppercase">
            {isReady ? "ARCHITECTURE READY · 27.18° N · 78.01° E" : `PREPARING ARCHITECTURE · ${progress}%`}
          </div>
        </div>

        {/* Begin CTA Button */}
        <div className="pt-4">
          <button
            onClick={handleStart}
            disabled={!isReady}
            className={`group inline-flex items-center gap-3 px-8 py-4 font-mono-code text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 ${
              isReady
                ? "bg-[#d8b787] text-[#070b12] shadow-[0_0_30px_rgba(216,183,135,0.4)] hover:scale-105"
                : "bg-[#1e293b] text-[#64748b] cursor-not-allowed opacity-60"
            }`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
            </svg>
            <span>BEGIN THE ASCENT</span>
          </button>
        </div>

        {/* Sound Notice */}
        <div className="font-mono-code text-[10px] text-[#64748b] tracking-widest uppercase pt-2">
          BEST WITH SOUND ON
        </div>
      </div>
    </div>
  );
}
