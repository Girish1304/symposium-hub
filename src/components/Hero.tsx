import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Hexagon pattern background */}
      <div className="absolute inset-0 bg-hex-pattern opacity-60" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent/8 rounded-full blur-[60px] animate-float" />

      {/* HUD corner brackets */}
      <div className="absolute top-20 left-8 md:left-16">
        <div className="w-20 h-20 border-l-2 border-t-2 border-primary/60" />
        <motion.div 
          className="absolute top-2 left-2 text-[10px] font-mono text-primary/60 tracking-wider"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SYS.ONLINE
        </motion.div>
      </div>
      <div className="absolute top-20 right-8 md:right-16">
        <div className="w-20 h-20 border-r-2 border-t-2 border-primary/60" />
      </div>
      <div className="absolute bottom-20 left-8 md:left-16">
        <div className="w-20 h-20 border-l-2 border-b-2 border-primary/60" />
      </div>
      <div className="absolute bottom-20 right-8 md:right-16">
        <div className="w-20 h-20 border-r-2 border-b-2 border-primary/60" />
        <motion.div 
          className="absolute bottom-2 right-2 text-[10px] font-mono text-primary/60 tracking-wider"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          ACTIVE
        </motion.div>
      </div>

      {/* Horizontal HUD lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{ top: `${25 + i * 25}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.2 }}
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Data stream indicators */}
      <motion.div 
        className="absolute left-4 md:left-12 top-1/3 h-32 w-1 overflow-hidden hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div 
          className="w-full bg-gradient-to-b from-transparent via-primary to-transparent"
          style={{ height: '200%' }}
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
      <motion.div 
        className="absolute right-4 md:right-12 top-1/2 h-24 w-1 overflow-hidden hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div 
          className="w-full bg-gradient-to-b from-transparent via-secondary to-transparent"
          style={{ height: '200%' }}
          animate={{ y: ['100%', '-100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2 mb-8 border border-primary/30 bg-card/40 backdrop-blur-sm"
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">System Initialized</span>
            <Zap className="w-4 h-4 text-secondary" />
          </motion.div>

          {/* Main heading with enhanced effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 relative"
          >
            <span className="text-foreground">JARVIS</span>
            <span className="text-gradient animate-flicker"> 2026</span>
            {/* Glow effect behind text */}
            <div className="absolute inset-0 blur-3xl opacity-30 -z-10">
              <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary">JARVIS 2026</span>
            </div>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light tracking-wide"
          >
            <span className="text-primary font-mono">&gt;</span> The premier technical symposium 
            where <span className="text-primary">machines</span> meet <span className="text-secondary">innovation</span>
          </motion.p>

          {/* Event details with HUD style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3 px-5 py-3 bg-card/60 border border-primary/30 backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground font-mono tracking-wider">DATE</div>
                  <div className="text-foreground font-semibold">FEBRUARY 4, 2026</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-secondary/50 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3 px-5 py-3 bg-card/60 border border-secondary/30 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-secondary" />
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground font-mono tracking-wider">VENUE</div>
                  <div className="text-foreground font-semibold">CHENNAI INSTITUTE OF TECHNOLOGY</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-10"
          >
            <CountdownTimer />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/register">
              <Button variant="hero" size="xl" className="animate-cyber-pulse group">
                <span className="relative z-10 flex items-center gap-2">
                  INITIATE REGISTRATION
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="glass" size="xl" className="border-primary/30 hover:border-primary/60">
                ACCESS SCHEDULE
              </Button>
            </Link>
          </motion.div>

          {/* Stats with HUD cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 max-w-3xl mx-auto"
          >
            {[
              { value: "15+", label: "EVENTS", color: "primary" },
              { value: "₹1L+", label: "REWARDS", color: "secondary" },
              { value: "6", label: "WORKSHOPS", color: "primary" },
              { value: "1000+", label: "PARTICIPANTS", color: "secondary" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className={`absolute -inset-px bg-gradient-to-b from-${stat.color}/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative p-5 bg-card/40 border border-border/50 backdrop-blur-sm hud-border group-hover:hud-glow transition-all duration-300">
                  {/* Corner accents */}
                  <div className={`absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-${stat.color}`} />
                  <div className={`absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-${stat.color}`} />
                  <div className={`absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-${stat.color}`} />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-${stat.color}`} />
                  
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground tracking-[0.2em] font-mono">{stat.label}</div>
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
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-muted-foreground tracking-[0.2em]">SCROLL</span>
          <div className="w-6 h-10 border border-primary/40 flex items-start justify-center p-2 relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;