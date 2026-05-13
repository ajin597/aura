"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Bharathanatyalaya",
    category: "Dance School / Website",
    image: "/bharathanatylaya.png",
    color: "from-amber-500/20 to-orange-500/20",
    isScrolling: true
  },
  {
    title: "Educlassic",
    category: "Education Platform",
    image: "/educlassic.png",
    color: "from-cyan-500/20 to-blue-500/20",
    isScrolling: true
  },
  {
    title: "BBT Bowls",
    category: "Restaurant / E-commerce",
    image: "/bbt-bowls.png",
    color: "from-orange-500/20 to-red-500/20",
    isScrolling: true
  },
  {
    title: "Illam",
    category: "Real Estate",
    image: "/illam.png",
    color: "from-purple-500/20 to-pink-500/20",
    isScrolling: true
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden glass-premium"
    >
      <motion.div style={project.isScrolling ? {} : { y }} className="absolute inset-0">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${project.isScrolling ? 'object-top animate-scroll-y' : 'scale-110 group-hover:scale-100'}`}
        />
      </motion.div>
      
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-overlay`} />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

      <div className="absolute inset-0 p-12 flex flex-col justify-end">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-primary font-display text-sm uppercase tracking-widest mb-2 block">
              {project.category}
            </span>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          
          <div className="w-16 h-16 rounded-full glass-premium flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-500">
            <ArrowUpRight className="w-8 h-8" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 lg:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Selected Work</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Digital <span className="text-gradient">Masterpieces</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            A collection of high-converting experiences crafted for businesses that refuse to be average.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;