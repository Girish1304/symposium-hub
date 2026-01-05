import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);
  const [glitchIndex, setGlitchIndex] = useState<number | null>(null);

  useEffect(() => {
    const targetDate = new Date("2025-03-15T09:00:00").getTime();

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

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchIndex(Math.floor(Math.random() * 4));
      setTimeout(() => setGlitchIndex(null), 150);
    }, 2000 + Math.random() * 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {timeLeft.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-2 sm:gap-4">
          <motion.div
            className="relative group"
            animate={glitchIndex === index ? { x: [0, -2, 2, -1, 1, 0] } : {}}
            transition={{ duration: 0.15 }}
          >
            {/* Glitch layers */}
            {glitchIndex === index && (
              <>
                <div className="absolute inset-0 text-primary/50 translate-x-[2px] translate-y-[-1px] font-display text-3xl sm:text-5xl md:text-6xl font-bold">
                  {formatNumber(unit.value)}
                </div>
                <div className="absolute inset-0 text-accent/50 translate-x-[-2px] translate-y-[1px] font-display text-3xl sm:text-5xl md:text-6xl font-bold">
                  {formatNumber(unit.value)}
                </div>
              </>
            )}

            {/* Main display */}
            <div className="relative bg-card/60 border border-primary/30 backdrop-blur-sm p-3 sm:p-4 md:p-5 min-w-[70px] sm:min-w-[90px] md:min-w-[110px]">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary" />

              {/* Scan line effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Number display */}
              <div
                className={`font-display text-3xl sm:text-5xl md:text-6xl font-bold text-center transition-all duration-100 ${
                  glitchIndex === index ? "text-primary animate-flicker" : "text-gradient"
                }`}
              >
                {formatNumber(unit.value)}
              </div>

              {/* Label */}
              <div className="text-[10px] sm:text-xs text-muted-foreground text-center tracking-[0.2em] mt-1">
                {unit.label}
              </div>

              {/* Bottom glow */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary/30 blur-sm" />
            </div>
          </motion.div>

          {/* Separator */}
          {index < timeLeft.length - 1 && (
            <motion.div
              className="text-primary text-2xl sm:text-4xl font-bold"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              :
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
