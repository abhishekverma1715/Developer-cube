"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hud from "@/components/Hud";
import Toolbar from "@/components/Toolbar";
import PerformanceModal, { PerfSettings } from "@/components/PerformanceModal";
import StageRail from "@/components/StageRail";
import AgencyStages from "@/components/AgencyStages";
import LedgerDashboard from "@/components/LedgerDashboard";
import TechMarquee from "@/components/TechMarquee";
import SelectedWork from "@/components/SelectedWork";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useSound } from "@/hooks/useSound";

export default function Home() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPerfModalOpen, setIsPerfModalOpen] = useState(false);
  const [isFreeOrbit, setIsFreeOrbit] = useState(false);
  const [perfSettings, setPerfSettings] = useState<PerfSettings>({
    resolution: 1.0,
    msaa: 2,
    bloom: true,
    dust: true,
    smoothMotion: true,
  });

  const { soundEnabled, toggleSound, playClick, playHover } = useSound();

  // Scroll listener to update active stage in HUD and StageRail
  useEffect(() => {
    const handleScroll = () => {
      const stageElements = ["s0", "s1", "s2", "s3", "s4", "s5", "s6", "s7"];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = stageElements.length - 1; i >= 0; i--) {
        const el = document.getElementById(stageElements[i]);
        if (el && el.offsetTop <= scrollPos) {
          setCurrentStage(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut: 'E' toggles free orbit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === "e") {
        playClick();
        setIsFreeOrbit((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playClick]);

  const handleSelectStage = (stageIdx: number) => {
    playClick();
    const stageIds = ["s0", "s1", "s2", "s3", "s4", "s5", "s6", "s7"];
    const targetEl = document.getElementById(stageIds[stageIdx]);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleUpdatePerfSettings = (newSettings: Partial<PerfSettings>) => {
    setPerfSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <div className="bg-[#070b12] text-[#EDEDF2] min-h-screen flex flex-col selection:bg-[#d8b787] selection:text-[#070b12]">
      {/* Top Telemetry HUD Header */}
      <Hud currentStage={currentStage} />

      {/* Main Navigation */}
      <div className="pt-11">
        <Navbar />
      </div>

      {/* Expedition Stage Progress Rail */}
      <StageRail
        activeStage={currentStage}
        totalStages={8}
        onSelectStage={handleSelectStage}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        <Hero perfSettings={perfSettings} isFreeOrbit={isFreeOrbit} />
        <TechMarquee />
        <AgencyStages />
        <SelectedWork />
        <Team />
        <Testimonials />
        <LedgerDashboard />
        <Contact />
      </main>

      {/* Floating Bottom Toolbar */}
      <Toolbar
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onOpenPerfModal={() => setIsPerfModalOpen(true)}
        onPlayHover={playHover}
        onPlayClick={playClick}
        isFreeOrbit={isFreeOrbit}
        onToggleFreeOrbit={() => setIsFreeOrbit((prev) => !prev)}
      />

      {/* Performance Settings Dialog Modal */}
      <PerformanceModal
        isOpen={isPerfModalOpen}
        onClose={() => setIsPerfModalOpen(false)}
        settings={perfSettings}
        onUpdateSettings={handleUpdatePerfSettings}
        onPlayClick={playClick}
      />

      <Footer />
    </div>
  );
}
