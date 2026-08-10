export default function Team() {
  const members = [
    {
      monogram: "AS",
      name: "Abhishek Sharma",
      role: "Co-Founder // Full-Stack Architect",
      bio: "6+ years building scalable web platforms, custom Next.js App Router applications, and Shopify liquid storefronts.",
      chips: ["Next.js 14", "TypeScript", "Node.js", "Shopify"],
    },
    {
      monogram: "VS",
      name: "Vikram Singh",
      role: "Co-Founder // UI & Motion Engineer",
      bio: "Specializes in interactive WebGL experiences, Three.js 3D graphics, GSAP scroll reveals, and high-editorial typography.",
      chips: ["Three.js", "GSAP", "Tailwind CSS", "UI/UX"],
    },
    {
      monogram: "RV",
      name: "Rohan Verma",
      role: "Co-Founder // Backend & Mobile Lead",
      bio: "Engineers native Android mobile applications, microservices, REST API endpoints with FastAPI/Django, and PostgreSQL databases.",
      chips: ["Android", "Kotlin", "FastAPI", "PostgreSQL"],
    },
  ];

  return (
    <section id="team" className="scroll-mt-section py-24 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-white tracking-widest uppercase block mb-3 font-semibold">
            // 05 TEAM
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Three Senior Developers. <br />
            Zero Layers of Bureaucracy.
          </h2>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="p-8 bg-neutral-950 border border-neutral-900 hover:border-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Monogram Avatar */}
                <div className="w-16 h-16 bg-black border border-neutral-800 flex items-center justify-center font-mono text-xl font-bold text-white mb-6">
                  {m.monogram}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{m.name}</h3>
                <span className="font-mono text-xs text-neutral-400 tracking-wider uppercase block mb-4">
                  {m.role}
                </span>

                <p className="text-sm text-neutral-400 leading-relaxed font-sans mb-8">
                  {m.bio}
                </p>
              </div>

              {/* Skill Chips */}
              <div className="pt-4 border-t border-neutral-900 flex flex-wrap gap-2">
                {m.chips.map((chip, cIdx) => (
                  <span
                    key={cIdx}
                    className="font-mono text-[10px] text-neutral-400 px-2 py-0.5 bg-black border border-neutral-800"
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
