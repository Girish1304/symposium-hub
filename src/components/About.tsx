import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Users, Trophy, Rocket, Target, Sparkles } from "lucide-react";
import HolographicCard from "./HolographicCard";

const features = [
  {
    icon: Cpu,
    title: "Innovation Hub",
    description: "Witness cutting-edge projects and breakthrough ideas from the brightest minds.",
    variant: "primary" as const,
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with industry leaders, mentors, and fellow innovators.",
    variant: "secondary" as const,
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Showcase your skills in hackathons, coding battles, and design challenges.",
    variant: "primary" as const,
  },
  {
    icon: Rocket,
    title: "Workshops",
    description: "Hands-on sessions on AI, robotics, blockchain, and emerging technologies.",
    variant: "secondary" as const,
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      <div className="absolute inset-0 bg-hex-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Decorative HUD elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <motion.div 
          className="w-32 h-32 border border-primary/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/2 left-0 w-2 h-2 bg-primary -translate-y-1/2" />
        </motion.div>
      </div>
      <div className="absolute bottom-20 right-10 hidden lg:block">
        <motion.div 
          className="w-24 h-24 border border-secondary/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 right-0 w-2 h-2 bg-secondary" />
        </motion.div>
      </div>
      
      {/* Horizontal accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>
      
      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Section label */}
          <motion.div 
            className="inline-flex items-center gap-3 px-5 py-2 bg-card/60 border border-primary/30 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="w-2 h-2 bg-primary"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-primary font-mono text-sm uppercase tracking-[0.2em]">About JARVIS</span>
            <Target className="w-4 h-4 text-primary/60" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 tracking-tight">
            THE ULTIMATE <span className="text-gradient">TECH EXPERIENCE</span>
          </h2>
          <p className="text-lg text-muted-foreground tracking-wide leading-relaxed">
            <span className="text-primary font-mono">&gt;</span> JARVIS is more than a symposium—it's a celebration of technology, creativity, and 
            collaboration. Immerse yourself in a world where <span className="text-primary">ideas</span> transform into <span className="text-secondary">reality</span>.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <HolographicCard key={feature.title} delay={0.1 * index} variant={feature.variant}>
              <div className="p-6">
                {/* Icon container with HUD styling */}
                <div className="w-16 h-16 mb-5 relative">
                  <motion.div 
                    className={`absolute inset-0 border ${feature.variant === 'primary' ? 'border-primary/30' : 'border-secondary/30'}`}
                    animate={{ rotate: [0, 90, 90, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className={`absolute inset-2 ${feature.variant === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center`}>
                    <feature.icon className={`w-7 h-7 ${feature.variant === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  {/* Corner dots */}
                  <div className={`absolute top-0 left-0 w-1.5 h-1.5 ${feature.variant === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                  <div className={`absolute top-0 right-0 w-1.5 h-1.5 ${feature.variant === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                  <div className={`absolute bottom-0 left-0 w-1.5 h-1.5 ${feature.variant === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                  <div className={`absolute bottom-0 right-0 w-1.5 h-1.5 ${feature.variant === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-wide flex items-center gap-2">
                  {feature.title}
                  <Sparkles className={`w-4 h-4 ${feature.variant === 'primary' ? 'text-primary/40' : 'text-secondary/40'}`} />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </HolographicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;