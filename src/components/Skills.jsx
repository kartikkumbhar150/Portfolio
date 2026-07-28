import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    icon: '⌨️',
    color: 'blue',
    skills: ['Java', 'Python'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'cyan',
    skills: ['React', 'Flutter', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'violet',
    skills: ['Spring Boot', 'FastAPI', 'Express.js', 'WebSockets'],
  },
  {
    category: 'AI & ML',
    icon: '🤖',
    color: 'green',
    skills: ['PyTorch', 'Scikit-learn', 'Deep Learning', 'LLMs', 'NLP'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: 'pink',
    skills: ['Docker', 'AWS', 'Redis', 'MongoDB', 'Qdrant'],
  },
  {
    category: 'Developer Tools',
    icon: '🛠️',
    color: 'gold',
    skills: ['VS Code', 'Git/GitHub', 'Postman', 'Jupyter', 'Android Studio'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="orb orb-violet skills__orb" />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">// tech stack</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="separator" />
          <p className="section-subtitle">
            Tools, languages, and frameworks I work with across the full stack.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className={`skills__group glass-card skills__group--${group.color}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="skills__group-header">
                <span className="skills__group-icon">{group.icon}</span>
                <h3 className={`skills__group-title skills__group-title--${group.color}`}>
                  {group.category}
                </h3>
              </div>
              <div className="skills__pills">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className={`skills__pill skills__pill--${group.color}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.06 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
