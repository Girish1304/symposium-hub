import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Wrench, HelpCircle, Mail, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";
import ArcReactorSplash from "@/components/ArcReactorSplash";
import CountdownTimer from "@/components/CountdownTimer";
import PremiumBackground from "@/components/PremiumBackground";
import { Button } from "@/components/ui/button";

const navButtons = [
  { label: "Events", path: "/events", icon: Calendar, desc: "Competitions" },
  { label: "Workshops", path: "/workshops", icon: Wrench, desc: "Learn & Build" },
  { label: "FAQ", path: "/faq", icon: HelpCircle, desc: "Questions" },
  { label: "Contact", path: "/contact", icon: Mail, desc: "Get in Touch" },
];

const stats = [
  { value: "9+", label: "EVENTS" },
  { value: "6+", label: "WORKSHOPS" },
  { value: "₹50K+", label: "PRIZES" },
  { value: "1000+", label: "PARTICIPANTS" },
];

const Index = () => {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem("jarvis-booted");
  });

  const handleSplashComplete = () => {
    sessionStorage.setItem("jarvis-booted", "true");
    setShowSplash(false);
  };

  return (
    <>
      <Helmet>
        <title>JARVIS 2026 - College Technical Symposium | Innovation Meets Inspiration</title>
        <meta 
          name="description" 
          content="Join JARVIS 2026, the premier college technical symposium at Chennai Institute of Technology featuring hackathons, workshops, and talks from industry leaders. February 4, 2026." 
        />
        <meta name="keywords" content="college symposium, technical fest, hackathon, tech event, JARVIS 2026, CIT Chennai" />
      </Helmet>
      
      <AnimatePresence mode="wait">
        {showSplash ? (
          <ArcReactorSplash onComplete={handleSplashComplete} />
        ) : (
          <motion.div 
            className="min-h-screen bg-background relative overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PremiumBackground />
            <ScanLineOverlay />
            <Navbar />
            
            <main className="relative z-10">
              {/* Hero Section */}
              <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12">
                <motion.div
                  className="text-center max-w-5xl mx-auto"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {/* Premium Badge */}
                  <motion.div 
                    className="inline-flex items-center gap-3 px-6 py-3 mb-8 relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full blur-xl" />
                    <div className="relative flex items-center gap-3 px-6 py-2 bg-card/80 border border-primary/40 rounded-full backdrop-blur-md">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-primary font-mono text-sm uppercase tracking-[0.25em] font-medium">
                        February 4, 2026
                      </span>
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                  </motion.div>

                  {/* Main Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-4 leading-none">
                      <span className="relative inline-block">
                        <span className="text-gradient drop-shadow-[0_0_40px_hsl(var(--primary)/0.5)]">JARVIS</span>
                        <motion.span 
                          className="absolute -inset-1 bg-primary/20 blur-3xl -z-10"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </span>
                    </h1>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground/90 tracking-tight mb-6">
                      2026
                    </h2>
                  </motion.div>

                  {/* Tagline */}
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    The ultimate technical symposium at{" "}
                    <span className="text-foreground font-medium">Chennai Institute of Technology</span>.
                    <br className="hidden sm:block" />
                    Where innovation meets inspiration.
                  </motion.p>

                  {/* Countdown */}
                  <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <CountdownTimer />
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mb-20"
                  >
                    <Link to="/register">
                      <Button 
                        size="lg" 
                        className="group relative px-10 py-7 text-lg font-display tracking-wider overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          REGISTER NOW
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%]"
                          animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Stats Grid */}
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="group relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative p-6 bg-card/60 border border-primary/20 backdrop-blur-md overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card/80">
                          {/* Corner accents */}
                          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary/60" />
                          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary/60" />
                          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary/60" />
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary/60" />
                          
                          {/* Glow effect on hover */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-primary/10 to-transparent" />
                          
                          <div className="relative">
                            <div className="font-display text-3xl md:text-4xl text-gradient font-bold mb-1">
                              {stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground font-mono tracking-[0.2em] uppercase">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </section>

              {/* Navigation Cards Section */}
              <section className="py-20 px-6">
                <motion.div
                  className="max-w-6xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.h3 
                    className="text-center text-3xl md:text-4xl font-display text-foreground mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    EXPLORE <span className="text-gradient">JARVIS</span>
                  </motion.h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {navButtons.map((btn, index) => (
                      <motion.div
                        key={btn.path}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link to={btn.path} className="block group">
                          <div className="relative p-8 bg-card/40 border border-border/50 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-primary/60 group-hover:bg-card/70">
                            {/* Animated border glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
                              <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
                            </div>
                            
                            {/* Icon */}
                            <div className="mb-6 relative">
                              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 border border-primary/30 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                                <btn.icon className="w-7 h-7 text-primary" />
                              </div>
                            </div>
                            
                            {/* Content */}
                            <h4 className="font-display text-2xl text-foreground mb-2 group-hover:text-gradient transition-all">
                              {btn.label}
                            </h4>
                            <p className="text-sm text-muted-foreground font-body">
                              {btn.desc}
                            </p>
                            
                            {/* Arrow indicator */}
                            <div className="mt-6 flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors">
                              <span className="text-xs font-mono uppercase tracking-wider">Explore</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;