"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Eye, Compass } from "lucide-react";

const col1Works = [
  {
    title: "JDM SEO Marketing",
    category: "Website Design",
    image: "/work-jdm.png",
  },
  {
    title: "SmileCare Expert Dental",
    category: "UI/UX Design",
    image: "/work-smilecare.png",
  },
  {
    title: "Aura Skin & Hair Clinic",
    category: "WordPress Development",
    image: "/work-auraskin.jpg",
  },
  {
    title: "RH Dental Excellence",
    category: "Landing Pages",
    image: "/work-rhdental.jpg",
  },
  {
    title: "Savour Street Cafe",
    category: "Branding / Creative Design",
    image: "/work-savour.jpg",
  },
];

const col2Works = [
  {
    title: "Savour Street Cafe",
    category: "Branding / Creative Design",
    image: "/work-savour.jpg",
  },
  {
    title: "RH Dental Excellence",
    category: "Landing Pages",
    image: "/work-rhdental.jpg",
  },
  {
    title: "Aura Skin & Hair Clinic",
    category: "WordPress Development",
    image: "/work-auraskin.jpg",
  },
  {
    title: "SmileCare Expert Dental",
    category: "UI/UX Design",
    image: "/work-smilecare.png",
  },
  {
    title: "JDM SEO Marketing",
    category: "Website Design",
    image: "/work-jdm.png",
  },
];

const Projects = () => {
  return (
    <section id="work" className="relative py-24 border-t border-white/5 bg-background overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-6xl px-6 md:px-10 mx-auto relative z-10">
        
        {/* Section Heading Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-300 mb-3 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Featured Showcase Preview
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-white">Works.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            A dynamic dual-column infinite continuous simulation previewing our digital engineering standards. Hover any column to pause inspection.
          </p>
        </div>

        {/* ONE Large Premium Card containing double column continuous vertical scroll */}
        <div className="mockup-frame bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-900/90 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),_0_0_50px_-10px_rgba(168,85,247,0.15)] relative">
          
          {/* Top Bar / Premium Indicator */}
          <div className="h-12 border-b border-white/10 bg-white/[0.02] px-6 flex items-center justify-between relative z-30">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/60 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-green-500/60 inline-block shadow-sm" />
              <span className="text-[10px] font-mono text-zinc-400 ml-4 hidden sm:inline bg-white/[0.02] px-2.5 py-0.5 rounded border border-white/5">agency-showcase://infinite-loop-preview</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center gap-1.5 font-bold">
                <Eye className="w-3 h-3 text-purple-400 animate-pulse" /> Live Preview Loop
              </span>
            </div>
          </div>

          {/* Scrolling Showcase Container Viewport */}
          <div className="relative h-[550px] sm:h-[650px] lg:h-[750px] overflow-hidden px-4 sm:px-8 py-6 flex gap-4 sm:gap-8 bg-zinc-950/50">
            
            {/* Top and Bottom absolute gradient masks for gorgeous smooth depth transitions */}
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-zinc-950 via-zinc-950/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-20 pointer-events-none" />

            {/* Column 1: Scrolling Top to Bottom (animate-marquee-y-down) */}
            <div className="w-1/2 overflow-visible relative">
              <div className="animate-marquee-y-down flex flex-col gap-6 w-full">
                {/* Render the array twice to ensure complete infinite line filling */}
                {[...col1Works, ...col1Works].map((work, index) => (
                  <div 
                    key={`col1-${index}`}
                    className="group/card relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/40 aspect-[16/11] shadow-lg hover:border-purple-500/40 transition-all duration-300"
                  >
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity" />
                    
                    {/* Item Detail Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 translate-y-2 group-hover/card:translate-y-0 transition-transform flex flex-col justify-end">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-purple-400 block mb-1">
                        {work.category}
                      </span>
                      <h4 className="text-sm sm:text-base font-display font-bold text-white truncate">
                        {work.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Scrolling Bottom to Top (animate-marquee-y-up) */}
            <div className="w-1/2 overflow-visible relative">
              <div className="animate-marquee-y-up flex flex-col gap-6 w-full">
                {/* Render the array twice to ensure complete infinite line filling */}
                {[...col2Works, ...col2Works].map((work, index) => (
                  <div 
                    key={`col2-${index}`}
                    className="group/card relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/40 aspect-[16/11] shadow-lg hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity" />
                    
                    {/* Item Detail Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 translate-y-2 group-hover/card:translate-y-0 transition-transform flex flex-col justify-end">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                        {work.category}
                      </span>
                      <h4 className="text-sm sm:text-base font-display font-bold text-white truncate">
                        {work.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Persistent Footer embedded inside the single premium card */}
          <div className="p-6 border-t border-white/10 bg-zinc-950/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 relative z-30">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Compass className="w-4 h-4 text-purple-400" />
              <span>Viewing interactive loop snapshot. Access individual project files below.</span>
            </div>
            <Link 
              to="/work" 
              className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-1.5 shadow-md flex-shrink-0"
            >
              View Full Portfolio <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;