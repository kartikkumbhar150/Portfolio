import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';

const skillGroups = [
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

export default function Skills() {
  return (
    <section id="skills" style={{ padding: 'clamp(5rem, 8vw, 8rem) clamp(1.25rem, 4vw, 2rem)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader pill="Skills" title="Technical Expertise" />
        <div style={{
          maxWidth: 920,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {skillGroups.map((group, i) => (
            <FadeUp key={group.category} delay={i * 0.06}>
              <div className="card-surface" style={{ padding: '1.5rem' }}>
                {/* Category badge */}
                <span style={{
                  display: 'inline-block',
                  background: '#A6D7F0', color: '#000',
                  border: '1px solid #7bbde0',
                  borderRadius: 9999, fontSize: '0.75rem', fontWeight: 600,
                  padding: '2px 10px', marginBottom: '0.9rem',
                  letterSpacing: '0.02em',
                }}>
                  {group.category}
                </span>

                <div style={{
                  height: 1,
                  background: 'rgba(143,90,57,0.1)',
                  marginBottom: '0.9rem',
                }} />

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag" style={{
                      fontSize: '0.82rem', fontWeight: 500,
                      padding: '4px 10px', color: 'rgba(0,0,0,0.7)',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
