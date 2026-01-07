import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: 'cyan' | 'magenta';
}

const PremiumBackground = () => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 8,
      color: Math.random() > 0.5 ? 'cyan' : 'magenta',
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep cyberpunk dark base */}
      <div className="absolute inset-0 bg-[#080812]" />

      {/* Animated gradient mesh - top */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[60%]"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 20% 20%, hsl(185 100% 55% / 0.15) 0%, transparent 50%)"
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated gradient mesh - bottom right */}
      <motion.div 
        className="absolute bottom-0 right-0 w-[70%] h-[60%]"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 80% 80%, hsl(320 100% 60% / 0.12) 0%, transparent 50%)"
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Diagonal grid pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, hsl(185 100% 55% / 0.08) 49%, hsl(185 100% 55% / 0.08) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, hsl(320 100% 60% / 0.06) 49%, hsl(320 100% 60% / 0.06) 51%, transparent 52%)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Horizontal scan lines */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(185 100% 55% / 0.03) 2px,
            hsl(185 100% 55% / 0.03) 4px
          )`,
        }}
      />

      {/* Animated neon wave SVG */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185 100% 55% / 0)" />
            <stop offset="30%" stopColor="hsl(185 100% 55% / 0.8)" />
            <stop offset="70%" stopColor="hsl(185 100% 55% / 0.8)" />
            <stop offset="100%" stopColor="hsl(185 100% 55% / 0)" />
          </linearGradient>
          <linearGradient id="neonMagenta" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(320 100% 60% / 0)" />
            <stop offset="30%" stopColor="hsl(320 100% 60% / 0.6)" />
            <stop offset="70%" stopColor="hsl(320 100% 60% / 0.6)" />
            <stop offset="100%" stopColor="hsl(320 100% 60% / 0)" />
          </linearGradient>
          <linearGradient id="neonMix" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185 100% 55% / 0)" />
            <stop offset="25%" stopColor="hsl(185 100% 55% / 0.6)" />
            <stop offset="50%" stopColor="hsl(280 100% 60% / 0.8)" />
            <stop offset="75%" stopColor="hsl(320 100% 60% / 0.6)" />
            <stop offset="100%" stopColor="hsl(320 100% 60% / 0)" />
          </linearGradient>
          <filter id="neonGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Primary neon wave - cyan */}
        <motion.path
          d="M -100 200 Q 300 50 600 180 T 1200 160 T 1800 220 T 2100 100"
          fill="none"
          stroke="url(#neonCyan)"
          strokeWidth="3"
          filter="url(#neonGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Secondary wave - magenta */}
        <motion.path
          d="M -100 320 Q 400 180 800 300 T 1400 260 T 2100 340"
          fill="none"
          stroke="url(#neonMagenta)"
          strokeWidth="2"
          filter="url(#neonGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
        />

        {/* Third wave - gradient mix */}
        <motion.path
          d="M -100 450 Q 500 320 960 420 T 1600 380 T 2100 480"
          fill="none"
          stroke="url(#neonMix)"
          strokeWidth="2"
          filter="url(#neonGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
        />

        {/* Pulsing nodes along waves */}
        {[200, 500, 800, 1100, 1400, 1700].map((x, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={x}
            cy={180 + Math.sin((x / 300)) * 50}
            r="6"
            fill={i % 2 === 0 ? "hsl(185 100% 55%)" : "hsl(320 100% 60%)"}
            filter="url(#neonGlow)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.4, 1, 0.4], 
              scale: [0.8, 1.3, 0.8] 
            }}
            transition={{ 
              delay: 1.5 + i * 0.15, 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Floating particles - cyan and magenta */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color === 'cyan' 
              ? `radial-gradient(circle, hsl(185 100% 55% / 0.8) 0%, hsl(185 100% 55% / 0) 70%)`
              : `radial-gradient(circle, hsl(320 100% 60% / 0.7) 0%, hsl(320 100% 60% / 0) 70%)`,
            boxShadow: particle.color === 'cyan'
              ? `0 0 ${particle.size * 6}px hsl(185 100% 55% / 0.5)`
              : `0 0 ${particle.size * 6}px hsl(320 100% 60% / 0.4)`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large floating orbs */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(185 100% 55% / 0.15) 0%, transparent 70%)",
          boxShadow: "0 0 80px hsl(185 100% 55% / 0.3)",
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[60%] right-[15%] w-40 h-40 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(320 100% 60% / 0.12) 0%, transparent 70%)",
          boxShadow: "0 0 100px hsl(320 100% 60% / 0.25)",
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <motion.div
        className="absolute top-[40%] left-[60%] w-24 h-24 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(280 100% 60% / 0.1) 0%, transparent 70%)",
          boxShadow: "0 0 60px hsl(280 100% 60% / 0.2)",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Central glow pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-[800px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, hsl(200 100% 55% / 0.06) 0%, hsl(280 100% 60% / 0.03) 40%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64">
        <div className="absolute top-8 left-8 w-32 h-px bg-gradient-to-r from-[hsl(185,100%,55%)] to-transparent opacity-60" />
        <div className="absolute top-8 left-8 w-px h-32 bg-gradient-to-b from-[hsl(185,100%,55%)] to-transparent opacity-60" />
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64">
        <div className="absolute bottom-8 right-8 w-32 h-px bg-gradient-to-l from-[hsl(320,100%,60%)] to-transparent opacity-60" />
        <div className="absolute bottom-8 right-8 w-px h-32 bg-gradient-to-t from-[hsl(320,100%,60%)] to-transparent opacity-60" />
      </div>

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, transparent 40%, rgba(8,8,18,0.7) 100%)"
        }}
      />

      {/* Subtle noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default PremiumBackground;