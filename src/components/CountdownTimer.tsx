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

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchIndex(Math.floor(Math.random() * 4));
      setTimeout(() => setGlitchIndex(null), 150);
    }, 3000 + Math.random() * 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Status label */}
      <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase">
        <motion.div 
          className="w-1.5 h-1.5 bg-primary rounded-full"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span>Time Until Launch</span>
        <motion.div 
          className="w-1.5 h-1.5 bg-primary rounded-full"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
        />
      </div>
      
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
        {timeLeft.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <motion.div
              className="relative group"
              animate={glitchIndex === index ? { x: [0, -2, 2, -1, 1, 0] } : {}}
              transition={{ duration: 0.15 }}
            >
              {/* Glitch layers */}
              {glitchIndex === index && (
                <>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-primary/50 translate-x-[2px] translate-y-[-1px]">
                    <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      {formatNumber(unit.value)}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-secondary/50 translate-x-[-2px] translate-y-[1px]">
                    <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      {formatNumber(unit.value)}
                    </span>
                  </div>
                </>
              )}

              {/* Main display */}
              <div className="relative bg-card/50 border border-primary/30 backdrop-blur-sm p-3 sm:p-4 md:p-5 min-w-[70px] sm:min-w-[90px] md:min-w-[110px] hud-border group-hover:hud-glow transition-all duration-300">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary" />

                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Number display */}
                <div
                  className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center transition-all duration-100 ${
                    glitchIndex === index ? "text-primary animate-flicker" : "text-gradient"
                  }`}
                >
                  {formatNumber(unit.value)}
                </div>

                {/* Label */}
                <div className="text-[9px] sm:text-[10px] text-muted-foreground text-center tracking-[0.2em] mt-1 font-mono">
                  {unit.label}
                </div>

                {/* Bottom glow line */}
                <div className="absolute -bottom-px left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              </div>
            </motion.div>

            {/* Separator */}
            {index < timeLeft.length - 1 && (
              <motion.div
                className="flex flex-col gap-2"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="w-1.5 h-1.5 bg-primary" />
                <div className="w-1.5 h-1.5 bg-primary" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;