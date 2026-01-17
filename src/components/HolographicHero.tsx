import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Cpu, CircuitBoard, Wrench } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import ArcReactor3D from "@/components/ArcReactor3D";

// Glassy text style for unified cyan theme
const glassyTextStyle = {
  color: 'hsl(180, 100%, 70%)',
  textShadow: `
    0 0 10px hsl(180, 100%, 50%, 0.8),
    0 0 20px hsl(180, 100%, 50%, 0.5),
    0 0 40px hsl(180, 100%, 50%, 0.3)
  `,
};

const HolographicHero = () => {
  const stats = [
    { value: "9+", label: "Events", icon: Zap },
    { value: "6+", label: "Workshops", icon: Wrench },
    { value: "₹2L+", label: "Prizes", icon: CircuitBoard },
    { value: "1000+", label: "Participants", icon: Cpu },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Main content */}
        <div className="text-center">
          {/* Date badge - glassy style */}
          <motion.div 
            className="inline-flex items-center justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div 
              className="relative flex items-center gap-4 px-8 py-3 rounded-full backdrop-blur-xl"
              style={{
                background: 'linear-gradient(135deg, hsl(180, 100%, 50%, 0.1), hsl(180, 100%, 50%, 0.05))',
                border: '1px solid hsl(180, 100%, 50%, 0.3)',
                boxShadow: '0 0 30px hsl(180, 100%, 50%, 0.2), inset 0 0 20px hsl(180, 100%, 50%, 0.05)',
              }}
            >
              {/* Corner glow effects */}
              <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-[hsl(180,100%,50%)] rounded-tl-lg" />
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-[hsl(180,100%,50%)] rounded-tr-lg" />
              <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-[hsl(180,100%,50%)] rounded-bl-lg" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-[hsl(180,100%,50%)] rounded-br-lg" />
              
              <Zap className="w-4 h-4" style={{ color: 'hsl(180, 100%, 50%)', filter: 'drop-shadow(0 0 5px hsl(180, 100%, 50%))' }} />
              <span 
                className="font-hero text-sm md:text-base font-semibold tracking-[0.2em] uppercase"
                style={glassyTextStyle}
              >
                February 4, 2026
              </span>
              <Zap className="w-4 h-4" style={{ color: 'hsl(180, 100%, 50%)', filter: 'drop-shadow(0 0 5px hsl(180, 100%, 50%))' }} />
            </div>
          </motion.div>

          {/* 3D Holographic Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mb-6"
          >
            <ArcReactor3D />
          </motion.div>

          {/* Main heading - Glassy Hero title with Audiowide font */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4"
          >
            <h1 
              className="font-ultra text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-[0.15em] leading-none"
              style={{
                color: 'hsl(180, 100%, 75%)',
                textShadow: `
                  0 0 20px hsl(180, 100%, 50%, 0.9),
                  0 0 40px hsl(180, 100%, 50%, 0.6),
                  0 0 60px hsl(180, 100%, 50%, 0.4),
                  0 0 100px hsl(180, 100%, 50%, 0.3),
                  0 0 150px hsl(180, 100%, 50%, 0.2)
                `,
                WebkitTextStroke: '1px hsl(180, 100%, 80%, 0.5)',
              }}
            >
              JARVIS
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <h2 
              className="font-tech text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[0.4em]"
              style={{
                color: 'hsl(180, 100%, 65%)',
                textShadow: `
                  0 0 15px hsl(180, 100%, 50%, 0.7),
                  0 0 30px hsl(180, 100%, 50%, 0.4)
                `,
              }}
            >
              2 0 2 6
            </h2>
          </motion.div>

          {/* Subtitle with glassy text */}
          <motion.div 
            className="max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p 
              className="font-heading text-lg md:text-xl leading-relaxed"
              style={{
                color: 'hsl(180, 50%, 75%)',
                textShadow: '0 0 10px hsl(180, 100%, 50%, 0.3)',
              }}
            >
              The ultimate technical symposium at{" "}
              <span style={{ ...glassyTextStyle, fontWeight: 600 }}>
                Chennai Institute of Technology
              </span>.{" "}
              Where innovation meets inspiration.
            </p>
          </motion.div>

          {/* Countdown section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <CountdownTimer />
          </motion.div>

          {/* CTA Buttons - Glassy style */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/register">
              <motion.button 
                className="group px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] rounded-lg flex items-center gap-3 font-heading relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, hsl(180, 100%, 50%, 0.9), hsl(190, 100%, 45%, 0.9))',
                  color: 'hsl(220, 25%, 5%)',
                  boxShadow: `
                    0 0 30px hsl(180, 100%, 50%, 0.5),
                    0 0 60px hsl(180, 100%, 50%, 0.3),
                    inset 0 1px 0 hsl(180, 100%, 80%, 0.5)
                  `,
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 50px hsl(180, 100%, 50%, 0.7), 0 0 100px hsl(180, 100%, 50%, 0.4), inset 0 1px 0 hsl(180, 100%, 80%, 0.5)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/events">
              <motion.button 
                className="px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] rounded-lg font-heading backdrop-blur-xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(180, 100%, 50%, 0.1), hsl(180, 100%, 50%, 0.05))',
                  border: '2px solid hsl(180, 100%, 50%, 0.5)',
                  color: 'hsl(180, 100%, 70%)',
                  textShadow: '0 0 10px hsl(180, 100%, 50%, 0.5)',
                  boxShadow: '0 0 20px hsl(180, 100%, 50%, 0.2), inset 0 0 15px hsl(180, 100%, 50%, 0.05)',
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 30px hsl(180, 100%, 50%, 0.4), inset 0 0 20px hsl(180, 100%, 50%, 0.1)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Events
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats - Glassy cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="group relative p-6 rounded-xl backdrop-blur-xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(180, 100%, 50%, 0.08), hsl(180, 100%, 50%, 0.02))',
                  border: '1px solid hsl(180, 100%, 50%, 0.2)',
                  boxShadow: '0 0 20px hsl(180, 100%, 50%, 0.1), inset 0 0 20px hsl(180, 100%, 50%, 0.03)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 0 30px hsl(180, 100%, 50%, 0.3), inset 0 0 25px hsl(180, 100%, 50%, 0.05)',
                  border: '1px solid hsl(180, 100%, 50%, 0.4)',
                }}
              >
                {/* Corner brackets */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[hsl(180,100%,50%)] opacity-60" />
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[hsl(180,100%,50%)] opacity-60" />
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[hsl(180,100%,50%)] opacity-60" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[hsl(180,100%,50%)] opacity-60" />

                <div 
                  className="font-hero text-3xl md:text-4xl font-bold mb-2"
                  style={{
                    color: 'hsl(180, 100%, 70%)',
                    textShadow: `
                      0 0 15px hsl(180, 100%, 50%, 0.8),
                      0 0 30px hsl(180, 100%, 50%, 0.5)
                    `,
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-xs font-heading font-semibold uppercase tracking-[0.2em]"
                  style={{
                    color: 'hsl(180, 50%, 60%)',
                    textShadow: '0 0 8px hsl(180, 100%, 50%, 0.3)',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div 
          className="w-6 h-10 rounded-full flex items-start justify-center p-2"
          style={{
            border: '2px solid hsl(180, 100%, 50%, 0.4)',
            boxShadow: '0 0 15px hsl(180, 100%, 50%, 0.2)',
          }}
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: 'hsl(180, 100%, 50%)',
              boxShadow: '0 0 10px hsl(180, 100%, 50%)',
            }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HolographicHero;