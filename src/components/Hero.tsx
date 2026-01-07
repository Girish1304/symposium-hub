import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";
import ArcReactorBackground from "./ArcReactorBackground";
import GoldParticles from "./GoldParticles";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Arc Reactor Breathing Background */}
      <ArcReactorBackground />
      
      {/* Floating Gold Particles */}
      <GoldParticles />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">JARVIS</span>
            <span className="text-gradient"> 2026</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light tracking-wide"
          >
            The premier technical symposium where <span className="text-primary">machines</span> meet <span className="text-secondary">innovation</span>
          </motion.p>

          {/* Event details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-3 px-5 py-3 bg-card/60 border border-primary/30 backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground font-mono tracking-wider">DATE</div>
                <div className="text-foreground font-semibold">FEBRUARY 4, 2026</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-card/60 border border-secondary/30 backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-secondary" />
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground font-mono tracking-wider">VENUE</div>
                <div className="text-foreground font-semibold">CHENNAI INSTITUTE OF TECHNOLOGY</div>
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
              <Button variant="hero" size="xl" className="group">
                <span className="relative z-10 flex items-center gap-2">
                  REGISTER NOW
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="glass" size="xl" className="border-primary/30 hover:border-primary/60">
                VIEW SCHEDULE
              </Button>
            </Link>
          </motion.div>

          {/* Stats - simplified */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto"
          >
            {[
              { value: "15+", label: "EVENTS" },
              { value: "₹1L+", label: "REWARDS" },
              { value: "6", label: "WORKSHOPS" },
              { value: "1000+", label: "PARTICIPANTS" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="p-5 bg-card/40 border border-border/50 backdrop-blur-sm hover:border-primary/40 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] text-muted-foreground tracking-[0.2em] font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - simplified */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-muted-foreground tracking-[0.2em]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-primary/40 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;