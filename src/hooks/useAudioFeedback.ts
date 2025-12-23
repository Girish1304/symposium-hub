import { useCallback, useRef } from 'react';

export const useAudioFeedback = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playHoverSound = useCallback(() => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(2000, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
  }, [getAudioContext]);

  const playClickSound = useCallback(() => {
    const ctx = getAudioContext();
    
    // Main click sound
    const oscillator1 = ctx.createOscillator();
    const gainNode1 = ctx.createGain();
    oscillator1.connect(gainNode1);
    gainNode1.connect(ctx.destination);

    oscillator1.type = 'square';
    oscillator1.frequency.setValueAtTime(150, ctx.currentTime);
    oscillator1.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.1);

    gainNode1.gain.setValueAtTime(0.15, ctx.currentTime);
    gainNode1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    oscillator1.start(ctx.currentTime);
    oscillator1.stop(ctx.currentTime + 0.1);

    // High-frequency accent
    const oscillator2 = ctx.createOscillator();
    const gainNode2 = ctx.createGain();
    oscillator2.connect(gainNode2);
    gainNode2.connect(ctx.destination);

    oscillator2.type = 'sine';
    oscillator2.frequency.setValueAtTime(4000, ctx.currentTime);
    oscillator2.frequency.exponentialRampToValueAtTime(1500, ctx.currentTime + 0.08);

    gainNode2.gain.setValueAtTime(0.06, ctx.currentTime);
    gainNode2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

    oscillator2.start(ctx.currentTime);
    oscillator2.stop(ctx.currentTime + 0.08);
  }, [getAudioContext]);

  const playTransformSound = useCallback(() => {
    const ctx = getAudioContext();
    
    // Mechanical servo sound
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = 'sawtooth';
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(500, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(2000, ctx.currentTime + 0.15);

    oscillator.frequency.setValueAtTime(100, ctx.currentTime);
    oscillator.frequency.linearRampToValueAtTime(300, ctx.currentTime + 0.15);

    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.2);
  }, [getAudioContext]);

  return { playHoverSound, playClickSound, playTransformSound };
};

// Singleton for global audio feedback
let globalAudioContext: AudioContext | null = null;

const getGlobalAudioContext = () => {
  if (!globalAudioContext) {
    globalAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return globalAudioContext;
};

export const playGlobalHoverSound = () => {
  try {
    const ctx = getGlobalAudioContext();
    if (ctx.state === 'suspended') ctx.resume();
    
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(2000, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + 0.04);

    gainNode.gain.setValueAtTime(0.06, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.04);
  } catch (e) {
    // Audio not supported or blocked
  }
};

export const playGlobalClickSound = () => {
  try {
    const ctx = getGlobalAudioContext();
    if (ctx.state === 'suspended') ctx.resume();
    
    // Mechanical click
    const oscillator1 = ctx.createOscillator();
    const gainNode1 = ctx.createGain();
    oscillator1.connect(gainNode1);
    gainNode1.connect(ctx.destination);

    oscillator1.type = 'square';
    oscillator1.frequency.setValueAtTime(120, ctx.currentTime);
    oscillator1.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.08);

    gainNode1.gain.setValueAtTime(0.12, ctx.currentTime);
    gainNode1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    oscillator1.start(ctx.currentTime);
    oscillator1.stop(ctx.currentTime + 0.08);

    // Electronic chirp
    const oscillator2 = ctx.createOscillator();
    const gainNode2 = ctx.createGain();
    oscillator2.connect(gainNode2);
    gainNode2.connect(ctx.destination);

    oscillator2.type = 'sine';
    oscillator2.frequency.setValueAtTime(3500, ctx.currentTime);
    oscillator2.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.06);

    gainNode2.gain.setValueAtTime(0.05, ctx.currentTime);
    gainNode2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

    oscillator2.start(ctx.currentTime);
    oscillator2.stop(ctx.currentTime + 0.06);
  } catch (e) {
    // Audio not supported or blocked
  }
};
