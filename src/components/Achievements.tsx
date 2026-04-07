"use client";

import React, { useEffect, useRef } from "react";
import { Trophy, Medal, Star, BookOpen, Code2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const achievements = [
    {
      text: "Winner - Allianz Tech Championship '25, awarded €3,000 scholarship.",
      icon: <Trophy className="w-5 h-5 text-amber-500" />
    },
    {
      text: "Received AU$250 project funding from La Trobe University, Australia.",
      icon: <Star className="w-5 h-5 text-emerald" />
    },
    {
      text: "Finalist - Technology Grand Infusion Challenge 2025 (Global Level).",
      icon: <Medal className="w-5 h-5 text-accent" />
    },
    {
      text: "Secured 1st Prize in Prakalp 2025 (National-level competition at JSPM Tathawade).",
      icon: <Trophy className="w-5 h-5 text-amber-500" />
    },
    {
      text: "Domain Master Title - Morpheus National Level Hackathon.",
      icon: <Medal className="w-5 h-5 text-accent" />
    },
    {
      text: "Best Research Paper - ETFI 2026 titled 'IoT-Enabled Smart Umbrella for Environmental Monitoring'.",
      icon: <BookOpen className="w-5 h-5 text-orange-500" />
    },
    {
      text: "Published Patents: Child Learning Disability Detection Device & Smart Umbrella for Smart City Living.",
      icon: <BookOpen className="w-5 h-5 text-orange-500" />
    },
    {
      text: "Coding Profiles: Pupil on CodeForces, LeetCode Rating: 1686 (Top 14.08% globally) with 450+ problems solved.",
      icon: <Code2 className="w-5 h-5 text-emerald" />
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".achievements-header", {
        scrollTrigger: {
          trigger: ".achievements-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: "power2.out",
      });

      // Cards Stagger
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.7,
          delay: index * 0.1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 800,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section id="achievements" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      <div className="achievements-header flex items-center gap-4 mb-12 opacity-0">
        <h2 className="text-3xl font-bold font-sans uppercase tracking-tight text-slate-100 flex items-center gap-3">
          <Trophy className="w-8 h-8 text-accent" />
          Achievements & Publications
        </h2>
        <div className="flex-grow h-px bg-white/5"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((item, index) => (
          <div 
            key={index}
            ref={el => { cardsRef.current[index] = el; }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="flex items-start gap-4 p-5 bg-[#0a0101] border border-white/5 shadow-sm hover:border-accent/30 hover:bg-accent/5 transition-colors duration-300 transform-gpu group"
          >
            <div className="flex-shrink-0 mt-1 bg-[#020000] p-2 border border-white/10 group-hover:border-accent/40 transition-colors duration-300">
              {item.icon}
            </div>
            <p className="text-zinc-300 leading-relaxed text-sm md:text-[0.95rem] font-light">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
