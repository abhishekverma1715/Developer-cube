"use client";

export interface PerfSettings {
  resolution: number;
  msaa: number;
  bloom: boolean;
  dust: boolean;
  smoothMotion: boolean;
}

interface PerfModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: PerfSettings;
  onUpdateSettings: (newSettings: Partial<PerfSettings>) => void;
  onPlayClick?: () => void;
}

export default function PerformanceModal({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onPlayClick,
}: PerfModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="everest-card w-full max-w-md p-6 rounded-2xl border border-[#1e293b] font-mono-code text-xs text-[#EDEDF2] shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-[#1e293b] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d8b787]" />
            <span className="font-bold tracking-wider uppercase text-white">PERFORMANCE SETTINGS</span>
          </div>
          <button
            onClick={() => {
              onPlayClick?.();
              onClose();
            }}
            className="text-[#94a3b8] hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Resolution Scale */}
        <div className="space-y-2">
          <div className="flex justify-between text-[#94a3b8]">
            <span>RENDER RESOLUTION</span>
            <span className="text-[#8fd8ec] font-bold">{settings.resolution}×</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[0.75, 1.0, 1.25, 1.5].map((res) => (
              <button
                key={res}
                onClick={() => {
                  onPlayClick?.();
                  onUpdateSettings({ resolution: res });
                }}
                className={`py-1.5 rounded border text-center transition-all ${
                  settings.resolution === res
                    ? "bg-[#d8b787] text-[#070b12] font-bold border-[#d8b787]"
                    : "bg-[#0b0d12] border-[#1e293b] text-[#94a3b8] hover:text-white"
                }`}
              >
                {res}×
              </button>
            ))}
          </div>
        </div>

        {/* Anti-aliasing */}
        <div className="space-y-2">
          <div className="flex justify-between text-[#94a3b8]">
            <span>ANTI-ALIASING (MSAA)</span>
            <span className="text-[#8fd8ec] font-bold">{settings.msaa === 0 ? "OFF" : `${settings.msaa}×`}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 2, 4].map((msaa) => (
              <button
                key={msaa}
                onClick={() => {
                  onPlayClick?.();
                  onUpdateSettings({ msaa });
                }}
                className={`py-1.5 rounded border text-center transition-all ${
                  settings.msaa === msaa
                    ? "bg-[#8fd8ec] text-[#070b12] font-bold border-[#8fd8ec]"
                    : "bg-[#0b0d12] border-[#1e293b] text-[#94a3b8] hover:text-white"
                }`}
              >
                {msaa === 0 ? "Off" : `${msaa}×`}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle Switches */}
        <div className="space-y-3 pt-2 border-t border-[#1e293b]">
          <div className="flex items-center justify-between">
            <span className="text-[#94a3b8]">BLOOM / LIGHTING GLOW</span>
            <button
              onClick={() => {
                onPlayClick?.();
                onUpdateSettings({ bloom: !settings.bloom });
              }}
              className={`w-10 h-5 rounded-full relative transition-colors ${
                settings.bloom ? "bg-[#34d399]" : "bg-[#1e293b]"
              }`}
            >
              <span
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                  settings.bloom ? "left-5" : "left-0.5"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#94a3b8]">AMBIENT DUST PARTICLES</span>
            <button
              onClick={() => {
                onPlayClick?.();
                onUpdateSettings({ dust: !settings.dust });
              }}
              className={`w-10 h-5 rounded-full relative transition-colors ${
                settings.dust ? "bg-[#34d399]" : "bg-[#1e293b]"
              }`}
            >
              <span
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                  settings.dust ? "left-5" : "left-0.5"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#94a3b8]">SMOOTH MOUSE MOTION</span>
            <button
              onClick={() => {
                onPlayClick?.();
                onUpdateSettings({ smoothMotion: !settings.smoothMotion });
              }}
              className={`w-10 h-5 rounded-full relative transition-colors ${
                settings.smoothMotion ? "bg-[#34d399]" : "bg-[#1e293b]"
              }`}
            >
              <span
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                  settings.smoothMotion ? "left-5" : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="text-[10px] text-[#64748b] text-center pt-2">
          Auto adapts rendering pipelines to hardware capability.
        </div>
      </div>
    </div>
  );
}
