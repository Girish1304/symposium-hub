import { motion } from "framer-motion";

const PremiumBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient - sophisticated dark */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(240 20% 4%) 0%, hsl(260 25% 8%) 40%, hsl(280 20% 6%) 70%, hsl(240 15% 5%) 100%)"
        }}
      />

      {/* Subtle mesh gradient */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(250 100% 70% / 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsl(340 80% 65% / 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 80%, hsl(175 80% 55% / 0.08) 0%, transparent 50%)
          `
        }}
      />

      {/* Animated floating orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(250 100% 70% / 0.08) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(340 80% 65% / 0.06) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(0 0% 100% / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(0 0% 100% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default PremiumBackground;
