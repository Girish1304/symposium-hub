import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container px-6 relative" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Card background */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-card/95 to-card border border-border/50 rounded-3xl" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Register Now</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                    Secure Your <span className="text-gradient">Spot</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
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
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
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
                  <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 backdrop-blur-sm">
                    <div className="text-center mb-8">
                      <p className="text-muted-foreground mb-2">Early Bird Price</p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-bold text-gradient">₹499</span>
                        <span className="text-muted-foreground line-through ml-2">₹799</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">per participant</p>
                    </div>

                    <Button variant="hero" size="xl" className="w-full mb-4">
                      Register Now
                      <ArrowRight className="w-5 h-5" />
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      Group discounts available for 10+ participants
                    </p>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold glow-primary">
                    37% OFF
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Register;
