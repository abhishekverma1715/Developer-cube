import {
  Layers,
  Palette,
  Code2,
  Cpu,
  Globe2,
  Lock,
  Boxes,
  Gauge
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "App Router Architecture",
    description: "Leverage React Server Components, streaming, nested layouts, and server actions for rapid data fetching.",
    badge: "Next.js 16",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "Build custom, responsive user interfaces with full CSS variable integration and high-performance compilation.",
    badge: "Styling",
    gradient: "from-sky-400 to-indigo-500",
  },
  {
    icon: Code2,
    title: "End-to-End TypeScript",
    description: "Comprehensive type definitions across route parameters, props, and server responses out of the box.",
    badge: "Type Safe",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Cpu,
    title: "React 19 Core",
    description: "Benefit from automatic memoization, useOptimistic, useFormStatus, and enhanced server action hooks.",
    badge: "React 19",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe2,
    title: "SEO & Social Sharing",
    description: "Automatic metadata generation, OpenGraph dynamic preview images, and semantic HTML5 output.",
    badge: "SEO Ready",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: Gauge,
    title: "Lighthouse Optimized",
    description: "Built-in next/font and next/image optimization guarantees top-tier Web Vitals scores.",
    badge: "Performance",
    gradient: "from-amber-400 to-orange-500",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
            Core Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Modern Web Excellence
          </p>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Everything you need to move from prototype to production with confidence and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent Highlight Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
                  <span>Explore pattern</span>
                  <span className="group-hover:translate-x-1 transition-transform text-cyan-400">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
