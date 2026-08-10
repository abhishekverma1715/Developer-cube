"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Methodology", href: "#process" },
    { label: "Stack", href: "#stack" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with D³ Monogram */}
          <a
            href="#"
            className="group flex items-center focus:outline-none focus:ring-1 focus:ring-white rounded p-1"
          >
            <Logo size="md" showText={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-400 hover:text-white transition-colors py-1 focus:outline-none focus:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="font-mono text-xs font-semibold px-6 py-2.5 bg-white text-black border border-white hover:bg-black hover:text-white transition-all duration-200 tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-white"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-white hover:text-neutral-300 focus:outline-none focus:ring-1 focus:ring-white rounded"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-transform duration-200 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-transform duration-200 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-black border-t border-neutral-900 flex flex-col justify-between p-6 md:hidden">
          <div className="flex flex-col space-y-6 pt-6">
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              // INDEX NAVIGATION
            </span>
            <nav className="flex flex-col space-y-4 font-mono text-xl text-white">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 py-2 border-b border-neutral-900 hover:text-neutral-300 transition-colors"
                >
                  <span className="text-xs text-neutral-500">0{idx + 1}.</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-neutral-900">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center font-mono text-xs font-bold py-3.5 bg-white text-black tracking-widest uppercase"
            >
              Start a Project
            </a>
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Location: Agra, India</span>
              <span>hello@developercube.dev</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
