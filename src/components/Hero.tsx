"use client";

import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  const stats = [
    { value: "38+", label: "Projects Delivered Worldwide" },
    { value: "99%", label: "Client Satisfaction Score" },
    { value: "4yr", label: "Average Partnership Length" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black pt-20 pb-16 overflow-hidden border-b border-neutral-900">
      {/* Full-Screen 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroCanvas />
        {/* Soft Vignette & Gradient Overlays for High Contrast & Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 opacity-80" />
      </div>

      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0" />

      {/* Hero Badge Tag (Floating top-right) */}
      <div className="absolute top-28 right-6 sm:right-12 z-20 hidden md:flex items-center gap-2 font-mono text-[10px] text-neutral-400 tracking-widest uppercase bg-neutral-900/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-800 shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>ANIME.JS 4.5 3D INSTANCED MESH (6x6x6)</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-3xl flex flex-col items-start space-y-8">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 font-mono text-xs text-white tracking-wider uppercase rounded-full shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>DEVELOPER CUBE // DIGITAL AGENCY</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">AGRA, INDIA</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline font-extrabold text-white tracking-tight uppercase leading-[1.05]">
            WE BUILD DIGITAL <br />
            PRODUCTS THAT <br />
            <span className="underline decoration-blue-500 underline-offset-8">SCALE</span> GLOBALLY.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-sans drop-shadow">
            A three-developer digital agency in Agra, India working with clients worldwide. We design & build full-stack web applications, Shopify stores, Android apps, and custom REST APIs.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto font-mono text-xs font-semibold uppercase tracking-wider pt-2">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-black font-bold text-center border border-white hover:bg-black hover:text-white transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="px-8 py-4 bg-black/80 backdrop-blur-md border border-neutral-700 text-white text-center hover:border-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              View Selected Work
            </a>
          </div>

          {/* Three-Stat Count-Up Row */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-800/80 w-full max-w-xl">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] text-neutral-400 mt-1 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="mt-16 flex justify-center">
          <a
            href="#marquee"
            className="group flex flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-white transition-colors"
            aria-label="Scroll down to content"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="w-4 h-7 border border-neutral-700 rounded-full flex justify-center p-1 group-hover:border-white">
              <div className="w-1 h-1.5 bg-white rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
