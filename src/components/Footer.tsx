"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Footer() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeStr(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black border-t border-neutral-900 pt-16 pb-12 overflow-hidden select-none">
      {/* 1. Giant "LET'S BUILD SOMETHING" Hover Marquee CTA */}
      <a
        href="#contact"
        className="group block border-b border-neutral-900 pb-12 overflow-hidden hover:bg-neutral-950 transition-colors"
      >
        <div className="animate-marquee flex items-center gap-12 font-bold text-4xl sm:text-7xl lg:text-8xl text-neutral-900 group-hover:text-white transition-colors tracking-tighter">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="whitespace-nowrap flex items-center gap-12">
              <span>LET'S BUILD SOMETHING</span>
              <span className="text-white font-mono text-3xl">→</span>
            </span>
          ))}
        </div>
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          {/* Column 1: Brand Logo & Local Clock */}
          <div className="md:col-span-5 space-y-6">
            <Logo size="lg" showText={true} />

            <p className="text-xl font-bold text-white">Agra, Uttar Pradesh, India</p>
            <div className="font-mono text-xs text-neutral-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>AGRA LOCAL TIME (IST UTC+5:30):</span>
                <span className="text-white font-bold">{timeStr || "12:00:00"}</span>
              </p>
              <p>Email: hello@developercube.dev</p>
              <p>WhatsApp: +91 00000 00000</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-neutral-500 tracking-widest uppercase block mb-2">
              // INDEX
            </span>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  01. Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  02. Selected Work
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  03. Process Timeline
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  04. Technology Stack
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  05. Studio Crew
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & External Profiles */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-neutral-500 tracking-widest uppercase block mb-2">
              // SOCIAL & CHANNELS
            </span>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>GitHub</span>
                  <span className="text-neutral-600">github.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <span className="text-neutral-600">linkedin.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Dribbble</span>
                  <span className="text-neutral-600">dribbble.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <span className="text-neutral-600">instagram.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>X / Twitter</span>
                  <span className="text-neutral-600">x.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Oversized DEVELOPER CUBE Wordmark */}
        <div className="py-12 border-b border-neutral-900 text-center">
          <span className="font-mono text-4xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-neutral-950 hover:text-neutral-900 transition-colors uppercase">
            DEVELOPER CUBE
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} DEVELOPER CUBE STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span>AGRA, INDIA</span>
            <span>•</span>
            <a href="#main-content" className="hover:text-white transition-colors">
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
