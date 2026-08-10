export default function Process() {
  const steps = [
    {
      num: "01",
      time: "WEEK 1 // DAY 0 - 7",
      title: "Discovery & Architecture",
      desc: "We analyze scope, user flows, database models, and API integrations to build a bulletproof technical blueprint before writing code.",
    },
    {
      num: "02",
      time: "WEEK 2 // DAY 8 - 14",
      title: "Direction & Design System",
      desc: "We create interactive Figma prototypes, component design tokens, custom typography rules, and motion concepts for client approval.",
    },
    {
      num: "03",
      time: "WEEKS 3-5 // DAY 15 - 35",
      title: "Full-Stack Build & Testing",
      desc: "We build clean frontend routes, implement server components, hook up databases/APIs, and run strict cross-browser & accessibility tests.",
    },
    {
      num: "04",
      time: "WEEK 6+ // LAUNCH & SUPPORT",
      title: "Production Launch & Maintenance",
      desc: "Deployment to Vercel/AWS, SSL configuration, domain setup, performance monitoring, and ongoing monthly updates.",
    },
  ];

  return (
    <section id="process" className="scroll-mt-section py-24 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-white tracking-widest uppercase block mb-3 font-semibold">
            // 03 METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Four-Step Process <br />
            from Day 0 to Launch.
          </h2>
        </div>

        {/* Process Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group p-8 bg-neutral-950 border border-neutral-900 hover:border-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-6">
                  <span className="text-black bg-white px-2 py-0.5 font-bold text-xs">{step.num}</span>
                  <span className="text-neutral-500 text-[10px] tracking-wider">{step.time}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>STAGE {step.num}</span>
                <span className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
