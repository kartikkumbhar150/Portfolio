import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Achievements.css'

const achievements = [
  {
    icon: '🥇',
    title: 'Allianz Tech Championship \'25',
    subtitle: 'Winner',
    detail: 'Awarded €3,000 scholarship for an innovative technical solution.',
    color: 'gold',
    tag: 'International',
  },
  {
    icon: '🔬',
    title: 'La Trobe University Research Grant',
    subtitle: 'AU$250 Funding',
    detail: 'Received project funding from La Trobe University, Australia for AI research.',
    color: 'blue',
    tag: 'Research',
  },
  {
    icon: '🥈',
    title: 'Technology Grand Infusion Challenge 2025',
    subtitle: 'Runner Up',
    detail: 'International Level competition recognition for exceptional technical innovation.',
    color: 'silver',
    tag: 'International',
  },
  {
    icon: '🏆',
    title: 'Prakalp 2025',
    subtitle: '1st Prize',
    detail: 'Secured 1st Prize at a national-level project competition held at JSPM Tathawade.',
    color: 'violet',
    tag: 'National',
  },
  {
    icon: '👑',
    title: 'Morpheus Hackathon — SIT Lonavala',
    subtitle: 'Domain Master',
    detail: 'Won Domain Master Title at the National Level Hackathon held in SIT Lonavala.',
    color: 'cyan',
    tag: 'National',
  },
  {
    icon: '📄',
    title: 'Best Research Paper — ETFI 2026',
    subtitle: 'Award Winner',
    detail: 'IoT-Enabled Smart Umbrella for Environmental Monitoring and User Convenience.',
    color: 'green',
    tag: 'Research',
  },
  {
    icon: '💻',
    title: 'Competitive Programming',
    subtitle: 'Pupil — CodeForces',
    detail: 'Solved 450+ problems across various competitive programming platforms.',
    color: 'pink',
    tag: 'CP',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="achievements" className="achievements" ref={ref}>
      <div className="orb orb-violet achievements__orb" />
      <div className="grid-bg" />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">// achievements</span>
          <h2 className="section-title">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
          <div className="separator" />
          <p className="section-subtitle">
            A collection of wins from international competitions, national hackathons, 
            and research milestones.
          </p>
        </motion.div>

        <div className="achievements__grid">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              className={`achievements__card glass-card achievements__card--${item.color}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="achievements__card-top">
                <span className="achievements__icon">{item.icon}</span>
                <span className={`badge achievements__tag badge--${item.color}`}>{item.tag}</span>
              </div>
              <h3 className="achievements__title">{item.title}</h3>
              <span className="achievements__subtitle">{item.subtitle}</span>
              <p className="achievements__detail">{item.detail}</p>
              <div className={`achievements__glow-line achievements__glow-line--${item.color}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
