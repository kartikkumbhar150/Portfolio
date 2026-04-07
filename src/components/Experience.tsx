"use client";

import React, { useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Auriquant Designs",
      period: "Jan 2026 - Mar 2026",
      details: [
        "Built a scalable full-stack restaurant platform using Flutter and Spring Boot microservices to manage menus, orders, billing, and reservations.",
        "Implemented secure RBAC authentication (Spring Security + JWT) and real-time order tracking via WebSockets.",
        "Reduced API response time by 40% using Redis caching and automated workflows, cutting manual operations by 70%.",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Prodigy Infotech",
      period: "Dec 2025 - Jan 2026",
      details: [
        "Built optimized full-stack features in Java, improving load times and API performance by 20-30%.",
        "Developed scalable backend modules, reducing bugs by 40%.",
        "Collaborated in Agile teams, conducted code reviews, and wrote unit tests.",
      ],
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".experience-header", {
        scrollTrigger: {
          trigger: ".experience-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: "power2.out",
      });

      // Timeline vertical line grow sequence
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1,
          },
          scaleY: 0,
          transformOrigin: "top center",
        });
      }

      // Timeline items staggered fade in
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.from(item.querySelector(".timeline-card"), {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: 50,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        });

        gsap.from(item.querySelector(".timeline-dot"), {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 0,
          duration: 0.4,
          ease: "back.out(2)",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      <div className="experience-header flex items-center gap-4 mb-12 opacity-0">
        <h2 className="text-3xl font-bold font-sans uppercase tracking-tight text-slate-100 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-accent" />
          Experience
        </h2>
        <div className="flex-grow h-px bg-white/5"></div>
      </div>

      <div className="relative ml-4 md:ml-0 space-y-12">
        {/* Animated Line Container */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />
        <div ref={lineRef} className="absolute left-0 top-0 bottom-0 w-px bg-accent/50 shadow-[0_0_10px_var(--color-accent)] z-0" />

        {experiences.map((exp, index) => (
          <div key={index} ref={el => { itemsRef.current[index] = el; }} className="relative pl-8 md:pl-12 group timeline-item">
            {/* Timeline Dot */}
            <div className="timeline-dot absolute w-4 h-4 bg-[#0a0101] border-2 border-accent rounded-full -left-[8px] top-1.5 group-hover:bg-accent group-hover:scale-125 transition-all duration-300 z-10 shadow-[0_0_10px_rgba(255,26,26,0.5)]"></div>
            
            <div className="timeline-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-sans uppercase tracking-tight text-white group-hover:text-amber-500 transition-colors duration-300">
                  {exp.role} <span className="text-accent">&times;</span> <span className="text-zinc-400">{exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-1 md:mt-0 border border-white/5 py-1 px-3 bg-white/5 rounded-sm">
                  {exp.period}
                </span>
              </div>
              
              <ul className="mt-4 space-y-3 p-6 bg-[#0a0101] border border-white/5 rounded-sm hover:border-accent/30 transition-all duration-300">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="text-zinc-400 font-light relative pl-6 flex items-start text-[0.95rem]">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-accent/60 shadow-[0_0_5px_var(--color-accent)] transform rotate-45"></span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
