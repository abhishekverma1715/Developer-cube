export default function SelectedWork() {
  const projects = [
    {
      title: "Aarohi Living Storefront",
      category: "E-COMMERCE // SHOPIFY",
      metric: "+184% Conversion Rate",
      year: "2024",
      description: "Custom Shopify Liquid storefront architecture with instant search, micro-animations, and fast checkout flow.",
    },
    {
      title: "Meridian Ops Command",
      category: "WEB PLATFORM // NEXT.JS",
      metric: "<120ms API Latency",
      year: "2024",
      description: "Enterprise SaaS operations platform built with Next.js 14, TypeScript, dynamic metrics, and PostgreSQL.",
    },
    {
      title: "Pulse Fit Android Experience",
      category: "ANDROID // KOTLIN API",
      metric: "150K+ Active Downloads",
      year: "2023",
      description: "Native Android fitness tracking app with real-time BLE synchronization, step metrics, and background workers.",
    },
    {
      title: "Northline Studio Digital Experience",
      category: "UI/UX // THREE.JS & GSAP",
      metric: "98/100 Lighthouse Score",
      year: "2023",
      description: "Cinematic portfolio site featuring Three.js WebGL hero, Lenis smooth scrolling, and dark mode design system.",
    },
  ];

  return (
    <section id="work" className="scroll-mt-section py-24 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs text-white tracking-widest uppercase block mb-3 font-semibold">
              // 02 SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-sans leading-relaxed">
            Real client projects delivered with measurable performance improvements, high reliability, and clean code architecture.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-black border border-neutral-900 hover:border-white transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Visual Header Canvas Mock */}
              <div className="h-48 sm:h-56 bg-neutral-900/60 border-b border-neutral-900 p-6 flex flex-col justify-between relative">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-white tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <span className="text-neutral-500">{project.year}</span>
                </div>

                <div className="self-end px-3 py-1 bg-black border border-white font-mono text-xs text-white font-bold">
                  {project.metric}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-neutral-300 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between font-mono text-xs text-neutral-500 group-hover:text-white transition-colors">
                  <span>View Case Architecture</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
