"use client";

interface StageRailProps {
  activeStage: number;
  totalStages: number;
  onSelectStage: (stageIndex: number) => void;
}

export default function StageRail({ activeStage, totalStages, onSelectStage }: StageRailProps) {
  const stages = [
    { num: "0", name: "Gateway", code: "S0" },
    { num: "I", name: "Discovery", code: "S1" },
    { num: "II", name: "UX/UI Design", code: "S2" },
    { num: "III", name: "Full-Stack Web", code: "S3" },
    { num: "IV", name: "Shopify Store", code: "S4" },
    { num: "V", name: "Android App", code: "S5" },
    { num: "VI", name: "REST APIs", code: "S6" },
    { num: "VII", name: "Global Summit", code: "S7" },
  ];

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3 font-mono-code text-[10px] select-none">
      <div className="flex flex-col items-center gap-2 bg-[#0b0d12]/80 backdrop-blur-md p-2 rounded-full border border-[#1e293b] shadow-xl">
        {stages.slice(0, totalStages).map((st, i) => {
          const isActive = activeStage === i;
          return (
            <button
              key={i}
              onClick={() => onSelectStage(i)}
              className={`group relative flex items-center justify-center w-7 h-7 rounded-full transition-all ${
                isActive
                  ? "bg-[#d8b787] text-[#070b12] font-bold shadow-md scale-110"
                  : "text-[#64748b] hover:text-white hover:bg-[#1e293b]"
              }`}
              aria-label={`Jump to Stage ${st.num}`}
            >
              <span>{st.num}</span>

              {/* Hover Tooltip */}
              <div className="absolute left-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity bg-[#070b12] text-white px-2.5 py-1 rounded border border-[#1e293b] whitespace-nowrap shadow-xl">
                <span className="text-[#d8b787] font-bold mr-1.5">{st.code}</span>
                <span>{st.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
