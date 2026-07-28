import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const roles = [
  'Full Stack Developer',
  'AI/ML Researcher',
  'Competitive Programmer',
  'Open Source Enthusiast',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = isDeleting ? 40 : 80

    const timeout = setTimeout(() => {
      if (!isDeleting && displayed === current) {
        setTimeout(() => setIsDeleting(true), 1800)
      } else if (isDeleting && displayed === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      } else {
        setDisplayed(prev =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        )
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }
  }

  return (
    <section id="hero" className="hero">
      {/* Animated mesh background */}
      <div className="hero__mesh" />
      <div className="grid-bg" />

      {/* Floating orbs */}
      <motion.div
        className="orb orb-blue hero__orb hero__orb--1"
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-violet hero__orb hero__orb--2"
        animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="orb orb-cyan hero__orb hero__orb--3"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="section-tag hero__tag">
              <span className="hero__tag-dot" /> Available for opportunities
            </span>
          </motion.div>

          <motion.h1 className="hero__name" variants={itemVariants}>
            Kartik<br />
            <span className="gradient-text">Kumbhar</span>
          </motion.h1>

          <motion.div className="hero__role" variants={itemVariants}>
            <span className="hero__role-prefix">I&apos;m a&nbsp;</span>
            <span className="hero__typewriter">
              {displayed}
              <span className="hero__cursor" />
            </span>
          </motion.div>

          <motion.p className="hero__bio" variants={itemVariants}>
            B.E. Computer Engineering student at Dr. D.Y. Patil Institute of Technology 
            (GPA: 9.16/10), award-winning developer, AI/ML researcher at La Trobe University, 
            and competitive programmer with 450+ problems solved.
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <a href="#projects" className="btn-primary" onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              View My Work
            </a>
            <a href="mailto:kumbharkartik150@gmail.com" className="btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get In Touch
            </a>
          </motion.div>

          <motion.div className="hero__stats" variants={itemVariants}>
            {[
              { value: '9.16', label: 'GPA', suffix: '/10' },
              { value: '450+', label: 'Problems Solved', suffix: '' },
              { value: '€3K', label: 'Scholarship Won', suffix: '' },
              { value: '2+', label: 'Research Projects', suffix: '' },
            ].map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <span className="hero__stat-value">
                  {stat.value}<span className="hero__stat-suffix">{stat.suffix}</span>
                </span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side avatar/visual */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__avatar-ring">
            <div className="hero__avatar-ring--outer" />
            <div className="hero__avatar-ring--inner" />
            <div className="hero__avatar">
              <span className="hero__avatar-initials">KK</span>
              <div className="hero__avatar-glow" />
            </div>
          </div>

          {/* Floating achievement badges */}
          <motion.div
            className="hero__floating-badge hero__floating-badge--1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="badge green">🏆 Allianz Winner</span>
          </motion.div>

          <motion.div
            className="hero__floating-badge hero__floating-badge--2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className="badge violet">🔬 La Trobe Research</span>
          </motion.div>

          <motion.div
            className="hero__floating-badge hero__floating-badge--3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <span className="badge cyan">💻 450+ CF Problems</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="hero__scroll-dot"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
