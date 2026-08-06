import { motion } from 'framer-motion';
import { Phone, Mail, Send } from 'lucide-react';
import TextRotate from './TextRotate';
import { GitHubIcon, LinkedInIcon } from './Icons';

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  },
};

const photoVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' as const, delay: 0.3 } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(5rem, 8vw, 8rem) clamp(1.25rem, 4vw, 2rem)',
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
        gap: '4rem',
        alignItems: 'center',
        width: '100%',
      }} className="hero-grid">
        {/* Left Column */}
        <motion.div variants={stagger.container} initial="hidden" animate="show">
          <motion.p variants={stagger.item} style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: 'rgba(0,0,0,0.5)',
            marginBottom: '0.25rem',
          }}>
            Hi, I&apos;m
          </motion.p>

          <motion.h1 variants={stagger.item} style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.08,
            color: '#000',
            margin: '0 0 0.75rem',
          }}>
            Kartik Kumbhar
          </motion.h1>

          <motion.div variants={stagger.item} style={{ marginBottom: '1.5rem' }}>
            <TextRotate
              words={['Full Stack Developer', 'AI & ML Engineer', 'Hackathon Winner', 'Research Contributor']}
              pillStyle
              interval={2800}
              className="text-base font-medium"
            />
          </motion.div>

          <motion.p variants={stagger.item} style={{
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'rgba(0,0,0,0.6)',
            maxWidth: 520,
            marginBottom: '2rem',
          }}>
            Computer Engineering student at{' '}
            <strong style={{ color: '#000', fontWeight: 600 }}>Dr. D. Y. Patil Institute of Technology, Pune</strong>
            {' '}building with{' '}
            <strong style={{ color: '#000', fontWeight: 600 }}>React, Spring Boot, and AI/ML</strong>
            {' '}— a{' '}
            <strong style={{ color: '#8F5A39', fontWeight: 600 }}>national &amp; international hackathon winner</strong>
            {' '}and published researcher.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={stagger.item} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem', gap: '0.5rem', textDecoration: 'none' }}
            >
              <Send size={16} />
              Contact Me
            </a>
            <a
              href="/kartik-kumbhar-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}
            >
              View Resume
            </a>
          </motion.div>

          {/* Contact row */}
          <motion.div variants={stagger.item} style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+917498003049" style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              color: '#8F5A39', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500,
            }}>
              <Phone size={15} />
              +91 74980 03049
            </a>
            <a href="mailto:kartikkumbhar1811@gmail.com" style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              color: '#8F5A39', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500,
            }}>
              <Mail size={15} />
              kartikkumbhar1811@gmail.com
            </a>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a
                href="https://github.com/kartikkumbhar150"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ width: 36, height: 36 }}
                aria-label="GitHub"
              >
                <GitHubIcon size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/kartik-kumbhar150/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ width: 36, height: 36 }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={17} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column — Cascading Photo Frame */}
        <motion.div
          variants={photoVariants}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{ position: 'relative', width: 320, height: 380 }}>
            {/* Offset borders */}
            <div style={{
              position: 'absolute',
              inset: 0,
              border: '2px solid rgba(143,90,57,0.18)',
              borderRadius: 20,
              transform: 'translate(20px, 20px)',
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              border: '2px solid rgba(143,90,57,0.1)',
              borderRadius: 20,
              transform: 'translate(10px, 10px)',
            }} />
            {/* Main photo */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(143,90,57,0.12)',
              background: '#ede5d8',
            }}>
              <img
                src="/me.jpg"
                alt="Kartik Kumbhar"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=760&fit=crop&auto=format';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > *:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
