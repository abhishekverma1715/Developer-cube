"use client";

import { useState } from "react";

interface FieldDataItem {
  label: string;
  value: string;
}

interface StageItem {
  id: string;
  number: string;
  elevation: string;
  titlePrefix: string;
  titleHighlight: string;
  eyebrow: string;
  description1: string;
  description2: string;
  chips: string[];
  fieldData: FieldDataItem[];
  isDanger?: boolean;
}

export default function AgencyStages() {
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => {
    setOpenDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const stages: StageItem[] = [
    {
      id: "s1",
      number: "STAGE I",
      elevation: "2,860 M",
      eyebrow: "STAGE I · ARCHITECTURAL BLUEPRINT · 2,860 M",
      titlePrefix: "Discovery & ",
      titleHighlight: "Product Strategy",
      description1:
        "Every world-class application begins with rigorous technical blueprinting. We map your domain model, analyze high-throughput performance bottlenecks, and establish zero-debt architecture before writing a line of code.",
      description2:
        "From technical feasibility audits to database schema design, we lay down a bulletproof foundation engineered for infinite global scalability.",
      chips: ["System Architecture", "Domain Modeling", "Sprint 1 · Week 1"],
      fieldData: [
        { label: "Deliverable", value: "Technical Spec, System Architecture Diagram & DB Schema" },
        { label: "Methodology", value: "Domain-Driven Design (DDD) & Event-Driven Modeling" },
        { label: "Risk Mitigation", value: "Early bottleneck elimination before sprint allocation" },
        { label: "Turnaround", value: "3 to 5 business days from kick-off" },
      ],
    },
    {
      id: "s2",
      number: "STAGE II",
      elevation: "3,440 M",
      eyebrow: "STAGE II · VISUAL SYSTEM · 3,440 M",
      titlePrefix: "UX/UI & ",
      titleHighlight: "Glassmorphic Design",
      description1:
        "Aesthetic perfection meets intuitive micro-interactions. We craft ultra-premium user interfaces featuring vibrant dark mode palettes, custom glassmorphism depth, and high-frequency animations.",
      description2:
        "Our design systems are built natively in Figma with modular tokenized components, full accessibility (WCAG AA), and instant interactive prototypes.",
      chips: ["Figma Design System", "Framer Motion Spec", "WCAG AA Compliant"],
      fieldData: [
        { label: "Design Stack", value: "Figma, Tailwind Tokens, Rive & Spline 3D" },
        { label: "UX Metric", value: "100% Mobile Responsive & Touch Optimized" },
        { label: "Micro-Animations", value: "Custom physics-based spring curves & hover states" },
        { label: "Deliverable", value: "Interactive High-Fidelity Prototype & Style Guide" },
      ],
    },
    {
      id: "s3",
      number: "STAGE III",
      elevation: "3,867 M",
      eyebrow: "STAGE III · WEB ENGINE · 3,867 M",
      titlePrefix: "Full-Stack Web ",
      titleHighlight: "Engineering",
      description1:
        "We build high-performance web applications using Next.js 16, React 19, TypeScript, and Tailwind CSS. Built with server-side rendering, incremental static regeneration, and edge compute.",
      description2:
        "Zero duplicate code, strict type safety, modular component composition, and Lighthouse scores consistently locked at 100 across performance and SEO.",
      chips: ["Next.js 16 App Router", "React 19 & TS", "100 Lighthouse"],
      fieldData: [
        { label: "Frontend Stack", value: "Next.js 16, React 19, TypeScript, Tailwind CSS" },
        { label: "Performance", value: "Sub-400ms Largest Contentful Paint (LCP)" },
        { label: "SEO Architecture", value: "Dynamic OpenGraph, JSON-LD Schema & Semantic HTML" },
        { label: "Code Coverage", value: "100% Strict Type Enforcement & ESLint Audited" },
      ],
    },
    {
      id: "s4",
      number: "STAGE IV",
      elevation: "4,940 M",
      eyebrow: "STAGE IV · E-COMMERCE · 4,940 M",
      titlePrefix: "Shopify & ",
      titleHighlight: "Global Storefronts",
      description1:
        "High-conversion e-commerce engines built for maximum sales velocity. Custom Liquid themes, Headless Shopify storefronts with Next.js, and custom checkout extensions.",
      description2:
        "Optimized for high traffic sales spikes, global multi-currency checkout, custom product builders, and lightning-fast page loading speeds.",
      chips: ["Custom Liquid Themes", "Headless Shopify", "Sub-1s Checkout"],
      fieldData: [
        { label: "Platform", value: "Shopify Plus, Liquid, Storefront API & Remix" },
        { label: "Conversion Lift", value: "Average +34% conversion rate increase" },
        { label: "Integrations", value: "Klaviyo, Recharge, ERP & Custom Inventory Sync" },
        { label: "Speed Index", value: "< 0.8s Storefront Load Time" },
      ],
    },
    {
      id: "s5",
      number: "STAGE V",
      elevation: "5,364 M",
      eyebrow: "STAGE V · MOBILE NATIVE · 5,364 M",
      titlePrefix: "Android & ",
      titleHighlight: "Mobile Native",
      description1:
        "High-performance native Android applications built with Kotlin and Jetpack Compose, as well as cross-platform React Native solutions. Smooth 120Hz animations and offline-first data sync.",
      description2:
        "From Google Play Store deployment to secure biometric authentication and background processing pipelines, we deliver native mobile excellence.",
      chips: ["Kotlin & Compose", "React Native", "Play Store Published"],
      fieldData: [
        { label: "Mobile Stack", value: "Kotlin, Jetpack Compose, Coroutines & React Native" },
        { label: "Architecture", value: "Clean Architecture + MVVM / Unidirectional Data Flow" },
        { label: "Security", value: "Encrypted SharedPreferences, Biometric Auth & SSL Pinning" },
        { label: "Deployment", value: "Google Play Store & Automated CI/CD Pipelines" },
      ],
    },
    {
      id: "s6",
      number: "STAGE VI",
      elevation: "6,065 M",
      isDanger: true,
      eyebrow: "STAGE VI · HIGH THROUGHPUT · 6,065 M",
      titlePrefix: "Custom REST APIs & ",
      titleHighlight: "Cloud Backends",
      description1:
        "Scalable backend services, RESTful APIs, and microservices powered by Node.js, Express, PostgreSQL, Redis caching, and Docker containers.",
      description2:
        "Engineered for sub-50ms API response times, automated rate limiting, JWT/OAuth2 authentication, and seamless third-party webhook processing.",
      chips: ["Node.js & Express", "PostgreSQL & Redis", "Sub-50ms Response"],
      fieldData: [
        { label: "Backend Stack", value: "Node.js, TypeScript, PostgreSQL, Prisma, Redis" },
        { label: "Infrastructure", value: "Docker, Kubernetes, AWS & Vercel Edge" },
        { label: "Security", value: "OWASP Top 10 Hardened, CORS, Rate Limiting & TLS" },
        { label: "Throughput", value: "Capable of handling 10,000+ requests per second" },
      ],
    },
    {
      id: "s7",
      number: "STAGE VII",
      elevation: "8,848.86 M",
      eyebrow: "STAGE VII · THE DIGITAL SUMMIT · 8,848.86 M",
      titlePrefix: "Launch & ",
      titleHighlight: "Global Scale",
      description1:
        "The digital summit. Continuous deployment to global edge CDN networks, zero-downtime releases, 24/7 monitoring, and ongoing feature enhancement.",
      description2:
        "We partner with ambitious startups and enterprises worldwide to ensure your product leads its industry and scales seamlessly across global markets.",
      chips: ["Global Edge CDN", "99.99% SLA Uptime", "24/7 Ongoing Support"],
      fieldData: [
        { label: "CDN Network", value: "Global Edge (Vercel, Cloudflare & AWS CloudFront)" },
        { label: "Monitoring", value: "Sentry, Datadog & Real User Monitoring (RUM)" },
        { label: "Partnership", value: "4+ Years Average Client Retainer Partnership" },
        { label: "Status", value: "Production Deployed & Scaling Worldwide" },
      ],
    },
  ];

  return (
    <div className="space-y-24 py-16">
      {stages.map((st) => (
        <section
          key={st.id}
          id={st.id}
          className="stage-section scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6"
        >
          <div className={`everest-card p-6 sm:p-10 rounded-2xl ${st.isDanger ? "danger" : ""}`}>
            {/* Eyebrow Pill */}
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#94a3b8] uppercase tracking-wider mb-6">
              <span className={`w-2 h-2 rounded-full ${st.isDanger ? "bg-[#e0565c] animate-ping" : "bg-[#d8b787]"}`} />
              <span>{st.eyebrow}</span>
            </div>

            {/* Stage Display Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              {st.titlePrefix}
              <em className="font-serif italic font-normal text-[#d8b787] underline decoration-[#d8b787]/40 underline-offset-8">
                {st.titleHighlight}
              </em>
            </h2>

            {/* Descriptions */}
            <div className="space-y-4 text-base sm:text-lg text-[#cbd5e1] leading-relaxed font-sans mb-8">
              <p>{st.description1}</p>
              <p>{st.description2}</p>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2.5 mb-8 font-mono-code text-xs">
              {st.chips.map((chip, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#0b0d12]/90 border border-[#1e293b] text-[#8fd8ec] rounded-md font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Expandable Field Data Accordion */}
            <div className="border-t border-[#1e293b] pt-4 font-mono-code text-xs">
              <button
                onClick={() => toggleDetails(st.id)}
                className="flex items-center justify-between w-full text-left text-[#94a3b8] hover:text-white transition-colors py-2"
              >
                <span className="font-bold tracking-wider uppercase flex items-center gap-2">
                  <span className="text-[#d8b787]">FIELD DATA</span>
                  <span className="text-[#64748b]">• SPECIFICATIONS</span>
                </span>
                <span className="text-base font-bold">{openDetails[st.id] ? "−" : "+"}</span>
              </button>

              {openDetails[st.id] && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {st.fieldData.map((fd, fIdx) => (
                        <tr key={fIdx} className="border-b border-[#1e293b]/60">
                          <th className="py-2.5 pr-4 text-[#64748b] font-normal w-1/3 whitespace-nowrap">
                            {fd.label}
                          </th>
                          <td className="py-2.5 text-[#EDEDF2] font-semibold">{fd.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
