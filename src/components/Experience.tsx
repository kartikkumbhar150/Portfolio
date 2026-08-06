import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Code2, ChevronDown, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';

const experiences = [
  {
    id: 'research',
    icon: <FlaskConical size={22} color="#8F5A39" />,
    accent: '#8F5A39',
    accentBg: '#F4EFE7',
    title: 'Research Collaborator',
    org: 'La Trobe University',
    location: 'Melbourne, Australia (Remote)',
    period: 'Jan 2025 – Jan 2026',
    headline: '80% classification accuracy on AI-generated content detection',
    stats: [
      { value: '80%', label: 'Detection Accuracy' },
      { value: '70%', label: 'Pipeline Improvement' },
      { value: '+18%', label: 'Precision Gain' },
    ],
    bullets: [
      'Designed and trained a multimodal AI detection system combining NLP and Computer Vision techniques for identifying AI-generated academic content.',
      'Evaluated 7+ ML models (BERT, RoBERTa, XGBoost, CNN) achieving 80% accuracy on real-world academic datasets.',
      'Built an end-to-end ML pipeline for data preprocessing, feature extraction, model training, and evaluation, reducing manual overhead by 70%.',
    ],
  },
  {
    id: 'internship',
    icon: <Code2 size={22} color="#3E7EA6" />,
    accent: '#3E7EA6',
    accentBg: '#e8f4fb',
    title: 'Software Development Intern',
    org: 'Auriquant Designs',
    location: 'Remote',
    period: 'Jan 2026 – Mar 2026',
    headline: '40% faster API response with Redis caching',
    stats: [
      { value: '40%', label: 'Faster API Response' },
      { value: '70%', label: 'Less Manual Ops' },
      { value: 'Real-time', label: 'Order Tracking' },
    ],
    bullets: [
      'Built cross-platform mobile app features using Flutter with a Spring Boot microservices backend, reducing API response time by 40%.',
      'Implemented RBAC and JWT-based authentication system, automating access control and reducing manual ops by 70%.',
      'Integrated Redis caching for real-time order tracking and session management, significantly improving throughput under load.',
    ],
  },
];

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeUp>
      <div
        className="card-surface"
        style={{ padding: '2rem', cursor: 'pointer' }}
        onClick={() => setOpen((o) => !o)}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
          <div style={{
            width: 52, height: 52, borderRadius: 12,
            background: exp.accentBg,
            border: `1px solid ${exp.accent}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            {exp.icon}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
              <h3 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 700, fontSize: '1.15rem', margin: 0,
              }}>
                {exp.title}
              </h3>
            </div>
            <p style={{ margin: '0 0 0.2rem', color: 'rgba(0,0,0,0.6)', fontSize: '0.9rem', fontWeight: 500 }}>
              {exp.org}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'rgba(0,0,0,0.4)' }}>
                <MapPin size={12} /> {exp.location}
              </span>
              <span style={{
                fontSize: '0.75rem', fontFamily: 'monospace', background: '#F4EFE7',
                border: '1px solid rgba(143,90,57,0.12)', borderRadius: 6, padding: '2px 8px',
                color: 'rgba(0,0,0,0.5)',
              }}>
                {exp.period}
              </span>
            </div>
            <p style={{
              margin: 0, fontSize: '0.875rem', fontWeight: 500,
              color: exp.accent, background: `${exp.accent}12`,
              display: 'inline-block', padding: '3px 10px', borderRadius: 9999,
              border: `1px solid ${exp.accent}30`,
            }}>
              {exp.headline}
            </p>
          </div>

          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ flexShrink: 0, color: 'rgba(0,0,0,0.35)', marginTop: 4 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(143,90,57,0.12)',
              }}>
                {/* Stats grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}>
                  {exp.stats.map((s) => (
                    <div key={s.label} style={{
                      background: '#F4EFE7',
                      border: '1px solid rgba(143,90,57,0.12)',
                      borderRadius: 10,
                      padding: '0.85rem',
                      textAlign: 'center',
                    }}>
                      <p style={{ fontWeight: 700, fontSize: '1.3rem', margin: '0 0 0.1rem', color: exp.accent }}>
                        {s.value}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: 'rgba(0,0,0,0.5)', margin: 0 }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bullets */}
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'rgba(0,0,0,0.65)', lineHeight: 1.7 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: exp.accent, flexShrink: 0, marginTop: '0.55rem' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: 'clamp(5rem, 8vw, 8rem) clamp(1.25rem, 4vw, 2rem)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader pill="Experience" title="Work & Research" />
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
