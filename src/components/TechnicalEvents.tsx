import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Car, Route, FileText, Presentation, Brain, Swords, Link2, Grid3X3, ChevronDown, Users, Clock, Award } from "lucide-react";

// Import event images
import roboWarImg from "@/assets/events/robo-war.png";
import rcAdventureImg from "@/assets/events/rc-adventure.png";
import lineFollowingImg from "@/assets/events/line-following.png";
import paperPresentationImg from "@/assets/events/paper-presentation.png";
import projectPresentationImg from "@/assets/events/project-presentation.png";
import techQuizImg from "@/assets/events/tech-quiz.png";
import roboTugImg from "@/assets/events/robo-tug.png";
import techConnexionsImg from "@/assets/events/tech-connexions.png";
import mazeSimulationImg from "@/assets/events/maze-simulation.png";

const technicalEvents = [
  {
    id: 1,
    name: "ROBO WAR",
    icon: Swords,
    description: "Battle your robots in an intense combat arena. Design and build combat-ready bots to dominate the battlefield.",
    image: roboWarImg,
    teamSize: "2-4 members",
    duration: "10 mins per match",
    prize: "₹15,000",
    rules: [
      "Robot weight must not exceed 8 kg",
      "Maximum dimensions: 50cm x 50cm x 50cm",
      "No flame-based or chemical weapons allowed",
      "Wireless control only (2.4 GHz recommended)",
      "Each match lasts 3 minutes or until knockout",
      "Judges' decision is final in all disputes",
    ],
  },
  {
    id: 2,
    name: "RC ADVENTURE",
    icon: Car,
    description: "Navigate your RC vehicle through challenging terrains and obstacles in this thrilling adventure race.",
    image: rcAdventureImg,
    teamSize: "1-2 members",
    duration: "15 mins",
    prize: "₹10,000",
    rules: [
      "Only ground-based RC vehicles allowed",
      "Vehicle must be remote controlled (no autonomous)",
      "Maximum vehicle size: 30cm x 20cm x 15cm",
      "Touching the vehicle during run results in penalty",
      "Track must be completed within time limit",
      "Fastest completion time wins",
    ],
  },
  {
    id: 3,
    name: "LINE FOLLOWING ROBOT",
    icon: Route,
    description: "Program your robot to autonomously follow a complex path. Precision and speed determine the winner.",
    image: lineFollowingImg,
    teamSize: "2-3 members",
    duration: "5 mins per run",
    prize: "₹12,000",
    rules: [
      "Robot must be fully autonomous",
      "Maximum robot size: 25cm x 25cm x 20cm",
      "Line width: 2.5cm black on white surface",
      "Robot must complete track without manual intervention",
      "Fastest time with least errors wins",
      "Multiple attempts allowed within time slot",
    ],
  },
  {
    id: 4,
    name: "PAPER PRESENTATION",
    icon: FileText,
    description: "Present your innovative research papers on cutting-edge technology topics to a panel of expert judges.",
    image: paperPresentationImg,
    teamSize: "1-2 members",
    duration: "10+3 mins (presentation + Q&A)",
    prize: "₹8,000",
    rules: [
      "Paper must be original and unpublished",
      "Topics must be technology-related",
      "Abstract submission required before event",
      "Presentation time: 10 minutes max",
      "Q&A session: 3 minutes",
      "Plagiarism will result in disqualification",
    ],
  },
  {
    id: 5,
    name: "PROJECT PRESENTATION",
    icon: Presentation,
    description: "Showcase your technical projects and prototypes. Demonstrate innovation and practical application.",
    image: projectPresentationImg,
    teamSize: "2-4 members",
    duration: "15+5 mins",
    prize: "₹15,000",
    rules: [
      "Working prototype must be demonstrated",
      "Project documentation required",
      "Innovation and practicality will be judged",
      "Presentation time: 15 minutes",
      "Demo and Q&A: 5 minutes",
      "All team members must participate",
    ],
  },
  {
    id: 6,
    name: "TECH QUIZ",
    icon: Brain,
    description: "Test your technical knowledge across various domains in this fast-paced quiz competition.",
    image: techQuizImg,
    teamSize: "2 members",
    duration: "Multiple rounds",
    prize: "₹6,000",
    rules: [
      "Prelims: Written round (30 questions, 20 mins)",
      "Finals: Buzzer round for top 6 teams",
      "Topics: CS, Electronics, Physics, General Tech",
      "No electronic devices allowed",
      "Negative marking in prelims",
      "Tie-breaker questions in case of draw",
    ],
  },
  {
    id: 7,
    name: "ROBO TUG OF WAR",
    icon: Bot,
    description: "Build the strongest robot to pull your opponent across the line in this ultimate test of power.",
    image: roboTugImg,
    teamSize: "2-3 members",
    duration: "5 mins per match",
    prize: "₹10,000",
    rules: [
      "Robot weight limit: 5 kg",
      "Must use provided rope attachment point",
      "No adhesive materials on wheels",
      "Match duration: 2 minutes or until win",
      "Best of 3 rounds in finals",
      "Robot must not damage arena or opponent",
    ],
  },
  {
    id: 8,
    name: "TECH CONNEXIONS",
    icon: Link2,
    description: "Connect the dots between technical concepts in this unique puzzle-solving challenge.",
    image: techConnexionsImg,
    teamSize: "2 members",
    duration: "45 mins",
    prize: "₹5,000",
    rules: [
      "Written puzzle-based competition",
      "Connect related technical concepts",
      "Multiple rounds with increasing difficulty",
      "No external resources allowed",
      "Time bonus for early completion",
      "Highest score wins",
    ],
  },
  {
    id: 9,
    name: "MAZE SIMULATION",
    icon: Grid3X3,
    description: "Program your bot to solve complex mazes in the shortest time using advanced algorithms.",
    image: mazeSimulationImg,
    teamSize: "1-2 members",
    duration: "10 mins per attempt",
    prize: "₹8,000",
    rules: [
      "Can use simulation software or physical robot",
      "Maze dimensions will be revealed on spot",
      "Algorithm efficiency will be evaluated",
      "Time and path optimization both count",
      "Multiple attempts allowed",
      "Cleanest solution with fastest time wins",
    ],
  },
];

