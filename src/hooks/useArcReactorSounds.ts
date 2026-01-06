import { useCallback, useRef } from 'react';

export const useArcReactorSounds = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  // Power-up click sound - electrical charge buildup
  const playClickSound = useCallback((clickNumber: number) => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Base frequency increases with each click
    const baseFreq = 80 + clickNumber * 40;

    // Create oscillators for layered sound
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();

    // Gain nodes for volume control
    const gainNode = ctx.createGain();
    const masterGain = ctx.createGain();

    // Filter for that electronic feel
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000 + clickNumber * 500, now);
    filter.Q.setValueAtTime(5, now);

    // Configure oscillators
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 2, now + 0.1);

    osc2.type = 'square';
    osc2.frequency.setValueAtTime(baseFreq * 1.5, now);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 3, now + 0.15);

    osc3.type = 'sawtooth';
    osc3.frequency.setValueAtTime(baseFreq * 0.5, now);

    // Envelope
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.3 + clickNumber * 0.1, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    masterGain.gain.setValueAtTime(0.4, now);

    // Connect nodes
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    osc3.connect(gainNode);
    gainNode.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    // Start and stop
    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    osc1.stop(now + 0.35);
    osc2.stop(now + 0.35);
    osc3.stop(now + 0.35);

    // Add a subtle "thump" for impact
    const thumpOsc = ctx.createOscillator();
    const thumpGain = ctx.createGain();
    thumpOsc.type = 'sine';
    thumpOsc.frequency.setValueAtTime(60, now);
    thumpOsc.frequency.exponentialRampToValueAtTime(30, now + 0.1);
    thumpGain.gain.setValueAtTime(0.5, now);
    thumpGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    thumpOsc.connect(thumpGain);
    thumpGain.connect(ctx.destination);
    thumpOsc.start(now);
    thumpOsc.stop(now + 0.2);
  }, [getAudioContext]);

  // Full power activation sound
  const playBootSound = useCallback(() => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Create a dramatic power-up sweep
    const sweepOsc = ctx.createOscillator();
    const sweepGain = ctx.createGain();
    const sweepFilter = ctx.createBiquadFilter();

    sweepOsc.type = 'sawtooth';
    sweepOsc.frequency.setValueAtTime(50, now);
    sweepOsc.frequency.exponentialRampToValueAtTime(800, now + 0.5);
    sweepOsc.frequency.exponentialRampToValueAtTime(200, now + 1.2);

    sweepFilter.type = 'lowpass';
    sweepFilter.frequency.setValueAtTime(500, now);
    sweepFilter.frequency.exponentialRampToValueAtTime(4000, now + 0.5);
    sweepFilter.frequency.exponentialRampToValueAtTime(1000, now + 1.2);

    sweepGain.gain.setValueAtTime(0, now);
    sweepGain.gain.linearRampToValueAtTime(0.4, now + 0.1);
    sweepGain.gain.setValueAtTime(0.4, now + 0.8);
    sweepGain.gain.exponentialRampToValueAtTime(0.01, now + 1.5);

    sweepOsc.connect(sweepFilter);
    sweepFilter.connect(sweepGain);
    sweepGain.connect(ctx.destination);

    sweepOsc.start(now);
    sweepOsc.stop(now + 1.5);

    // Add harmonics for richness
    const harmOsc = ctx.createOscillator();
    const harmGain = ctx.createGain();
    harmOsc.type = 'sine';
    harmOsc.frequency.setValueAtTime(100, now);
    harmOsc.frequency.exponentialRampToValueAtTime(400, now + 0.5);
    harmGain.gain.setValueAtTime(0.2, now);
    harmGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);
    harmOsc.connect(harmGain);
    harmGain.connect(ctx.destination);
    harmOsc.start(now);
    harmOsc.stop(now + 1.3);

    // Electrical crackle using noise
    const bufferSize = ctx.sampleRate * 0.5;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    
    const noiseGain = ctx.createGain();
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(3000, now);
    noiseFilter.Q.setValueAtTime(1, now);
    
    noiseGain.gain.setValueAtTime(0, now);
    noiseGain.gain.linearRampToValueAtTime(0.15, now + 0.3);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
    
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noiseSource.start(now + 0.2);

    // Final "online" tone
    const onlineOsc = ctx.createOscillator();
    const onlineGain = ctx.createGain();
    onlineOsc.type = 'sine';
    onlineOsc.frequency.setValueAtTime(440, now + 0.8);
    onlineGain.gain.setValueAtTime(0, now);
    onlineGain.gain.setValueAtTime(0.3, now + 0.8);
    onlineGain.gain.exponentialRampToValueAtTime(0.01, now + 1.4);
    onlineOsc.connect(onlineGain);
    onlineGain.connect(ctx.destination);
    onlineOsc.start(now + 0.8);
    onlineOsc.stop(now + 1.5);
  }, [getAudioContext]);

  // Ambient hum that plays continuously
  const playAmbientHum = useCallback(() => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const humOsc = ctx.createOscillator();
    const humGain = ctx.createGain();
    
    humOsc.type = 'sine';
    humOsc.frequency.setValueAtTime(60, now);
    humGain.gain.setValueAtTime(0.05, now);
    
    humOsc.connect(humGain);
    humGain.connect(ctx.destination);
    humOsc.start(now);

    return () => {
      humGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      humOsc.stop(ctx.currentTime + 0.1);
    };
  }, [getAudioContext]);

  return { playClickSound, playBootSound, playAmbientHum };
};
