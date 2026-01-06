import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ArcReactorSplashProps {
  onComplete: () => void;
}

const ArcReactorSplash = ({ onComplete }: ArcReactorSplashProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [isBooting, setIsBooting] = useState(false);

  const handleClick = useCallback(() => {
    if (isBooting) return;
    
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 5) {
      setIsBooting(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  }, [clickCount, isBooting, onComplete]);

  const powerLevel = (clickCount / 5) * 100;
  const glowIntensity = 0.2 + (clickCount * 0.16);
  const coreOpacity = 0.3 + (clickCount * 0.14);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background ambient */}
        <div className="absolute inset-0 bg-gradient-radial from-cyan-950/20 via-black to-black" />

        {/* Arc Reactor Container */}
        <motion.div
          className="relative cursor-pointer select-none"
          onClick={handleClick}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: isBooting ? [1, 1.3, 0] : 1,
          }}
          transition={{
            duration: isBooting ? 1.5 : 0.1,
          }}
        >
          {/* Outer glow effect */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '320px',
              height: '320px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              boxShadow: `
                0 0 ${30 + clickCount * 25}px ${15 + clickCount * 12}px rgba(80, 200, 255, ${glowIntensity}),
                0 0 ${60 + clickCount * 40}px ${30 + clickCount * 20}px rgba(50, 180, 255, ${glowIntensity * 0.6}),
                0 0 ${100 + clickCount * 50}px ${50 + clickCount * 25}px rgba(30, 150, 255, ${glowIntensity * 0.3})
              `
            }}
          />

          {/* Main reactor SVG */}
          <svg
            width="320"
            height="320"
            viewBox="0 0 320 320"
            className="relative z-10"
          >
            <defs>
              {/* Core glow gradient */}
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="30%" stopColor="rgba(180, 230, 255, 0.95)" />
                <stop offset="60%" stopColor="rgba(80, 200, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(40, 150, 220, 0.7)" />
              </radialGradient>

              {/* Metal gradient for outer ring */}
              <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a4a4a" />
                <stop offset="30%" stopColor="#2a2a2a" />
                <stop offset="50%" stopColor="#3a3a3a" />
                <stop offset="70%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="#2a2a2a" />
              </linearGradient>

              {/* Inner ring gradient */}
              <linearGradient id="innerRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5a5a5a" />
                <stop offset="50%" stopColor="#3a3a3a" />
                <stop offset="100%" stopColor="#4a4a4a" />
              </linearGradient>

              {/* Triangle glow filter */}
              <filter id="triangleGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Outer glow filter */}
              <filter id="outerGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer dark ring with fins/heat sinks */}
            <g>
              {/* Main outer ring */}
              <circle
                cx="160"
                cy="160"
                r="145"
                fill="url(#metalGradient)"
                stroke="#1a1a1a"
                strokeWidth="2"
              />

              {/* Heat sink fins */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * (Math.PI / 180);
                const x1 = 160 + 135 * Math.cos(angle);
                const y1 = 160 + 135 * Math.sin(angle);
                const x2 = 160 + 155 * Math.cos(angle);
                const y2 = 160 + 155 * Math.sin(angle);
                return (
                  <g key={i}>
                    {/* Main fin */}
                    <rect
                      x={160 + 130 * Math.cos(angle) - 8}
                      y={160 + 130 * Math.sin(angle) - 3}
                      width="30"
                      height="6"
                      rx="1"
                      fill="#2a2a2a"
                      stroke="#1a1a1a"
                      strokeWidth="0.5"
                      transform={`rotate(${i * 30}, ${160 + 130 * Math.cos(angle)}, ${160 + 130 * Math.sin(angle)})`}
                    />
                    {/* Small side fins */}
                    <rect
                      x={160 + 125 * Math.cos(angle + 0.08) - 4}
                      y={160 + 125 * Math.sin(angle + 0.08) - 2}
                      width="18"
                      height="4"
                      rx="1"
                      fill="#252525"
                      transform={`rotate(${i * 30 + 5}, ${160 + 125 * Math.cos(angle)}, ${160 + 125 * Math.sin(angle)})`}
                    />
                    <rect
                      x={160 + 125 * Math.cos(angle - 0.08) - 4}
                      y={160 + 125 * Math.sin(angle - 0.08) - 2}
                      width="18"
                      height="4"
                      rx="1"
                      fill="#252525"
                      transform={`rotate(${i * 30 - 5}, ${160 + 125 * Math.cos(angle)}, ${160 + 125 * Math.sin(angle)})`}
                    />
                  </g>
                );
              })}
            </g>

            {/* Inner metal ring */}
            <circle
              cx="160"
              cy="160"
              r="115"
              fill="url(#innerRingGradient)"
              stroke="#555"
              strokeWidth="1"
            />

            {/* Outer glowing ring */}
            <motion.circle
              cx="160"
              cy="160"
              r="105"
              fill="none"
              stroke="rgba(80, 200, 255, 0.6)"
              strokeWidth="4"
              filter="url(#outerGlow)"
              animate={{ opacity: coreOpacity }}
            />

            {/* Dark inner ring border */}
            <circle
              cx="160"
              cy="160"
              r="100"
              fill="#1a1a1a"
              stroke="#333"
              strokeWidth="2"
            />

            {/* Core glow background */}
            <motion.circle
              cx="160"
              cy="160"
              r="95"
              fill="url(#coreGlow)"
              animate={{ opacity: coreOpacity + 0.2 }}
            />

            {/* Triangle frame - the iconic inverted triangle */}
            <g filter="url(#triangleGlow)">
              {/* Outer triangle ring */}
              <motion.circle
                cx="160"
                cy="160"
                r="85"
                fill="none"
                stroke="rgba(40, 80, 100, 0.8)"
                strokeWidth="8"
                animate={{ opacity: 0.6 + clickCount * 0.08 }}
              />

              {/* Main inverted triangle */}
              <motion.path
                d="M 160 75 L 235 205 L 85 205 Z"
                fill="none"
                stroke="rgba(30, 60, 80, 0.9)"
                strokeWidth="10"
                strokeLinejoin="round"
                animate={{ opacity: 0.7 + clickCount * 0.06 }}
              />

              {/* Inner triangle glow */}
              <motion.path
                d="M 160 90 L 222 195 L 98 195 Z"
                fill={`rgba(120, 220, 255, ${coreOpacity})`}
                stroke="rgba(80, 200, 255, 0.8)"
                strokeWidth="2"
                animate={{ 
                  fill: `rgba(120, 220, 255, ${coreOpacity})`,
                  opacity: coreOpacity + 0.1
                }}
              />

              {/* Cross lines inside triangle */}
              <motion.line
                x1="160"
                y1="90"
                x2="160"
                y2="195"
                stroke="rgba(30, 60, 80, 0.9)"
                strokeWidth="6"
                animate={{ opacity: 0.7 + clickCount * 0.06 }}
              />
              <motion.line
                x1="98"
                y1="195"
                x2="191"
                y2="143"
                stroke="rgba(30, 60, 80, 0.9)"
                strokeWidth="6"
                animate={{ opacity: 0.7 + clickCount * 0.06 }}
              />
              <motion.line
                x1="222"
                y1="195"
                x2="129"
                y2="143"
                stroke="rgba(30, 60, 80, 0.9)"
                strokeWidth="6"
                animate={{ opacity: 0.7 + clickCount * 0.06 }}
              />

              {/* Center point */}
              <motion.circle
                cx="160"
                cy="160"
                r="12"
                fill="rgba(200, 240, 255, 0.9)"
                animate={{ 
                  opacity: coreOpacity + 0.3,
                  r: 12 + clickCount * 1
                }}
              />
            </g>

            {/* Pulsing core glow overlay */}
            <motion.circle
              cx="160"
              cy="160"
              r="95"
              fill="rgba(150, 230, 255, 0.15)"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                r: [93, 97, 93]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>

          {/* Ambient light particles */}
          {clickCount > 0 && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-300 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, Math.cos(i * 45 * Math.PI / 180) * 180],
                    y: [0, Math.sin(i * 45 * Math.PI / 180) * 180],
                    opacity: [0.8, 0],
                    scale: [1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Status text */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold tracking-wider mb-4"
            style={{ 
              color: `rgba(${100 + clickCount * 30}, ${200 + clickCount * 10}, 255, ${0.6 + clickCount * 0.08})`,
              textShadow: `0 0 ${10 + clickCount * 5}px rgba(80, 200, 255, 0.6)`
            }}
          >
            {isBooting ? "SYSTEM ONLINE" : "J.A.R.V.I.S."}
          </motion.h2>
          
          <motion.p
            className="text-cyan-400/70 text-sm md:text-base tracking-widest uppercase"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {isBooting 
              ? "Initializing interface..." 
              : `Tap to activate • ${5 - clickCount} remaining`
            }
          </motion.p>

          {/* Power bar */}
          <div className="mt-6 w-64 mx-auto">
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400"
                initial={{ width: 0 }}
                animate={{ width: `${powerLevel}%` }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 0 10px rgba(80, 200, 255, 0.8)'
                }}
              />
            </div>
            <p className="text-cyan-400/50 text-xs mt-2 tracking-wider font-mono">
              ARC REACTOR: {Math.round(powerLevel)}% CAPACITY
            </p>
          </div>
        </motion.div>

        {/* Corner HUD elements */}
        <div className="absolute top-4 left-4 text-cyan-400/30 text-xs font-mono">
          STARK INDUSTRIES
        </div>
        <div className="absolute top-4 right-4 text-cyan-400/30 text-xs font-mono">
          MK-VI
        </div>
        <div className="absolute bottom-4 left-4 text-cyan-400/30 text-xs font-mono">
          PALLADIUM CORE
        </div>
        <div className="absolute bottom-4 right-4 text-cyan-400/30 text-xs font-mono">
          {isBooting ? "● ONLINE" : "○ STANDBY"}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ArcReactorSplash;
