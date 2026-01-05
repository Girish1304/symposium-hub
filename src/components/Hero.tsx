import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-40" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />

      {/* Horizontal scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            initial={{ top: `${20 + i * 15}%`, opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Holographic Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 relative"
          >
            <div className="absolute inset-0 bg-card/60 backdrop-blur-md border border-primary/30 rounded-sm cyber-clip" />
            <Zap className="w-4 h-4 text-primary relative z-10 animate-flicker" />
            <span className="text-sm text-primary font-semibold uppercase tracking-wider relative z-10">
              Systems Online
            </span>
          </motion.div>

          {/* Main heading with chrome effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          >
            <span className="text-chrome">NEXUS</span>
            <span className="text-gradient animate-flicker"> 2025</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light tracking-wide"
          >
            INITIATING PROTOCOL: The premier technical symposium 
            where machines meet innovation.
          </motion.p>

          {/* Event details with holographic style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-card/40 border border-border/50 rounded-sm">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">MARCH 15-17, 2025</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/40 border border-border/50 rounded-sm">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-foreground font-medium">NATIONAL INSTITUTE OF TECHNOLOGY</span>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-4">
              System Launch In
            </p>
            <CountdownTimer />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="animate-cyber-pulse">
              INITIATE REGISTRATION
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="xl">
              ACCESS SCHEDULE
            </Button>
          </motion.div>

          {/* Stats with holographic cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          >
            {[
              { value: "50+", label: "EVENTS" },
              { value: "5000+", label: "UNITS" },
              { value: "100+", label: "SECTORS" },
              { value: "₹5L+", label: "REWARDS" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 bg-card/30 border border-border/50 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-primary" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary" />
                  
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground tracking-widest">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 flex items-start justify-center p-2 relative">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-px bg-primary" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-px bg-primary" />
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
