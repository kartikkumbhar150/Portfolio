import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Experience.css'

const experiences = [
  {
    role: 'Research Project',
    company: 'La Trobe University, Australia',
    period: 'Jan 2025 – Jan 2026',
    type: 'Research',
    color: 'blue',
    points: [
      'Developed an AI-driven detection system achieving 80% accuracy, improving performance by 70% over traditional methods.',
      'Implemented and optimized ML models (SVM, Random Forest, Neural Networks) using Python, Scikit-learn, and PyTorch with advanced preprocessing and hyperparameter tuning, boosting precision and recall by 18%.',
      'Designed an end-to-end ML pipeline for data ingestion, feature engineering, model training, and evaluation, enabling automated retraining and consistent performance across datasets.',
    ],
    tags: ['Python', 'PyTorch', 'Scikit-learn', 'ML Pipeline', 'Neural Networks'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Auriquant Designs',
    period: 'Jan 2026 – Mar 2026',
    type: 'Internship',
    color: 'violet',
    points: [
      'Built a full-stack restaurant platform using Flutter and Spring Boot microservices to manage menus, orders, billing, and reservations, delivering a scalable and modular architecture.',
      'Implemented secure RBAC authentication (Spring Security + JWT) and real-time order tracking via WebSockets, improving workflow transparency and coordination across restaurant staff.',
      'Reduced API response time by 40% using Redis caching and automated ordering, billing, and analytics workflows, cutting manual operations by 70%.',
    ],
    tags: ['Flutter', 'Spring Boot', 'Redis', 'WebSockets', 'JWT', 'RBAC'],
  },
]

function ExperienceCard({ exp, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="experience__item"
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      {/* Timeline dot */}
      <div className="experience__timeline">
        <motion.div
          className={`experience__dot experience__dot--${exp.color}`}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: 'spring' }}
        />
        {index < experiences.length - 1 && <div className="experience__line" />}
      </div>

      {/* Card */}
      <div className={`experience__card glass-card experience__card--${exp.color}`}>
        <div className="experience__card-header">
          <div>
            <div className="experience__meta">
              <span className={`badge badge--exp-${exp.color}`}>{exp.type}</span>
              <span className="experience__period">{exp.period}</span>
            </div>
            <h3 className="experience__role">{exp.role}</h3>
            <p className="experience__company">{exp.company}</p>
          </div>
        </div>

        <ul className="experience__points">
          {exp.points.map((point, i) => (
            <motion.li
              key={i}
              className="experience__point"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2 + i * 0.1 }}
            >
              <span className="experience__point-dot" />
              <span dangerouslySetInnerHTML={{
                __html: point
                  .replace(/(\d+%)/g, '<strong class="highlight-num">$1</strong>')
                  .replace(/(80% accuracy|70%|18%|40%|70% cutting)/g, '<strong class="highlight-num">$1</strong>')
              }} />
            </motion.li>
          ))}
        </ul>

        <div className="experience__tags">
          {exp.tags.map(tag => (
            <span key={tag} className={`badge badge--exp-${exp.color}`}>{tag}</span>
          ))}
        </div>

        <div className={`experience__border-glow experience__border-glow--${exp.color}`} />
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="orb orb-cyan experience__orb" />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">// experience</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <div className="separator" />
          <p className="section-subtitle">
            Research & industry experience building AI systems and full-stack platforms.
          </p>
        </motion.div>

        <div className="experience__list">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.role} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
