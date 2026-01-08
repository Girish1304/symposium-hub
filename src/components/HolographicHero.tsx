import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Cpu, CircuitBoard, Wrench, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";

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
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary tracking-wide uppercase">
                Chennai Institute of Technology presents
              </span>
            </div>
          </motion.div>

          {/* Main heading - GoatFundedTrader style stacked text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-bold tracking-tight leading-[0.9] uppercase">
              <span className="block text-foreground">The Future of</span>
              <span className="block text-gradient">Innovation</span>
              <span className="block text-foreground">Starts Here</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join <span className="text-primary font-semibold">JARVIS 2026</span> — 
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
            <div className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">February 4, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">CIT Campus, Chennai</span>
            </div>
          </motion.div>

          {/* CTA Buttons - GoatFundedTrader style */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/register">
              <Button 
                size="lg" 
                className="group px-10 py-7 text-base font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300 shadow-lg shadow-primary/30"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/events">
              <Button 
                variant="outline"
                size="lg" 
                className="px-10 py-7 text-base font-bold uppercase tracking-wide rounded-full border-2 border-border bg-transparent hover:bg-card hover:border-primary/50 transition-all duration-300"
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

          {/* Stats - GoatFundedTrader style cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="group relative p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle corner glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default HolographicHero;