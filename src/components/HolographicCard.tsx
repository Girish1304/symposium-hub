import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "primary" | "secondary" | "accent";
}

const HolographicCard = ({ children, className = "", delay = 0, variant = "primary" }: HolographicCardProps) => {
  const borderColors = {
    primary: "border-primary/40 group-hover:border-primary/70",
    secondary: "border-secondary/40 group-hover:border-secondary/70",
    accent: "border-accent/40 group-hover:border-accent/70",
  };

  const glowColors = {
    primary: "from-primary via-primary/50 to-primary",
    secondary: "from-secondary via-secondary/50 to-secondary",
    accent: "from-accent via-accent/50 to-accent",
  };

  const cornerColors = {
    primary: "border-primary",
    secondary: "border-secondary",
    accent: "border-accent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative group ${className}`}
    >
      {/* Animated border glow on hover */}
      <div className={`absolute -inset-px bg-gradient-to-r ${glowColors[variant]} opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-sm`} />
      
      {/* Main card */}
      <div className={`relative bg-card/60 backdrop-blur-sm border ${borderColors[variant]} transition-all duration-300 overflow-hidden`}>
        {/* Holographic shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        {/* Scan line effect */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none"
          initial={{ top: 0 }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Corner accents */}
        <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 ${cornerColors[variant]}`} />
        <div className={`absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 ${cornerColors[variant]}`} />
        <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 ${cornerColors[variant]}`} />
        <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 ${cornerColors[variant]}`} />
        
        {/* Data stream overlay */}
        <div className="absolute inset-0 data-stream opacity-30 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default HolographicCard;