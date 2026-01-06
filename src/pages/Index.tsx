import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechnicalEvents from "@/components/TechnicalEvents";
import Workshops from "@/components/Workshops";
import Schedule from "@/components/Schedule";
import Register from "@/components/Register";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";
import ArcReactorSplash from "@/components/ArcReactorSplash";

const Index = () => {
  const [showSplash, setShowSplash] = useState(() => {
    // Check if user has already seen splash this session
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
            <ScanLineOverlay />
            <Navbar />
            <main>
              <Hero />
              <About />
              <TechnicalEvents />
              <Workshops />
              <Schedule />
              <Register />
              <Sponsors />
              <FAQ />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
