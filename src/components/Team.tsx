"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Magnetic from "./Magnetic";

const team = [
  {
    name: "Jebin",
    role: "Founder & CEO",
    bio: "Visionary leader with a passion for building next-generation digital experiences.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Abish",
    role: "Lead Developer",
    bio: "Expert in scalable architectures and crafting pixel-perfect web applications.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Alex Doe",
    role: "Creative Director",
    bio: "Turning complex user journeys into seamless, high-converting paths.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  }
];

const Team = () => {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">The Minds</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Behind the <span className="text-gradient">Horizon</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative p-10 aspect-[4/5] rounded-[3rem] overflow-hidden glass-premium flex flex-col items-center justify-center text-center group-hover:border-primary/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="font-display text-3xl font-bold mb-2 relative z-10">{member.name}</h3>
                <p className="text-primary text-xs uppercase tracking-widest mb-6 relative z-10">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px] mx-auto relative z-10">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-4 mt-8 relative z-10">
                  {[Twitter, Linkedin, Github].map((Icon, idx) => (
                    <Magnetic key={idx} strength={0.2}>
                      <a href="#" className="w-10 h-10 rounded-full glass-premium flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                        <Icon className="w-4 h-4" />
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;