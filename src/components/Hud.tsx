"use client";

import { useEffect, useState } from "react";

interface HudProps {
  currentStage: number;
}

export default function Hud({ currentStage }: HudProps) {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const stageData = [
    { name: "BASE CAMP", alt: "2,860 M", perf: "100%", day: "Stage 0" },
    { name: "DISCOVERY", alt: "3,440 M", perf: "99%", day: "Stage I" },
    { name: "UX / UI", alt: "3,867 M", perf: "100%", day: "Stage II" },
    { name: "WEB CORE", alt: "4,940 M", perf: "98%", day: "Stage III" },
    { name: "SHOPIFY", alt: "5,364 M", perf: "100%", day: "Stage IV" },
    { name: "ANDROID", alt: "6,065 M", perf: "99%", day: "Stage V" },
    { name: "REST APIS", alt: "7,160 M", perf: "100%", day: "Stage VI" },
    { name: "SUMMIT", alt: "8,848 M", perf: "100%", day: "Stage VII" },
  ];

  const activeStage = stageData[Math.min(currentStage, stageData.length - 1)] || stageData[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#070b12]/80 backdrop-blur-md border-b border-[#1e293b]/70 font-mono-code text-[11px] text-[#94a3b8] selection:bg-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between">
        {/* Left Telemetry Cells */}
        <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[#64748b] uppercase tracking-wider">ALTITUDE</span>
            <span className="text-white font-bold tracking-tight">{activeStage.alt}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <span className="text-[#64748b] uppercase tracking-wider">PERF / SCORE</span>
            <span className="text-[#8fd8ec] font-bold">{activeStage.perf}</span>
          </div>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <span className="text-[#64748b] uppercase tracking-wider">PROJECTS</span>
            <span className="text-[#d8b787] font-bold">38+ DELIVERED</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[#64748b] uppercase tracking-wider">TIME (IST)</span>
            <span className="text-white font-bold">{localTime || "06:18"}</span>
          </div>
        </div>

        {/* Right Active Stage Indicator */}
        <div className="flex items-center gap-2 shrink-0 pl-4 border-l border-[#1e293b]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-ping" />
          <span className="text-white font-bold tracking-wider uppercase">
            {activeStage.day} · {activeStage.name}
          </span>
        </div>
      </div>
    </header>
  );
}
