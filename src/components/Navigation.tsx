import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Magnetic from "./Magnetic";

const links = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/work" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  
  const capsuleY = useTransform(scrollY, [0, 50], [16, 12]);
  const capsuleBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(8, 8, 12, 0.2)", "rgba(8, 8, 12, 0.85)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(8px)", "blur(20px)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.05)", "rgba(168, 85, 247, 0.2)"]
  );
  const shadowEffect = useTransform(
    scrollY,
    [0, 100],
    ["0 10px 30px -10px rgba(0,0,0,0.5)", "0 20px 40px -15px rgba(0,0,0,0.8), 0 0 25px -5px rgba(168, 85, 247, 0.15)"]
  );

  const isActive = (href: string) => {
    if (href === "/work") return location.pathname === "/work";
    return false;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 pointer-events-none flex justify-center">
      <motion.header
        style={{
          y: capsuleY,
          backgroundColor: capsuleBg,
          backdropFilter: backdropBlur,
          borderColor,
          boxShadow: shadowEffect
        }}
        className="w-full max-w-6xl rounded-full border transition-all duration-300 pointer-events-auto"
      >
        <nav className="px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Magnetic strength={0.2}>
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-400 transition-all duration-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                Aura<span className="text-purple-500 font-light">.</span>
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Magnetic strength={0.3}>
                    {link.href.startsWith("/work") ? (
                      <Link 
                        to={link.href}
                        className={`text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 relative py-2 ${
                          active 
                            ? "text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" 
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        {link.label}
                        {active && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400" />
                        )}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        className="text-xs font-bold text-zinc-400 hover:text-white transition-all duration-300 uppercase tracking-[0.25em] relative py-2"
                      >
                        {link.label}
                      </a>
                    )}
                  </Magnetic>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Magnetic strength={0.2}>
              <a 
                href="/#contact"
                className="px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:border-transparent hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                Consult
              </a>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { opacity: 1, height: "auto", marginTop: "1rem" } : { opacity: 0, height: 0, marginTop: 0 }}
          className={`md:hidden overflow-hidden border-t border-white/5 px-6 pb-6 ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="space-y-4 pt-4 text-center">
            {links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/work") ? (
                  <Link 
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-display font-bold uppercase tracking-widest text-zinc-300 hover:text-purple-400 transition-colors block py-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-display font-bold uppercase tracking-widest text-zinc-300 hover:text-purple-400 transition-colors block py-2"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-2">
              <a 
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-xs font-bold uppercase tracking-widest text-white shadow-lg"
              >
                Initiate Consultation
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.header>
    </div>
  );
};

export default Navigation;