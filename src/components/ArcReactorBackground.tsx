import { motion } from "framer-motion";

const ArcReactorBackground = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Outer breathing glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 50% / 0.15) 0%, hsl(45 100% 50% / 0.05) 40%, transparent 70%)",
        }}
      />

      {/* Middle breathing ring */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        className="absolute w-[500px] h-[500px] rounded-full border border-primary/20"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 50% / 0.1) 0%, transparent 60%)",
          boxShadow: "0 0 60px hsl(45 100% 50% / 0.15), inset 0 0 40px hsl(45 100% 50% / 0.08)",
        }}
      />

      {/* Core breathing element */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 50% / 0.2) 0%, hsl(45 100% 50% / 0.08) 50%, transparent 70%)",
          boxShadow: "0 0 80px hsl(45 100% 50% / 0.2), 0 0 120px hsl(45 100% 50% / 0.1)",
        }}
      />

      {/* Inner core pulse */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[120px] h-[120px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 55% / 0.4) 0%, hsl(45 100% 50% / 0.15) 50%, transparent 70%)",
          boxShadow: "0 0 40px hsl(45 100% 50% / 0.3)",
        }}
      />

      {/* Center bright core */}
      <motion.div
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[40px] h-[40px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 70% / 0.8) 0%, hsl(45 100% 50% / 0.3) 60%, transparent 100%)",
          boxShadow: "0 0 20px hsl(45 100% 50% / 0.5), 0 0 40px hsl(45 100% 50% / 0.3)",
        }}
      />

      {/* Rotating ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[400px] h-[400px] rounded-full border border-primary/10"
        style={{
          borderStyle: "dashed",
        }}
      />

      {/* Rotating ring 2 - opposite direction */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[600px] h-[600px] rounded-full border border-primary/5"
        style={{
          borderStyle: "dashed",
        }}
      />
    </div>
  );
};

export default ArcReactorBackground;
