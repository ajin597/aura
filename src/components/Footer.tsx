import React from "react";
import { Mail, Phone, Instagram, Twitter, Linkedin, Sparkles, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-12 border-t border-white/10 bg-zinc-950 overflow-hidden">
      {/* Background illumination aura at bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-purple-600/[0.03] to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl px-6 md:px-10 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-500 p-0.5 shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="font-display text-xl font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                Aura Horizon<span className="text-cyan-400 font-bold">.</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed font-light">
              Architecting state-of-the-art spatial web platforms and uncompromising dynamic React frontend experiences tailored for industry leaders.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono text-purple-400/90 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/20 font-bold">
                Elite Agency Design Standard
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-1.5 border-l-2 border-purple-500 pl-2">
              Directory
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              <li>
                <a href="/#about" className="text-zinc-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                  <span className="text-purple-500 text-[10px]">▸</span> Architectural Approach
                </a>
              </li>
              <li>
                <Link to="/work" className="text-zinc-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span className="text-cyan-500 text-[10px]">▸</span> Selected Masterpieces
                </Link>
              </li>
              <li>
                <a href="/#skills" className="text-zinc-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                  <span className="text-purple-500 text-[10px]">▸</span> Core Tech Stack
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-zinc-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span className="text-cyan-500 text-[10px]">▸</span> Live Consultation
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-1.5 border-l-2 border-cyan-500 pl-2">
              Connect Channels
            </h4>
            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-11 h-11 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:scale-105"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            <div className="space-y-2.5 pt-2 text-xs text-zinc-400 font-light">
              <a href="mailto:helloaurahorizon@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors group/mail">
                <Mail className="w-4 h-4 text-purple-400 group-hover/mail:scale-110 transition-transform" /> 
                <span className="tracking-wide">helloaurahorizon@gmail.com</span>
              </a>
              <a href="tel:+919342735182" className="flex items-center gap-2.5 hover:text-white transition-colors group/phone">
                <Phone className="w-4 h-4 text-cyan-400 group-hover/phone:scale-110 transition-transform" /> 
                <span className="tracking-wide">+91 9342735182</span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <p className="tracking-wide">© 2026 Aura Horizon Studio. All digital architectural rights reserved.</p>
          <div className="flex gap-6 font-medium text-[11px]">
            <span className="hover:text-purple-300 transition-colors cursor-pointer">Engineering Protocol</span>
            <span className="hover:text-cyan-300 transition-colors cursor-pointer">Privacy Framework</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;