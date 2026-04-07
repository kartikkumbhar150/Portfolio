"use client";

import React, { useEffect, useRef } from "react";
import { Cpu } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Python", "TypeScript"]
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend & DBs",
      skills: ["SpringBoot", "Node.js", "Express", "PostgreSQL", "Redis", "Kafka", "Supabase"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Docker", "AWS"]
    },
    {
      category: "ML & AI",
      skills: ["Scikit-learn", "PyTorch", "Deep Learning", "LLMs"]
    },
    {
      category: "Tools",
      skills: ["VS Code", "Git", "GitHub", "Android Studio", "Postman", "Jupyter"]
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".skills-header", {
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: "power2.out",
      });

      // Staggered categories fade-in
      gsap.from(categoriesRef.current, {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        stagger: {
          each: 0.1,
          from: "start",
        },
        duration: 0.7,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="skills-header flex items-center gap-4 mb-12 opacity-0">
        <h2 className="text-3xl font-bold font-sans uppercase tracking-tight text-slate-100 flex items-center gap-3">
          <Cpu className="w-8 h-8 text-accent" />
          Technical Skills
        </h2>
        <div className="flex-grow h-px bg-white/5"></div>
      </div>

      <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5">
        {skillCategories.map((group, index) => (
          <div 
            key={index} 
            ref={el => { categoriesRef.current[index] = el; }}
            className="flex flex-col bg-[#020000] p-10 hover:bg-[#0a0101] transition-colors duration-400 opacity-0 group"
          >
            <h3 className="text-white font-mono text-[0.85rem] tracking-[2px] uppercase mb-6 transition-colors duration-300">
              <span className="text-accent mr-2">&gt;</span> {group.category}
            </h3>
            <div className="flex flex-col gap-1">
              {group.skills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="flex justify-between items-center py-2 border-b border-white/5 group-hover:border-white/10 text-[0.9rem] text-zinc-400 transition-colors"
                >
                  <span>{skill}</span>
                  <span className="font-mono text-[0.65rem] text-zinc-600">100%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
