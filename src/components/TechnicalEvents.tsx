import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Car, Route, FileText, Presentation, Brain, Swords, Link2, Grid3X3, ChevronDown, Users, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

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
    duration: "1 - 1.5 hrs",
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
    duration: "1 - 1.5 hrs",
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
    duration: "1 - 1.5 hrs",
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
    duration: "1 - 1.5 hrs",
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
    duration: "1 - 1.5 hrs",
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
    duration: "1 - 1.5 hrs",
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
    duration: "1 - 1.5 hrs",
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
    duration: "1 - 1.5 hrs",
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
    duration: "1 - 1.5 hrs",
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
    <section id="events" className="py-32 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/2 to-background" />
      
      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-5 py-2 bg-card/60 border border-primary/30 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-primary" />
            <span className="text-primary font-mono text-sm uppercase tracking-[0.2em]">Technical Events</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 tracking-tight">
            COMPETE & <span className="text-gradient">CONQUER</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            9 challenging technical events to test your skills, creativity, and innovation.
          </p>
        </motion.div>

        {/* Events Grid - increased spacing */}
        <div className="grid gap-10 max-w-4xl mx-auto">
          {technicalEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group"
            >
              <div className="relative bg-card/40 border border-primary/15 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  {/* Event Image - cleaner */}
                  <div className="relative w-full md:w-52 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    {/* Event number badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-bold font-mono">
                      #{String(event.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Event Content - simplified */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <event.icon className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-bold tracking-wide group-hover:text-primary transition-colors">
                              {event.name}
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                            {event.description}
                          </p>
                          
                          {/* Simplified meta info */}
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5 text-primary/70" />
                              {event.teamSize}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-primary/70" />
                              {event.duration}
                            </span>
                            <span className="flex items-center gap-1.5 text-secondary font-semibold">
                              <Award className="w-3.5 h-3.5" />
                              {event.prize}
                            </span>
                          </div>
                        </div>

                        {/* Registration Button */}
                        <div className="flex-shrink-0">
                          <Link to="/register">
                            <Button variant="hero" size="sm" className="w-full md:w-auto">
                              REGISTER
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Button>
                          </Link>
                        </div>
                      </div>

                      {/* Rules Toggle */}
                      <button
                        onClick={() => toggleExpand(event.id)}
                        className="flex items-center gap-2 text-xs text-primary/70 hover:text-primary transition-colors self-start"
                      >
                        <span className="font-mono uppercase tracking-wider">
                          {expandedId === event.id ? "Hide Rules" : "View Rules"}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedId === event.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
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
                            <div className="pt-4 border-t border-primary/10">
                              <ul className="grid gap-2 text-sm text-muted-foreground">
                                {event.rules.map((rule, ruleIndex) => (
                                  <motion.li
                                    key={ruleIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: ruleIndex * 0.03 }}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-primary/50 mt-0.5">•</span>
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