import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Wrench, HelpCircle, Mail, ArrowRight, Zap, CircuitBoard, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";
import ArcReactorSplash from "@/components/ArcReactorSplash";
import CountdownTimer from "@/components/CountdownTimer";
import PremiumBackground from "@/components/PremiumBackground";
import { Button } from "@/components/ui/button";


const navButtons = [
  { label: "Events", path: "/events", icon: Calendar, desc: "Epic Competitions" },
  { label: "Workshops", path: "/workshops", icon: Wrench, desc: "Learn & Build" },
  { label: "FAQ", path: "/faq", icon: HelpCircle, desc: "Get Answers" },
  { label: "Contact", path: "/contact", icon: Mail, desc: "Reach Out" },
];

const stats = [
  { value: "9+", label: "EVENTS", icon: Zap },
  { value: "6+", label: "WORKSHOPS", icon: Wrench },
  { value: "₹50K+", label: "PRIZES", icon: CircuitBoard },
  { value: "1000+", label: "PARTICIPANTS", icon: Cpu },
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
              <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 relative">

                <motion.div
                  className="text-center max-w-6xl mx-auto relative z-10"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {/* Badge */}
                  <motion.div 
                    className="inline-flex items-center gap-3 px-8 py-4 mb-10 relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-full blur-2xl" />
                    <div className="relative flex items-center gap-4 px-8 py-3 bg-card/60 border border-primary/50 rounded-full backdrop-blur-xl overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, transparent, hsl(280 100% 65% / 0.3), transparent)",
                        }}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold">
                        February 4, 2026
                      </span>
                      <Zap className="w-5 h-5 text-secondary" />
                    </div>
                  </motion.div>

                  {/* Main Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative"
                  >
                    <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-display font-bold tracking-wider mb-2 leading-none relative">
                      <span className="relative inline-block">
                        <span className="text-gradient drop-shadow-[0_0_60px_hsl(280,100%,60%,0.6)]">JARVIS</span>
                        <motion.span 
                          className="absolute inset-0 text-gradient blur-xl opacity-50"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          JARVIS
                        </motion.span>
                      </span>
                    </h1>
                    <motion.h2 
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-foreground/90 tracking-[0.4em] mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      2026
                    </motion.h2>
                  </motion.div>

                  {/* Tagline */}
                  <motion.p 
                    className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-14 font-body leading-relaxed font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    The ultimate technical symposium at{" "}
                    <span className="text-primary font-semibold">Chennai Institute of Technology</span>.
                    <br className="hidden sm:block" />
                    <span className="text-secondary">Where innovation</span> meets <span className="text-primary">inspiration</span>.
                  </motion.p>

                  {/* Countdown */}
                  <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <CountdownTimer />
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-24"
                  >
                    <Link to="/register">
                      <Button 
                        size="lg" 
                        className="group relative px-12 py-8 text-xl font-display tracking-wider overflow-hidden bg-transparent border-2 border-primary/80 hover:bg-primary/10 transition-all duration-300"
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/20 blur-xl" />
                        <span className="relative z-10 flex items-center gap-4 text-primary group-hover:text-foreground transition-colors">
                          REGISTER NOW
                          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </span>
                        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary" />
                        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary" />
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-secondary" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-secondary" />
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Stats Grid */}
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="group relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                      >
                        <div className="relative p-8 bg-card/40 border border-border/50 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-primary/70 group-hover:bg-card/60">
                          <motion.div 
                            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                          />
                          
                          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/70 transition-colors group-hover:border-primary" />
                          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/70 transition-colors group-hover:border-primary" />
                          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-secondary/50 transition-colors group-hover:border-secondary" />
                          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-secondary/50 transition-colors group-hover:border-secondary" />
                          
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-primary/10 via-transparent to-secondary/5" />
                          
                          <div className="relative flex flex-col items-center">
                            <stat.icon className="w-6 h-6 text-primary/60 mb-3 group-hover:text-primary transition-colors" />
                            <div className="font-display text-4xl md:text-5xl text-gradient font-bold mb-2">
                              {stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground font-mono tracking-[0.25em] uppercase">
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
              <section className="py-24 px-6">
                <motion.div
                  className="max-w-7xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.h3 
                    className="text-center text-4xl md:text-5xl font-display text-foreground mb-16"
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
                          <div className="relative p-10 bg-card/30 border border-border/30 backdrop-blur-lg overflow-hidden transition-all duration-500 group-hover:border-primary/60 group-hover:bg-card/50">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
                              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-primary via-transparent to-secondary" />
                              <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-primary via-transparent to-secondary" />
                            </div>

                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100"
                              initial={false}
                            >
                              <motion.div 
                                className="absolute left-0 right-0 h-12 bg-gradient-to-b from-primary/10 to-transparent"
                                animate={{ top: ["-10%", "110%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              />
                            </motion.div>
                            
                            <div className="mb-8 relative">
                              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/40 transition-all duration-300 group-hover:border-primary group-hover:scale-110 group-hover:shadow-[0_0_30px_hsl(280,100%,65%,0.3)]">
                                <btn.icon className="w-8 h-8 text-primary" />
                              </div>
                            </div>
                            
                            <h4 className="font-display text-2xl text-foreground mb-3 group-hover:text-gradient transition-all tracking-wide">
                              {btn.label}
                            </h4>
                            <p className="text-sm text-muted-foreground font-body font-medium">
                              {btn.desc}
                            </p>
                            
                            <div className="mt-8 flex items-center gap-3 text-primary/50 group-hover:text-primary transition-colors">
                              <span className="text-xs font-mono uppercase tracking-widest">Explore</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-3" />
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