import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, MapPin, ChevronRight } from "lucide-react";

const scheduleData = {
  "DAY_01": [
    { time: "09:00", title: "Opening Ceremony", venue: "Main Auditorium", type: "ceremony" },
    { time: "10:30", title: "Keynote: Future of AI", venue: "Hall A", type: "talk" },
    { time: "14:00", title: "Hackathon Kickoff", venue: "Innovation Lab", type: "event" },
    { time: "16:00", title: "Workshop: Web3 Basics", venue: "Room 201", type: "workshop" },
  ],
  "DAY_02": [
    { time: "09:00", title: "Robotics Challenge", venue: "Tech Arena", type: "event" },
    { time: "11:00", title: "Panel: Startup Journey", venue: "Hall B", type: "talk" },
    { time: "14:00", title: "Code Wars Finals", venue: "Computer Lab", type: "event" },
    { time: "17:00", title: "Networking Mixer", venue: "Garden Area", type: "social" },
  ],
  "DAY_03": [
    { time: "09:00", title: "Project Expo", venue: "Exhibition Hall", type: "event" },
    { time: "12:00", title: "Hackathon Submissions", venue: "Innovation Lab", type: "event" },
    { time: "15:00", title: "Prize Distribution", venue: "Main Auditorium", type: "ceremony" },
    { time: "17:00", title: "Closing Ceremony", venue: "Main Auditorium", type: "ceremony" },
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
  const [activeDay, setActiveDay] = useState("DAY_01");

  const days = Object.keys(scheduleData);

  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
      
      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/40 border border-primary/30 mb-6">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Event Protocol</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            THREE DAYS OF <span className="text-gradient">INNOVATION</span>
          </h2>
          <p className="text-lg text-muted-foreground tracking-wide">
            From workshops to competitions, every moment is designed to inspire and challenge you.
          </p>
        </motion.div>

        {/* Day Tabs - Holographic Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12"
        >
          {days.map((day, index) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`relative px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 ${
                activeDay === day
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground bg-card/30 border border-border/50"
              }`}
            >
              {activeDay === day && (
                <motion.div
                  layoutId="activeDay"
                  className="absolute inset-0 bg-primary animate-cyber-pulse"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">DAY {String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </motion.div>

        {/* Schedule Items */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group relative"
            >
              {/* Holographic border on hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm" />
              
              <div className="relative p-6 bg-card/50 border border-border/50 backdrop-blur-sm">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-primary" />
                <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-primary" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-primary" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-primary" />
                
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Time */}
                  <div className="flex items-center gap-3 md:w-32">
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
                  
                  {/* Arrow */}
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
