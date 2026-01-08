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
    <section id="workshops" className="py-20 md:py-28 relative overflow-hidden bg-[#0a0a0a]">
      <div className="container px-4 md:px-6 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] rounded-full border border-[#2a2a2a] mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
            <span className="text-[#f59e0b] text-sm font-medium tracking-wide">HANDS-ON WORKSHOPS</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            LEARN &{" "}
            <span className="text-[#f59e0b]">MASTER</span>
          </h2>
          <p className="text-base md:text-lg text-[#888] max-w-xl mx-auto leading-relaxed">
            6 intensive hands-on workshops designed to give you practical skills with industry experts.
          </p>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * index }}
              className="group"
            >
              <div className="relative bg-[#141414] rounded-2xl border border-[#222] hover:border-[#f59e0b]/40 transition-all duration-300 overflow-hidden h-full">
                {/* Workshop Image */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={workshop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
                  
                  {/* Workshop number badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#f59e0b] text-black text-xs font-bold rounded-full">
                    W{String(workshop.id).padStart(2, '0')}
                  </div>
                  
                  {/* Price badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#333] text-[#f59e0b] text-sm font-semibold rounded-full">
                    {workshop.price}
                  </div>
                </div>

                {/* Workshop Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center">
                      <workshop.icon className="w-4 h-4 text-[#f59e0b]" />
                    </div>
                    <h3 className="text-sm font-bold tracking-wide text-white group-hover:text-[#f59e0b] transition-colors duration-300">
                      {workshop.name}
                    </h3>
                  </div>
                  
                  <p className="text-[#777] text-sm leading-relaxed mb-4">
                    {workshop.description}
                  </p>
                  
                  {/* Workshop meta info */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#888] px-2.5 py-1.5 bg-[#1a1a1a] rounded-full">
                      <Clock className="w-3 h-3 text-[#f59e0b]/70" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#888] px-2.5 py-1.5 bg-[#1a1a1a] rounded-full">
                      <Users className="w-3 h-3 text-[#f59e0b]/70" />
                      <span>{workshop.capacity}</span>
                    </div>
                  </div>

                  {/* Topics Toggle */}
                  <button
                    onClick={() => toggleExpand(workshop.id)}
                    className="flex items-center gap-2 text-[#f59e0b] hover:text-[#fbbf24] transition-colors mb-4 w-full"
                  >
                    <span className="text-xs font-medium">
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
                        <div className="pb-4 border-t border-[#222] pt-4 mb-4">
                          <ul className="space-y-2">
                            {workshop.topics.map((topic, topicIndex) => (
                              <motion.li
                                key={topicIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: topicIndex * 0.05 }}
                                className="flex items-start gap-2 text-sm text-[#888]"
                              >
                                <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-1.5 flex-shrink-0" />
                                <span>{topic}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Registration Button */}
                  <Link to="/register" className="block">
                    <button className="w-full py-3 bg-[#f59e0b] hover:bg-[#fbbf24] text-black font-bold text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
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