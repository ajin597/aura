import React from "react";
import { Compass, Award, Cpu, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="container max-w-7xl px-6 md:px-10 mx-auto">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Personal Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs tracking-widest uppercase font-bold">
              <Compass className="w-3.5 h-3.5 text-purple-400" /> Architectural Philosophy
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-[1.05]">
              Engineering Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                Lighthouses.
              </span>
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-light max-w-2xl">
              <p>
                In a digital landscape crowded with static, templated layouts, true brand authority demands deep engineering precision and rigorous aesthetic curation.
              </p>
              <p>
                We construct robust digital platforms that command lasting attention—integrating sleek glassmorphic surfaces, fluid continuous layout traversals, and top-tier React architectures optimized for absolute brand dominance.
              </p>
              
              <div className="pt-4 border-l-2 border-purple-500/40 pl-6 my-6 relative bg-gradient-to-r from-purple-500/[0.02] to-transparent py-2">
                <Sparkles className="absolute -left-3 top-0 w-5 h-5 text-purple-400 animate-pulse hidden sm:block" />
                <p className="text-white text-sm sm:text-base italic font-medium tracking-wide">
                  "Simplicity is not the absence of clutter, but the deliberate fusion of absolute necessity with unparalleled performance."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Visual Metrics Stack */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-premium p-8 rounded-3xl border-purple-500/20 relative overflow-hidden group hover:border-purple-500/40">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500 pointer-events-none" />
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-300">Production Fidelity</span>
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-6xl sm:text-7xl font-display font-black text-white tracking-tighter mb-2 relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                100%
              </div>
              <p className="text-xs text-zinc-400 tracking-wide font-light relative z-10">Bespoke Custom Frontend Source Frameworks</p>
            </div>

            <div className="glass-premium p-8 rounded-3xl border-cyan-500/20 relative overflow-hidden group hover:border-cyan-500/40">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">Interaction Target</span>
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-6xl sm:text-7xl font-display font-black text-white tracking-tighter mb-2 relative z-10 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                &lt;0.1s
              </div>
              <p className="text-xs text-zinc-400 tracking-wide font-light relative z-10">Target Response Latency Optimization Targets</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;