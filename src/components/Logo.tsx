import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  light?: boolean;
}

export default function Logo({ className = "", showText = true, size = "md", light = true }: LogoProps) {
  const sizeMap = {
    sm: "h-7",
    md: "h-10",
    lg: "h-14",
    xl: "h-20",
  };

  const textColor = light ? "text-white" : "text-black";
  const subtextColor = light ? "text-neutral-400" : "text-neutral-600";

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Brand Monogram D³ SVG */}
      <svg
        className={`${sizeMap[size]} w-auto aspect-[1/1] fill-current ${textColor}`}
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Developer Cube D³ Logo"
      >
        <g transform="translate(10, 10)">
          {/* Serif Stem & Serif Caps of D */}
          {/* Vertical Stem of D */}
          <rect x="35" y="35" width="18" height="130" fill="currentColor" />
          {/* Top Serif of D */}
          <path d="M22 35 H60 V43 H22 Z" fill="currentColor" />
          {/* Bottom Serif of D */}
          <path d="M22 157 H60 V165 H22 Z" fill="currentColor" />

          {/* D Outer Outer Curve */}
          <path
            d="M48 35 H95 C142 35 162 68 162 100 C162 132 142 165 95 165 H48 V147 H95 C128 147 142 124 142 100 C142 76 128 53 95 53 H48 V35 Z"
            fill="currentColor"
          />

          {/* Interlocking Serif '3' at Top-Right of D */}
          <path
            d="M108 22 C116 10 148 10 158 24 C166 35 160 52 146 58 C162 66 166 86 154 100 C140 115 112 112 100 96 L114 85 C122 95 136 96 142 87 C148 78 142 66 128 66 H120 V52 H128 C138 52 144 42 136 34 C128 27 116 28 110 38 Z"
            fill="currentColor"
          />
        </g>
      </svg>

      {/* Brand Text: DEVELOPER CUBE */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-mono text-sm sm:text-base font-extrabold tracking-[0.25em] ${textColor} uppercase leading-tight`}>
            DEVELOPER CUBE
          </span>
          <span className={`font-mono text-[9px] sm:text-[10px] tracking-[0.35em] ${subtextColor} uppercase`}>
            DIGITAL AGENCY
          </span>
        </div>
      )}
    </div>
  );
}
