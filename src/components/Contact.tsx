"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Next.js App"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$5K - $15K");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const serviceChips = [
    "E-Commerce / Shopify",
    "Next.js App",
    "Android App",
    "WordPress Site",
    "UI / Motion Design",
    "REST API / Backend",
  ];

  const budgetChips = ["< $5K", "$5K - $15K", "$15K - $30K", "$30K+"];

  const toggleService = (chip: string) => {
    if (selectedServices.includes(chip)) {
      setSelectedServices(selectedServices.filter((s) => s !== chip));
    } else {
      setSelectedServices([...selectedServices, chip]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-section py-24 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Pitch & Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs text-white tracking-widest uppercase block mb-3 font-semibold">
                // 07 CONTACT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Let's Build <br />
                Something Exceptional.
              </h2>
            </div>

            <p className="text-base text-neutral-400 leading-relaxed font-sans">
              Have an upcoming web platform, Shopify store, or Android application? Tell us about your goals and we'll respond within 24 hours with timeline estimates.
            </p>

            <div className="space-y-6 pt-6 border-t border-neutral-900 font-mono text-xs">
              <div>
                <span className="text-neutral-500 uppercase tracking-widest block mb-1">
                  DIRECT EMAIL
                </span>
                <a
                  href="mailto:hello@developercube.dev"
                  className="text-white text-sm font-bold hover:text-neutral-300 transition-colors"
                >
                  hello@developercube.dev
                </a>
              </div>

              <div>
                <span className="text-neutral-500 uppercase tracking-widest block mb-1">
                  WHATSAPP DIRECT
                </span>
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-bold hover:text-neutral-300 transition-colors"
                >
                  +91 00000 00000
                </a>
              </div>

              <div>
                <span className="text-neutral-500 uppercase tracking-widest block mb-1">
                  STUDIO LOCATION
                </span>
                <span className="text-white">Agra, Uttar Pradesh, India (IST UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-900 p-8 sm:p-12 relative">
            {submitted ? (
              <div className="py-16 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 bg-black border border-white text-white flex items-center justify-center font-mono font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-neutral-400 max-w-md font-sans">
                  Thank you for reaching out to Developer Cube. One of our lead architects will review your brief and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-white text-black font-mono text-xs font-bold uppercase hover:bg-neutral-200 transition-all"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* What do you need chips */}
                <div>
                  <label className="font-mono text-xs text-neutral-400 uppercase tracking-wider block mb-3">
                    1. WHAT DO YOU NEED? (SELECT ALL THAT APPLY)
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {serviceChips.map((chip) => {
                      const isSelected = selectedServices.includes(chip);
                      return (
                        <button
                          type="button"
                          key={chip}
                          onClick={() => toggleService(chip)}
                          className={`font-mono text-xs px-3.5 py-2 border transition-all ${
                            isSelected
                              ? "bg-white text-black border-white font-bold"
                              : "bg-black text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-600"
                          }`}
                        >
                          {chip}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget range chips */}
                <div>
                  <label className="font-mono text-xs text-neutral-400 uppercase tracking-wider block mb-3">
                    2. ESTIMATED BUDGET RANGE
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {budgetChips.map((chip) => {
                      const isSelected = selectedBudget === chip;
                      return (
                        <button
                          type="button"
                          key={chip}
                          onClick={() => setSelectedBudget(chip)}
                          className={`font-mono text-xs px-3.5 py-2 border transition-all ${
                            isSelected
                              ? "bg-white text-black border-white font-bold"
                              : "bg-black text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-600"
                          }`}
                        >
                          {chip}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-[11px] text-neutral-500 uppercase block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-black border border-neutral-800 focus:border-white text-white p-3 text-sm font-sans outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-neutral-500 uppercase block mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-black border border-neutral-800 focus:border-white text-white p-3 text-sm font-sans outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-neutral-500 uppercase block mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme Corp"
                    className="w-full bg-black border border-neutral-800 focus:border-white text-white p-3 text-sm font-sans outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-[11px] text-neutral-500 uppercase block mb-1.5">
                    Project Overview & Timeline
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project goals, key features, and target launch date..."
                    className="w-full bg-black border border-neutral-800 focus:border-white text-white p-3 text-sm font-sans outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Submit Inquiry Brief →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
