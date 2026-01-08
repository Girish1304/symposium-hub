import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Cpu, CircuitBoard, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";

const FloatingCard = ({ 
  children, 
  className = "", 
  delay = 0,
  rotateX = 0,
  rotateY = 0,
  translateZ = 0
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  rotateX?: number;
  rotateY?: number;
  translateZ?: number;
}) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -15, 0],
    }}
    transition={{ 
      delay,
      duration: 0.8,
      y: {
        delay: delay + 0.5,
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
    style={{
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      transformStyle: "preserve-3d"
    }}
  >
    {children}
  </motion.div>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden ${className}`}>
    {/* Holographic shimmer */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-50" />
    {/* Inner glow */}
    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10" />
    {/* Content */}
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const HolographicHero = () => {
  const stats = [
    { value: "9+", label: "EVENTS", icon: Zap },
    { value: "6+", label: "WORKSHOPS", icon: Wrench },
    { value: "₹50K+", label: "PRIZES", icon: CircuitBoard },
    { value: "1000+", label: "PARTICIPANTS", icon: Cpu },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 pb-12">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/25 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px]" />

      {/* Floating holographic cards - Left side */}
      <FloatingCard 
        className="hidden lg:block left-[5%] top-[20%] z-20"
        delay={0.5}
        rotateY={25}
        rotateX={-5}
      >
        <GlassCard className="w-64 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Cpu className="w-5 h-5 text-background" />
            </div>
            <span className="text-sm font-medium text-foreground/80">AI Workshops</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-white/20 rounded-full w-full" />
            <div className="h-2 bg-white/15 rounded-full w-3/4" />
            <div className="h-2 bg-white/10 rounded-full w-1/2" />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-primary font-mono">LIVE SESSIONS</span>
          </div>
        </GlassCard>
      </FloatingCard>

      <FloatingCard 
        className="hidden lg:block left-[8%] bottom-[25%] z-20"
        delay={0.8}
        rotateY={20}
        rotateX={5}
      >
        <GlassCard className="w-56 p-5">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-1">₹50K+</div>
            <div className="text-xs text-muted-foreground font-mono tracking-wider">PRIZE POOL</div>
          </div>
          <div className="mt-4 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </GlassCard>
      </FloatingCard>

      {/* Floating holographic cards - Right side */}
      <FloatingCard 
        className="hidden lg:block right-[5%] top-[25%] z-20"
        delay={0.6}
        rotateY={-25}
        rotateX={-5}
      >
        <GlassCard className="w-64 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <CircuitBoard className="w-5 h-5 text-background" />
            </div>
            <span className="text-sm font-medium text-foreground/80">Tech Events</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square rounded-lg bg-white/10 border border-white/20" />
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-muted-foreground">9+ Events</span>
            <ArrowRight className="w-4 h-4 text-secondary" />
          </div>
        </GlassCard>
      </FloatingCard>

      <FloatingCard 
        className="hidden lg:block right-[10%] bottom-[20%] z-20"
        delay={0.9}
        rotateY={-20}
        rotateX={5}
      >
        <GlassCard className="w-52 p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary" />
            <div className="flex-1">
              <div className="h-2 bg-white/20 rounded w-full mb-1" />
              <div className="h-2 bg-white/10 rounded w-2/3" />
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                className="flex-1 h-8 bg-gradient-to-t from-primary/50 to-transparent rounded-t"
                style={{ height: `${20 + Math.random() * 30}px` }}
                animate={{ height: [`${20 + i * 5}px`, `${35 + i * 5}px`, `${20 + i * 5}px`] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </GlassCard>
      </FloatingCard>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full">
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-foreground/90 tracking-wide">
                February 4, 2026 • Chennai Institute of Technology
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-4">
            <span className="block text-foreground">A NEW ERA OF</span>
            <span className="block text-gradient">AI-DRIVEN</span>
            <span className="block text-foreground">INNOVATION</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Experience the future at <span className="text-primary font-semibold">JARVIS 2026</span> — 
          the ultimate technical symposium where technology meets creativity.
        </motion.p>

        {/* Countdown */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <CountdownTimer />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/register">
            <Button 
              size="lg" 
              className="group relative px-10 py-7 text-lg font-semibold bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 rounded-full border-0 text-background"
            >
              <span className="flex items-center gap-3">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
          <Link to="/events">
            <Button 
              variant="outline"
              size="lg" 
              className="px-10 py-7 text-lg font-semibold rounded-full border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/30"
            >
              Explore Events
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="group"
            >
              <GlassCard className="p-6 hover:border-primary/50 transition-colors cursor-default">
                <stat.icon className="w-5 h-5 text-primary/60 mx-auto mb-2 group-hover:text-primary transition-colors" />
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-mono tracking-wider">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HolographicHero;
