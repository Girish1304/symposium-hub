import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import jarvisLogo from "@/assets/jarvis-logo.png";

const navLinks = [
  { name: "ABOUT", href: "/#about", isHash: true },
  { name: "EVENTS", href: "/events", isHash: false },
  { name: "WORKSHOPS", href: "/workshops", isHash: false },
  { name: "FAQ", href: "/faq", isHash: false },
  { name: "CONTACT", href: "/contact", isHash: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string, isHash: boolean) => {
    if (isHash) return false;
    return location.pathname === href;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        {/* Top accent line with animation */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        {/* HUD corner elements */}
        <div className="absolute top-2 left-4 w-6 h-6 border-l border-t border-primary/30 hidden lg:block" />
        <div className="absolute top-2 right-4 w-6 h-6 border-r border-t border-primary/30 hidden lg:block" />
        
        <div className="container px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src={jarvisLogo} 
                  alt="JARVIS 2026" 
                  className="h-12 md:h-14 w-auto relative z-10 transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {link.isHash ? (
                    <a
                      href={link.href}
                      className="relative px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors font-semibold tracking-wider group"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`relative px-4 py-2 text-sm hover:text-primary transition-colors font-semibold tracking-wider group ${
                        isActive(link.href, link.isHash) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                        isActive(link.href, link.isHash) ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/register">
                  <Button variant="hero" size="sm" className="ml-4 font-bold tracking-wider group">
                    <Zap className="w-4 h-4 mr-1 group-hover:text-secondary transition-colors" />
                    REGISTER
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-foreground p-2 border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden pt-24"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-hex-pattern opacity-20" />
            
            {/* Scan lines overlay */}
            <div className="absolute inset-0 data-stream opacity-5 pointer-events-none" />
            
            {/* Corner brackets */}
            <div className="absolute top-28 left-6 w-10 h-10 border-l-2 border-t-2 border-primary" />
            <div className="absolute top-28 right-6 w-10 h-10 border-r-2 border-t-2 border-primary" />
            <div className="absolute bottom-6 left-6 w-10 h-10 border-l-2 border-b-2 border-primary" />
            <div className="absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-primary" />
            
            {/* Status indicator */}
            <motion.div 
              className="absolute top-28 left-20 text-[10px] font-mono text-primary/60 tracking-wider"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              NAVIGATION.ACTIVE
            </motion.div>
            
            <div className="container px-6 py-8 relative">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                  >
                    {link.isHash ? (
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-4 py-3 text-2xl font-bold text-foreground hover:text-primary transition-colors tracking-wider group"
                      >
                        <span className="w-8 h-[2px] bg-primary/30 group-hover:bg-primary group-hover:w-12 transition-all" />
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-4 py-3 text-2xl font-bold hover:text-primary transition-colors tracking-wider group ${
                          isActive(link.href, link.isHash) ? "text-primary" : "text-foreground"
                        }`}
                      >
                        <span className={`h-[2px] transition-all ${
                          isActive(link.href, link.isHash) 
                            ? "w-12 bg-primary" 
                            : "w-8 bg-primary/30 group-hover:bg-primary group-hover:w-12"
                        }`} />
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="hero" size="lg" className="mt-6 font-bold tracking-wider w-full">
                      <Zap className="w-5 h-5 mr-2" />
                      INITIATE REGISTRATION
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;