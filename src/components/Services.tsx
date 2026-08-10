export default function Services() {
  const services = [
    {
      num: "01",
      title: "E-Commerce & Shopify Stores",
      description:
        "High-converting custom Shopify storefronts, headless e-commerce integrations, and optimized checkout experiences for growing brands.",
      chips: ["Shopify", "Liquid", "Next.js", "Tailwind CSS", "REST APIs"],
    },
    {
      num: "02",
      title: "Web Applications & Next.js",
      description:
        "Custom web applications built with Next.js 14 App Router, robust backend architectures, dynamic dashboards, and real-time data sync.",
      chips: ["Next.js 14", "TypeScript", "React", "Node.js", "MongoDB"],
    },
    {
      num: "03",
      title: "Android Development",
      description:
        "Performant Android apps designed for speed, intuitive UI, seamless API connectivity, and Play Store compliance.",
      chips: ["Android", "Kotlin", "REST APIs", "PostgreSQL", "Firebase"],
    },
    {
      num: "04",
      title: "WordPress & CMS Sites",
      description:
        "Tailored WordPress themes and marketing sites engineered for fast mobile loading, easy client editing, and search engine dominance.",
      chips: ["WordPress", "PHP", "GSAP", "Tailwind CSS", "SEO"],
    },
    {
      num: "05",
      title: "UI/UX & Motion Design",
      description:
        "Cinematic interface design, interactive 3D hero experiences, GSAP scroll animations, and micro-interactions that elevate brand perception.",
      chips: ["Three.js", "GSAP", "Lenis", "Figma", "UI/UX"],
    },
    {
      num: "06",
      title: "APIs & Cloud Infrastructure",
      description:
        "Scalable API endpoints, microservices, database schema design, server hosting setup, and long-term maintenance support.",
      chips: ["FastAPI", "Django", "Express", "Docker", "PostgreSQL"],
    },
  ];

  return (
    <section id="services" className="scroll-mt-section py-24 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs text-white tracking-widest uppercase block mb-3 font-semibold">
              // 01 SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Crafting digital experiences <br className="hidden sm:block" />
              across web, mobile, and commerce.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-sans leading-relaxed">
            From initial prototype design to global cloud launch and ongoing maintenance, we build scalable platforms tailored to your business goals.
          </p>
        </div>

        {/* Asymmetric Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative p-8 bg-neutral-950 border border-neutral-900 hover:border-white transition-all duration-300 flex flex-col justify-between ${
                idx === 0 || idx === 3 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* Card Number */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-black bg-white font-bold tracking-widest px-2.5 py-1">
                  {service.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-white transition-colors" />
              </div>

              {/* Title & Description */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Technology Chips */}
              <div className="pt-6 border-t border-neutral-900 flex flex-wrap gap-2">
                {service.chips.map((chip, cIdx) => (
                  <span
                    key={cIdx}
                    className="font-mono text-[10px] text-neutral-400 group-hover:text-white px-2 py-0.5 bg-black border border-neutral-800 transition-colors"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
