import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Sparkles, Cpu, Terminal, FileCode, Zap } from "lucide-react";

const skills = [
  { name: "React 18+", category: "Frontend Core", icon: Code2, desc: "Production-grade functional architecture optimized for high performance traversals.", accent: "text-cyan-400", border: "hover:border-cyan-500/40", glow: "group-hover:bg-cyan-500/10" },
  { name: "TypeScript", category: "Type Safety", icon: FileCode, desc: "End-to-end robust data domain models establishing uncompromising runtime security.", accent: "text-purple-400", border: "hover:border-purple-500/40", glow: "group-hover:bg-purple-500/10" },
  { name: "Tailwind CSS", category: "Design Systems", icon: Layout, desc: "Utility-driven responsive layouts customized with multi-layer luminescent stops.", accent: "text-indigo-400", border: "hover:border-indigo-500/40", glow: "group-hover:bg-indigo-500/10" },
  { name: "Framer Motion", category: "Interactions", icon: Sparkles, desc: "Fluid multi-spring layout physics simulating zero-latency natural navigation.", accent: "text-fuchsia-400", border: "hover:border-fuchsia-500/40", glow: "group-hover:bg-fuchsia-500/10" },
  { name: "WebGL / Core", category: "Graphics Engine", icon: Cpu, desc: "Hardware-accelerated visual pipelines delivering unparalleled graphical fidelity.", accent: "text-cyan-400", border: "hover:border-cyan-500/40", glow: "group-hover:bg-cyan-500/10" },
  { name: "Vite Systems", category: "Infrastructure", icon: Terminal, desc: "Ultra-fast continuous delivery bundles driving immediate hot-module client sync.", accent: "text-purple-400", border: "hover:border-purple-500/40", glow: "group-hover:bg-purple-500/10" },
];

const TechStack = () => {
  return (
    <section className="relative py-24 border-y border-white/5 bg-zinc-950 overflow-hidden">
      {/* Absolute Background Core Glow */}
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[400px] bg-cyan-600/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl px-6 md:px-10 mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-purple-400 font-bold block mb-3 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              <Zap className="w-3.5 h-3.5" /> Core Competencies
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight uppercase">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-white font-black">Stack.</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-light max-w-md text-sm md:text-base leading-relaxed">
            Curated elite technologies powering robust client experiences with uncompromising state safety and sub-second rendering targets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative glass-premium p-8 rounded-3xl border border-white/5 ${skill.border} transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]`}
              >
                {/* Radial inner backlit aura */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-transparent rounded-full blur-2xl ${skill.glow} transition-all duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:${skill.accent} transition-all duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5 group-hover:border-white/10 transition-colors">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2.5 group-hover:translate-x-1 transition-transform tracking-wide">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-zinc-500 text-[10px] tracking-widest uppercase font-mono group-hover:text-zinc-300 transition-colors relative z-10">
                  <span>Production Protocol</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 group-hover:animate-pulse transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechStack;