import React from "react";
import { Layout, Smartphone, Database, Cpu, Layers, Sparkles } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Design",
    description: "Bespoke high-end custom web design architectures built specifically to elevate aesthetic authority and brand appeal.",
    tag: "Aesthetic Scope",
    accent: "text-purple-400",
    bg: "group-hover:bg-purple-500/10",
    border: "hover:border-purple-500/30"
  },
  {
    icon: Cpu,
    title: "Website Development",
    description: "Robust performance-driven frontends optimized with React, Next.js, and clean semantic structures for flawless operation.",
    tag: "Core Architecture",
    accent: "text-cyan-400",
    bg: "group-hover:bg-cyan-500/10",
    border: "hover:border-cyan-500/30"
  },
  {
    icon: Database,
    title: "WordPress Development",
    description: "Highly customized, secure, and blazing fast WordPress solutions engineered for intuitive scalability and easy content control.",
    tag: "CMS Engineering",
    accent: "text-indigo-400",
    bg: "group-hover:bg-indigo-500/10",
    border: "hover:border-indigo-500/30"
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centered intuitive interface pathways and interactive prototypes crafted to maximize retention and visual flow.",
    tag: "Experience Protocol",
    accent: "text-fuchsia-400",
    bg: "group-hover:bg-fuchsia-500/10",
    border: "hover:border-fuchsia-500/30"
  },
  {
    icon: Smartphone,
    title: "Landing Pages",
    description: "Laser-focused single-page campaign funnels strategically architected to drive unparalleled user conversion and leads.",
    tag: "Conversion Funnel",
    accent: "text-purple-400",
    bg: "group-hover:bg-purple-500/10",
    border: "hover:border-purple-500/30"
  },
  {
    icon: Sparkles,
    title: "Branding / Creative Design",
    description: "Comprehensive premium visual identities, typography scaling, and design token libraries establishing elite brand positioning.",
    tag: "Identity Scope",
    accent: "text-cyan-400",
    bg: "group-hover:bg-cyan-500/10",
    border: "hover:border-cyan-500/30"
  }
];

const ServicesGrid = () => {
  return (
    <section className="relative py-24 border-t border-white/5 bg-background" id="services">
      <div className="container max-w-7xl px-6 md:px-10 mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" /> Core Capabilities
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Services We <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Deliver.</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-light mt-4 max-w-xl mx-auto leading-relaxed">
            A complete spectrum of high-end creative web solutions built to capture market dominance and forge immediate client trust.
          </p>
        </div>

        {/* 6-Card Rich Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className={`group glass-premium p-8 rounded-3xl border border-white/5 ${srv.border} transition-all duration-500 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Internal ambient glowing hover backlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-transparent rounded-full blur-2xl group-hover:bg-white/[0.04] transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:${srv.accent} ${srv.bg} transition-all duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/5 text-zinc-400 font-bold">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-600 relative z-10">
                  <span>Capability 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-purple-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 mockup-frame p-8 sm:p-12 bg-gradient-to-r from-purple-950/40 via-zinc-950 to-cyan-950/40 text-center rounded-3xl relative overflow-hidden border border-purple-500/20 shadow-2xl">
          <div className="absolute inset-0 bg-grid-bg-premium opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 block mb-2">Architectural Blueprint</span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight mb-4 tracking-tight">
              Building Functional Websites That Grow Your Business.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light mb-8 max-w-xl mx-auto leading-relaxed">
              Every production framework undergoes intense visual stress-testing and automated static linting prior to primary branch publication. Guaranteeing top quality delivery.
            </p>
            <a 
              href="/#contact" 
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-bold uppercase tracking-widest hover:opacity-95 transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.4)] active:scale-[0.98]"
            >
              Request Architectural Audit
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
