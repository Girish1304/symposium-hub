import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useArcReactorSounds } from "@/hooks/useArcReactorSounds";
import { useJarvisVoice } from "@/hooks/useJarvisVoice";

interface ArcReactorSplashProps {
  onComplete: () => void;
}

const ArcReactorSplash = ({ onComplete }: ArcReactorSplashProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [isBooting, setIsBooting] = useState(false);
  const [currentLine, setCurrentLine] = useState("");
  const { playClickSound, playBootSound, playAmbientHum, playMetalSound } = useArcReactorSounds();
  const { speakLine, getLineForClick, preloadAll } = useJarvisVoice();
  const hasStartedRef = useRef(false);

  // Start ambient hum after first interaction
  useEffect(() => {
    if (clickCount === 1) {
      const stopHum = playAmbientHum();
      return stopHum;
    }
  }, [clickCount, playAmbientHum]);

  const handleClick = useCallback(async () => {
    if (isBooting) return;
    
    const newCount = clickCount + 1;
    
    // Preload all audio on first click
    if (newCount === 1) {
      preloadAll();
    }
    
    setClickCount(newCount);
    playClickSound(newCount);
    playMetalSound();

    // Get and speak the JARVIS line
    const line = getLineForClick(newCount);
    if (line) {
      setCurrentLine(line);
      // Don't await - let voice play in background
      speakLine(newCount);
    }

    if (newCount >= 3) {
      setIsBooting(true);
      playBootSound();
      setTimeout(() => {
        onComplete();
      }, 2500);
    }
  }, [clickCount, isBooting, onComplete, playClickSound, playBootSound, getLineForClick, speakLine, preloadAll]);

  const powerLevel = (clickCount / 3) * 100;
  const glowIntensity = 0.15 + (clickCount * 0.28);
  const coreOpacity = 0.2 + (clickCount * 0.27);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle radial gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, rgba(0, 150, 255, ${0.08 + clickCount * 0.04}) 0%, transparent 60%)`
          }}
        />

        {/* Arc Reactor Container */}
        <motion.div
          className="relative cursor-pointer select-none"
          onClick={handleClick}
          whileTap={{ scale: 0.97 }}
          animate={{
            scale: isBooting ? [1, 1.2, 0] : 1,
          }}
          transition={{
            duration: isBooting ? 1.5 : 0.1,
          }}
        >
          {/* Multi-layer glow effect */}
          <motion.div
            className="absolute rounded-full pointer-events-none blur-3xl"
            style={{
              width: '400px',
              height: '400px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, rgba(0, 180, 255, ${glowIntensity}) 0%, rgba(0, 120, 200, ${glowIntensity * 0.5}) 40%, transparent 70%)`
            }}
          />
          
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '350px',
              height: '350px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              boxShadow: `
                0 0 ${40 + clickCount * 30}px ${20 + clickCount * 15}px rgba(0, 180, 255, ${glowIntensity}),
                0 0 ${80 + clickCount * 40}px ${40 + clickCount * 20}px rgba(0, 120, 200, ${glowIntensity * 0.5})
              `
            }}
          />

          {/* Main reactor SVG - flipped upside down */}
          <svg
            width="340"
            height="340"
            viewBox="0 0 340 340"
            className="relative z-10"
            style={{ transform: 'rotate(180deg)' }}
          >
            <defs>
              {/* Metallic gradients */}
              <linearGradient id="outerMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3d3d3d" />
                <stop offset="20%" stopColor="#1a1a1a" />
                <stop offset="40%" stopColor="#2d2d2d" />
                <stop offset="60%" stopColor="#151515" />
                <stop offset="80%" stopColor="#252525" />
                <stop offset="100%" stopColor="#1a1a1a" />
              </linearGradient>

              <linearGradient id="innerMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a4a4a" />
                <stop offset="50%" stopColor="#2a2a2a" />
                <stop offset="100%" stopColor="#3a3a3a" />
              </linearGradient>

              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="20%" stopColor="rgba(150, 220, 255, 0.95)" />
                <stop offset="50%" stopColor="rgba(0, 180, 255, 0.85)" />
                <stop offset="80%" stopColor="rgba(0, 120, 200, 0.7)" />
                <stop offset="100%" stopColor="rgba(0, 80, 160, 0.5)" />
              </radialGradient>

              <radialGradient id="segmentGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(100, 200, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(0, 150, 220, 0.6)" />
              </radialGradient>

              {/* Filters */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="innerGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Clip paths */}
              <clipPath id="triangleClip">
                <path d="M 170 70 L 270 220 L 70 220 Z" />
              </clipPath>
            </defs>

            {/* Outer housing ring */}
            <circle
              cx="170"
              cy="170"
              r="165"
              fill="url(#outerMetal)"
              stroke="#0a0a0a"
              strokeWidth="3"
            />

            {/* Outer housing detail rings */}
            <circle
              cx="170"
              cy="170"
              r="160"
              fill="none"
              stroke="#2a2a2a"
              strokeWidth="1"
            />
            <circle
              cx="170"
              cy="170"
              r="155"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2"
            />

            {/* Heat dissipation fins - 10 groups around the edge */}
            {[...Array(10)].map((_, i) => {
              const angle = (i * 36 - 90) * (Math.PI / 180);
              const cx = 170 + 145 * Math.cos(angle);
              const cy = 170 + 145 * Math.sin(angle);
              return (
                <g key={i} transform={`rotate(${i * 36}, 170, 170)`}>
                  {/* Main fin group */}
                  <rect x="160" y="5" width="20" height="35" rx="2" fill="#1a1a1a" stroke="#252525" strokeWidth="0.5" />
                  <rect x="163" y="8" width="14" height="28" rx="1" fill="#0f0f0f" />
                  {/* Side fins */}
                  <rect x="150" y="12" width="12" height="22" rx="1" fill="#181818" stroke="#222" strokeWidth="0.3" />
                  <rect x="178" y="12" width="12" height="22" rx="1" fill="#181818" stroke="#222" strokeWidth="0.3" />
                </g>
              );
            })}

            {/* Middle ring - darker metal */}
            <circle
              cx="170"
              cy="170"
              r="130"
              fill="url(#innerMetal)"
              stroke="#1a1a1a"
              strokeWidth="2"
            />

            {/* Inner beveled ring */}
            <circle
              cx="170"
              cy="170"
              r="120"
              fill="#1f1f1f"
              stroke="#333"
              strokeWidth="1"
            />

            {/* Glowing outer ring */}
            <motion.circle
              cx="170"
              cy="170"
              r="115"
              fill="none"
              stroke="rgba(0, 180, 255, 0.5)"
              strokeWidth="3"
              filter="url(#glow)"
              animate={{ opacity: coreOpacity + 0.2 }}
            />

            {/* Main core background */}
            <circle
              cx="170"
              cy="170"
              r="110"
              fill="#0a0a0a"
            />

            {/* Glowing core */}
            <motion.circle
              cx="170"
              cy="170"
              r="105"
              fill="url(#coreGlow)"
              filter="url(#innerGlow)"
              animate={{ opacity: coreOpacity + 0.3 }}
            />

            {/* Ring segments - 10 segments around the core */}
            {[...Array(10)].map((_, i) => {
              const startAngle = (i * 36 - 90) * (Math.PI / 180);
              const endAngle = ((i + 1) * 36 - 94) * (Math.PI / 180);
              const innerR = 75;
              const outerR = 100;
              
              const x1 = 170 + outerR * Math.cos(startAngle);
              const y1 = 170 + outerR * Math.sin(startAngle);
              const x2 = 170 + outerR * Math.cos(endAngle);
              const y2 = 170 + outerR * Math.sin(endAngle);
              const x3 = 170 + innerR * Math.cos(endAngle);
              const y3 = 170 + innerR * Math.sin(endAngle);
              const x4 = 170 + innerR * Math.cos(startAngle);
              const y4 = 170 + innerR * Math.sin(startAngle);

              const isLit = i < clickCount * 3.33;

              return (
                <motion.path
                  key={i}
                  d={`M ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 0 0 ${x4} ${y4} Z`}
                  fill={isLit ? "url(#segmentGlow)" : "rgba(30, 40, 50, 0.6)"}
                  stroke="rgba(60, 80, 100, 0.8)"
                  strokeWidth="1"
                  animate={{
                    fill: isLit ? "url(#segmentGlow)" : "rgba(30, 40, 50, 0.6)",
                    opacity: isLit ? 1 : 0.7
                  }}
                  transition={{ duration: 0.2 }}
                />
              );
            })}

            {/* Central triangle frame */}
            <g>
              {/* Triangle outer border - dark metal */}
              <path
                d="M 170 60 L 280 230 L 60 230 Z"
                fill="none"
                stroke="rgba(30, 35, 40, 0.95)"
                strokeWidth="14"
                strokeLinejoin="round"
              />

              {/* Triangle inner glow border */}
              <motion.path
                d="M 170 75 L 265 220 L 75 220 Z"
                fill="none"
                stroke="rgba(0, 180, 255, 0.6)"
                strokeWidth="2"
                filter="url(#glow)"
                animate={{ opacity: coreOpacity }}
              />

              {/* Triangle fill - glowing */}
              <motion.path
                d="M 170 80 L 260 215 L 80 215 Z"
                fill={`rgba(0, 180, 255, ${coreOpacity * 0.8})`}
                animate={{ 
                  fill: `rgba(0, 180, 255, ${coreOpacity * 0.8})`,
                }}
              />

              {/* Internal triangle structure lines */}
              <g stroke="rgba(30, 50, 70, 0.9)" strokeWidth="8" strokeLinecap="round">
                {/* Center vertical line */}
                <motion.line
                  x1="170" y1="85" x2="170" y2="215"
                  animate={{ opacity: 0.8 + clickCount * 0.04 }}
                />
                {/* Bottom left to upper right */}
                <motion.line
                  x1="85" y1="213" x2="215" y2="148"
                  animate={{ opacity: 0.8 + clickCount * 0.04 }}
                />
                {/* Bottom right to upper left */}
                <motion.line
                  x1="255" y1="213" x2="125" y2="148"
                  animate={{ opacity: 0.8 + clickCount * 0.04 }}
                />
              </g>

              {/* Center intersection point - brightest */}
              <motion.circle
                cx="170"
                cy="175"
                r="15"
                fill="rgba(150, 220, 255, 0.95)"
                filter="url(#glow)"
                animate={{ 
                  opacity: coreOpacity + 0.4,
                  r: 15 + clickCount * 1
                }}
              />
              <motion.circle
                cx="170"
                cy="175"
                r="8"
                fill="rgba(255, 255, 255, 1)"
                animate={{ opacity: coreOpacity + 0.5 }}
              />
            </g>

            {/* Pulsing overlay */}
            <motion.circle
              cx="170"
              cy="170"
              r="105"
              fill="rgba(0, 180, 255, 0.1)"
              animate={{
                opacity: [0.05, 0.15, 0.05],
                r: [103, 107, 103]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Rotating highlight */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '170px 170px' }}
            >
              <ellipse
                cx="170"
                cy="70"
                rx="8"
                ry="3"
                fill={`rgba(150, 220, 255, ${0.3 + clickCount * 0.1})`}
                filter="url(#glow)"
              />
            </motion.g>
          </svg>

          {/* Energy particle effects when charging */}
          {clickCount > 0 && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    background: 'rgba(0, 180, 255, 0.8)',
                    boxShadow: '0 0 6px 2px rgba(0, 150, 220, 0.6)'
                  }}
                  animate={{
                    x: [0, Math.cos(i * 30 * Math.PI / 180) * (120 + clickCount * 20)],
                    y: [0, Math.sin(i * 30 * Math.PI / 180) * (120 + clickCount * 20)],
                    opacity: [0.9, 0],
                    scale: [1, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* JARVIS Voice Line Display */}
        <AnimatePresence mode="wait">
          {currentLine && (
            <motion.div
              key={currentLine}
              className="absolute top-1/2 mt-52 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p 
                className="text-lg md:text-xl font-mono tracking-wider italic"
                style={{ 
                  color: 'rgba(0, 180, 255, 0.9)',
                  textShadow: '0 0 20px rgba(0, 150, 220, 0.5)'
                }}
              >
                "{currentLine}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HUD Text */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-[0.3em] mb-4 font-mono"
            style={{ 
              color: `rgba(0, ${180 + clickCount * 15}, ${255}, ${0.7 + clickCount * 0.06})`,
              textShadow: `0 0 ${15 + clickCount * 8}px rgba(0, 150, 220, 0.7), 0 0 ${30 + clickCount * 10}px rgba(0, 100, 180, 0.4)`
            }}
          >
            {isBooting ? "ONLINE" : "J.A.R.V.I.S"}
          </motion.h2>
          
          <motion.p
            className="text-2xl md:text-3xl tracking-[0.15em] uppercase font-mono font-extrabold px-6 py-3 bg-black/40 rounded-lg border border-cyan-400/30"
            style={{ 
              color: 'rgba(0, 220, 255, 1)',
              textShadow: '0 0 30px rgba(0, 200, 255, 0.9), 0 0 60px rgba(0, 150, 220, 0.7), 0 0 90px rgba(0, 100, 180, 0.5)'
            }}
            animate={{
              opacity: [0.85, 1, 0.85],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            {isBooting 
              ? "Initializing Systems..." 
              : `⚡ Tap Arc Reactor to Initialize [${clickCount}/3]`
            }
          </motion.p>

          {/* Power indicator bar */}
          <div className="mt-8 w-72 mx-auto">
            <div className="flex justify-between text-xs text-cyan-400/50 mb-1 font-mono tracking-wider">
              <span>POWER</span>
              <span>{Math.round(powerLevel)}%</span>
            </div>
            <div className="h-2 bg-gray-900 rounded overflow-hidden border border-gray-700/50">
              <motion.div
                className="h-full rounded"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 120, 200, 0.8), rgba(0, 180, 255, 0.9), rgba(0, 120, 200, 0.8))',
                  boxShadow: 'inset 0 0 10px rgba(0, 180, 255, 0.5), 0 0 15px rgba(0, 150, 220, 0.6)'
                }}
                initial={{ width: 0 }}
                animate={{ width: `${powerLevel}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Corner HUD elements */}
        <div className="absolute top-6 left-6 text-amber-400/25 text-xs font-mono tracking-widest">
          JARVIS 2026
        </div>
        <div className="absolute top-6 right-6 text-amber-400/25 text-xs font-mono tracking-widest">
          MK X
        </div>
        <div className="absolute bottom-6 left-6 text-amber-400/25 text-xs font-mono tracking-widest">
          NEW ELEMENT CORE
        </div>
        
        {/* Skip Intro Button */}
        {!isBooting && (
          <motion.button
            onClick={onComplete}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 text-sm font-mono tracking-wider uppercase border border-amber-400/30 bg-amber-400/5 text-amber-400/70 hover:text-amber-400 hover:border-amber-400/60 hover:bg-amber-400/10 transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip Intro
          </motion.button>
        )}
        
        <div className="absolute bottom-6 right-6 text-amber-400/25 text-xs font-mono flex items-center gap-2 tracking-widest">
          <motion.span
            className="w-2 h-2 rounded-full"
            style={{ 
              background: isBooting ? 'rgba(100, 255, 150, 0.9)' : 'rgba(255, 180, 50, 0.6)',
              boxShadow: isBooting ? '0 0 8px rgba(100, 255, 150, 0.8)' : '0 0 8px rgba(255, 180, 50, 0.5)'
            }}
            animate={!isBooting ? { opacity: [0.4, 1, 0.4] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          {isBooting ? "ACTIVE" : "STANDBY"}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ArcReactorSplash;
