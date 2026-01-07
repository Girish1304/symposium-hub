import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const PremiumBackground = () => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.6 + 0.2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep black base */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Gradient overlay - top */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 120% 60% at 50% -20%, hsl(var(--primary) / 0.08) 0%, transparent 60%)"
        }}
      />

      {/* Premium vertical grid lines */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.12) 1px, transparent 1px)`,
          backgroundSize: '120px 100%',
        }}
      />

      {/* Secondary finer vertical grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 100%',
        }}
      />

      {/* Subtle horizontal accent lines */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--primary) / 0.03) 1px, transparent 1px)`,
          backgroundSize: '100% 200px',
        }}
      />

      {/* Animated sweeping curves */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="premiumCurve1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
            <stop offset="20%" stopColor="hsl(var(--primary) / 0.4)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.7)" />
            <stop offset="80%" stopColor="hsl(var(--primary) / 0.4)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
          </linearGradient>
          <linearGradient id="premiumCurve2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.25)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main hero curve - top */}
        <motion.path
          d="M -100 300 Q 400 50 960 150 Q 1520 250 2020 50"
          fill="none"
          stroke="url(#premiumCurve1)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />

        {/* Secondary curve */}
        <motion.path
          d="M -100 400 Q 500 150 960 250 Q 1420 350 2020 150"
          fill="none"
          stroke="url(#premiumCurve2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.3, ease: "easeOut" }}
        />

        {/* Third decorative curve */}
        <motion.path
          d="M -100 500 Q 600 300 960 350 Q 1320 400 2020 250"
          fill="none"
          stroke="url(#premiumCurve2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.6, ease: "easeOut" }}
        />

        {/* Accent dots with glow */}
        {[150, 350, 550, 750, 950, 1150, 1350, 1550, 1750].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={150 + Math.sin((x / 400)) * 100}
            r="3"
            fill="hsl(var(--primary))"
            filter="url(#glow)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.4, 0.8, 0.4], 
              scale: [0.8, 1.2, 0.8] 
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

      {/* Floating gold particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, hsl(var(--primary) / ${particle.opacity}) 0%, transparent 100%)`,
            boxShadow: `0 0 ${particle.size * 3}px hsl(var(--primary) / ${particle.opacity * 0.6})`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [particle.opacity * 0.3, particle.opacity, particle.opacity * 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger floating orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${25 + (i % 3) * 20}%`,
            width: 8 + i,
            height: 8 + i,
            background: `radial-gradient(circle, hsl(var(--primary) / 0.5) 0%, hsl(var(--primary) / 0.1) 60%, transparent 100%)`,
            boxShadow: `0 0 30px hsl(var(--primary) / 0.4)`,
          }}
          animate={{
            y: [0, -60 - i * 10, 0],
            x: [0, 20 - i * 5, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central breathing glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, hsl(var(--primary) / 0.02) 40%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Corner accent - top left */}
      <div 
        className="absolute top-0 left-0 w-80 h-80"
        style={{
          background: "radial-gradient(circle at top left, hsl(var(--primary) / 0.15) 0%, transparent 60%)"
        }}
      />

      {/* Corner accent - bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-96 h-96"
        style={{
          background: "radial-gradient(circle at bottom right, hsl(var(--primary) / 0.12) 0%, transparent 60%)"
        }}
      />

      {/* Premium vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 0%, transparent 40%, rgba(0,0,0,0.5) 100%)"
        }}
      />

      {/* Noise texture for premium feel */}
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