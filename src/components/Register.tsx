import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Access to all 15+ events",
  "Workshop materials included",
  "Certificate of participation",
  "Networking opportunities",
  "Goodies & swag kit",
  "Free meals during event",
];

const Register = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="register" className="py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-hex-pattern opacity-15" />
      
      {/* Animated scan effect */}
      <motion.div
        className="absolute left-0 right-0 h-96 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
        animate={{ top: ["-30%", "130%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border border-primary/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-secondary/10 hidden lg:block" />
      
      <div className="container px-6 relative" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Outer glow frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 opacity-30 blur-xl" />
            
            {/* Main card */}
            <div className="relative bg-card/70 border border-primary/30 backdrop-blur-sm overflow-hidden">
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-primary" />
              
              {/* Scan lines overlay */}
              <div className="absolute inset-0 data-stream opacity-20 pointer-events-none" />

              <div className="relative p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left content */}
                  <div>
                    <motion.div 
                      className="inline-flex items-center gap-3 px-5 py-2 bg-card/60 border border-primary/30 backdrop-blur-sm mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 }}
                    >
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-primary font-mono text-sm uppercase tracking-[0.2em]">Register Now</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
                      SECURE YOUR <span className="text-gradient">ACCESS</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 tracking-wide">
                      <span className="text-primary font-mono">&gt;</span> Early bird registration ends January 20, 2026. Limited slots available for workshops.
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-3 mb-8">
                      {benefits.map((benefit, index) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-6 h-6 border border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Right - Pricing Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    {/* Holographic pricing card */}
                    <div className="relative">
                      <div className="absolute -inset-px bg-gradient-to-b from-primary/40 via-secondary/30 to-primary/40" />
                      <div className="relative p-8 bg-muted/40 border border-primary/30 backdrop-blur-sm">
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-primary" />
                        <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-primary" />
                        <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-primary" />
                        <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-primary" />
                        
                        {/* Scan line */}
                        <motion.div
                          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                          animate={{ top: ["0%", "100%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        
                        <div className="text-center mb-8">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <Star className="w-4 h-4 text-secondary" />
                            <p className="text-secondary font-mono text-sm uppercase tracking-[0.2em]">Early Bird Price</p>
                            <Star className="w-4 h-4 text-secondary" />
                          </div>
                          <div className="flex items-baseline justify-center gap-3">
                            <span className="text-5xl md:text-6xl font-bold text-gradient">₹499</span>
                            <span className="text-muted-foreground line-through text-xl">₹799</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-3 font-mono uppercase tracking-wider">per participant</p>
                        </div>

                        <Link to="/register">
                          <Button variant="hero" size="xl" className="w-full mb-4 animate-cyber-pulse group">
                            <Zap className="w-5 h-5 mr-2 group-hover:text-secondary transition-colors" />
                            INITIATE REGISTRATION
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>

                        <p className="text-center text-xs text-muted-foreground font-mono uppercase tracking-wider">
                          Group discounts available for 10+ participants
                        </p>
                      </div>
                    </div>

                    {/* Floating badge */}
                    <motion.div 
                      className="absolute -top-4 -right-4 px-4 py-2 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-wider"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        37% OFF
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Register;