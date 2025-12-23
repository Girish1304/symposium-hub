import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, Trophy, Rocket } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
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
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About NEXUS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            The Ultimate Tech <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            NEXUS is more than a symposium—it's a celebration of technology, creativity, and 
            collaboration. For three days, immerse yourself in a world where ideas transform into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
