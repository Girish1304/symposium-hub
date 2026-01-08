import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Wrench, HelpCircle, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";
import ArcReactorSplash from "@/components/ArcReactorSplash";
import PremiumBackground from "@/components/PremiumBackground";
import HolographicHero from "@/components/HolographicHero";

const navButtons = [
  { label: "Events", path: "/events", icon: Calendar, desc: "Epic Competitions" },
  { label: "Workshops", path: "/workshops", icon: Wrench, desc: "Learn & Build" },
  { label: "FAQ", path: "/faq", icon: HelpCircle, desc: "Get Answers" },
  { label: "Contact", path: "/contact", icon: Mail, desc: "Reach Out" },
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
              {/* Holographic Hero Section */}
              <HolographicHero />

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