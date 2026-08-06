import { motion } from 'framer-motion';
import { GitHubIcon } from './Icons';
import { ExternalLink } from 'lucide-react';
import FadeUp from './FadeUp';

const projects = [
  {
    id: 'gaia',
    title: 'GAIA',
    subtitle: 'ESG Analytics & Generative AI Platform',
    accent: '#8F5A39',
    accentLight: '#b07a55',
    links: [
      { label: 'Live', icon: <ExternalLink size={14} />, href: '#' },
      { label: 'GitHub', icon: <GitHubIcon size={14} />, href: 'https://github.com/kartikkumbhar150/gaia' },
    ],
    bullets: [
      'Built a Chrome Extension + Flask backend for real-time ESG data extraction from any webpage using LLM-powered pipelines.',
      'Integrated generative AI (Gemini API) to produce structured ESG scores, risk narratives, and actionable insights from unstructured text.',
      'Delivered quantifiable ESG metrics (Environmental, Social, Governance) with confidence scores and citation tracking.',
    ],
    tags: ['Python', 'Flask', 'Chrome Extension', 'ESG Analytics', 'Generative AI'],
  },
  {
    id: 'hirex',
    title: 'HireX',
    subtitle: 'AI-Powered Recruitment & Matching Platform',
    accent: '#3E7EA6',
    accentLight: '#6aaecf',
    links: [
      { label: 'GitHub', icon: <GitHubIcon size={14} />, href: 'https://github.com/kartikkumbhar150/hirex' },
    ],
    bullets: [
      'Full-stack recruitment platform with semantic search using Qdrant vector database for intelligent candidate-job matching powered by AI embeddings.',
      'Built microservices architecture with React frontend, Express.js API gateway, FastAPI ML service, and MongoDB data store.',
      'Implemented Redis caching for session management, Docker containerization, and JWT/OAuth for secure multi-role access control.',
    ],
    tags: ['React', 'Express', 'FastAPI', 'MongoDB', 'Redis', 'Qdrant', 'Docker', 'AI/ML'],
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: 'clamp(5rem, 8vw, 8rem) clamp(1.25rem, 4vw, 2rem)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Custom header */}
        <FadeUp>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{
                display: 'inline-block',
                fontSize: 13, fontWeight: 600,
                background: '#F4EFE7', color: '#8F5A39',
                border: '1px solid rgba(143,90,57,0.3)',
                borderRadius: 9999, padding: '4px 14px',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                Projects
              </span>
              <h2 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                lineHeight: 1.1, margin: 0,
              }}>
                Featured Projects
              </h2>
            </div>
            <a
              href="https://github.com/kartikkumbhar150"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', textDecoration: 'none', gap: '0.4rem' }}
            >
              <GitHubIcon size={15} /> View All
            </a>
          </div>
        </FadeUp>

        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((p) => (
            <FadeUp key={p.id}>
              <div className="card-surface" style={{ overflow: 'hidden' }}>
                {/* Accent gradient bar */}
                <div style={{
                  height: 3,
                  background: `linear-gradient(90deg, ${p.accent}, ${p.accentLight})`,
                }} />

                <div style={{ padding: '1.75rem 2rem' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                    <div>
                      <h3 style={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontWeight: 700, fontSize: '1.4rem', margin: '0 0 0.2rem', color: p.accent,
                      }}>
                        {p.title}
                      </h3>
                      <p style={{ margin: 0, color: 'rgba(0,0,0,0.55)', fontSize: '0.9rem' }}>
                        {p.subtitle}
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                      {p.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', textDecoration: 'none', gap: '0.35rem' }}
                        >
                          {link.icon} {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul style={{ listStyle: 'none', margin: '0 0 1.25rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {p.bullets.map((b, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'rgba(0,0,0,0.65)', lineHeight: 1.7 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.accent, flexShrink: 0, marginTop: '0.55rem' }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.tags.map((tag) => (
                      <span key={tag} className="tech-tag" style={{ padding: '3px 10px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Mobile view all */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <motion.a
            href="https://github.com/kartikkumbhar150"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: '0.65rem 1.5rem', fontSize: '0.875rem', textDecoration: 'none', gap: '0.4rem' }}
            whileHover={{ y: -1 }}
          >
            <GitHubIcon size={16} /> View all projects on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}
