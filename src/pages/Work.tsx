"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ExternalLink, Sparkles, Eye, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingBackground from "@/components/FloatingBackground";

const projectsData = [
  {
    title: "JDM SEO Marketing",
    category: "Website Design",
    description: "Bespoke high-end custom web design architectures built specifically to elevate aesthetic authority and brand appeal.",
    image: "/work-jdm.png",
    link: "#",
    accent: "text-purple-400"
  },
  {
    title: "Aura Skin & Hair Clinic",
    category: "WordPress",
    description: "Advanced dermatology platform engineered with robust custom WordPress themes and high-speed asset configurations.",
    image: "/work-auraskin.jpg",
    link: "#",
    accent: "text-cyan-400"
  },
  {
    title: "RH Dental Excellence",
    category: "Landing Page",
    description: "High-converting standalone single-page funnel integrating instant scheduling workflows and sleek micro-animations.",
    image: "/work-rhdental.jpg",
    link: "#",
    accent: "text-indigo-400"
  },
  {
    title: "SmileCare Expert Dental",
    category: "UI/UX",
    description: "Full-spectrum modern intuitive interface mapping tailored user flows and complex medical scheduling dashboards.",
    image: "/work-smilecare.png",
    link: "#",
    accent: "text-fuchsia-400"
  },
  {
    title: "Savour Street Cafe",
    category: "Website Design",
    description: "Immersive local artisan commerce digital portal featuring vibrant imagery and custom glassmorphic styling.",
    image: "/work-savour.jpg",
    link: "#",
    accent: "text-purple-400"
  }
];

const categories = ["All", "Website Design", "WordPress", "Landing Page", "UI/UX"];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <>
      <Preloader />
      <FloatingBackground />
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <CustomCursor />
        <SmoothScroll>
          {/* Header Navigation Bar */}
          <header className="border-b border-white/5 backdrop-blur-xl sticky top-0 z-50 bg-background/80">
            <div className="container max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between mx-auto">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home Hub
              </Link>
              <span className="text-xs uppercase tracking-widest text-zinc-600 font-mono">
                Agency Production Showcase
              </span>
            </div>
          </header>

          {/* Hero Heading Banner */}
          <section className="pt-20 pb-12 container max-w-7xl px-6 md:px-10 mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-300 mb-4 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Premium Agency Output
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase text-white max-w-5xl mb-6 leading-[1.05]">
              Our Creative <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-white">
                Portfolio.
              </span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
              Explore our high-end works built with stunning animations, glassmorphic styling, and strategic precision. Preview the continuous scrolling engine below, followed by individual architectural cards.
            </p>
          </section>

          {/* Top Smooth Scrolling Showcase Feature Section */}
          <section className="py-12 container max-w-7xl px-6 md:px-10 mx-auto border-b border-white/5">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Eye className="w-4 h-4 text-purple-400 animate-pulse" /> Continuous Infinite Showcase Feature
              </span>
              <span className="text-[10px] font-mono text-zinc-600 hidden sm:inline">
                Hover to inspect visual flow
              </span>
            </div>

            {/* Premium Showcase Frame mimicking the homepage continuous double column scroll */}
            <div className="mockup-frame bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-900/90 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl relative">
              <div className="relative h-[400px] sm:h-[450px] overflow-hidden px-4 sm:px-8 py-4 flex gap-4 sm:gap-8 bg-zinc-950/50">
                
                {/* Gradient boundaries */}
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-zinc-950 via-zinc-950/60 to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-20 pointer-events-none" />

                {/* Column 1: Scrolling Downwards */}
                <div className="w-1/2 overflow-visible relative">
                  <div className="animate-marquee-y-down flex flex-col gap-4 w-full">
                    {[...projectsData, ...projectsData].map((work, idx) => (
                      <div key={`showcase1-${idx}`} className="rounded-xl overflow-hidden border border-white/5 bg-zinc-900/40 aspect-[16/9] relative">
                        <img src={work.image} alt={work.title} className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 bg-zinc-950/40" />
                        <div className="absolute bottom-3 left-3 z-10">
                          <span className="text-[8px] font-bold uppercase tracking-widest text-purple-400 block">{work.category}</span>
                          <span className="text-xs font-display font-bold text-white">{work.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Scrolling Upwards */}
                <div className="w-1/2 overflow-visible relative">
                  <div className="animate-marquee-y-up flex flex-col gap-4 w-full">
                    {[...projectsData, ...projectsData].reverse().map((work, idx) => (
                      <div key={`showcase2-${idx}`} className="rounded-xl overflow-hidden border border-white/5 bg-zinc-900/40 aspect-[16/9] relative">
                        <img src={work.image} alt={work.title} className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 bg-zinc-950/40" />
                        <div className="absolute bottom-3 left-3 z-10">
                          <span className="text-[8px] font-bold uppercase tracking-widest text-cyan-400 block">{work.category}</span>
                          <span className="text-xs font-display font-bold text-white">{work.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Individual Works Filter and Grid Section */}
          <section className="py-16 container max-w-7xl px-6 md:px-10 mx-auto">
            
            {/* Category Filter Group */}
            <div className="flex flex-wrap items-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    selectedCategory === cat 
                      ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105" 
                      : "bg-white/[0.02] border border-white/5 text-zinc-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Standalone Projects Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group glass-premium flex flex-col overflow-hidden rounded-[2rem] border border-white/5 hover:border-purple-500/30 transition-all duration-500"
                >
                  {/* Internal browser-style frame top bar */}
                  <div className="h-10 border-b border-white/5 bg-white/[0.01] px-5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-red-500/60 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-yellow-500/60 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-green-500/60 transition-colors" />
                    </div>
                    <span className="truncate max-w-[180px] sm:max-w-xs text-zinc-400">project://{project.category.toLowerCase().replace(/\s+/g, '-')}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                  </div>

                  {/* Project Image Viewport */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-zinc-950">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/10 opacity-40 group-hover:opacity-20 transition-opacity pointer-events-none" />
                  </div>

                  {/* Complete Card Specifications: Title, Category, Description, and View Project Button */}
                  <div className="p-8 flex flex-col flex-grow justify-between border-t border-white/5 bg-background/60 backdrop-blur-sm">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${project.accent}`}>
                          {project.category}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-600">Verified Output</span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-8 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* View Project Button */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <a 
                        href={project.link}
                        onClick={(e) => { e.preventDefault(); alert(`Navigating to premium showcase view for ${project.title}`); }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 text-xs font-bold uppercase tracking-wider text-white shadow-sm group/btn"
                      >
                        View Project <ArrowUpRight className="w-3.5 h-3.5 text-purple-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      <div className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-600 group-hover:border-purple-500/30 group-hover:text-purple-400 transition-all duration-300">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <Footer />
        </SmoothScroll>
      </main>
    </>
  );
};

export default Work;
