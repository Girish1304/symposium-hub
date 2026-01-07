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
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-secondary/50" />
        <span className="text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase">
          Countdown to Launch
        </span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent via-secondary to-primary/50" />
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
              <div className="relative bg-card/50 border border-primary/30 backdrop-blur-xl p-4 sm:p-5 md:p-6 min-w-[75px] sm:min-w-[95px] md:min-w-[120px] overflow-hidden transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_hsl(185,100%,55%,0.2)]">
                {/* Corner brackets - cyan */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary" />
                {/* Corner brackets - magenta */}
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-secondary" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-secondary" />

                {/* Animated scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
                <div className="text-[10px] sm:text-xs text-muted-foreground text-center tracking-[0.25em] mt-3 font-mono">
                  {unit.label}
                </div>

                {/* Bottom accent line - gradient */}
                <div className="absolute -bottom-px left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary" />
              </div>
            </motion.div>

            {/* Separator */}
            {index < timeLeft.length - 1 && (
              <motion.div
                className="flex flex-col gap-2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <div className="w-2.5 h-2.5 bg-primary rounded-sm shadow-[0_0_10px_hsl(185,100%,55%,0.5)]" />
                <div className="w-2.5 h-2.5 bg-secondary rounded-sm shadow-[0_0_10px_hsl(320,100%,60%,0.5)]" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;