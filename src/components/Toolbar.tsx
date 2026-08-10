"use client";

interface ToolbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenPerfModal: () => void;
  onPlayHover?: () => void;
  onPlayClick?: () => void;
  isFreeOrbit: boolean;
  onToggleFreeOrbit: () => void;
}

export default function Toolbar({
  soundEnabled,
  onToggleSound,
  onOpenPerfModal,
  onPlayHover,
  onPlayClick,
  isFreeOrbit,
  onToggleFreeOrbit,
}: ToolbarProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 font-mono-code text-[11px] select-none">
      <div className="bg-[#0b0d12]/90 backdrop-blur-xl border border-[#1e293b] rounded-full p-1 flex items-center gap-1 shadow-2xl">
        {/* Free Orbit Toggle */}
        <button
          onClick={() => {
            onPlayClick?.();
            onToggleFreeOrbit();
          }}
          onMouseEnter={onPlayHover}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
            isFreeOrbit
              ? "bg-[#d8b787] text-[#070b12] font-bold shadow-md"
              : "text-[#94a3b8] hover:text-white hover:bg-[#1e293b]/60"
          }`}
          title="Free orbit 3D camera (E)"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
          </svg>
          <span className="hidden sm:inline">FREE ORBIT</span>
          <kbd className="hidden sm:inline-block px-1 py-0.2 bg-black/30 text-[9px] rounded font-bold">E</kbd>
        </button>

        {/* Sound Toggle */}
        <button
          onClick={() => {
            onPlayClick?.();
            onToggleSound();
          }}
          onMouseEnter={onPlayHover}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
            soundEnabled
              ? "bg-[#8fd8ec] text-[#070b12] font-bold shadow-md"
              : "text-[#94a3b8] hover:text-white hover:bg-[#1e293b]/60"
          }`}
          title="Toggle ambient soundscape (M)"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {soundEnabled ? (
              <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
            ) : (
              <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
            )}
          </svg>
          <span>{soundEnabled ? "SOUND ON" : "SOUND OFF"}</span>
          <kbd className="hidden sm:inline-block px-1 py-0.2 bg-black/30 text-[9px] rounded font-bold">M</kbd>
        </button>

        {/* Performance Settings Modal Button */}
        <button
          onClick={() => {
            onPlayClick?.();
            onOpenPerfModal();
          }}
          onMouseEnter={onPlayHover}
          className="p-1.5 text-[#94a3b8] hover:text-white hover:bg-[#1e293b]/60 rounded-full transition-all"
          title="Performance Settings"
          aria-label="Performance settings"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
