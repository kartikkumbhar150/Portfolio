// SkillsSection – elegant grouped skill tags
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';
import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['Java (Proficient)', 'Python', 'TypeScript', 'Dart'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Flutter', 'HTML/CSS', 'Vite'],
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'FastAPI', 'Express.js', 'Node.js', 'WebSockets', 'REST APIs'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Docker', 'AWS', 'Redis', 'Microservices', 'JWT/OAuth'],
  },
  {
    category: 'Machine Learning & AI',
    skills: ['Scikit-learn', 'PyTorch', 'Deep Learning', 'LLMs', 'NLP', 'Computer Vision'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['VS Code', 'Git/GitHub', 'Android Studio', 'Postman', 'Jupyter', 'MongoDB', 'PostgreSQL'],
  },
];

function SkillTag({ skill, delay }: { skill: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="inline-block text-sm md:text-base font-medium px-4 py-2 rounded-lg cursor-default transition-all duration-200"
      style={{ background: '#F4EFE7', color: '#000', border: '1px solid rgba(143,90,57,0.2)' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = '#8F5A39';
        (e.currentTarget as HTMLElement).style.color = '#fff';
        (e.currentTarget as HTMLElement).style.borderColor = '#8F5A39';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = '#F4EFE7';
        (e.currentTarget as HTMLElement).style.color = '#000';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(143,90,57,0.2)';
      }}
    >
      {skill}
    </motion.span>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-8">
      <FadeUp>
        <SectionHeader
          pill="Skills"
          title="Technical Expertise"
          subtitle="Technologies and tools I use to build production-ready systems."
        />
      </FadeUp>

      <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
        {SKILL_GROUPS.map((group, gi) => (
          <FadeUp key={group.category} delay={gi * 0.07}>
            <div
              className="rounded-2xl p-8 md:p-12"
              style={{ background: '#fff', border: '1px solid rgba(143,90,57,0.14)', boxShadow: '0 2px 10px rgba(143,90,57,0.05)' }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-md"
                  style={{ background: '#A6D7F0', color: '#000', border: '1px solid #7bbde0' }}
                >
                  {group.category}
                </span>
                <div className="flex-1 h-px" style={{ background: 'rgba(143,90,57,0.1)' }} />
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {group.skills.map((skill, si) => (
                  <SkillTag key={skill} skill={skill} delay={gi * 0.07 + si * 0.04} />
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
