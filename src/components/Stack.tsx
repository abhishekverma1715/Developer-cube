export default function Stack() {
  const columns = [
    {
      title: "Front End",
      items: ["Next.js 14", "React 19", "TypeScript", "Tailwind CSS", "Bootstrap", "GSAP & Lenis", "Three.js"],
    },
    {
      title: "Back End",
      items: ["Node.js", "Express.js", "FastAPI", "Django", "REST APIs", "GraphQL", "Server Actions"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "PostgreSQL", "Redis", "Prisma ORM", "Supabase", "JSON Schemas", "Vector Index"],
    },
    {
      title: "Infra & Tools",
      items: ["Shopify Liquid", "WordPress", "Android Studio", "Vercel", "AWS / Docker", "Git & CI/CD"],
    },
  ];

  return (
    <section id="stack" className="scroll-mt-section py-24 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-white tracking-widest uppercase block mb-3 font-semibold">
            // 04 TECH STACK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Battle-Tested Technologies <br />
            & Production Frameworks.
          </h2>
        </div>

        {/* 4-Column Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className="p-8 bg-black border border-neutral-900 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-mono text-xs font-bold text-white tracking-widest uppercase mb-6 pb-3 border-b border-neutral-900">
                  {col.title}
                </h3>
                <ul className="space-y-3 font-mono text-xs text-white">
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 bg-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
