"use client";

import { useState } from "react";

export default function LedgerDashboard() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const statTiles = [
    { title: "PROJECTS DELIVERED", value: "38+", desc: "Full-stack apps, Shopify & mobile" },
    { title: "CLIENT SATISFACTION", value: "99%", desc: "Verified client satisfaction score" },
    { title: "AVERAGE PARTNERSHIP", value: "4 Yrs", desc: "Long-term client relationships" },
    { title: "LIGHTHOUSE SCORE", value: "100", desc: "Performance, SEO & accessibility" },
    { title: "TYPICAL BUDGET", value: "$10–50K", desc: "Complete end-to-end delivery" },
    { title: "SPRINT TURNAROUND", value: "4 Wks", desc: "Average time to v1 production" },
    { title: "GLOBAL REACH", value: "14+", desc: "Countries with active users" },
    { title: "SPEED INDEX", value: "0.4s", desc: "Average Largest Contentful Paint" },
  ];

  const yearlyProjects = [
    { year: "2022", count: 6 },
    { year: "2023", count: 10 },
    { year: "2024", count: 12 },
    { year: "2025", count: 18 },
    { year: "2026", count: 24 },
  ];

  const funnelSteps = [
    { label: "INQUIRIES", val: "100", desc: "Initial client project proposals" },
    { label: "DISCOVERY", val: "92", desc: "Technical feasibility audit passed" },
    { label: "ARCHITECTURE", val: "85", desc: "System blueprint approved" },
    { label: "DEVELOPMENT", val: "78", desc: "Full-stack sprint execution" },
    { label: "QA & LAUNCH", val: "70", desc: "Production deployment & summit" },
  ];

  const sprintHours = [
    { time: "09:00", event: "Daily Standup & Architecture Sync" },
    { time: "11:00", event: "Deep Code Execution & Feature Commits" },
    { time: "14:00", event: "API Integration & Automated Testing" },
    { time: "16:30", event: "Code Review & PR Merges" },
    { time: "18:00", event: "Staging Deployment & Client Demo" },
  ];

  return (
    <section id="ledger" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <p className="font-mono-code text-xs text-[#d8b787] uppercase tracking-widest">
          EPILOGUE · <b>THE AGENCY LEDGER</b>
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          What Digital Excellence <em className="font-serif italic font-normal text-[#8fd8ec]">Costs & Delivers</em>
        </h2>
        <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
          Four-plus years of full-stack engineering, performance auditing, and client partnerships summarized in raw data.
        </p>
      </div>

      {/* 8 Stat Tiles */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {statTiles.map((st, i) => (
          <div
            key={i}
            className="everest-card p-5 rounded-xl border border-[#1e293b] flex flex-col justify-between space-y-3"
          >
            <span className="font-mono-code text-[10px] text-[#64748b] uppercase tracking-wider">
              {st.title}
            </span>
            <span className="font-mono-code text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {st.value}
            </span>
            <span className="font-mono-code text-[11px] text-[#94a3b8] leading-tight">{st.desc}</span>
          </div>
        ))}
      </div>

      {/* Analytics Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Yearly Growth Chart (8 Cols) */}
        <div className="lg:col-span-8 everest-card p-6 rounded-2xl border border-[#1e293b] space-y-6">
          <div className="flex items-center justify-between border-b border-[#1e293b] pb-4 font-mono-code text-xs">
            <span className="text-[#8fd8ec] font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8fd8ec]" />
              PROJECTS DELIVERED PER YEAR · 2022–2026
            </span>
            <span className="text-[#64748b]">ANNUAL VELOCITY</span>
          </div>

          {/* Bar Chart Visual */}
          <div className="h-48 flex items-end justify-between gap-4 pt-6 px-4">
            {yearlyProjects.map((yp, idx) => {
              const maxCount = 25;
              const heightPct = (yp.count / maxCount) * 100;
              const isHovered = hoveredBar === idx;

              return (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center gap-2 h-full justify-end relative group cursor-pointer"
                  onMouseEnter={() => setHoveredBar(idx)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  {isHovered && (
                    <div className="absolute -top-10 bg-[#070b12] text-white px-2.5 py-1 rounded border border-[#1e293b] font-mono-code text-[10px] shadow-xl whitespace-nowrap z-20">
                      <span className="text-[#d8b787] font-bold">{yp.count} Projects</span>
                    </div>
                  )}

                  <div className="w-full bg-[#1e293b]/40 rounded-t-md h-full flex items-end overflow-hidden">
                    <div
                      className={`w-full transition-all duration-500 rounded-t-md ${
                        isHovered ? "bg-[#d8b787]" : "bg-[#8fd8ec]"
                      }`}
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                  <span className="font-mono-code text-xs text-[#94a3b8] font-bold">{yp.year}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack Split (4 Cols) */}
        <div className="lg:col-span-4 everest-card p-6 rounded-2xl border border-[#1e293b] space-y-6 flex flex-col justify-between">
          <div className="border-b border-[#1e293b] pb-4 font-mono-code text-xs text-[#d8b787] font-bold tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d8b787]" />
            CORE WORKFORCE STACK
          </div>

          <div className="space-y-4 font-mono-code text-xs">
            <div>
              <div className="flex justify-between text-[#94a3b8] mb-1">
                <span>Next.js & React 19</span>
                <span className="text-white font-bold">50%</span>
              </div>
              <div className="w-full h-2 bg-[#1e293b] rounded-full overflow-hidden">
                <div className="h-full bg-[#60a5fa] w-[50%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[#94a3b8] mb-1">
                <span>Shopify & E-Commerce</span>
                <span className="text-white font-bold">25%</span>
              </div>
              <div className="w-full h-2 bg-[#1e293b] rounded-full overflow-hidden">
                <div className="h-full bg-[#34d399] w-[25%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[#94a3b8] mb-1">
                <span>Android Native / Kotlin</span>
                <span className="text-white font-bold">15%</span>
              </div>
              <div className="w-full h-2 bg-[#1e293b] rounded-full overflow-hidden">
                <div className="h-full bg-[#a78bfa] w-[15%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[#94a3b8] mb-1">
                <span>Custom REST APIs & Node</span>
                <span className="text-white font-bold">10%</span>
              </div>
              <div className="w-full h-2 bg-[#1e293b] rounded-full overflow-hidden">
                <div className="h-full bg-[#f59e0b] w-[10%]" />
              </div>
            </div>
          </div>

          <div className="font-mono-code text-[11px] text-[#64748b]">
            100% in-house engineering by three senior full-stack developers in Agra, India.
          </div>
        </div>
      </div>

      {/* Attrition / Conversion Funnel & Sprint Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Project Pipeline Funnel (7 Cols) */}
        <div className="lg:col-span-7 everest-card p-6 rounded-2xl border border-[#1e293b] space-y-6">
          <div className="border-b border-[#1e293b] pb-4 font-mono-code text-xs text-[#34d399] font-bold tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#34d399]" />
            PROJECT FUNNEL · INQUIRY TO GLOBAL SUMMIT
          </div>

          <div className="space-y-3 font-mono-code text-xs">
            {funnelSteps.map((fn, fIdx) => (
              <div key={fIdx} className="flex items-center gap-4">
                <span className="w-28 text-[#64748b] text-right truncate">{fn.label}</span>
                <div className="flex-1 bg-[#1e293b]/50 h-7 rounded flex items-center px-3 relative overflow-hidden border border-[#1e293b]">
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-[#34d399]/20 border-r border-[#34d399]"
                    style={{ width: `${fn.val}%` }}
                  />
                  <span className="relative z-10 text-white font-bold mr-2">{fn.val}</span>
                  <span className="relative z-10 text-[#94a3b8] text-[10px] hidden sm:inline truncate">
                    {fn.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sprint Day Timeline (5 Cols) */}
        <div className="lg:col-span-5 everest-card p-6 rounded-2xl border border-[#1e293b] space-y-6">
          <div className="border-b border-[#1e293b] pb-4 font-mono-code text-xs text-[#d8b787] font-bold tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d8b787]" />
            DAILY SPRINT CADENCE
          </div>

          <div className="space-y-4 font-mono-code text-xs">
            {sprintHours.map((sh, sIdx) => (
              <div key={sIdx} className="flex items-start gap-3 border-l-2 border-[#1e293b] pl-3 py-0.5">
                <span className="text-[#8fd8ec] font-bold">{sh.time}</span>
                <span className="text-[#cbd5e1]">{sh.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
