"use client";

import HeroCanvas from "./HeroCanvas";
import { PerfSettings } from "./PerformanceModal";

interface HeroProps {
  perfSettings?: PerfSettings;
  isFreeOrbit?: boolean;
}

export default function Hero({ perfSettings, isFreeOrbit }: HeroProps) {
  const stats = [
    { value: "38+", label: "Projects Delivered Worldwide" },
    { value: "99%", label: "Client Satisfaction Score" },
    { value: "4yr", label: "Average Partnership Length" },
  ];

  return (
    <section id="s0" className="relative min-h-screen flex flex-col justify-center bg-[#070b12] pt-24 pb-16 overflow-hidden border-b border-[#1e293b]">
      {/* Full-Screen 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroCanvas perfSettings={perfSettings} isFreeOrbit={isFreeOrbit} />
        {/* Soft Vignette & Gradient Overlays for High Contrast & Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b12] via-[#070b12]/80 to-transparent opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-[#070b12]/70 opacity-85" />
      </div>

      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a2333_1px,transparent_1px),linear-gradient(to_bottom,#1a2333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0" />

      {/* Hero Badge Tag (Floating top-right) */}
      <div className="absolute top-28 right-6 sm:right-12 z-20 hidden md:flex items-center gap-2 font-mono-code text-[10px] text-[#94a3b8] tracking-widest uppercase bg-[#0b0d12]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#1e293b] shadow-2xl">
        <span className="w-2 h-2 rounded-full bg-[#34d399] animate-ping" />
        <span>ANIME.JS 4.5 · THREE.JS INSTANCED MESH</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-3xl flex flex-col items-start space-y-8">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#0b0d12]/90 backdrop-blur-md border border-[#1e293b] font-mono-code text-xs text-white tracking-wider uppercase rounded-full shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#d8b787] animate-pulse" />
            <span>DEVELOPER CUBE // DIGITAL AGENCY</span>
            <span className="text-[#64748b]">•</span>
            <span className="text-[#d8b787]">AGRA, INDIA</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline font-extrabold text-white tracking-tight uppercase leading-[1.02]">
            WE BUILD DIGITAL <br />
            PRODUCTS THAT <br />
            <span className="underline decoration-[#d8b787] underline-offset-8">SCALE</span> GLOBALLY.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#cbd5e1] max-w-2xl leading-relaxed font-sans drop-shadow">
            A three-developer digital agency in Agra, India working with clients worldwide. We design & build full-stack web applications, Shopify stores, Android apps, and custom REST APIs.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto font-mono-code text-xs font-semibold uppercase tracking-wider pt-2">
            <a
              href="#s1"
              className="px-8 py-4 bg-[#d8b787] text-[#070b12] font-bold text-center border border-[#d8b787] hover:bg-[#070b12] hover:text-[#d8b787] transition-all shadow-[0_0_25px_rgba(216,183,135,0.25)] focus:outline-none focus:ring-2 focus:ring-[#d8b787]"
            >
              Begin the Ascent
            </a>
            <a
              href="#ledger"
              className="px-8 py-4 bg-[#0b0d12]/80 backdrop-blur-md border border-[#1e293b] text-white text-center hover:border-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              View The Ledger
            </a>
          </div>

          {/* Three-Stat Count-Up Row */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1e293b] w-full max-w-xl">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono-code text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow">
                  {stat.value}
                </span>
                <span className="font-mono-code text-[11px] text-[#94a3b8] mt-1 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="mt-16 flex justify-center">
          <a
            href="#s1"
            className="group flex flex-col items-center gap-2 font-mono-code text-[10px] tracking-widest text-[#94a3b8] hover:text-white transition-colors"
            aria-label="Scroll down to content"
          >
            <span>SCROLL TO EXPLORE STAGES</span>
            <div className="w-4 h-7 border border-[#1e293b] rounded-full flex justify-center p-1 group-hover:border-[#d8b787]">
              <div className="w-1 h-1.5 bg-[#d8b787] rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
