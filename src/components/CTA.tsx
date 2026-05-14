"use client";

import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden border-t border-white/5 bg-background">
      <div className="container max-w-6xl px-6 md:px-10 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[3rem] glass-premium p-10 sm:p-16 md:p-24 text-center overflow-hidden border border-purple-500/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),_0_0_50px_-10px_rgba(168,85,247,0.15)] group hover:border-purple-500/30 transition-all duration-500"
        >
          {/* Subtle Ambient Backing Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-transparent opacity-80 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Project Consultation Required</span>
            </motion.div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 text-white uppercase tracking-tight">
              Ready to transcend <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-white">
                the ordinary?
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-zinc-300 mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Let's craft a dominant, bespoke creative agency presence or sophisticated custom platform for your brand. Contact us today to secure your dedicated delivery schedule.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="inline-block w-full sm:w-auto">
                <MagneticButton href="/#contact" className="w-full sm:w-auto justify-center py-5 px-10 text-xs bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-white font-bold uppercase tracking-widest border-none shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:opacity-95">
                  Initiate Your Project <ArrowRight className="w-4 h-4 text-white" />
                </MagneticButton>
              </div>
              <a 
                href="mailto:helloaurahorizon@gmail.com" 
                className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2 py-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-purple-400" /> Or dispatch direct email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative background ambient blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default CTA;