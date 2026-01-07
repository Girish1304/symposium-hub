import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
            ? "bg-background/90 backdrop-blur-2xl shadow-lg shadow-black/30 border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        {/* Gold accent line on scroll */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(42 100% 50%), transparent)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: isScrolled ? 1 : 0, 
            opacity: isScrolled ? 0.5 : 0 
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        
        <div className="container px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src={jarvisLogo} 
                  alt="JARVIS 2026" 
                  className="h-10 md:h-12 w-auto relative z-10 transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
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
                      className="relative text-sm text-muted-foreground hover:text-foreground transition-colors font-body font-medium tracking-wide"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`relative text-sm hover:text-foreground transition-colors font-body font-medium tracking-wide ${
                        isActive(link.href, link.isHash) ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/register">
                  <Button variant="premium" size="default" className="font-body">
                    REGISTER
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/auth">
                  <Button variant="glass" size="default" className="font-body">
                    LOGIN
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-foreground p-2 rounded-full border border-border/50 hover:border-primary/50 hover:bg-card/50 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
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
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl md:hidden pt-24"
          >
            <div className="container px-6 py-8 relative">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.05 }}
                  >
                    {link.isHash ? (
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 text-lg font-body text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-4 text-lg font-body hover:text-foreground transition-colors ${
                          isActive(link.href, link.isHash) ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col gap-3 mt-6"
                >
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="premium" size="lg" className="font-body w-full">
                      REGISTER
                    </Button>
                  </Link>
                  <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="glass" size="lg" className="font-body w-full">
                      LOGIN
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