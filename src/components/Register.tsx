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
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container px-6 relative" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main card - simplified */}
            <div className="relative bg-card/70 border border-primary/30 backdrop-blur-sm overflow-hidden">
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
                      Early bird registration ends January 20, 2026. Limited slots available for workshops.
                    </p>

                    {/* Benefits - simplified */}
                    <ul className="space-y-3 mb-8">
                      {benefits.map((benefit, index) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-5 h-5 border border-primary/50 flex items-center justify-center">
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
                    {/* Pricing card - simplified */}
                    <div className="relative p-8 bg-muted/40 border border-primary/30 backdrop-blur-sm">
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
                        <Button variant="hero" size="xl" className="w-full mb-4 group">
                          <Zap className="w-5 h-5 mr-2" />
                          REGISTER NOW
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>

                      <p className="text-center text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        Group discounts available for 10+ participants
                      </p>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -top-4 -right-4 px-4 py-2 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        37% OFF
                      </span>
                    </div>
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