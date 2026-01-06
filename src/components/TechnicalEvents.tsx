import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Car, Route, FileText, Presentation, Brain, Swords, Link2, Grid3X3 } from "lucide-react";

const technicalEvents = [
  {
    id: 1,
    name: "ROBO WAR",
    icon: Swords,
    description: "Battle your robots in an intense combat arena. Design and build combat-ready bots to dominate the battlefield.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "RC ADVENTURE",
    icon: Car,
    description: "Navigate your RC vehicle through challenging terrains and obstacles in this thrilling adventure race.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "LINE FOLLOWING ROBOT",
    icon: Route,
    description: "Program your robot to autonomously follow a complex path. Precision and speed determine the winner.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "PAPER PRESENTATION",
    icon: FileText,
    description: "Present your innovative research papers on cutting-edge technology topics to a panel of expert judges.",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "PROJECT PRESENTATION",
    icon: Presentation,
    description: "Showcase your technical projects and prototypes. Demonstrate innovation and practical application.",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "TECH QUIZ",
    icon: Brain,
    description: "Test your technical knowledge across various domains in this fast-paced quiz competition.",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "ROBO TUG OF WAR",
    icon: Bot,
    description: "Build the strongest robot to pull your opponent across the line in this ultimate test of power.",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "TECH CONNEXIONS",
    icon: Link2,
    description: "Connect the dots between technical concepts in this unique puzzle-solving challenge.",
    image: "/placeholder.svg",
  },
  {
    id: 9,
    name: "MAZE SIMULATION",
    icon: Grid3X3,
    description: "Program your bot to solve complex mazes in the shortest time using advanced algorithms.",
    image: "/placeholder.svg",
  },
];

const TechnicalEvents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/40 border border-primary/30 mb-6">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Technical Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            COMPETE & <span className="text-gradient">CONQUER</span>
          </h2>
          <p className="text-lg text-muted-foreground tracking-wide">
            9 challenging technical events to test your skills, creativity, and innovation.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {technicalEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              {/* Holographic border on hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm" />
              
              <div className="relative bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary" />

                <div className="flex flex-col md:flex-row">
                  {/* Event Image */}
                  <div className="relative w-full md:w-48 h-48 md:h-auto bg-muted/30 flex-shrink-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <event.icon className="w-16 h-16 text-primary/50" />
                    </div>
                    {/* Scan line effect */}
                    <motion.div
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Event number badge */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-bold">
                      #{String(event.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 border border-primary/50 flex items-center justify-center">
                            <event.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold tracking-wide group-hover:text-primary transition-colors">
                            {event.name}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Registration Button */}
                      <div className="flex-shrink-0">
                        <Button variant="hero" size="default" className="w-full md:w-auto">
                          REGISTER
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalEvents;
