// ExperienceSection – single-row card layout: logo tile left, title/org/location
// center, period + headline stat on the right, chevron to expand full detail.
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FlaskConical, Code2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';

interface Stat {
  value: string;
  label: string;
}

interface Experience {
  title: string;
  org: string;
  location: string;
  period: string;
  type: string;
  accent: string; // per-type accent color, drives icon tile + headline stat pill
  icon: React.ReactNode;
  stats: Stat[];
  bullets: string[];
}

const RESEARCH = '#8F5A39';
const ENGINEERING = '#3E7EA6';

const EXPERIENCES: Experience[] = [
  {
    title: 'Research Project: Learning Disabilities in Children',
    org: 'La Trobe University',
    location: 'Australia',
    period: 'Jan 2025 – Jan 2026',
    type: 'Research',
    accent: RESEARCH,
    icon: <FlaskConical className="w-8 h-8" style={{ color: RESEARCH }} />,
    stats: [
      { value: '80%', label: 'detection accuracy' },
      { value: '70%', label: 'over traditional methods' },
      { value: '+18%', label: 'precision & recall' },
    ],
    bullets: [
      'Developed an AI-driven detection system achieving 80% accuracy — a 70% improvement over traditional methods.',
      'Implemented and optimized ML models (SVM, Random Forest, Neural Networks) using Python, Scikit-learn, and PyTorch with advanced preprocessing and hyperparameter tuning, boosting precision and recall by 18%.',
      'Designed an end-to-end ML pipeline for data ingestion, feature engineering, model training, and evaluation, enabling automated retraining and consistent performance.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    org: 'Auriquant Designs',
    location: 'Remote',
    period: 'Jan 2026 – Mar 2026',
    type: 'Internship',
    accent: ENGINEERING,
    icon: <Code2 className="w-8 h-8" style={{ color: ENGINEERING }} />,
    stats: [
      { value: '40%', label: 'faster API response' },
      { value: '70%', label: 'less manual ops' },
      { value: 'RT', label: 'order tracking via sockets' },
    ],
    bullets: [
      'Built a full-stack restaurant platform using Flutter and Spring Boot microservices to manage menus, orders, billing, and reservations.',
      'Implemented secure RBAC authentication (Spring Security + JWT) and real-time order tracking via WebSockets.',
      'Reduced API response time by 40% using Redis caching and automated ordering/billing/analytics workflows, cutting manual operations by 70%.',
    ],
  },
];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const headline = exp.stats[0];

  return (
    <FadeUp delay={index * 0.12}>
      <motion.div
        className="relative overflow-hidden rounded-2xl cursor-pointer"
        style={{
          background: '#fff',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        }}
        whileHover={{ y: -3, boxShadow: `0 10px 32px ${exp.accent}22` }}
        transition={{ duration: 0.25 }}
        onClick={() => setExpanded((e) => !e)}
      >
        <div className="p-8 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-7 sm:gap-8">
            {/* Logo / icon tile */}
            <div
              className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center overflow-hidden"
              style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)' }}
            >
              {exp.icon}
            </div>

            {/* Title / org / location */}
            <div className="flex-1 min-w-0">
              <h3
                className="text-xl md:text-2xl font-bold leading-snug"
                style={{ fontFamily: '"Playfair Display", serif', color: '#000' }}
              >
                {exp.title}
              </h3>
              <p className="text-base md:text-lg mt-1" style={{ color: 'rgba(0,0,0,0.6)' }}>
                {exp.org}
              </p>
              <p className="text-sm mt-0.5" style={{ color: 'rgba(0,0,0,0.4)' }}>
                {exp.location}
              </p>
            </div>

            {/* Meta: period + headline stat, chevron alongside */}
            <div className="flex items-start gap-3 sm:self-center shrink-0">
              <div className="flex flex-col items-end gap-2">
                <span
                  className="text-sm font-mono px-3 py-1.5 rounded-lg whitespace-nowrap"
                  style={{
                    color: 'rgba(0,0,0,0.55)',
                    background: 'rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  {exp.period}
                </span>
                <span
                  className="text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                  style={{
                    color: exp.accent,
                    background: `${exp.accent}12`,
                    border: `1px solid ${exp.accent}33`,
                  }}
                >
                  {headline.value} {headline.label}
                </span>
              </div>
              <ChevronDown
                className="w-5 h-5 mt-1 shrink-0 transition-transform duration-300"
                style={{ color: exp.accent, transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Expanded detail */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="mt-6 pt-6 grid grid-cols-3 gap-3 md:gap-4"
              style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
            >
              {exp.stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <div
                    className="text-lg md:text-xl font-bold font-mono leading-none"
                    style={{ color: exp.accent }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[11px] md:text-xs mt-1 leading-tight"
                    style={{ color: 'rgba(0,0,0,0.5)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm md:text-base leading-[1.7]"
                  style={{ color: 'rgba(0,0,0,0.7)' }}
                >
                  <span
                    className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                    style={{ background: exp.accent }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </FadeUp>
  );
}

export default function ExperienceSection() {
  return (
    <section className="py-32 md:py-44 px-5 md:px-8">
      <FadeUp>
        <SectionHeader
          pill="Experience"
          title="Work & Research"
          subtitle="My professional journey in technology, research, and development."
        />
      </FadeUp>

      <div className="max-w-5xl mx-auto mt-12 space-y-8 md:space-y-10">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={exp.title} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}