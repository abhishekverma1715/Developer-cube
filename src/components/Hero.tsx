"use client";

import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  const stats = [
    { value: "38+", label: "Projects Delivered Worldwide" },
    { value: "99%", label: "Client Satisfaction Score" },
    { value: "4yr", label: "Average Partnership Length" },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-black pt-12 pb-20 overflow-hidden border-b border-neutral-900">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Info */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-neutral-950 border border-neutral-800 font-mono text-xs text-white tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>DEVELOPER CUBE // DIGITAL AGENCY</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">AGRA, INDIA</span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline font-extrabold text-white tracking-tight uppercase">
              WE BUILD DIGITAL <br />
              PRODUCTS THAT <br />
              <span className="underline decoration-white underline-offset-8">SCALE</span> GLOBALLY.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed font-sans">
              A three-developer digital agency in Agra, India working with clients worldwide. We design & build full-stack web applications, Shopify stores, Android apps, and custom REST APIs.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto font-mono text-xs font-semibold uppercase tracking-wider">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-black font-bold text-center border border-white hover:bg-black hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] focus:outline-none focus:ring-2 focus:ring-white"
              >
                Start a Project
              </a>
              <a
                href="#work"
                className="px-8 py-4 bg-black border border-neutral-700 text-white text-center hover:border-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                View Selected Work
              </a>
            </div>

            {/* Three-Stat Count-Up Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-900 w-full max-w-lg">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-500 mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Three.js Interactive 3D WebGL Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full h-[400px] sm:h-[480px] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden shadow-2xl">
              <HeroCanvas />
              {/* Canvas Overlay Labels */}
              <div className="absolute top-4 left-4 font-mono text-[10px] text-neutral-400 tracking-widest uppercase pointer-events-none bg-neutral-900/60 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800">
                // CANVAS_3D // ANIME.JS_INSTANCED_MESH
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white tracking-widest uppercase pointer-events-none flex items-center gap-2 bg-neutral-900/60 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                THREE.JS INSTANCED MESH (6x6x6)
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="mt-16 flex justify-center">
          <a
            href="#marquee"
            className="group flex flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-neutral-500 hover:text-white transition-colors"
            aria-label="Scroll down to content"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="w-4 h-7 border border-neutral-800 rounded-full flex justify-center p-1 group-hover:border-white">
              <div className="w-1 h-1.5 bg-white rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
