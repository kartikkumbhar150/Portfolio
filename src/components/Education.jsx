import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Education.css'

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="education" className="education" ref={ref}>
      <div className="orb orb-blue education__orb" />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">// education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <div className="separator" />
        </motion.div>

        <motion.div
          className="education__card glass-card"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -4 }}
        >
          <div className="education__card-inner">
            <div className="education__left">
              <div className="education__logo">
                <span className="education__logo-text">DYPIT</span>
              </div>
            </div>

            <div className="education__right">
              <div className="education__meta">
                <span className="badge">2023 – 2027</span>
                <span className="badge violet">Pune, Maharashtra</span>
              </div>

              <h3 className="education__degree">
                Bachelor of Engineering
              </h3>
              <p className="education__field">Computer Engineering</p>
              <p className="education__uni">Dr. D.Y. Patil Institute of Technology</p>

              <div className="education__stats">
                <div className="education__gpa">
                  <div className="education__gpa-ring">
                    <svg viewBox="0 0 100 100" className="education__gpa-svg">
                      <defs>
                        <linearGradient id="gpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f07b3f" />
                          <stop offset="50%" stopColor="#ff9e68" />
                          <stop offset="100%" stopColor="#e8823a" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="40" className="education__gpa-bg" />
                      <motion.circle
                        cx="50" cy="50" r="40"
                        className="education__gpa-fill"
                        stroke="url(#gpaGradient)"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={inView ? { strokeDashoffset: 251.2 * (1 - 9.16 / 10) } : {}}
                        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                      />
                    </svg>
                    <div className="education__gpa-value">
                      <span className="education__gpa-num">9.16</span>
                      <span className="education__gpa-label">GPA</span>
                    </div>
                  </div>
                </div>

                <div className="education__highlights">
                  {[
                    { icon: '🏆', text: '6+ Awards & Recognitions' },
                    { icon: '🔬', text: 'Research at La Trobe University' },
                    { icon: '💻', text: '450+ CP Problems Solved' },
                    { icon: '🌏', text: 'International Competitions' },
                  ].map((item) => (
                    <div key={item.text} className="education__highlight-item">
                      <span className="education__highlight-icon">{item.icon}</span>
                      <span className="education__highlight-text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="education__glow-border" />
        </motion.div>
      </div>
    </section>
  )
}
