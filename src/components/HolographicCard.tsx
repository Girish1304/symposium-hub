import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const HolographicCard = ({ children, className = "", delay = 0 }: HolographicCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative group ${className}`}
    >
      {/* Holographic border effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm" />
      
      {/* Main card */}
      <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden">
        {/* Holographic shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/50" />
        <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-primary/50" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-primary/50" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/50" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default HolographicCard;
