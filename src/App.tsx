import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
