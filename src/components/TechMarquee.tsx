export default function TechMarquee() {
  const stack = [
    "NEXT.JS 14",
    "TYPESCRIPT",
    "THREE.JS",
    "GSAP",
    "TAILWIND CSS",
    "REACT 19",
    "NODE.JS",
    "EXPRESS",
    "FASTAPI",
    "DJANGO",
    "MONGODB",
    "POSTGRESQL",
    "SHOPIFY",
    "WORDPRESS",
    "ANDROID NATIVE",
    "REST APIS",
  ];

  return (
    <section id="marquee" className="py-6 bg-black border-b border-neutral-900 overflow-hidden select-none">
      <div className="flex items-center">
        <div className="animate-marquee flex items-center gap-12 font-mono text-xs font-semibold tracking-widest text-neutral-400">
          {[...stack, ...stack].map((item, idx) => (
            <div key={idx} className="flex items-center gap-12 whitespace-nowrap">
              <span className="hover:text-white transition-colors">{item}</span>
              <span className="text-neutral-700 text-[10px]">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
