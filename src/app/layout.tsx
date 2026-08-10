import type { Metadata } from "next";
import { JetBrains_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SkipLink from "@/components/SkipLink";
import CustomCursor from "@/components/CustomCursor";
import LenisScroll from "@/components/LenisScroll";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Developer Cube · The Digital Ascent | Digital Agency",
  description:
    "Developer Cube is a three-developer digital agency in Agra, India. We build Shopify storefronts, Next.js web applications, Android apps, and custom REST APIs worldwide.",
  keywords: [
    "Developer Cube",
    "Digital Agency Agra",
    "Next.js Developers India",
    "Shopify Experts Agra",
    "Android App Development",
    "Three.js Motion Web",
  ],
  authors: [{ name: "Developer Cube Studio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable} ${playfair.variable} dark scroll-smooth`}
    >
      <body className="bg-[#070b12] text-[#EDEDF2] min-h-screen flex flex-col font-sans antialiased selection:bg-[#d8b787] selection:text-[#070b12]">
        <SkipLink />
        <CustomCursor />
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
