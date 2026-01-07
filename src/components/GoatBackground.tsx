import { motion } from "framer-motion";

const GoatBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black" />

      {/* Grid pattern - GoatFundedTrader signature style */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Secondary finer grid */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px',
        }}
      />

      {/* Curved decorative lines - GoatFundedTrader signature */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
            <stop offset="30%" stopColor="hsl(var(--primary) / 0.3)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.5)" />
            <stop offset="70%" stopColor="hsl(var(--primary) / 0.3)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
          </linearGradient>
          <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.15)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
          </linearGradient>
        </defs>

        {/* Main sweeping curve - top */}
        <motion.path
          d="M -100 400 Q 400 100 960 200 Q 1520 300 2020 100"
          fill="none"
          stroke="url(#curveGradient1)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Secondary curve */}
        <motion.path
          d="M -100 500 Q 500 200 960 300 Q 1420 400 2020 200"
          fill="none"
          stroke="url(#curveGradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
        />

        {/* Third curve - lower */}
        <motion.path
          d="M -100 600 Q 600 350 960 400 Q 1320 450 2020 300"
          fill="none"
          stroke="url(#curveGradient2)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
        />

        {/* Accent dots along curve path */}
        {[200, 400, 600, 800, 1000, 1200, 1400, 1600].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={200 + Math.sin((x / 300)) * 80}
            r="2"
            fill="hsl(var(--primary) / 0.4)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
          />
        ))}
      </svg>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at top left, hsl(var(--primary) / 0.3) 0%, transparent 70%)"
          }}
        />
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: "radial-gradient(circle at bottom right, hsl(var(--primary) / 0.4) 0%, transparent 70%)"
          }}
        />
      </div>

      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 60%)"
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)"
        }}
      />
    </div>
  );
};

export default GoatBackground;
