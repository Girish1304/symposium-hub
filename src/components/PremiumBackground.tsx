import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: 'purple' | 'red';
}

const PremiumBackground = () => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 8,
      color: Math.random() > 0.3 ? 'purple' : 'red',
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep purple-black base */}
      <div className="absolute inset-0 bg-[#0a0512]" />

      {/* Purple nebula glow - top center */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[70%]"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 15%, hsl(280 70% 35% / 0.4) 0%, hsl(290 60% 20% / 0.2) 30%, transparent 60%)"
        }}
        animate={{
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Red eye glow accent */}
      <motion.div 
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[100px]"
        style={{
          background: "radial-gradient(ellipse, hsl(0 100% 50% / 0.3) 0%, transparent 70%)"
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Purple fog at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[60%]"
        style={{
          background: "linear-gradient(to top, hsl(280 60% 25% / 0.35) 0%, hsl(290 50% 20% / 0.2) 30%, transparent 100%)"
        }}
      />

      {/* Animated fog waves */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        style={{
          background: "radial-gradient(ellipse 100% 60% at 50% 100%, hsl(280 70% 30% / 0.4) 0%, transparent 70%)"
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(280 100% 65% / 0.05) 1px, transparent 1px),
            linear-gradient(hsl(280 100% 65% / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Stars/particles */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, hsl(280 100% 80% / 0.3) 0%, transparent 100%),
                           radial-gradient(2px 2px at 40% 70%, hsl(0 100% 70% / 0.2) 0%, transparent 100%),
                           radial-gradient(1px 1px at 60% 20%, hsl(280 100% 90% / 0.4) 0%, transparent 100%),
                           radial-gradient(2px 2px at 80% 50%, hsl(320 100% 70% / 0.25) 0%, transparent 100%),
                           radial-gradient(1px 1px at 10% 60%, hsl(280 100% 80% / 0.35) 0%, transparent 100%),
                           radial-gradient(2px 2px at 90% 80%, hsl(280 100% 70% / 0.3) 0%, transparent 100%)`,
        }}
      />

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
            background: particle.color === 'purple' 
              ? `radial-gradient(circle, hsl(280 100% 70% / 0.8) 0%, hsl(280 100% 50% / 0) 70%)`
              : `radial-gradient(circle, hsl(0 100% 60% / 0.7) 0%, hsl(0 100% 50% / 0) 70%)`,
            boxShadow: particle.color === 'purple'
              ? `0 0 ${particle.size * 6}px hsl(280 100% 65% / 0.5)`
              : `0 0 ${particle.size * 6}px hsl(0 100% 55% / 0.4)`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.2, 0.8, 0.2],
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
        className="absolute top-[20%] left-[15%] w-40 h-40 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(280 100% 55% / 0.12) 0%, transparent 70%)",
          boxShadow: "0 0 100px hsl(280 100% 55% / 0.25)",
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[50%] right-[10%] w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(0 100% 50% / 0.1) 0%, transparent 70%)",
          boxShadow: "0 0 80px hsl(0 100% 50% / 0.2)",
        }}
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 75% 70% at 50% 50%, transparent 0%, transparent 40%, rgba(10,5,18,0.8) 100%)"
        }}
      />

      {/* Subtle noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default PremiumBackground;