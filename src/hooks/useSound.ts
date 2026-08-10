"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function useSound() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return audioCtxRef.current;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;
    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;
    return ctx;
  }, []);

  const playClick = useCallback(() => {
    if (!soundEnabled) return;
    const ctx = initAudio();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Ignore audio glitches
    }
  }, [soundEnabled, initAudio]);

  const playHover = useCallback(() => {
    if (!soundEnabled) return;
    const ctx = initAudio();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Ignore audio glitches
    }
  }, [soundEnabled, initAudio]);

  const startDrone = useCallback(() => {
    const ctx = initAudio();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    if (droneGainRef.current) return;

    try {
      const droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0.001, ctx.currentTime);
      droneGain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 2.0);

      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(65.41, ctx.currentTime); // C2

      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(98.0, ctx.currentTime); // G2

      osc1.connect(droneGain);
      osc2.connect(droneGain);
      droneGain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      droneGainRef.current = droneGain;
      osc1Ref.current = osc1;
      osc2Ref.current = osc2;
    } catch {
      // Ignore audio glitches
    }
  }, [initAudio]);

  const stopDrone = useCallback(() => {
    if (droneGainRef.current && audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        droneGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
        setTimeout(() => {
          osc1Ref.current?.stop();
          osc2Ref.current?.stop();
          droneGainRef.current = null;
          osc1Ref.current = null;
          osc2Ref.current = null;
        }, 500);
      } catch {
        droneGainRef.current = null;
      }
    }
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      if (next) {
        startDrone();
      } else {
        stopDrone();
      }
      return next;
    });
  }, [startDrone, stopDrone]);

  // Keyboard shortcut: 'M' toggles sound
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === "m") {
        toggleSound();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSound]);

  return {
    soundEnabled,
    toggleSound,
    playClick,
    playHover,
  };
}
