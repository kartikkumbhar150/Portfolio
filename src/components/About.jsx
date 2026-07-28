import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

const highlights = [
  { icon: '🎓', label: 'GPA', value: '9.16/10', color: 'blue' },
  { icon: '💻', label: 'Problems Solved', value: '450+', color: 'violet' },
  { icon: '🏆', label: 'Awards Won', value: '6+', color: 'cyan' },
  { icon: '🔬', label: 'Research Projects', value: '2', color: 'green' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
  }

  return (
    <section id="about" className="about" ref={ref}>
      <div className="orb orb-blue about__orb" />

      <div className="container">
        <motion.div
          className="about__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left — Bio */}
          <motion.div className="about__left" variants={itemVariants}>
            <span className="section-tag">// about me</span>
            <h2 className="section-title">
              Crafting <span className="gradient-text">Experiences</span><br />
              Through Code
            </h2>
            <div className="separator" />

            <p className="about__bio">
              I&apos;m <strong>Kartik Kumbhar</strong>, a third-year Computer Engineering 
              student at Dr. D.Y. Patil Institute of Technology, Pune — passionate about 
              building things that matter.
            </p>
            <p className="about__bio">
              From winning the <strong>Allianz Tech Championship &apos;25</strong> with a 
              €3,000 scholarship to conducting AI research for <strong>La Trobe University, 
              Australia</strong>, I blend deep technical expertise with a competitive edge.
            </p>
            <p className="about__bio">
              When I&apos;m not building full-stack platforms or training ML models, 
              you&apos;ll find me grinding competitive programming problems or contributing 
              to open-source projects.
            </p>

            <div className="about__socials">
              <a href="mailto:kumbharkartik150@gmail.com" className="about__social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                kumbharkartik150@gmail.com
              </a>
              <a href="tel:+919322130400" className="about__social-link" aria-label="Phone">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.09 6.09l1.08-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 93221 30400
              </a>
            </div>
          </motion.div>

          {/* Right — Stat cards */}
          <div className="about__right">
            <div className="about__highlights">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className={`about__highlight glass-card about__highlight--${item.color}`}
                  variants={itemVariants}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <span className="about__highlight-icon">{item.icon}</span>
                  <span className="about__highlight-value">{item.value}</span>
                  <span className="about__highlight-label">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Code snippet decoration */}
            <motion.div className="about__code-card glass-card" variants={itemVariants}>
              <div className="about__code-header">
                <span className="about__code-dot" style={{ background: '#ff5f56' }} />
                <span className="about__code-dot" style={{ background: '#ffbd2e' }} />
                <span className="about__code-dot" style={{ background: '#27c93f' }} />
                <span className="about__code-filename">kartik.json</span>
              </div>
              <pre className="about__code-body">
                <code>
{`{
  "name": "Kartik Kumbhar",
  "role": "Full Stack Dev + AI/ML",
  "gpa": 9.16,
  "location": "Pune, India",
  "open_to_work": true,
  "passions": [
    "AI Research",
    "Competitive Programming",
    "Building Cool Stuff"
  ]
}`}
                </code>
              </pre>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
