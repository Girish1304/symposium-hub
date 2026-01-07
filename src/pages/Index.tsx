import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Wrench, HelpCircle, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";
import ArcReactorSplash from "@/components/ArcReactorSplash";
import CountdownTimer from "@/components/CountdownTimer";
import GoatBackground from "@/components/GoatBackground";
import { Button } from "@/components/ui/button";

const navButtons = [
  { label: "Events", path: "/events", icon: Calendar },
  { label: "Workshops", path: "/workshops", icon: Wrench },
  { label: "FAQ", path: "/faq", icon: HelpCircle },
  { label: "Contact", path: "/contact", icon: Mail },
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
            className="min-h-screen bg-background relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GoatBackground />
            <ScanLineOverlay />
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
              {/* Hero Content */}
              <motion.div
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-card/60 border border-primary/30 backdrop-blur-sm mb-8">
                  <div className="w-2 h-2 bg-primary" />
                  <span className="text-primary font-mono text-sm uppercase tracking-[0.2em]">
                    February 4, 2026
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                  <span className="text-gradient">JARVIS</span>
                  <span className="text-foreground"> 2026</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                  The ultimate technical symposium at Chennai Institute of Technology. 
                  Where innovation meets inspiration and ideas transform into reality.
                </p>

                <div className="mb-12">
                  <CountdownTimer />
                </div>

                {/* Navigation Buttons */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {navButtons.map((btn, index) => (
                    <motion.div
                      key={btn.path}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="w-full h-20 flex flex-col gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                      >
                        <Link to={btn.path}>
                          <btn.icon className="w-6 h-6 text-primary" />
                          <span className="font-medium">{btn.label}</span>
                        </Link>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Register CTA */}
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button asChild size="lg" className="px-8">
                    <Link to="/register">Register Now</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
