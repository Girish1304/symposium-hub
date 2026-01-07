const GoatBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-background" />

      {/* Vertical grid lines - GoatFundedTrader signature */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 100%',
        }}
      />

      {/* Secondary vertical lines (finer) */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 100%',
        }}
      />

      {/* Very subtle horizontal lines */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, hsl(var(--primary) / 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100px',
        }}
      />

      {/* Gradient overlay at bottom for depth */}
      <div 
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)"
        }}
      />

      {/* Subtle top vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, transparent 0%, hsl(var(--background)) 100%)"
        }}
      />
    </div>
  );
};

export default GoatBackground;
