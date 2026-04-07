"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    const elem = linksRef.current[index];
    if (!elem) return;
    const position = elem.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;
    
    gsap.to(elem, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (index: number) => {
    const elem = linksRef.current[index];
    if (!elem) return;
    gsap.to(elem, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-400 border-b ${
        isScrolled
          ? "bg-[#020000]/80 backdrop-blur-md border-white/5 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="font-mono text-[1.1rem] font-medium tracking-[4px] uppercase text-white transition-all duration-300 hover:text-shadow-[0_0_15px_rgba(255,26,26,0.5)]">
              <span className="text-accent">&lt;</span>KARTIK<span className="text-accent">/</span>&gt;
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  ref={el => { linksRef.current[index] = el; }}
                  href={link.href}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className="relative font-mono text-[0.75rem] uppercase text-zinc-400 tracking-[2px] transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_10px_var(--color-accent)] inline-block transform-gpu"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Kartik_Kumbhar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                ref={el => { linksRef.current[navLinks.length] = el; }}
                onMouseMove={(e) => handleMouseMove(e, navLinks.length)}
                onMouseLeave={() => handleMouseLeave(navLinks.length)}
                className="group relative inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest px-6 py-3 border border-white/10 bg-transparent text-white overflow-hidden transition-all duration-400 transform-gpu hover:border-white/20"
              >
                <div className="absolute top-0 -left-full w-full h-full bg-white/5 transition-all duration-400 group-hover:left-0 z-0" />
                <span className="relative z-10 text-accent">Resume</span>
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0101] border-b border-white/5 backdrop-blur-lg absolute w-full top-full left-0">
          <div className="px-4 pt-4 pb-6 space-y-2 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-accent block px-3 py-3 font-mono text-sm uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Kartik_Kumbhar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent block px-3 py-3 border border-accent/20 bg-accent/5 font-mono text-sm uppercase tracking-widest mt-4 mx-4"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
