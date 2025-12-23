import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter } from "lucide-react";

const speakers = [
  {
    name: "Dr. Priya Sharma",
    role: "AI Research Lead",
    company: "Google DeepMind",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Arjun Mehta",
    role: "CTO & Co-Founder",
    company: "TechNova Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Kavitha Nair",
    role: "Robotics Professor",
    company: "IIT Madras",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Rahul Verma",
    role: "Blockchain Architect",
    company: "Polygon",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

const Speakers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speakers" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      
      {/* Animated scan lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-32 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent"
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/40 border border-primary/30 mb-6">
            <div className="w-2 h-2 bg-accent animate-pulse" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Featured Units</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            LEARN FROM THE <span className="text-gradient">BEST</span>
          </h2>
          <p className="text-lg text-muted-foreground tracking-wide">
            Industry pioneers and thought leaders sharing insights on the future of technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative"
            >
              {/* Holographic frame */}
              <div className="relative mb-4">
                {/* Outer glow */}
                <div className="absolute -inset-1 bg-gradient-to-b from-primary/30 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                {/* Image container */}
                <div className="relative overflow-hidden bg-card border border-border/50">
                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary z-20" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary z-20" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary z-20" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary z-20" />
                  
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  
                  {/* Scan line overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(195 100% 50% / 0.1) 2px, hsl(195 100% 50% / 0.1) 4px)`,
                      }}
                    />
                  </div>
                  
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  {/* Social links */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                    <button className="w-10 h-10 bg-card/80 backdrop-blur-sm flex items-center justify-center border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-card/80 backdrop-blur-sm flex items-center justify-center border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-1 tracking-wide">{speaker.name}</h3>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider">{speaker.role}</p>
              <p className="text-muted-foreground text-sm">{speaker.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
