import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);

  useEffect(() => {
    const targetDate = new Date("2026-02-04T09:00:00").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft([
          { value: days, label: "DAYS" },
          { value: hours, label: "HRS" },
          { value: minutes, label: "MIN" },
          { value: seconds, label: "SEC" },
        ]);
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Label */}
      <motion.div 
        className="flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
        <span className="text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase">
          Countdown to Launch
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
      </motion.div>
      
      {/* Timer */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
        {timeLeft.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {/* Main container */}
              <div className="relative bg-card/70 border border-primary/40 backdrop-blur-md p-4 sm:p-5 md:p-6 min-w-[75px] sm:min-w-[95px] md:min-w-[120px] overflow-hidden transition-all duration-300 group-hover:border-primary/70">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary" />

                {/* Animated scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Number */}
                <motion.div
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-gradient relative"
                  key={unit.value}
                  initial={{ y: -10, opacity: 0.5 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {formatNumber(unit.value)}
                </motion.div>

                {/* Label */}
                <div className="text-[10px] sm:text-xs text-muted-foreground text-center tracking-[0.25em] mt-2 font-mono">
                  {unit.label}
                </div>

                {/* Bottom accent line */}
                <div className="absolute -bottom-px left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
              </div>
            </motion.div>

            {/* Separator */}
            {index < timeLeft.length - 1 && (
              <motion.div
                className="flex flex-col gap-2"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-primary rounded-sm" />
                <div className="w-2 h-2 bg-primary rounded-sm" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;