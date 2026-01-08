import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Cpu, CircuitBoard, Wrench, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";

const GlassCard = ({ 
  children, 
  className = "",
  delay = 0
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div 
    className={`relative group ${className}`}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/[0.08] group-hover:border-white/[0.15] transition-colors duration-300" />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const HolographicHero = () => {
  const stats = [
    { value: "9+", label: "Events", icon: Zap },
    { value: "6+", label: "Workshops", icon: Wrench },
    { value: "₹50K+", label: "Prizes", icon: CircuitBoard },
    { value: "1000+", label: "Participants", icon: Cpu },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 px-5 py-2.5 bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80 tracking-wide">
                Chennai Institute of Technology presents
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6">
              <span className="block text-foreground">The Future of</span>
              <span className="block text-gradient">Innovation</span>
              <span className="block text-foreground">Starts Here</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join <span className="text-foreground font-semibold">JARVIS 2026</span> — 
            the premier technical symposium featuring cutting-edge workshops, 
            intense competitions, and transformative experiences.
          </motion.p>

          {/* Event info pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.05] rounded-full border border-white/[0.08]">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">February 4, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.05] rounded-full border border-white/[0.08]">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">CIT Campus, Chennai</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/register">
              <Button 
                size="lg" 
                className="group relative px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              >
                <span className="flex items-center gap-2">
                  Register Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/events">
              <Button 
                variant="outline"
                size="lg" 
                className="px-8 py-6 text-base font-semibold rounded-full border-white/[0.15] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/[0.25] transition-all duration-300"
              >
                Explore Events
              </Button>
            </Link>
          </motion.div>

          {/* Countdown */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <CountdownTimer />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <GlassCard key={stat.label} delay={0.9 + index * 0.1}>
                <div className="p-6 text-center">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default HolographicHero;
