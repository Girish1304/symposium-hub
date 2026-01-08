import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Car, Route, FileText, Presentation, Brain, Swords, Link2, Grid3X3, ChevronDown, Users, Award, IndianRupee } from "lucide-react";
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

const glassyTextStyle = {
  color: 'hsl(180, 100%, 70%)',
  textShadow: `
    0 0 10px hsl(180, 100%, 50%, 0.8),
    0 0 20px hsl(180, 100%, 50%, 0.5),
    0 0 40px hsl(180, 100%, 50%, 0.3)
  `,
};

const technicalEvents = [
  {
    id: 1,
    name: "Robo War",
    icon: Swords,
    description: "Battle your robots in an intense combat arena. Design and build combat-ready bots to dominate the battlefield.",
    image: roboWarImg,
    teamSize: "2-4 members",
    duration: "1 - 1.5 hrs",
    regFee: "₹500",
    prizes: { first: "₹10,000", second: "₹7,000", third: "₹3,000" },
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
    name: "RC Adventure",
    icon: Car,
    description: "Navigate your RC vehicle through challenging terrains and obstacles in this thrilling adventure race.",
    image: rcAdventureImg,
    teamSize: "1-2 members",
    duration: "1 - 1.5 hrs",
    regFee: "₹400",
    prizes: { first: "₹4,000", second: "₹2,000", third: "₹1,000" },
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
    name: "Line Following Robot",
    icon: Route,
    description: "Program your robot to autonomously follow a complex path. Precision and speed determine the winner.",
    image: lineFollowingImg,
    teamSize: "2-3 members",
    duration: "1 - 1.5 hrs",
    regFee: "₹250",
    prizes: { first: "₹3,000", second: "₹1,500", third: "₹800" },
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
    name: "Paper Presentation",
    icon: FileText,
    description: "Present your innovative research papers on cutting-edge technology topics to a panel of expert judges.",
    image: paperPresentationImg,
    teamSize: "1-2 members",
    duration: "1 - 1.5 hrs",
    regFee: "₹100",
    prizes: { first: "₹2,000", second: "₹1,000", third: "₹800" },
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
    name: "Project Presentation",
    icon: Presentation,
    description: "Showcase your technical projects and prototypes. Demonstrate innovation and practical application.",
    image: projectPresentationImg,
    teamSize: "2-4 members",
    duration: "1 - 1.5 hrs",
    regFee: "₹100",
    prizes: { first: "₹2,000", second: "₹1,000", third: "₹800" },
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
    name: "Tech Quiz",
    icon: Brain,
    description: "Test your technical knowledge across various domains in this fast-paced quiz competition.",
    image: techQuizImg,
    teamSize: "2 members",
    duration: "1 - 1.5 hrs",
    regFee: "Free",
    prizes: { first: "₹600", second: "₹400", third: "₹200" },
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
    name: "Robo Tug of War",
    icon: Bot,
    description: "Build the strongest robot to pull your opponent across the line in this ultimate test of power.",
    image: roboTugImg,
    teamSize: "2-3 members",
    duration: "1 - 1.5 hrs",
    regFee: "₹400",
    prizes: { first: "₹4,000", second: "₹2,000", third: "₹1,000" },
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
    name: "Tech Connexions",
    icon: Link2,
    description: "Connect the dots between technical concepts in this unique puzzle-solving challenge.",
    image: techConnexionsImg,
    teamSize: "2 members",
    duration: "1 - 1.5 hrs",
    regFee: "Free",
    prizes: { first: "₹600", second: "₹400", third: "₹200" },
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
    name: "Maze Simulation",
    icon: Grid3X3,
    description: "Program your bot to solve complex mazes in the shortest time using advanced algorithms.",
    image: mazeSimulationImg,
    teamSize: "1-2 members",
    duration: "1 - 1.5 hrs",
    regFee: "₹250",
    prizes: { first: "₹1,300", second: "₹700", third: "₹500" },
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
    <section id="events" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container px-6 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(180,100%,50%,0.1)] border border-[hsl(180,100%,50%,0.3)] rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <span className="w-2 h-2 bg-[hsl(180,100%,50%)] rounded-full animate-pulse shadow-[0_0_10px_hsl(180,100%,50%)]" />
            <span className="text-sm font-medium text-[hsl(180,100%,70%)] uppercase tracking-wide">Technical Events</span>
          </motion.div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4 uppercase"
            style={glassyTextStyle}
          >
            Compete & Conquer
          </h2>
          <p 
            className="text-lg leading-relaxed"
            style={{
              color: 'hsl(180, 50%, 70%)',
              textShadow: '0 0 10px hsl(180, 100%, 50%, 0.3)',
            }}
          >
            9 challenging events designed to test your skills, creativity, and innovation.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid gap-4 max-w-5xl mx-auto">
          {technicalEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group"
            >
              <div className="relative bg-[hsl(180,100%,50%,0.03)] backdrop-blur-sm border border-[hsl(180,100%,50%,0.2)] rounded-xl overflow-hidden hover:border-[hsl(180,100%,50%,0.5)] transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  {/* Event Image */}
                  <div className="relative w-full md:w-48 h-40 md:h-auto flex-shrink-0 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(200,20%,10%)] hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(200,20%,10%)] to-transparent md:hidden" />
                    {/* Event number badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[hsl(180,100%,50%)] text-black rounded text-xs font-bold font-mono">
                      #{String(event.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="flex-1 p-5 md:p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-9 h-9 rounded-lg bg-[hsl(180,100%,50%,0.1)] border border-[hsl(180,100%,50%,0.3)] flex items-center justify-center">
                              <event.icon className="w-4 h-4 text-[hsl(180,100%,70%)]" style={{ filter: 'drop-shadow(0 0 6px hsl(180, 100%, 50%, 0.8))' }} />
                            </div>
                            <h3 
                              className="text-lg font-display font-bold tracking-tight uppercase"
                              style={glassyTextStyle}
                            >
                              {event.name}
                            </h3>
                          </div>
                          <p 
                            className="text-sm leading-relaxed mb-4 line-clamp-2"
                            style={{
                              color: 'hsl(180, 40%, 60%)',
                              textShadow: '0 0 5px hsl(180, 100%, 50%, 0.2)',
                            }}
                          >
                            {event.description}
                          </p>
                          
                          {/* Meta info */}
                          <div className="flex flex-wrap gap-2">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[hsl(180,100%,50%,0.1)] border border-[hsl(180,100%,50%,0.2)] rounded text-xs">
                              <Users className="w-3.5 h-3.5 text-[hsl(180,100%,60%)]" />
                              <span className="text-[hsl(180,80%,70%)]">{event.teamSize}</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[hsl(180,100%,50%,0.1)] border border-[hsl(180,100%,50%,0.2)] rounded text-xs">
                              <IndianRupee className="w-3.5 h-3.5 text-[hsl(180,100%,60%)]" />
                              <span className={event.regFee === "Free" ? "text-[hsl(120,100%,60%)] font-semibold" : "text-[hsl(180,80%,70%)]"}>
                                {event.regFee}
                              </span>
                            </div>
                          </div>
                          
                          {/* Prize Pool */}
                          <div className="flex flex-wrap gap-2 mt-3">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[hsl(45,100%,50%,0.1)] border border-[hsl(45,100%,50%,0.3)] rounded text-xs">
                              <Award className="w-3.5 h-3.5 text-[hsl(45,100%,60%)]" />
                              <span className="text-[hsl(45,100%,70%)] font-semibold">1st: {event.prizes.first}</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[hsl(200,20%,50%,0.1)] border border-[hsl(200,20%,50%,0.3)] rounded text-xs">
                              <Award className="w-3.5 h-3.5 text-[hsl(200,20%,70%)]" />
                              <span className="text-[hsl(200,20%,80%)] font-semibold">2nd: {event.prizes.second}</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[hsl(25,60%,40%,0.2)] border border-[hsl(25,60%,50%,0.3)] rounded text-xs">
                              <Award className="w-3.5 h-3.5 text-[hsl(25,60%,60%)]" />
                              <span className="text-[hsl(25,60%,70%)] font-semibold">3rd: {event.prizes.third}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Rules Toggle */}
                      <button
                        onClick={() => toggleExpand(event.id)}
                        className="flex items-center gap-2 text-sm text-[hsl(180,100%,60%)] hover:text-[hsl(180,100%,70%)] transition-colors self-start"
                      >
                        <span className="font-medium">
                          {expandedId === event.id ? "Hide rules" : "View rules"}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedId === event.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
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
                            <div className="pt-4 border-t border-[hsl(180,100%,50%,0.2)]">
                              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                                {event.rules.map((rule, ruleIndex) => (
                                  <motion.li
                                    key={ruleIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: ruleIndex * 0.05 }}
                                    className="flex items-start gap-2"
                                    style={{
                                      color: 'hsl(180, 40%, 60%)',
                                      textShadow: '0 0 5px hsl(180, 100%, 50%, 0.2)',
                                    }}
                                  >
                                    <span className="text-[hsl(180,100%,60%)] mt-1">•</span>
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
