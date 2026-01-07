import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Factory, Code, Car, Bot, BarChart3, ChevronDown, Users, Clock, Wrench, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

// Import workshop images
import iotImg from "@/assets/workshops/iot.png";
import industrialAutomationImg from "@/assets/workshops/industrial-automation.png";
import ros2Img from "@/assets/workshops/ros2.png";
import bajaImg from "@/assets/workshops/baja.png";
import kukaImg from "@/assets/workshops/kuka.png";
import sapImg from "@/assets/workshops/sap.png";

const workshops = [
  {
    id: 1,
    name: "INTERNET OF THINGS",
    icon: Cpu,
    description: "Learn to build smart connected devices using sensors, microcontrollers, and cloud platforms.",
    image: iotImg,
    duration: "1 - 1.5 hrs",
    capacity: "30 participants",
    price: "₹150",
    topics: [
      "Introduction to IoT architecture",
      "Sensor integration and data collection",
      "ESP32/Arduino programming basics",
      "Cloud connectivity (AWS IoT/ThingSpeak)",
      "Building a complete IoT project",
      "Real-world industrial applications",
    ],
  },
  {
    id: 2,
    name: "INDUSTRIAL AUTOMATION",
    icon: Factory,
    description: "Explore PLC programming, SCADA systems, and modern automation technologies.",
    image: industrialAutomationImg,
    duration: "1 - 1.5 hrs",
    capacity: "25 participants",
    price: "₹150",
    topics: [
      "Introduction to industrial automation",
      "PLC basics and ladder logic programming",
      "Sensors and actuators in automation",
      "SCADA system fundamentals",
      "HMI design principles",
      "Industry 4.0 concepts",
    ],
  },
  {
    id: 3,
    name: "ROS2 WORKSHOP",
    icon: Code,
    description: "Master Robot Operating System 2 for building advanced autonomous robots.",
    image: ros2Img,
    duration: "1 - 1.5 hrs",
    capacity: "20 participants",
    price: "₹150",
    topics: [
      "ROS2 architecture and concepts",
      "Setting up ROS2 environment",
      "Nodes, topics, and services",
      "Robot simulation with Gazebo",
      "Navigation and path planning",
      "Building autonomous robot behaviors",
    ],
  },
  {
    id: 4,
    name: "VEHICLE BUILDING - BAJA",
    icon: Car,
    description: "Design and build all-terrain vehicles. Learn vehicle dynamics and fabrication.",
    image: bajaImg,
    duration: "1 - 1.5 hrs",
    capacity: "35 participants",
    price: "₹150",
    topics: [
      "Introduction to BAJA SAE competition",
      "Vehicle design fundamentals",
      "Chassis and suspension design",
      "Powertrain selection and setup",
      "Fabrication techniques",
      "Testing and validation methods",
    ],
  },
  {
    id: 5,
    name: "KUKA ROBOTICS",
    icon: Bot,
    description: "Hands-on experience with KUKA industrial robots and programming.",
    image: kukaImg,
    duration: "1 - 1.5 hrs",
    capacity: "20 participants",
    price: "₹150",
    topics: [
      "Introduction to industrial robotics",
      "KUKA robot specifications and capabilities",
      "KRL programming basics",
      "Robot path planning and motion",
      "Pick and place operations",
      "Safety protocols and best practices",
    ],
  },
  {
    id: 6,
    name: "SAP WORKSHOP",
    icon: BarChart3,
    description: "Introduction to SAP ERP systems and business process management.",
    image: sapImg,
    duration: "1 - 1.5 hrs",
    capacity: "40 participants",
    price: "₹150",
    topics: [
      "Introduction to ERP systems",
      "SAP modules overview",
      "SAP S/4HANA fundamentals",
      "Business process integration",
      "Reporting and analytics",
      "Career opportunities in SAP",
    ],
  },
];

const Workshops = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="workshops" className="py-28 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/3 to-background" />
      
      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-5 py-2 bg-card/60 border border-secondary/30 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-secondary" />
            <span className="text-secondary font-mono text-sm uppercase tracking-[0.2em]">Workshops</span>
            <Wrench className="w-4 h-4 text-secondary/60" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 tracking-tight">
            LEARN & <span className="text-gold">MASTER</span>
          </h2>
          <p className="text-lg text-muted-foreground tracking-wide">
            6 intensive hands-on workshops to upgrade your skills with industry experts.
          </p>
        </motion.div>

        {/* Workshops Grid - increased gap */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="group relative"
            >
              <div className="relative bg-card/50 border border-secondary/20 backdrop-blur-sm overflow-hidden h-full group-hover:border-secondary/40 transition-all duration-300">
                {/* Workshop Image - simplified */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={workshop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  {/* Workshop number badge */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-bold font-mono tracking-wider">
                    W{String(workshop.id).padStart(2, '0')}
                  </div>
                </div>

                {/* Workshop Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 border border-secondary/40 flex items-center justify-center bg-secondary/5 group-hover:bg-secondary/10 transition-colors">
                      <workshop.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold tracking-wide group-hover:text-secondary transition-colors">
                      {workshop.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {workshop.description}
                  </p>
                  
                  {/* Workshop meta info */}
                  <div className="flex flex-wrap gap-2 text-xs mb-4">
                    <div className="flex items-center gap-1.5 text-muted-foreground px-2.5 py-1.5 bg-muted/30 border border-border/50">
                      <Clock className="w-3 h-3 text-secondary" />
                      <span className="font-mono">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground px-2.5 py-1.5 bg-muted/30 border border-border/50">
                      <Users className="w-3 h-3 text-secondary" />
                      <span className="font-mono">{workshop.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-secondary font-semibold px-2.5 py-1.5 bg-secondary/10 border border-secondary/30">
                      <IndianRupee className="w-3 h-3" />
                      <span className="font-mono">{workshop.price}</span>
                    </div>
                  </div>

                  {/* Topics Toggle */}
                  <button
                    onClick={() => toggleExpand(workshop.id)}
                    className="flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors mb-4"
                  >
                    <span className="font-mono uppercase tracking-wider text-xs">
                      {expandedId === workshop.id ? "Hide Topics" : "View Topics"}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedId === workshop.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  {/* Expandable Topics Section */}
                  <AnimatePresence>
                    {expandedId === workshop.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 border-b border-secondary/20 mb-4">
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2 font-mono">
                            Topics Covered
                          </h4>
                          <ul className="space-y-1.5">
                            {workshop.topics.map((topic, topicIndex) => (
                              <motion.li
                                key={topicIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: topicIndex * 0.05 }}
                                className="flex items-start gap-2 text-xs text-muted-foreground"
                              >
                                <div className="w-1 h-1 bg-secondary mt-1.5 flex-shrink-0" />
                                <span>{topic}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Registration Button */}
                  <Link to="/register">
                    <Button variant="glass" size="default" className="w-full border-secondary/30 hover:border-secondary hover:bg-secondary/10 group/btn">
                      REGISTER FOR WORKSHOP
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;