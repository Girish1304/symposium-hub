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
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep premium black base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Subtle radial gradient from top */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 100% 70% at 50% -10%, hsl(var(--primary) / 0.12) 0%, transparent 50%)"
        }}
      />

      {/* Main vertical grid - premium style */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.08) 1px, transparent 1px)`,
          backgroundSize: '100px 100%',
        }}
      />

      {/* Secondary finer vertical grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.04) 1px, transparent 1px)`,
          backgroundSize: '25px 100%',
        }}
      />

      {/* Horizontal accent lines - sparse */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--primary) / 0.03) 1px, transparent 1px)`,
          backgroundSize: '100% 150px',
        }}
      />

      {/* Animated flowing curves */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="curve1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
            <stop offset="15%" stopColor="hsl(var(--primary) / 0.5)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.8)" />
            <stop offset="85%" stopColor="hsl(var(--primary) / 0.5)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
          </linearGradient>
          <linearGradient id="curve2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.3)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Hero curve - prominent */}
        <motion.path
          d="M -100 250 Q 400 50 960 120 Q 1520 200 2020 80"
          fill="none"
          stroke="url(#curve1)"
          strokeWidth="2.5"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Secondary curve */}
        <motion.path
          d="M -100 350 Q 500 120 960 200 Q 1420 280 2020 140"
          fill="none"
          stroke="url(#curve2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.2, ease: "easeOut" }}
        />

        {/* Third decorative curve */}
        <motion.path
          d="M -100 450 Q 600 250 960 300 Q 1320 350 2020 220"
          fill="none"
          stroke="url(#curve2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.4, ease: "easeOut" }}
        />

        {/* Animated accent dots along curves */}
        {[120, 320, 520, 720, 920, 1120, 1320, 1520, 1720].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={120 + Math.sin((x / 350)) * 80}
            r="4"
            fill="hsl(var(--primary))"
            filter="url(#glow)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.9, 0.3], 
              scale: [0.8, 1.2, 0.8] 
            }}
            transition={{ 
              delay: 1 + i * 0.12, 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Floating particles */}
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
            boxShadow: `0 0 ${particle.size * 4}px hsl(var(--primary) / ${particle.opacity * 0.5})`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [particle.opacity * 0.2, particle.opacity, particle.opacity * 0.2],
            scale: [1, 1.4, 1],
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
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 18}%`,
            width: 10 + i * 1.5,
            height: 10 + i * 1.5,
            background: `radial-gradient(circle, hsl(var(--primary) / 0.6) 0%, hsl(var(--primary) / 0.15) 50%, transparent 100%)`,
            boxShadow: `0 0 40px hsl(var(--primary) / 0.4)`,
          }}
          animate={{
            y: [0, -70 - i * 8, 0],
            x: [0, 25 - i * 6, 0],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 18 + i * 3,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central breathing glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-[1000px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.02) 40%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Corner glow - top left */}
      <div 
        className="absolute top-0 left-0 w-[500px] h-[500px]"
        style={{
          background: "radial-gradient(circle at top left, hsl(var(--primary) / 0.15) 0%, transparent 50%)"
        }}
      />

      {/* Corner glow - bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px]"
        style={{
          background: "radial-gradient(circle at bottom right, hsl(var(--primary) / 0.1) 0%, transparent 50%)"
        }}
      />

      {/* Premium vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 0%, transparent 50%, rgba(0,0,0,0.6) 100%)"
        }}
      />

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default PremiumBackground;