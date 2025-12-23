import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, Trophy, Rocket, Cpu } from "lucide-react";
import HolographicCard from "./HolographicCard";

const features = [
  {
    icon: Cpu,
    title: "Innovation Hub",
    description: "Witness cutting-edge projects and breakthrough ideas from the brightest minds.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with industry leaders, mentors, and fellow innovators.",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Showcase your skills in hackathons, coding battles, and design challenges.",
  },
  {
    icon: Rocket,
    title: "Workshops",
    description: "Hands-on sessions on AI, robotics, blockchain, and emerging technologies.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
      
      {/* Holographic grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      
      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/40 border border-primary/30 mb-6">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">About NEXUS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            THE ULTIMATE TECH <span className="text-gradient">EXPERIENCE</span>
          </h2>
          <p className="text-lg text-muted-foreground tracking-wide">
            NEXUS is more than a symposium—it's a celebration of technology, creativity, and 
            collaboration. For three days, immerse yourself in a world where ideas transform into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <HolographicCard key={feature.title} delay={0.1 * index}>
              <div className="p-6">
                <div className="w-14 h-14 mb-4 relative">
                  <div className="absolute inset-0 bg-primary/20 animate-cyber-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center border border-primary/50">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-wide">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </HolographicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
