"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view" | "drag">("default");

  // Fast spring for inner dot
  const cursorX = useSpring(0, { stiffness: 800, damping: 35 });
  const cursorY = useSpring(0, { stiffness: 800, damping: 35 });
  
  // Slow spring for trailing ring
  const ringX = useSpring(0, { stiffness: 150, damping: 20, mass: 0.6 });
  const ringY = useSpring(0, { stiffness: 150, damping: 20, mass: 0.6 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      // Inner dot (8x8) center offset = 4
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      // Outer ring (40x40) center offset = 20
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("#projects div.group")) {
        setCursorState("view");
      } else if (target.closest(".cursor-grab")) {
        setCursorState("drag");
      } else if (target.closest("a, button, input, textarea")) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] hidden lg:block shadow-[0_0_10px_hsl(var(--primary))]"
        animate={{
          scale: cursorState === "hover" ? 0 : cursorState === "view" || cursorState === "drag" ? 0 : 1,
          opacity: cursorState === "default" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Outer Trailing Ring */}
      <motion.div
        style={{
          translateX: ringX,
          translateY: ringY,
        }}
        animate={{
          scale: cursorState === "default" ? 1 : cursorState === "hover" ? 1.5 : 2.5,
          backgroundColor: cursorState === "default" ? "transparent" : "rgba(34, 211, 238, 0.1)",
          borderColor: cursorState === "default" ? "rgba(34, 211, 238, 0.4)" : "rgba(34, 211, 238, 0.8)",
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] border border-primary/40 hidden lg:flex items-center justify-center overflow-hidden"
      >
        {(cursorState === "view" || cursorState === "drag") && (
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[6px] font-bold uppercase tracking-widest text-primary drop-shadow-[0_0_5px_hsl(var(--primary))]"
          >
            {cursorState}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;