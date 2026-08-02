import HeroSection from './components/HeroSection';
import SectionDivider from './components/SectionDivider';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ color: '#000', fontFamily: '"Inter", sans-serif' }}>
      {/* Background layer */}
      <div className="fixed inset-0 -z-10" style={{ background: '#F4EFE7' }} />

      {/* Main content column */}
      <main className="flex justify-center px-5 md:px-10 grow">
        <div className="w-full max-w-7xl mx-auto">
          <HeroSection />

          <SectionDivider />
          <EducationSection />

          <SectionDivider />
          <ExperienceSection />

          <SectionDivider />
          <AchievementsSection />

          <SectionDivider />
          <ProjectsSection />

          <SectionDivider />
          <SkillsSection />

          <SectionDivider />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
