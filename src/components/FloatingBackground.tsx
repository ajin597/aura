import React from "react";

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
      {/* Deep Space Ambient Lighting Orbs */}
      <div className="absolute -top-40 left-1/4 w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-10000" />
      <div className="absolute top-1/3 -right-20 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Subtle Premium Star grid opacity mask */}
      <div className="absolute inset-0 bg-grid-bg-premium opacity-20 mix-blend-overlay pointer-events-none" />
    </div>
  );
};

export default FloatingBackground;