import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Mail, Phone, Globe, Send, Sparkles, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Deep Obsidian ambient backing spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-purple-600/[0.03] via-cyan-600/[0.03] to-indigo-600/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="container max-w-7xl px-6 md:px-10 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] glass-premium p-8 sm:p-12 md:p-20 overflow-hidden border border-purple-500/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),_0_0_50px_-10px_rgba(168,85,247,0.15)] group hover:border-purple-500/30 transition-all duration-500"
        >
          {/* Subtle Luminescent Corner Backlight */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/10 via-cyan-500/5 to-transparent rounded-full blur-[120px] pointer-events-none group-hover:opacity-80 transition-opacity duration-500" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-400 block bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 shadow-sm">
                <MessageSquare className="w-3.5 h-3.5" /> Project Consultation
              </div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight uppercase text-white">
                Initiate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-white">
                  Dialogue.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light max-w-lg">
                Seeking a dominant digital identity or custom high-fidelity React frontend architecture? Let's discuss scope, interactive physics, and strategic release timelines.
              </p>

              <div className="space-y-4 pt-4">
                <a 
                  href="mailto:helloaurahorizon@gmail.com" 
                  className="flex items-center gap-4 text-sm sm:text-base text-zinc-300 hover:text-white transition-colors group/link w-fit"
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover/link:bg-purple-500/20 group-hover/link:border-purple-500/30 group-hover/link:text-purple-300 transition-all duration-300 shadow-sm">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="font-medium tracking-wide">helloaurahorizon@gmail.com</span>
                </a>
                <a 
                  href="tel:+919342735182" 
                  className="flex items-center gap-4 text-sm sm:text-base text-zinc-300 hover:text-white transition-colors group/link w-fit"
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover/link:bg-cyan-500/20 group-hover/link:border-cyan-500/30 group-hover/link:text-cyan-300 transition-all duration-300 shadow-sm">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="font-medium tracking-wide">+91 9342735182</span>
                </a>
                <div className="flex items-center gap-4 text-xs sm:text-sm text-zinc-400 font-light pt-2">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.01] border border-white/5 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-zinc-500" />
                  </div>
                  <span>Available worldwide / Direct core developer communication protocols</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8 relative z-10">
              <div className="w-full text-left lg:text-right">
                <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold block mb-4">
                  Secure Consultation Slot
                </span>
                {/* Premium wrapped gradient trigger inside magnetic interaction */}
                <div className="inline-block w-full sm:w-auto">
                  <MagneticButton href="mailto:helloaurahorizon@gmail.com" className="w-full sm:w-auto justify-center py-5 px-10 text-xs bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-none shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:opacity-95">
                    Compose Dispatch <Send className="w-3.5 h-3.5 text-white" />
                  </MagneticButton>
                </div>
              </div>

              <div className="w-full p-6 rounded-2xl bg-zinc-950/80 border border-purple-500/20 text-left lg:text-right backdrop-blur-md shadow-xl group-hover:border-purple-500/30 transition-colors">
                <p className="text-xs italic text-zinc-300 leading-relaxed font-light tracking-wide">
                  "Uncompromising aesthetic mastery coupled with fluid full-stack engineering delivery."
                </p>
                <div className="mt-3 text-[10px] font-bold text-purple-400 uppercase tracking-widest flex items-center justify-start lg:justify-end gap-1.5">
                  <Sparkles className="w-3 h-3 animate-pulse" /> Verified Engineering Standard
                </div>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;