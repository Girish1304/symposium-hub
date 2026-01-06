import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "EVENTS", href: "#events" },
  { name: "SCHEDULE", href: "#schedule" },
  { name: "REGISTER", href: "#register" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-primary/20"
            : "bg-transparent"
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 border border-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-wider">
                <span className="text-chrome">JARVIS</span>
                <span className="text-gradient"> '26</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm text-muted-foreground hover:text-primary transition-colors font-semibold tracking-wider group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <Button variant="hero" size="sm" className="font-bold tracking-wider">
                REGISTER
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2 border border-border/50 hover:border-primary/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg md:hidden pt-20"
          >
            {/* Scan lines overlay */}
            <div 
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(195 100% 50% / 0.2) 2px, hsl(195 100% 50% / 0.2) 4px)`,
              }}
            />
            
            {/* Corner brackets */}
            <div className="absolute top-24 left-6 w-8 h-8 border-l-2 border-t-2 border-primary" />
            <div className="absolute top-24 right-6 w-8 h-8 border-r-2 border-t-2 border-primary" />
            <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-primary" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-primary" />
            
            <div className="container px-6 py-8 relative">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl font-bold text-foreground hover:text-primary transition-colors tracking-wider"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <Button variant="hero" size="lg" className="mt-4 font-bold tracking-wider">
                  INITIATE REGISTRATION
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
