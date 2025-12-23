import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, MapPin } from "lucide-react";

const scheduleData = {
  "Day 1": [
    { time: "09:00 AM", title: "Opening Ceremony", venue: "Main Auditorium", type: "ceremony" },
    { time: "10:30 AM", title: "Keynote: Future of AI", venue: "Hall A", type: "talk" },
    { time: "02:00 PM", title: "Hackathon Kickoff", venue: "Innovation Lab", type: "event" },
    { time: "04:00 PM", title: "Workshop: Web3 Basics", venue: "Room 201", type: "workshop" },
  ],
  "Day 2": [
    { time: "09:00 AM", title: "Robotics Challenge", venue: "Tech Arena", type: "event" },
    { time: "11:00 AM", title: "Panel: Startup Journey", venue: "Hall B", type: "talk" },
    { time: "02:00 PM", title: "Code Wars Finals", venue: "Computer Lab", type: "event" },
    { time: "05:00 PM", title: "Networking Mixer", venue: "Garden Area", type: "social" },
  ],
  "Day 3": [
    { time: "09:00 AM", title: "Project Expo", venue: "Exhibition Hall", type: "event" },
    { time: "12:00 PM", title: "Hackathon Submissions", venue: "Innovation Lab", type: "event" },
    { time: "03:00 PM", title: "Prize Distribution", venue: "Main Auditorium", type: "ceremony" },
    { time: "05:00 PM", title: "Closing Ceremony", venue: "Main Auditorium", type: "ceremony" },
  ],
};

const typeColors: Record<string, string> = {
  ceremony: "bg-accent/20 text-accent",
  talk: "bg-secondary/20 text-secondary",
  event: "bg-primary/20 text-primary",
  workshop: "bg-green-500/20 text-green-400",
  social: "bg-yellow-500/20 text-yellow-400",
};

const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDay, setActiveDay] = useState("Day 1");

  const days = Object.keys(scheduleData);

  return (
    <section id="schedule" className="py-24 relative">
      <div className="container px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Event Schedule</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Three Days of <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From workshops to competitions, every moment is designed to inspire and challenge you.
          </p>
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeDay === day
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "bg-card/50 text-muted-foreground hover:bg-card border border-border/50"
              }`}
            >
              {day}
            </button>
          ))}
        </motion.div>

        {/* Schedule Items */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 md:w-32">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-medium">{item.time}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{item.venue}</span>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${typeColors[item.type]}`}>
                  {item.type}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
