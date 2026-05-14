import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import ServicesGrid from "@/components/ServicesGrid";
import ImpactBlock from "@/components/ImpactBlock";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import FloatingBackground from "@/components/FloatingBackground";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <FloatingBackground />
      <main id="top" className="relative min-h-screen overflow-x-hidden bg-background">
        <CustomCursor />
        <SmoothScroll>
          
          <Navigation />
          
          {/* Main Content Sections assembled sequentially mirroring the premium layout */}
          <Hero />
          
          <div id="about">
            <Reveal width="100%"><About /></Reveal>
          </div>

          <Reveal width="100%"><CoreValues /></Reveal>
          
          <div id="projects">
            <Reveal width="100%"><Projects /></Reveal>
          </div>

          <div id="skills">
            <Reveal width="100%"><TechStack /></Reveal>
          </div>

          <Reveal width="100%"><ServicesGrid /></Reveal>

          <Reveal width="100%"><ImpactBlock /></Reveal>

          <Reveal width="100%"><CTA /></Reveal>

          <div id="contact">
            <Reveal width="100%"><Contact /></Reveal>
          </div>

          <Footer />

        </SmoothScroll>
        <ScrollToTop />
      </main>
    </>
  );
};

export default Index;