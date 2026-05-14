import React from "react";
import { Palette, Zap, Monitor, Search, Award, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Palette,
    title: "Premium design",
    description: "Rich, polished, custom layouts built on deep aesthetic guidelines, beautiful typography, and soft glowing shadows.",
    border: "border-purple-500/20",
    glow: "group-hover:bg-purple-500/5",
    accent: "text-purple-400"
  },
  {
    icon: Zap,
    title: "Fast delivery",
    description: "Rigorous execution strategies ensuring swift project milestones without ever compromising strict code quality benchmarks.",
    border: "border-cyan-500/20",
    glow: "group-hover:bg-cyan-500/5",
    accent: "text-cyan-400"
  },
  {
    icon: Monitor,
    title: "Responsive websites",
    description: "Fully fluid component grids rendering dynamically perfectly across every screen size from wide desktop monitors down to mobile viewports.",
    border: "border-indigo-500/20",
    glow: "group-hover:bg-indigo-500/5",
    accent: "text-indigo-400"
  },
  {
    icon: Search,
    title: "SEO-friendly structure",
    description: "Clean semantic markup and high-speed asset configurations ensuring immediate search visibility and high-ranking indexation paths.",
    border: "border-fuchsia-500/20",
    glow: "group-hover:bg-fuchsia-500/5",
    accent: "text-fuchsia-400"
  },
  {
    icon: Award,
    title: "Client-focused approach",
    description: "Transparent, consistent core developer communication aligning strategic objectives precisely with your custom delivery goals.",
    border: "border-purple-500/20",
    glow: "group-hover:bg-purple-500/5",
    accent: "text-purple-400"
  }
];

const CoreValues = () => {
  return (
    <section className="relative py-24 border-t border-white/5 bg-background">
      <div className="container max-w-7xl px-6 md:px-10 mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            <Sparkles className="w-3.5 h-3.5" /> Competitive Edge
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-white">Us.</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Uncompromising design execution driven by foundational principles of engineering scalability, rapid fulfillment, and client confidence.
          </p>
        </div>

        {/* Responsive Grid fitting 5 Items gracefully */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className={`group glass-premium p-8 rounded-3xl border border-white/5 hover:${item.border} transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Subtle top light background fill */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl ${item.glow} transition-all duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${item.accent}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-600 relative z-10">
                  <span>Advantage 0{index + 1}</span>
                  <span className={`${item.accent} font-bold opacity-0 group-hover:opacity-100 transition-opacity`}>Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
