import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, TrendingUp, ShieldCheck, Award, Zap, Layers } from "lucide-react";
import Magnetic from "./Magnetic";

const Hero = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden" id="home">
      {/* Modern Premium Background Gradients & Abstract Shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-gradient-to-tr from-purple-600/10 via-cyan-500/5 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container max-w-7xl px-6 md:px-10 mx-auto flex flex-col items-center text-center">
        
        {/* Elite Top Dynamic Availability Capsule */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl text-xs font-bold tracking-widest text-purple-300 uppercase mb-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] animate-bounce duration-1000">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Digital Studio & Engineering Mastery
        </div>

        {/* Hyper-Premium Bold Heading */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white max-w-6xl leading-[1.02] mb-8">
          Crafting Elite <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-white">
            Digital Masterpieces.
          </span>
        </h1>

        {/* Sophisticated Description Paragraph */}
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-12">
          Transforming ambitious concepts into dominant visual platforms. Architected with uncompromising clean code, multi-layered frosted glass physics, and micro-interaction mechanics.
        </p>

        {/* Action Triggers with Magnetic Wrapping */}
        <div className="flex flex-wrap justify-center items-center gap-5 mb-20 w-full max-w-md sm:max-w-none">
          <Magnetic strength={0.2}>
            <Link 
              to="/work" 
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-white font-bold text-xs uppercase tracking-[0.2em] hover:opacity-95 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              View Our Works <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>
          </Magnetic>
          <Magnetic strength={0.15}>
            <a 
              href="/#contact" 
              className="w-full sm:w-auto px-10 py-5 rounded-full glass-premium font-bold text-xs uppercase tracking-[0.2em] text-white hover:text-purple-300 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Contact Us
            </a>
          </Magnetic>
        </div>

        {/* Interactive Cinematic Mockup Stack */}
        <div className="w-full max-w-5xl relative mt-4">
          
          {/* Floating Aesthetic Stats Badges */}
          <div className="hidden lg:flex absolute -left-16 top-1/4 z-20 glass-premium px-6 py-4 rounded-2xl border-purple-500/20 items-center gap-3.5 shadow-[0_0_30px_rgba(168,85,247,0.15)] animate-pulse">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Sub-second renders</div>
              <div className="text-[10px] text-purple-300/80 font-mono">&lt; 100ms TTI benchmark</div>
            </div>
          </div>

          <div className="hidden lg:flex absolute -right-16 top-1/3 z-20 glass-premium px-6 py-4 rounded-2xl border-cyan-500/20 items-center gap-3.5 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Design Architecture</div>
              <div className="text-[10px] text-cyan-300/80 font-mono">Curated premium UI systems</div>
            </div>
          </div>

          {/* Central Mockup Engine Frame */}
          <div className="mockup-frame aspect-[16/10] w-full p-2 sm:p-4 bg-zinc-950/90 rounded-[2.5rem] border-purple-500/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),_0_0_60px_-10px_rgba(168,85,247,0.2)]">
            <div className="w-full h-full rounded-3xl overflow-hidden relative bg-zinc-950 border border-white/5 flex flex-col justify-between p-8 sm:p-12 text-left">
              
              {/* Premium cinematic background artwork */}
              <div className="absolute inset-0 opacity-40 mix-blend-luminosity bg-cover bg-center transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: `url('/work-jdm.png')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 via-transparent to-cyan-950/20 mix-blend-overlay" />
              
              {/* Top window console interface */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/60 inline-block shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60 inline-block shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60 inline-block shadow-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                  <span className="text-[10px] font-mono text-purple-300 tracking-widest uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                    Live Interaction Engine
                  </span>
                </div>
              </div>

              {/* Core focus block */}
              <div className="relative z-10 max-w-2xl my-auto py-8">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-3 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  <TrendingUp className="w-3 h-3" /> Immersive Visual Profile
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white leading-tight mb-4 tracking-tight">
                  Uncompromising Visual Craftsmanship.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-xl">
                  Pioneering responsive spatial portals built for ultra-slow museum-grade continuous preview navigations. Providing a competitive layout presence.
                </p>
              </div>

              {/* Bottom specification footer */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-zinc-400 text-xs">
                <div className="flex items-center gap-2 font-medium">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-white font-bold">State of the Art Protocol</span>
                </div>
                <span className="font-mono text-[10px] text-cyan-400 bg-white/[0.03] px-2.5 py-1 rounded border border-white/5">v3.0.0 Hyper</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;