const TechnicalEvents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary z-10" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary z-10" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary z-10" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary z-10" />

                <div className="flex flex-col md:flex-row">
                  {/* Event Image */}
                  <div className="relative w-full md:w-56 h-56 md:h-auto flex-shrink-0 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    {/* Scan line effect */}
                    <motion.div
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
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
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 border border-primary/50 flex items-center justify-center">
                              <event.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold tracking-wide group-hover:text-primary transition-colors">
                              {event.name}
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                            {event.description}
                          </p>
                          
                          {/* Event meta info */}
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="w-4 h-4 text-primary" />
                              <span>{event.teamSize}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="w-4 h-4 text-primary" />
                              <span>{event.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Award className="w-4 h-4 text-accent" />
                              <span className="text-accent font-semibold">{event.prize}</span>
                            </div>
                          </div>
                        </div>

                        {/* Registration Button */}
                        <div className="flex-shrink-0">
                          <Button variant="hero" size="default" className="w-full md:w-auto">
                            REGISTER
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Rules Toggle */}
                      <button
                        onClick={() => toggleExpand(event.id)}
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors self-start"
                      >
                        <span className="font-semibold uppercase tracking-wider">
                          {expandedId === event.id ? "Hide Rules" : "View Rules & Guidelines"}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedId === event.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      {/* Expandable Rules Section */}
                      <AnimatePresence>
                        {expandedId === event.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-border/50">
                              <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                                Rules & Guidelines
                              </h4>
                              <ul className="space-y-2">
                                {event.rules.map((rule, ruleIndex) => (
                                  <motion.li
                                    key={ruleIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: ruleIndex * 0.05 }}
                                    className="flex items-start gap-3 text-sm text-muted-foreground"
                                  >
                                    <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                                    <span>{rule}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
