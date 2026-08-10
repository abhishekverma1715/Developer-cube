"use client";

import { useState } from "react";
import { Play, RotateCcw, Check, Sparkles, Code, Layout, ShieldCheck, Cpu } from "lucide-react";

export default function InteractiveShowcase() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState<"counter" | "code" | "config">("counter");
  const [themeAccent, setThemeAccent] = useState<"cyan" | "indigo" | "emerald">("cyan");

  const accentStyles = {
    cyan: {
      bg: "bg-cyan-500",
      text: "text-cyan-400",
      border: "border-cyan-500/50",
      gradient: "from-cyan-500 to-blue-500",
      shadow: "shadow-cyan-500/20",
    },
    indigo: {
      bg: "bg-indigo-500",
      text: "text-indigo-400",
      border: "border-indigo-500/50",
      gradient: "from-indigo-500 to-purple-500",
      shadow: "shadow-indigo-500/20",
    },
    emerald: {
      bg: "bg-emerald-500",
      text: "text-emerald-400",
      border: "border-emerald-500/50",
      gradient: "from-emerald-400 to-teal-500",
      shadow: "shadow-emerald-500/20",
    },
  };

  const currentAccent = accentStyles[themeAccent];

  return (
    <section id="showcase" className="py-20 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Live Client & Server Demo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive State & Styling Playground
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Test real-time React client state updates and dynamic Tailwind CSS theme switching.
          </p>
        </div>

        {/* Main Interactive Demo Container */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-slate-400">src/app/page.tsx</span>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab("counter")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === "counter"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Live Preview
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === "code"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                React Code
              </button>
              <button
                onClick={() => setActiveTab("config")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === "config"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Tailwind CSS
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 sm:p-12">
            {activeTab === "counter" && (
              <div className="flex flex-col items-center justify-center space-y-8">
                {/* Theme Selector */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-slate-400">Accent Theme:</span>
                  <div className="flex items-center gap-2">
                    {(["cyan", "indigo", "emerald"] as const).map((accent) => (
                      <button
                        key={accent}
                        onClick={() => setThemeAccent(accent)}
                        className={`w-6 h-6 rounded-full capitalize transition-transform ${
                          accent === "cyan"
                            ? "bg-cyan-500"
                            : accent === "indigo"
                            ? "bg-indigo-500"
                            : "bg-emerald-500"
                        } ${themeAccent === accent ? "scale-125 ring-2 ring-white" : "opacity-60 hover:opacity-100"}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Counter Card */}
                <div
                  className={`relative p-8 rounded-2xl bg-slate-950 border ${currentAccent.border} shadow-2xl transition-all w-full max-w-sm text-center`}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">
                    Client Component State
                  </span>
                  <div className={`text-6xl font-black ${currentAccent.text} font-mono tracking-tight my-4`}>
                    {count}
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-6">
                    <button
                      onClick={() => setCount((c) => c - 1)}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-bold hover:bg-slate-800 active:scale-95 transition-all text-sm"
                    >
                      - 1
                    </button>
                    <button
                      onClick={() => setCount(0)}
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 active:scale-95 transition-all"
                      title="Reset Counter"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCount((c) => c + 1)}
                      className={`px-4 py-2 rounded-xl bg-gradient-to-r ${currentAccent.gradient} text-white font-bold shadow-lg ${currentAccent.shadow} hover:opacity-90 active:scale-95 transition-all text-sm`}
                    >
                      + 1
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950 px-4 py-2 rounded-full border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>State preserved locally with zero page reload</span>
                </div>
              </div>
            )}

            {activeTab === "code" && (
              <pre className="font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto p-4 rounded-xl bg-slate-950 border border-slate-800 leading-relaxed">
                <code>{`"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 rounded-2xl bg-slate-950 border border-cyan-500/50">
      <h2 className="text-6xl font-black text-cyan-400">{count}</h2>
      <div className="flex gap-3 mt-4">
        <button onClick={() => setCount(c => c - 1)}>- 1</button>
        <button onClick={() => setCount(c => c + 1)}>+ 1</button>
      </div>
    </div>
  );
}`}</code>
              </pre>
            )}

            {activeTab === "config" && (
              <pre className="font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto p-4 rounded-xl bg-slate-950 border border-slate-800 leading-relaxed">
                <code>{`@import "tailwindcss";

/* Tailwind CSS v4 Configuration */
@layer base {
  html {
    scroll-behavior: smooth;
  }
}

.animate-pulse-glow {
  animation: pulseGlow 6s ease-in-out infinite;
}`}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
