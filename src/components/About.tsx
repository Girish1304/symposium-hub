import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Users, Trophy, Rocket } from "lucide-react";
import triangularArcReactor from "@/assets/triangular-arc-reactor.jpg";

const glassyTextStyle = {
  color: 'hsl(180, 100%, 70%)',
  textShadow: `
    0 0 10px hsl(180, 100%, 50%, 0.8),
    0 0 20px hsl(180, 100%, 50%, 0.5),
    0 0 40px hsl(180, 100%, 50%, 0.3)
  `,
};

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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(180,100%,50%,0.03)] to-background" />
      
      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Section label */}
          <motion.div 
            className="inline-flex items-center gap-3 px-5 py-2 bg-[hsl(180,100%,50%,0.1)] border border-[hsl(180,100%,50%,0.3)] backdrop-blur-sm mb-6 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-[hsl(180,100%,50%)] rounded-full animate-pulse shadow-[0_0_10px_hsl(180,100%,50%)]" />
            <span className="text-[hsl(180,100%,70%)] font-mono text-sm uppercase tracking-[0.2em]">About JARVIS</span>
          </motion.div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 tracking-tight uppercase text-center"
            style={glassyTextStyle}
          >
            THE ULTIMATE TECH EXPERIENCE
          </h2>
          <p 
            className="text-lg tracking-wide leading-relaxed text-center"
            style={{
              color: 'hsl(180, 50%, 70%)',
              textShadow: '0 0 10px hsl(180, 100%, 50%, 0.3)',
            }}
          >
            JARVIS is more than a symposium—it's a celebration of technology, creativity, and 
            collaboration. Immerse yourself in a world where ideas transform into reality.
          </p>
        </motion.div>

        {/* Triangular Arc Reactor Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[hsl(180,100%,50%,0.3)] blur-3xl rounded-full scale-75" />
            <img 
              src={triangularArcReactor} 
              alt="Arc Reactor" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 drop-shadow-[0_0_30px_hsl(180,100%,50%,0.5)]"
            />
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="p-6 bg-[hsl(180,100%,50%,0.05)] backdrop-blur-sm border border-[hsl(180,100%,50%,0.2)] rounded-xl hover:border-[hsl(180,100%,50%,0.5)] transition-all duration-300 h-full">
                {/* Icon container */}
                <div className="w-14 h-14 mb-5 flex items-center justify-center border border-[hsl(180,100%,50%,0.3)] bg-[hsl(180,100%,50%,0.1)] rounded-lg">
                  <feature.icon className="w-6 h-6 text-[hsl(180,100%,70%)]" style={{ filter: 'drop-shadow(0 0 8px hsl(180, 100%, 50%, 0.8))' }} />
                </div>
                
                <h3 
                  className="text-xl font-bold mb-3 tracking-wide text-center"
                  style={glassyTextStyle}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed text-center"
                  style={{
                    color: 'hsl(180, 40%, 60%)',
                    textShadow: '0 0 5px hsl(180, 100%, 50%, 0.2)',
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
