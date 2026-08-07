import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ChevronDown, MapPin, Calendar, BookOpen, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';

const details = [
  { label: 'Degree', value: 'B.E. Computer Engineering', icon: <BookOpen size={14} /> },
  { label: 'Duration', value: '2023 – 2027', icon: <Calendar size={14} /> },
  { label: 'CGPA', value: '9.22 / 10', icon: <Star size={14} /> },
  { label: 'Location', value: 'Pune, Maharashtra', icon: <MapPin size={14} /> },
  { label: 'Status', value: 'Currently Enrolled', icon: null },
  { label: 'Focus Areas', value: 'AI/ML, Full Stack, Systems', icon: null },
];

export default function Education() {
  const [open, setOpen] = useState(false);

  return (
    <section id="education" style={{ padding: 'clamp(2.5rem, 4vw, 4rem) clamp(1.25rem, 4vw, 2rem)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader pill="Education" title="Academic Background" />

        <FadeUp>
          <div
            className="card-surface"
            style={{ maxWidth: 760, margin: '0 auto', padding: '2rem', cursor: 'pointer' }}
            onClick={() => setOpen((o) => !o)}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
              {/* Icon tile */}
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: '#F4EFE7', border: '1px solid rgba(143,90,57,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <GraduationCap size={24} color="#8F5A39" />
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  margin: '0 0 0.2rem',
                }}>
                  Bachelor of Engineering (B.E.)
                </h3>
                <p style={{ margin: '0 0 0.25rem', color: 'rgba(0,0,0,0.6)', fontSize: '0.9rem' }}>
                  Dr. D. Y. Patil Institute of Technology, Pune
                </p>
                <p style={{ margin: '0 0 0.75rem', color: 'rgba(0,0,0,0.45)', fontSize: '0.85rem' }}>
                  Computer Engineering
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '0.8rem', fontFamily: 'monospace',
                    color: 'rgba(0,0,0,0.5)', background: '#F4EFE7',
                    border: '1px solid rgba(143,90,57,0.12)',
                    borderRadius: 6, padding: '2px 8px',
                  }}>
                    2023 – 2027
                  </span>
                  <span style={{
                    fontSize: '0.8rem', background: '#A6D7F0',
                    border: '1px solid #7bbde0', borderRadius: 9999,
                    padding: '2px 10px', fontWeight: 600, color: '#000',
                  }}>
                    9.22 CGPA
                  </span>
                </div>
              </div>

              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ flexShrink: 0, color: 'rgba(0,0,0,0.35)' }}
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
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: '1rem',
                  }}>
                    {details.map((d) => (
                      <div key={d.label} style={{
                        background: '#F4EFE7',
                        border: '1px solid rgba(143,90,57,0.12)',
                        borderRadius: 10,
                        padding: '0.85rem 1rem',
                      }}>
                        <p style={{ fontSize: '0.72rem', color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 0.3rem' }}>
                          {d.label}
                        </p>
                        <p style={{ fontSize: '0.9rem', fontWeight: 500, color: '#000', margin: 0 }}>
                          {d.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
