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
  const glowIntensity = 0.3 + (clickCount * 0.14);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 200, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 200, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Arc Reactor */}
        <motion.div
          className="relative cursor-pointer select-none"
          onClick={handleClick}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: isBooting ? [1, 1.2, 0] : 1,
          }}
          transition={{
            duration: isBooting ? 1.5 : 0.1,
          }}
        >
          {/* Outer glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: `
                0 0 ${20 + clickCount * 20}px ${10 + clickCount * 10}px rgba(0, 200, 255, ${glowIntensity}),
                0 0 ${40 + clickCount * 30}px ${20 + clickCount * 15}px rgba(0, 150, 255, ${glowIntensity * 0.5})
              `
            }}
            style={{
              width: '280px',
              height: '280px',
              transform: 'translate(-50%, -50%)',
              left: '50%',
              top: '50%',
            }}
          />

          {/* Main reactor body */}
          <svg
            width="280"
            height="280"
            viewBox="0 0 280 280"
            className="relative z-10"
          >
            {/* Outer ring */}
            <circle
              cx="140"
              cy="140"
              r="130"
              fill="none"
              stroke="rgba(100, 100, 100, 0.5)"
              strokeWidth="8"
            />
            
            {/* Power ring - fills based on clicks */}
            <motion.circle
              cx="140"
              cy="140"
              r="130"
              fill="none"
              stroke="url(#powerGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 130}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 130 }}
              animate={{ 
                strokeDashoffset: 2 * Math.PI * 130 * (1 - powerLevel / 100),
              }}
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            />

            {/* Inner rings */}
            <circle
              cx="140"
              cy="140"
              r="100"
              fill="none"
              stroke="rgba(0, 200, 255, 0.3)"
              strokeWidth="2"
            />
            <circle
              cx="140"
              cy="140"
              r="80"
              fill="none"
              stroke="rgba(0, 200, 255, 0.4)"
              strokeWidth="3"
            />
            <circle
              cx="140"
              cy="140"
              r="60"
              fill="none"
              stroke="rgba(0, 200, 255, 0.5)"
              strokeWidth="2"
            />

            {/* Triangular segments */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <motion.path
                key={i}
                d={`M 140 140 L ${140 + 90 * Math.cos((i * 36 - 90) * Math.PI / 180)} ${140 + 90 * Math.sin((i * 36 - 90) * Math.PI / 180)} A 90 90 0 0 1 ${140 + 90 * Math.cos(((i + 1) * 36 - 90) * Math.PI / 180)} ${140 + 90 * Math.sin(((i + 1) * 36 - 90) * Math.PI / 180)} Z`}
                fill={i < clickCount * 2 ? "rgba(0, 200, 255, 0.6)" : "rgba(50, 50, 50, 0.5)"}
                stroke="rgba(0, 200, 255, 0.8)"
                strokeWidth="1"
                animate={{
                  fill: i < clickCount * 2 ? "rgba(0, 200, 255, 0.6)" : "rgba(50, 50, 50, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              />
            ))}

            {/* Core */}
            <motion.circle
              cx="140"
              cy="140"
              r="35"
              fill="url(#coreGradient)"
              animate={{
                filter: `brightness(${1 + clickCount * 0.3})`,
              }}
            />
            
            {/* Core inner glow */}
            <motion.circle
              cx="140"
              cy="140"
              r="20"
              fill="rgba(255, 255, 255, 0.9)"
              animate={{
                opacity: 0.5 + clickCount * 0.1,
              }}
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="powerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="50%" stopColor="#0088ff" />
                <stop offset="100%" stopColor="#00ffff" />
              </linearGradient>
              <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="50%" stopColor="rgba(0, 200, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(0, 100, 200, 0.8)" />
              </radialGradient>
            </defs>
          </svg>

          {/* Rotating elements */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <div
                key={angle}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${angle}deg) translateY(-120px) translateX(-50%)`,
                  opacity: clickCount > 0 ? 0.8 : 0.3,
                }}
              />
            ))}
          </motion.div>
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
              color: `rgba(0, ${150 + clickCount * 20}, 255, ${0.5 + clickCount * 0.1})`,
              textShadow: `0 0 ${10 + clickCount * 5}px rgba(0, 200, 255, 0.5)`
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
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${powerLevel}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-cyan-400/50 text-xs mt-2 tracking-wider">
              POWER LEVEL: {Math.round(powerLevel)}%
            </p>
          </div>
        </motion.div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 text-cyan-400/30 text-xs font-mono">
          STARK INDUSTRIES
        </div>
        <div className="absolute top-4 right-4 text-cyan-400/30 text-xs font-mono">
          v2.0.26
        </div>
        <div className="absolute bottom-4 left-4 text-cyan-400/30 text-xs font-mono">
          ARC REACTOR CORE
        </div>
        <div className="absolute bottom-4 right-4 text-cyan-400/30 text-xs font-mono">
          STATUS: {isBooting ? "ONLINE" : "STANDBY"}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ArcReactorSplash;
