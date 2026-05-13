"use client";

import { ReactNode } from "react";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      {children}
    </div>
  );
};

export default SmoothScroll;