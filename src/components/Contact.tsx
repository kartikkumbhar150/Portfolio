import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import TextRotate from './TextRotate';
import FadeUp from './FadeUp';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: 'clamp(2.5rem, 4vw, 4rem) clamp(1.25rem, 4vw, 2rem)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <FadeUp>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: '0.75rem', fontWeight: 500 }}>
            Open to opportunities
          </p>
          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: 1.1,
            margin: '0 0 0.5rem',
          }}>
            {"Let's work on"}
          </h2>
          <div style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 }}>
            <TextRotate
              words={['New Projects', 'Research Ideas', 'AI Solutions', 'Full Stack Apps']}
              pillStyle
              interval={2600}
            />
          </div>
          <p style={{ maxWidth: 500, margin: '0 auto 2.5rem', fontSize: '1rem', color: 'rgba(0,0,0,0.55)', lineHeight: 1.75 }}>
            {"Have a project in mind or want to collaborate? "}
            <strong style={{ color: '#000', fontWeight: 600 }}>{"I'd love to hear from you."}</strong>
            {" Whether it's building something new or exploring research opportunities — let's talk."}
          </p>

          <motion.a
            href="mailto:kumbharkartik150@gmail.com"
            className="btn btn-primary"
            style={{ padding: '0.85rem 2.5rem', fontSize: '1rem', gap: '0.5rem', textDecoration: 'none', marginBottom: '3rem' }}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <Send size={18} />
            Get in Touch
          </motion.a>
        </FadeUp>

        {/* Contact cards */}
        <FadeUp delay={0.1}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            maxWidth: 520,
            margin: '0 auto 2rem',
          }}>
            <a href="mailto:kumbharkartik150@gmail.com" style={{ textDecoration: 'none' }}>
              <div className="card-surface" style={{ padding: '1.25rem', textAlign: 'left', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <Mail size={18} color="#8F5A39" />
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(0,0,0,0.4)', fontWeight: 600 }}>Email</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 500, color: '#000', wordBreak: 'break-all' }}>
                  kumbharkartik150@gmail.com
                </p>
              </div>
            </a>
            <a href="tel:+919322130400" style={{ textDecoration: 'none' }}>
              <div className="card-surface" style={{ padding: '1.25rem', textAlign: 'left', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <Phone size={18} color="#8F5A39" />
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(0,0,0,0.4)', fontWeight: 600 }}>Phone</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 500, color: '#000' }}>
                  +91 93221 30400
                </p>
              </div>
            </a>
          </div>
        </FadeUp>

        {/* Social icons */}
        <FadeUp delay={0.15}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
            <a href="https://github.com/kartikkumbhar150" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ width: 44, height: 44 }} aria-label="GitHub">
              <GitHubIcon size={19} />
            </a>
            <a href="https://www.linkedin.com/in/kartik-kumbhar150/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ width: 44, height: 44 }} aria-label="LinkedIn">
              <LinkedInIcon size={19} />
            </a>
            <a href="mailto:kumbharkartik150@gmail.com" className="social-icon" style={{ width: 44, height: 44 }} aria-label="Email">
              <Mail size={19} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
