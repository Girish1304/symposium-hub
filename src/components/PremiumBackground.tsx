const PremiumBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Pure black base */}
      <div className="absolute inset-0 bg-background" />

      {/* Vertical grid lines - GoatFundedTrader signature */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '80px 100%',
        }}
      />

      {/* Secondary vertical lines (finer) */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 100%',
        }}
      />

      {/* Very subtle horizontal lines */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, hsl(0 0% 100% / 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100% 120px',
        }}
      />

      {/* Subtle gold glow at top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background: "radial-gradient(ellipse at center top, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Corner accents */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px]"
        style={{
          background: "radial-gradient(circle at top right, hsl(var(--primary) / 0.05) 0%, transparent 50%)",
        }}
      />

      {/* Bottom gradient fade */}
      <div 
        className="absolute inset-x-0 bottom-0 h-64"
        style={{
          background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)"
        }}
      />
    </div>
  );
};

export default PremiumBackground;
