import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, MapPin } from "lucide-react";

const scheduleData = {
  "MORNING": [
    { time: "08:30", title: "Registration & Check-in", venue: "Main Entrance", type: "ceremony" },
    { time: "09:00", title: "Opening Ceremony", venue: "Main Auditorium", type: "ceremony" },
    { time: "09:30", title: "IoT Workshop", venue: "Lab 101", type: "workshop" },
    { time: "09:30", title: "Industrial Automation Workshop", venue: "Lab 102", type: "workshop" },
    { time: "09:30", title: "ROS2 Workshop", venue: "Lab 103", type: "workshop" },
    { time: "10:00", title: "Robo War - Prelims", venue: "Arena A", type: "event" },
    { time: "10:00", title: "Tech Quiz - Round 1", venue: "Seminar Hall", type: "event" },
    { time: "11:00", title: "Line Following Robot", venue: "Arena B", type: "event" },
    { time: "11:00", title: "Paper Presentation", venue: "Conference Room 1", type: "event" },
  ],
  "AFTERNOON": [
    { time: "13:00", title: "BAJA Vehicle Building Workshop", venue: "Workshop Bay", type: "workshop" },
    { time: "13:00", title: "KUKA Robotics Workshop", venue: "Robotics Lab", type: "workshop" },
    { time: "13:00", title: "SAP Workshop", venue: "Computer Lab", type: "workshop" },
    { time: "13:30", title: "RC Adventure", venue: "Outdoor Track", type: "event" },
    { time: "14:00", title: "Robo War - Finals", venue: "Arena A", type: "event" },
    { time: "14:00", title: "Project Presentation", venue: "Exhibition Hall", type: "event" },
    { time: "14:30", title: "Tech Connexions", venue: "Seminar Hall", type: "event" },
    { time: "15:00", title: "Robo Tug of War", venue: "Arena B", type: "event" },
    { time: "15:30", title: "Maze Simulation", venue: "Simulation Lab", type: "event" },
    { time: "16:30", title: "Prize Distribution & Closing", venue: "Main Auditorium", type: "ceremony" },
  ],
};

const typeColors: Record<string, string> = {
  ceremony: "border-accent text-accent",
  talk: "border-secondary text-secondary",
  event: "border-primary text-primary",
  workshop: "border-green-400 text-green-400",
  social: "border-yellow-400 text-yellow-400",
};

const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSession, setActiveSession] = useState("MORNING");

  const sessions = Object.keys(scheduleData);

  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      
      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/40 border border-primary/30 mb-6">
            <div className="w-2 h-2 bg-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Event Schedule</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            ONE DAY OF <span className="text-gradient">INNOVATION</span>
          </h2>
          <p className="text-lg text-muted-foreground tracking-wide">
            From morning workshops to evening celebrations, every moment is designed to inspire.
          </p>
        </motion.div>

        {/* Session Tabs - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12"
        >
          {sessions.map((session) => (
            <button
              key={session}
              onClick={() => setActiveSession(session)}
              className={`relative px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 ${
                activeSession === session
                  ? "text-primary-foreground bg-primary"
                  : "text-muted-foreground hover:text-foreground bg-card/30 border border-border/50"
              }`}
            >
              {session}
            </button>
          ))}
        </motion.div>

        {/* Schedule Items - increased spacing */}
        <motion.div
          key={activeSession}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {scheduleData[activeSession as keyof typeof scheduleData].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group relative"
            >
              <div className="relative p-5 bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Time */}
                  <div className="flex items-center gap-3 md:w-28">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-mono font-bold text-lg">{item.time}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 tracking-wide group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{item.venue}</span>
                    </div>
                  </div>

                  {/* Type badge */}
                  <div className={`px-3 py-1 border text-xs font-bold uppercase tracking-wider ${typeColors[item.type]}`}>
                    {item.type}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;