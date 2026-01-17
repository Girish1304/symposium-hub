import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Factory, Code, Car, Bot, BarChart3, Users, Clock } from "lucide-react";

// Import workshop images
import iotImg from "@/assets/workshops/iot.png";
import industrialAutomationImg from "@/assets/workshops/industrial-automation.png";
import ros2Img from "@/assets/workshops/ros2.png";
import bajaImg from "@/assets/workshops/baja.png";
import kukaImg from "@/assets/workshops/kuka.png";
import sapImg from "@/assets/workshops/sap.png";

const glassyTextStyle = {
  color: 'hsl(180, 100%, 70%)',
  textShadow: `
    0 0 10px hsl(180, 100%, 50%, 0.8),
    0 0 20px hsl(180, 100%, 50%, 0.5),
    0 0 40px hsl(180, 100%, 50%, 0.3)
  `,
};

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
  },
];

const Workshops = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workshops" className="py-20 md:py-28 relative overflow-hidden">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[hsl(180,100%,50%,0.1)] border border-[hsl(180,100%,50%,0.3)] rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-[hsl(180,100%,50%)] rounded-full animate-pulse shadow-[0_0_10px_hsl(180,100%,50%)]" />
            <span className="text-[hsl(180,100%,70%)] text-sm font-medium tracking-wide">HANDS-ON WORKSHOPS</span>
          </motion.div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 uppercase text-center"
            style={glassyTextStyle}
          >
            Learn & Master
          </h2>
          <p 
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed text-center"
            style={{
              color: 'hsl(180, 50%, 70%)',
              textShadow: '0 0 10px hsl(180, 100%, 50%, 0.3)',
            }}
          >
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
              <div className="relative bg-[hsl(180,100%,50%,0.03)] backdrop-blur-sm rounded-2xl border border-[hsl(180,100%,50%,0.2)] hover:border-[hsl(180,100%,50%,0.5)] transition-all duration-300 overflow-hidden h-full">
                {/* Workshop Image */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={workshop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(200,20%,10%)] via-[hsl(200,20%,10%,0.6)] to-transparent" />
                  
                  {/* Workshop number badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[hsl(180,100%,50%)] text-black text-xs font-bold rounded-full">
                    W{String(workshop.id).padStart(2, '0')}
                  </div>
                  
                  {/* Price badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[hsl(200,20%,10%,0.9)] backdrop-blur-sm border border-[hsl(180,100%,50%,0.3)] text-[hsl(180,100%,70%)] text-sm font-semibold rounded-full">
                    {workshop.price}
                  </div>
                </div>

                {/* Workshop Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[hsl(180,100%,50%,0.1)] border border-[hsl(180,100%,50%,0.3)] flex items-center justify-center">
                      <workshop.icon className="w-4 h-4 text-[hsl(180,100%,70%)]" style={{ filter: 'drop-shadow(0 0 6px hsl(180, 100%, 50%, 0.8))' }} />
                    </div>
                    <h3 
                      className="text-sm font-bold tracking-wide"
                      style={glassyTextStyle}
                    >
                      {workshop.name}
                    </h3>
                  </div>
                  
                  <p 
                    className="text-sm leading-relaxed mb-4"
                    style={{
                      color: 'hsl(180, 40%, 60%)',
                      textShadow: '0 0 5px hsl(180, 100%, 50%, 0.2)',
                    }}
                  >
                    {workshop.description}
                  </p>
                  
                  {/* Workshop meta info */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 bg-[hsl(180,100%,50%,0.1)] border border-[hsl(180,100%,50%,0.2)] rounded-full">
                      <Clock className="w-3 h-3 text-[hsl(180,100%,60%)]" />
                      <span className="text-[hsl(180,80%,70%)]">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 bg-[hsl(180,100%,50%,0.1)] border border-[hsl(180,100%,50%,0.2)] rounded-full">
                      <Users className="w-3 h-3 text-[hsl(180,100%,60%)]" />
                      <span className="text-[hsl(180,80%,70%)]">{workshop.capacity}</span>
                    </div>
                  </div>
                  
                  {/* Register Button */}
                  <a
                    href="/register"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[hsl(180,100%,50%,0.15)] hover:bg-[hsl(180,100%,50%,0.25)] border border-[hsl(180,100%,50%,0.4)] hover:border-[hsl(180,100%,50%,0.7)] text-[hsl(180,100%,70%)] hover:text-[hsl(180,100%,85%)] rounded-xl font-semibold text-sm transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(180,100%,50%,0.3)]"
                  >
                    Register Now
                  </a>
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
