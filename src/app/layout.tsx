import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Developer Cube — Digital Agency | Agra, India",
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
      className={`${jetbrainsMono.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="bg-[#050506] text-[#EDEDF2] min-h-screen flex flex-col font-sans antialiased selection:bg-[#00E5C7] selection:text-[#050506]">
        <SkipLink />
        <CustomCursor />
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
