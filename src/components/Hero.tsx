"use client";

import React from "react";
import { motion } from "framer-motion";
import NanoParticles from "./NanoParticles";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden" id="home">
      <NanoParticles />
      {/* Minimalist Aurora Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full opacity-60 mix-blend-screen"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full opacity-60 mix-blend-screen"
          style={{ background: 'radial-gradient(circle, hsl(var(--secondary) / 0.15) 0%, transparent 70%)' }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 pointer-events-none w-full max-w-7xl px-6 md:px-10 lg:px-16 flex flex-col items-start justify-center text-left pt-20">
        
        {/* Agency Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Award-Winning Creative Studio
        </div>

        <h1
          className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground mb-6 uppercase animate-fade-up opacity-0 max-w-4xl flex flex-col items-start"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block">WE BUILD <span className="text-primary">DIGITAL</span></span>
          <span className="block">PRODUCTS.</span>
        </h1>

        <p
          className="text-foreground/90 text-[clamp(1.125rem,2.5vw,1.75rem)] font-medium mb-6 md:mb-8 animate-fade-up opacity-0 max-w-3xl leading-snug"
          style={{ animationDelay: "0.4s" }}
        >
          Crafting immersive web experiences and brand identities that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">convert visitors into customers.</span>
        </p>

        <div
          className="w-16 h-1 bg-primary/50 mb-8 animate-fade-up opacity-0 rounded-full"
          style={{ animationDelay: "0.5s" }}
        ></div>

        <p
          className="text-muted-foreground text-[clamp(0.875rem,1.25vw,1.125rem)] font-light mb-10 md:mb-12 animate-fade-up opacity-0 max-w-2xl leading-relaxed"
          style={{ animationDelay: "0.6s" }}
        >
          We partner with ambitious brands to design and engineer enterprise-grade web solutions, blending stunning visual aesthetics with modern, scalable architectures.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-start gap-4 font-bold animate-fade-up opacity-0 w-full sm:w-auto"
          style={{ animationDelay: "0.75s" }}
        >
          <a href="#contact" className="pointer-events-auto bg-primary text-primary-foreground px-8 py-4 text-base rounded-full cursor-pointer hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:brightness-110 transition-all duration-300 active:scale-[0.97] inline-flex items-center justify-center w-full sm:w-fit min-w-[180px] group">
            Book a Call
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="#projects" className="pointer-events-auto bg-transparent border border-border hover:bg-white/5 text-foreground px-8 py-4 text-base rounded-full cursor-pointer transition-all duration-300 active:scale-[0.97] inline-flex items-center justify-center w-full sm:w-fit min-w-[180px]">
            Our Work
          </a>
        </div>

        <div
          className="flex items-center gap-4 mt-16 animate-fade-up opacity-0"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-border border-2 border-background flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-muted animate-pulse"></div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground/80 text-sm font-medium">
            Trusted by <span className="text-foreground">100+</span> companies worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;