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

const GoldParticles = () => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, hsl(45 100% 60% / ${particle.opacity}) 0%, hsl(45 100% 50% / ${particle.opacity * 0.5}) 50%, transparent 100%)`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(45 100% 50% / ${particle.opacity * 0.5})`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [particle.opacity * 0.5, particle.opacity, particle.opacity * 0.5],
            scale: [1, 1.2, 1],
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
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: 6 + i * 0.5,
            height: 6 + i * 0.5,
            background: `radial-gradient(circle, hsl(45 100% 70% / 0.4) 0%, hsl(45 100% 50% / 0.15) 60%, transparent 100%)`,
            boxShadow: `0 0 20px hsl(45 100% 50% / 0.3)`,
          }}
          animate={{
            y: [0, -50 - i * 5, 0],
            x: [0, 15 - i * 3, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default GoldParticles;
