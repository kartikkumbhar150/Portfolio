"use client";

import React, { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".education-header", {
        scrollTrigger: {
          trigger: ".education-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: "power2.out",
      });

      // Card Animation
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;

    gsap.to(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 800,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section id="education" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20 relative z-10">
      <div className="education-header flex items-center gap-4 mb-12 opacity-0">
        <h2 className="text-3xl font-bold font-sans uppercase tracking-tight text-slate-100 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-accent" />
          Education
        </h2>
        <div className="flex-grow h-px bg-white/5"></div>
      </div>

      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-[#0a0101] border border-white/5 rounded-sm p-8 relative overflow-hidden group hover:border-accent/40 transition-colors duration-400 transform-gpu shadow-sm hover:shadow-[0_0_30px_rgba(255,26,26,0.1)] opacity-0"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform duration-700 group-hover:scale-110 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-start gap-4">
          <div>
            <h3 className="text-2xl font-bold font-sans uppercase tracking-tight text-white mb-2 group-hover:text-amber-500 transition-colors duration-300">
              Bachelor of Engineering in Computer Engineering
            </h3>
            <p className="text-lg text-zinc-400 font-light">
              Dr. D.Y Patil Institute of Technology <span className="text-accent text-sm">(Pune, Maharashtra)</span>
            </p>
          </div>
          <div className="text-left md:text-right flex flex-col items-start md:items-end">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-[0.8rem] tracking-widest uppercase rounded-sm mb-2 border border-accent/20">
              GPA: 9.16/10
            </span>
            <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
              2023 - 2027
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
