"use client";

import React, { useEffect, useRef } from "react";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: "NeuroBloom",
      description: "AI-Powered Tool for Early Detection of Learning Disabilities in Children. Developed an AI-driven system achieving 80% accuracy. Designed an end-to-end ML pipeline for data ingestion and automated retraining.",
      tech: ["Next.js", "TypeScript", "Python", "Scikit-learn", "PyTorch"],
      github: "#",
      live: "#",
    },
    {
      title: "GAII",
      description: "Generative AI Impact Analytics Real-Time CO2 Tracking & ESG Optimization Platform. Built a Chrome Extension and Flask backend capable of multi-platform tracking enabling a 15%+ reduction in token usage.",
      tech: ["Flask", "Chrome Extension", "Python", "ESG Analytics"],
      github: "#",
      live: "#",
    },
    {
      title: "Quick Chat",
      description: "Real-time Anonymous Chat Application. Built a responsive React frontend and a Spring Boot backend utilizing WebSocket-based messaging for low-latency, bidirectional communication without authentication.",
      tech: ["React", "Spring Boot", "WebSockets", "REST APIs"],
      github: "#",
      live: "#",
    },
    {
      title: "Unified Customer Complaint Dashboard",
      description: "Full-stack dashboard developed for public sector banking complaint management.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Go Green Score (GGS)",
      description: "Seminar project focused on monitoring and scoring environmental impact metrics.",
      tech: ["Java", "Spring Boot", "Analytics"],
      github: "#",
      live: "#",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".projects-header", {
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: "power2.out",
      });

      // Cards Animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          duration: 0.9,
          delay: index * 0.15,
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
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
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
    <section id="projects" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="projects-header flex items-center gap-4 mb-12 opacity-0">
        <h2 className="text-3xl font-bold font-sans uppercase tracking-tight text-slate-100 flex items-center gap-3">
          <FolderGit2 className="w-8 h-8 text-accent" />
          Featured Projects
        </h2>
        <div className="flex-grow h-px bg-white/5"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            ref={el => { cardsRef.current[index] = el; }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="group relative bg-[#0a0101] border border-white/5 rounded-sm p-6 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(255,26,26,0.1)] transition-all duration-300 flex flex-col h-full transform-gpu"
          >
            <div className="flex justify-between items-center mb-6">
              <FolderGit2 className="w-10 h-10 text-accent group-hover:text-amber-500 transition-colors duration-500" />
              <div className="flex gap-4">
                <a href={project.github} className="text-zinc-500 hover:text-accent transition-colors" aria-label="GitHub Link">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.live} className="text-zinc-500 hover:text-accent transition-colors" aria-label="Live Demo Link">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <h3 className="font-sans text-xl font-bold text-zinc-200 mb-3 group-hover:text-accent transition-colors uppercase tracking-tight">
              {project.title}
            </h3>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow font-light">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-2 mt-auto font-mono text-[11px] uppercase tracking-wider">
              {project.tech.map((item, idx) => (
                <li key={idx} className="text-accent border border-accent/20 bg-accent/5 px-2 py-1 rounded-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
