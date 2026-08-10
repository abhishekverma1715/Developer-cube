export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Developer Cube delivered our custom Shopify store in under 4 weeks. Their attention to mobile speed and typography increased our conversion rate by 184%.",
      author: "Rajesh Kumar",
      title: "Founder & MD",
      company: "Aarohi Living",
      project: "Shopify Storefront",
    },
    {
      quote:
        "Working directly with the three senior builders meant zero lost requirements. The Next.js dashboard latency is under 120ms globally.",
      author: "Sarah Jenkins",
      title: "VP of Product",
      company: "Meridian Operations",
      project: "Enterprise SaaS Platform",
    },
    {
      quote:
        "Their native Android expertise transformed our fitness tracking app. The real-time BLE synchronization is flawless across hundreds of devices.",
      author: "David Chen",
      title: "Co-Founder & CTO",
      company: "Pulse Fit Labs",
      project: "Android Mobile App",
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-white tracking-widest uppercase block mb-3 font-semibold">
            // 06 TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Founders & Product Leaders.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 bg-black border border-neutral-900 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-white tracking-wider uppercase block mb-6">
                  {t.project}
                </span>

                <p className="text-base text-white leading-relaxed italic mb-8 font-sans">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-900 flex flex-col">
                <span className="font-bold text-white text-sm">{t.author}</span>
                <span className="font-mono text-xs text-neutral-400">
                  {t.title}, <span className="text-white">{t.company}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
