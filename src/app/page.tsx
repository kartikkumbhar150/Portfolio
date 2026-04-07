import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Education />
      </div>
      
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 font-mono text-sm bg-[#0b1120]">
        <p>
          Built by <span className="text-accent">Kartik Kumbhar</span> with <span className="text-emerald">Next.js & Tailwind CSS</span>
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </main>
  );
}
