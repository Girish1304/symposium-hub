import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Users, Trophy, Rocket } from "lucide-react";
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
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      
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
            <div className="w-2 h-2 bg-primary" />
            <span className="text-primary font-mono text-sm uppercase tracking-[0.2em]">About JARVIS</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 tracking-tight">
            THE ULTIMATE <span className="text-gradient">TECH EXPERIENCE</span>
          </h2>
          <p className="text-lg text-muted-foreground tracking-wide leading-relaxed">
            JARVIS is more than a symposium—it's a celebration of technology, creativity, and 
            collaboration. Immerse yourself in a world where <span className="text-primary">ideas</span> transform into <span className="text-secondary">reality</span>.
          </p>
        </motion.div>

        {/* Features grid - increased gap */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <HolographicCard key={feature.title} delay={0.1 * index} variant={feature.variant}>
              <div className="p-6">
                {/* Simplified icon container */}
                <div className="w-14 h-14 mb-5 flex items-center justify-center border border-primary/30 bg-primary/5">
                  <feature.icon className={`w-6 h-6 ${feature.variant === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-wide">
                  {feature.title}
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