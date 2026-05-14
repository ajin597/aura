import React from "react";
import { Star, Quote, Award, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote: "The interface execution is absolutely flawless. Our render latencies dropped immediately, and the aesthetic depth has drastically elevated our client retention metrics.",
    author: "Robert Fox",
    role: "VP of Product",
    rating: 5,
    borderAccent: "hover:border-purple-500/40",
    glowAccent: "group-hover:bg-purple-500/10"
  },
  {
    quote: "Exceptional frontend architecture. The deliberate minimal curation combined with continuous scrolling layouts gave our profile exactly the high-end presence we required.",
    author: "Arlene McCoy",
    role: "Managing Director",
    rating: 5,
    borderAccent: "hover:border-cyan-500/40",
    glowAccent: "group-hover:bg-cyan-500/10"
  },
  {
    quote: "Uncompromising engineering standard. From absolute layout stability to buttery smooth CSS traversals, every micro-interaction feels custom and elite.",
    author: "Devon Lane",
    role: "Technical Co-founder",
    rating: 5,
    borderAccent: "hover:border-indigo-500/40",
    glowAccent: "group-hover:bg-indigo-500/10"
  }
];

const ImpactBlock = () => {
  return (
    <section className="relative py-24 border-t border-white/5 bg-background overflow-hidden">
      {/* Background illumination stop */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-7xl px-6 md:px-10 mx-auto relative z-10">
        
        {/* Top Banner: Crafted with Care. Built for Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 relative">
            <div className="mockup-frame aspect-video lg:aspect-square w-full p-4 bg-zinc-950 rounded-3xl flex items-center justify-center relative overflow-hidden border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.1)]">
              <div className="absolute inset-0 opacity-25 bg-grid-bg-premium" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-purple-950/20" />
              
              <div className="text-center relative z-10 p-6">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-3 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  <Award className="w-3 h-3" /> Performance Benchmark
                </div>
                <span className="text-6xl sm:text-7xl font-display font-black text-white block mb-2 tracking-tight drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">99.8%</span>
                <span className="text-xs text-purple-300 uppercase tracking-widest font-mono font-bold">Lighthouse Core Target</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-400 block bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              <Sparkles className="w-3.5 h-3.5" /> Proven Engineering Metrics
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              Crafted with Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Built for Impact.</span>
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
              Every digital asset is assembled manually with zero generic template dependencies. The underlying code structure adheres strictly to pure semantic patterns, resulting in superior indexation, accessible interaction, and unmatched layout endurance.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <span className="text-xs text-white font-mono bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/10 shadow-sm font-medium">
                Zero bloated imports
              </span>
              <span className="text-xs text-cyan-300 font-mono bg-cyan-500/10 px-3.5 py-2 rounded-xl border border-cyan-500/20 shadow-sm font-medium">
                Native CSS Accelerators
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Stack */}
        <div className="pt-16 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 block mb-2">
              Verified Feedback
            </span>
            <h3 className="font-display text-3xl font-black text-white uppercase tracking-tight">
              What Partners Say.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div 
                key={index}
                className={`group glass-premium p-8 rounded-3xl border border-white/5 ${t.borderAccent} transition-all duration-500 flex flex-col justify-between relative overflow-hidden shadow-xl`}
              >
                {/* Glowing subtle top corner aura */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-transparent rounded-full blur-2xl ${t.glowAccent} transition-all duration-500 pointer-events-none`} />

                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-white/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.3)]" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed mb-6 italic tracking-wide">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div>
                    <h4 className="text-xs font-bold text-white font-display group-hover:text-purple-300 transition-colors">{t.author}</h4>
                    <span className="text-[10px] text-zinc-500 block mt-0.5">{t.role}</span>
                  </div>
                  <span className="text-[9px] font-mono text-cyan-500/80 bg-white/[0.02] px-2 py-0.5 rounded border border-white/5 font-bold">ID: #0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactBlock;
