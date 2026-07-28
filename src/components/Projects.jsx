import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Projects.css'

const projects = [
  {
    title: 'GAIA — Generative AI Impact Analytics',
    subtitle: 'Real-Time CO₂ Tracking & ESG Optimization Platform',
    emoji: '🌍',
    status: 'Live',
    color: 'green',
    description: 'A sustainability-focused framework for Generative AI, enabling measurable reductions in token usage through prompt optimization and real-time multi-platform AI tracking.',
    points: [
      'Reduced token usage by 15%+ through prompt optimization and usage monitoring.',
      'Chrome Extension + Flask backend with low-latency real-time multi-platform tracking.',
      'ESG analytics dashboard with actionable CO₂ insights for enterprise-scale compliance.',
    ],
    tags: ['Python', 'Flask', 'Chrome Extension', 'React', 'ESG Analytics'],
    gradient: 'linear-gradient(135deg, rgba(0,255,200,0.08), rgba(0,212,255,0.05))',
    border: 'rgba(0, 255, 200, 0.2)',
  },
  {
    title: 'HireX',
    subtitle: 'AI-Powered Professional Networking Platform',
    emoji: '🤝',
    status: 'Built',
    color: 'blue',
    description: 'A scalable full-stack professional networking platform with AI-based identity verification, real-time communication, QR events, and hiring workflows.',
    points: [
      'Scalable platform using React, Express, FastAPI, MongoDB, Redis, and Qdrant.',
      'AI-based identity verification pipeline with face liveness detection & vector similarity.',
      'JWT/OAuth auth, WebSockets, QR-based event systems, and Dockerized deployment.',
    ],
    tags: ['React', 'FastAPI', 'MongoDB', 'Redis', 'Docker', 'Qdrant', 'WebSockets'],
    gradient: 'linear-gradient(135deg, rgba(79,142,247,0.08), rgba(162,89,255,0.05))',
    border: 'rgba(79, 142, 247, 0.2)',
  },
]

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className={`projects__card glass-card projects__card--${project.color}`}
      style={{ background: project.gradient }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      whileHover={{ y: -6 }}
    >
      {/* Header */}
      <div className="projects__card-header">
        <div className="projects__card-icon">{project.emoji}</div>
        <div className="projects__card-header-right">
          <span className={`projects__status projects__status--${project.color}`}>
            <span className="projects__status-dot" />
            {project.status}
          </span>
          <a href="#" className="projects__github" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      <h3 className="projects__title">{project.title}</h3>
      <p className="projects__subtitle">{project.subtitle}</p>
      <p className="projects__description">{project.description}</p>

      <ul className="projects__points">
        {project.points.map((p, i) => (
          <li key={i} className="projects__point">
            <span className={`projects__point-bullet projects__point-bullet--${project.color}`}>▸</span>
            {p}
          </li>
        ))}
      </ul>

      <div className="projects__tags">
        {project.tags.map(tag => (
          <span key={tag} className={`badge badge--proj-${project.color}`}>{tag}</span>
        ))}
      </div>

      <div className={`projects__glow-border projects__glow-border--${project.color}`} />
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="orb orb-blue projects__orb" />
      <div className="grid-bg" />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">// featured projects</span>
          <h2 className="section-title">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <div className="separator" />
          <p className="section-subtitle">
            Full-stack platforms, AI systems, and sustainability tools built from scratch.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
