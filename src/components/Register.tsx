import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield } from "lucide-react";

const benefits = [
  "Access to all 50+ events",
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
    <section id="register" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
      
      {/* Animated scan effect */}
      <motion.div
        className="absolute left-0 right-0 h-64 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"
        animate={{ top: ["-20%", "120%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container px-6 relative" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Outer glow frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl" />
            
            {/* Main card */}
            <div className="relative bg-card/80 border border-border/50 backdrop-blur-sm overflow-hidden">
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary" />
              
              {/* Scan lines overlay */}
              <div 
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(195 100% 50% / 0.2) 2px, hsl(195 100% 50% / 0.2) 4px)`,
                }}
              />

              <div className="relative p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left content */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/40 border border-primary/30 mb-6">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold text-sm uppercase tracking-widest">Register Now</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
                      SECURE YOUR <span className="text-gradient">SLOT</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 tracking-wide">
                      Early bird registration ends February 28, 2025. Limited seats available for workshops.
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-3 mb-8">
                      {benefits.map((benefit, index) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 border border-primary flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{benefit}</span>
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
                      <div className="absolute -inset-px bg-gradient-to-b from-primary/50 to-accent/50 opacity-50" />
                      <div className="relative p-8 bg-muted/50 border border-border/50 backdrop-blur-sm">
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-primary" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-primary" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary" />
                        
                        <div className="text-center mb-8">
                          <p className="text-muted-foreground mb-2 uppercase tracking-wider text-sm">Early Bird Price</p>
                          <div className="flex items-baseline justify-center gap-2">
                            <span className="text-5xl font-bold text-gradient">₹499</span>
                            <span className="text-muted-foreground line-through">₹799</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">per unit</p>
                        </div>

                        <Button variant="hero" size="xl" className="w-full mb-4 animate-cyber-pulse">
                          INITIATE REGISTRATION
                          <ArrowRight className="w-5 h-5" />
                        </Button>

                        <p className="text-center text-xs text-muted-foreground uppercase tracking-wider">
                          Group discounts available for 10+ units
                        </p>
                      </div>
                    </div>

                    {/* Floating badge */}
                    <motion.div 
                      className="absolute -top-4 -right-4 px-4 py-2 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-wider"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      37% OFF
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
