import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Code2, ChevronDown, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';
import latrobeLogo from '../assets/latrobe_logo.png';
import auriquantLogo from '../assets/auriquant_logo.jpg';

type ExperienceItem = {
  id: string;
  icon: React.ReactNode;
  accent: string;
  accentBg: string;
  title: string;
  org: string;
  location: string;
  period: string;
  headline?: string;
  bullets: string[];
  stats?: { label: string; value: string }[];
};

const experiences: ExperienceItem[] = [
  {
    id: 'research',
    icon: <img src={latrobeLogo} alt="La Trobe" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />,
    accent: '#8F5A39',
    accentBg: '#F4EFE7',
    title: 'Research Project',
    org: 'La Trobe University',
    location: 'Remote',
    period: 'Jan 2025 – Jan 2026',
    bullets: [
      'Developed an AI-powered early screening platform for detecting learning disabilities such as ADHD, Dyslexia, Dyscalculia, and Dysgraphia using multimodal behavioral analysis.',
      'Integrated EEG signals, eye-tracking, speech analysis, and gameplay interactions to extract cognitive and behavioral features for accurate disability assessment.',
      'Built a gamified web application using Next.js, TypeScript, Tailwind CSS, and Python (FastAPI/Flask) to make screening engaging and child-friendly while collecting high-quality data.',
      'Implemented machine learning models for feature extraction, classification, and personalized risk prediction, generating comprehensive assessment reports and recommendations.',
      'Designed a personalized intervention system that provides AI-driven learning plans, progress tracking, and expert-guided support to improve learning outcomes for children.',
      'Tech Stack: Next.js, TypeScript, Tailwind CSS, Python, FastAPI/Flask, TensorFlow/PyTorch, Scikit-learn, MediaPipe, OpenCV, PostgreSQL/MongoDB, Vercel.',
    ],
  },
  {
    id: 'internship',
    icon: <img src={auriquantLogo} alt="Auriquant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />,
    accent: '#3E7EA6',
    accentBg: '#e8f4fb',
    title: 'Intern',
    org: 'Auriquant Designs',
    location: 'Remote',
    period: 'Jan 2026 – Mar 2026',
    bullets: [
      'Built cross-platform mobile app features using Flutter with a Spring Boot microservices backend, reducing API response time by 40%.',
      'Implemented RBAC and JWT-based authentication system, automating access control and reducing manual ops by 70%.',
      'Integrated Redis caching for real-time order tracking and session management, significantly improving throughput under load.',
    ],
  },
];

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
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
            flexShrink: 0, overflow: 'hidden',
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
            {exp.headline && (
              <p style={{
                margin: 0, fontSize: '0.875rem', fontWeight: 500,
                color: exp.accent, background: `${exp.accent}12`,
                display: 'inline-block', padding: '3px 10px', borderRadius: 9999,
                border: `1px solid ${exp.accent}30`,
              }}>
                {exp.headline}
              </p>
            )}
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
                {exp.stats && exp.stats.length > 0 && (
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
                )}

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
    <section id="experience" style={{ padding: 'clamp(2.5rem, 4vw, 4rem) clamp(1.25rem, 4vw, 2rem)' }}>
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
