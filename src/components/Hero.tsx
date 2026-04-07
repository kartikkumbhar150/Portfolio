"use client";

import React, { useEffect, useRef } from "react";
import { Mail, Download } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      heroTimeline
        .to(".hero__badge", {
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
        })
        .to(".hero__title-word", {
          opacity: 1,
          y: 0,
          duration: 2,
          stagger: 0.3,
          ease: "expo.out",
        }, "-=1")
        .to(".hero__subtitle", {
          opacity: 1,
          duration: 1.5,
        }, "-=1.2")
        .to(".hero__cta-group", {
          opacity: 1,
          duration: 1.5,
        }, "-=1")
        .to(".hero__scroll-indicator", {
          opacity: 0.8,
          duration: 2,
        }, "-=0.5");
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={heroRef} className="min-h-screen flex text-center items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div className="max-w-4xl w-full flex flex-col justify-center items-center">
        
        {/* INIT BADGE */}
        <div className="hero__badge flex items-center gap-3 font-mono text-xs uppercase tracking-[3px] text-zinc-400 mb-12 opacity-0">
          <div className="w-1.5 h-1.5 bg-accent shadow-[0_0_10px_var(--color-accent)] animate-[pulse-dot_1.5s_ease-in-out_infinite_alternate]" />
          <span>INIT.0 SYSTEM ONLINE</span>
        </div>

        {/* TITLE */}
        <div className="hero__title font-sans leading-[0.9] mb-8 text-center flex flex-col items-center">
          <span className="block overflow-hidden pb-2">
            <span className="hero__title-word inline-block font-extrabold text-5xl sm:text-7xl md:text-[8rem] tracking-tighter uppercase opacity-0 translate-y-full text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
              KARTIK
            </span>
          </span>
          <span className="block overflow-hidden pb-2">
            <span className="hero__title-word inline-block font-extrabold text-5xl sm:text-7xl md:text-[8rem] tracking-tighter uppercase opacity-0 translate-y-full text-white">
              KUMBHAR
            </span>
          </span>
        </div>

        {/* SUBTITLE */}
        <div className="hero__subtitle flex flex-wrap items-center justify-center gap-5 text-lg sm:text-xl text-zinc-400 font-light mb-14 opacity-0 max-w-2xl mx-auto">
          <span>Full Stack Developer</span>
          <span className="text-accent">&times;</span>
          <span>AI Enthusiast</span>
          <div className="w-full text-base mt-2 text-zinc-500 font-mono">
            +91 9322130400 | kumbharkartik150@gmail.com
          </div>
        </div>

        {/* CTA GROUP */}
        <div className="hero__cta-group flex flex-wrap items-center justify-center gap-6 opacity-0">
          <a
            href="/Kartik_Kumbhar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest px-8 py-4 border border-accent bg-accent/5 text-white overflow-hidden transition-all duration-400 hover:shadow-[0_0_30px_rgba(255,26,26,0.3)]"
          >
            <div className="absolute top-0 -left-full w-full h-full bg-accent transition-all duration-400 group-hover:left-0 z-0" />
            <Download className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </a>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kartikkumbhar150"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 transition-all rounded-sm"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/kartikkumbhar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 transition-all rounded-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kumbharkartik150@gmail.com"
              className="p-3 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 transition-all rounded-sm"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="hero__scroll-indicator absolute bottom-0 left-0 w-full flex items-center justify-between px-8 sm:px-16 pb-10 opacity-0 overflow-hidden">
          <span className="font-mono text-[10px] uppercase tracking-[4px] text-zinc-500">Scroll</span>
          <div className="flex-1 h-px bg-white/5 mx-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/5 h-full bg-accent shadow-[0_0_10px_var(--color-accent)] animate-[scanline_3s_linear_infinite]" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[4px] text-zinc-500">Down</span>
        </div>
        
      </div>
      
      {/* KEYFRAMES injected strictly for this component if needed, or global tailwind */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-dot {
          0% { opacity: 0.4; }
          100% { opacity: 1; box-shadow: 0 0 15px var(--color-accent); }
        }
        @keyframes scanline {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); }
        }
      `}} />
    </section>
  );
}
