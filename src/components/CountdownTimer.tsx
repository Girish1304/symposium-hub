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
        <span className="text-xs font-heading font-semibold text-muted-foreground tracking-[0.3em] uppercase">
          Countdown to Launch
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
      </motion.div>
      
      {/* Timer */}
      <div className="flex items-center justify-center gap-3 md:gap-4">
        {timeLeft.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-3 md:gap-4">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {/* Card with corner brackets */}
              <div className="relative p-4 md:p-5 bg-card/80 border border-primary/30 rounded-lg backdrop-blur-sm min-w-[70px] md:min-w-[90px]">
                {/* Corner brackets - unified blue */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-primary" />

                {/* Number */}
                <motion.div
                  className="font-hero text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                  key={unit.value}
                  initial={{ y: -5, opacity: 0.7 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  {formatNumber(unit.value)}
                </motion.div>

                {/* Label */}
                <div className="text-[10px] md:text-xs text-muted-foreground text-center tracking-[0.2em] mt-2 font-heading font-semibold">
                  {unit.label}
                </div>
              </div>
            </motion.div>

            {/* Separator dots */}
            {index < timeLeft.length - 1 && (
              <div className="flex flex-col gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;