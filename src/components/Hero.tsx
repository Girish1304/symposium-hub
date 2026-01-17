import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";
import ArcReactorBackground from "./ArcReactorBackground";
import GoldParticles from "./GoldParticles";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for different elements
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const detailsY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const countdownY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const statsY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Arc Reactor Breathing Background - with parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <ArcReactorBackground />
      </motion.div>
      
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
          {/* Main heading - GoatFundedTrader style bold italic */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ y: titleY, opacity }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-display tracking-wider mb-4 leading-[0.9]"
          >
            <span className="text-foreground block">JARVIS</span>
            <span className="text-gradient block">2026</span>
          </motion.h1>

          {/* Tagline - with parallax */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ y: taglineY, opacity }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body tracking-wide"
          >
            The premier technical symposium where <span className="text-primary font-semibold">machines</span> meet <span className="text-secondary font-semibold">innovation</span>
          </motion.p>

          {/* Event details - with parallax */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ y: detailsY, opacity }}
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

          {/* Countdown Timer - with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            style={{ y: countdownY, opacity }}
            className="mb-10"
          >
            <CountdownTimer />
          </motion.div>

          {/* CTA Buttons - with parallax */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ y: ctaY, opacity }}
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

          {/* Stats - with reverse parallax */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{ y: statsY }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
          >
            {[
              { value: "15+", label: "EVENTS" },
              { value: "₹2L+", label: "REWARDS" },
              { value: "6", label: "WORKSHOPS" },
              { value: "1000+", label: "PARTICIPANTS" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  rotateX: -5, 
                  rotateY: 5, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px hsl(42 100% 50% / 0.25)"
                }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/30 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden group"
              >
                {/* Glassmorphism shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                
                <motion.div style={{ transform: "translateZ(20px)" }} className="relative z-10">
                  <div className="text-4xl md:text-5xl font-display text-gradient mb-2 tracking-wide">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground tracking-[0.15em] font-body uppercase">{stat.label}</div>
                </motion.div>
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
        style={{ opacity }}
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