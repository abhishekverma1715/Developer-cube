"use client";

import HeroCanvas from "./HeroCanvas";
import { PerfSettings } from "./PerformanceModal";

interface HeroProps {
  perfSettings?: PerfSettings;
  isFreeOrbit?: boolean;
  onPlayClick?: () => void;
}

export default function Hero({ perfSettings, isFreeOrbit, onPlayClick }: HeroProps) {
  const handleExperienceClick = () => {
    onPlayClick?.();
    const stage1 = document.getElementById("s1");
    if (stage1) {
      stage1.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="s0" className="relative min-h-screen flex flex-col justify-between bg-[#070b12] pt-24 pb-12 overflow-hidden border-b border-[#1e293b] select-none">
      {/* Full-Screen 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroCanvas perfSettings={perfSettings} isFreeOrbit={isFreeOrbit} />
        {/* Everest Vignette Overlay */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_30%,#070b12_95%] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-[#070b12]/80 opacity-80" />
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a2333_1px,transparent_1px),linear-gradient(to_bottom,#1a2333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-25 pointer-events-none z-0" />

      {/* Main Center Content Container (Matching Everest #s0 card & hin structure) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto text-center flex flex-col items-center justify-center space-y-8">
        
        {/* Star Icon Motif */}
        <div className="text-[#d8b787] text-3xl sm:text-4xl animate-pulse">✦</div>

        {/* Eyebrow */}
        <p className="font-mono-code text-xs sm:text-sm text-[#94a3b8] uppercase tracking-[0.25em] font-medium">
          DEVELOPER CUBE · DIGITAL AGENCY · <b>AGRA, INDIA</b>
        </p>

        {/* Main Display Title */}
        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-white uppercase leading-[0.95] drop-shadow-2xl">
          Developer Cube
        </h1>

        {/* Subtitle */}
        <div className="font-serif italic text-2xl sm:text-4xl text-[#d8b787] tracking-wider -mt-4">
          the digital ascent
        </div>

        {/* Hero CTA Block */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <button
            onClick={handleExperienceClick}
            className="group flex items-center gap-3 px-8 py-4 bg-[#d8b787] text-[#070b12] font-mono-code text-xs font-bold tracking-widest uppercase rounded-full shadow-[0_0_35px_rgba(216,183,135,0.35)] hover:scale-105 transition-all duration-300"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
            </svg>
            <span>Experience</span>
          </button>

          <span className="font-mono-code text-xs text-[#64748b] tracking-widest uppercase">
            or scroll
          </span>
        </div>

        {/* Credit Line */}
        <div className="font-mono-code text-[11px] text-[#64748b] tracking-[0.2em] uppercase pt-6 border-t border-[#1e293b]/60 w-full max-w-md">
          DEVELOPED BY <b className="text-white">DEVELOPER CUBE STUDIO</b> · BUILT FOR YOU
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-10 flex justify-center pb-4">
        <a
          href="#s1"
          onClick={onPlayClick}
          className="group flex flex-col items-center gap-2 font-mono-code text-[10px] tracking-widest text-[#64748b] hover:text-white transition-colors"
          aria-label="Scroll down to content"
        >
          <span>SCROLL TO ASCEND</span>
          <div className="w-4 h-7 border border-[#1e293b] rounded-full flex justify-center p-1 group-hover:border-[#d8b787]">
            <div className="w-1 h-1.5 bg-[#d8b787] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
