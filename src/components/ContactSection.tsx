// ContactSection – CTA with rotating title, invite text, Bronze button
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './icons';
import TextRotate from './TextRotate';
import FadeUp from './FadeUp';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-8 w-full flex justify-center">
      <FadeUp>
        <div className="max-w-3xl w-full flex flex-col items-center gap-12 md:gap-16 text-center">
          {/* Animated heading */}
          <div className="flex flex-col gap-6 md:gap-8 w-full">
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: '"Playfair Display", serif', color: '#000' }}
            >
              Let's work on
            </h2>
            <div className="flex justify-center">
              <TextRotate words={['New Projects', 'Research Ideas', 'AI Solutions', 'Full Stack Apps']} />
            </div>
          </div>

          <p className="text-base md:text-lg leading-[1.7] max-w-xl mx-auto" style={{ color: 'rgba(0,0,0,0.58)' }}>
            Whether you have a research collaboration, a full-stack project, or just want to connect —{' '}
            <span className="font-semibold" style={{ color: '#000' }}>I'd love to hear from you.</span>
          </p>

          {/* CTA Button */}
          <motion.a
            href="mailto:kumbharkartik150@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all"
            style={{ background: '#8F5A39', border: '2px solid #6b4229', boxShadow: '0 4px 20px rgba(143,90,57,0.35)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(143,90,57,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            <Send className="w-5 h-5" />
            Get in Touch
          </motion.a>

          {/* Contact details grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md mx-auto w-full"
          >
            <a
              href="mailto:kumbharkartik150@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl transition-all"
              style={{ background: '#fff', border: '1px solid rgba(143,90,57,0.2)', color: '#000' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#8F5A39')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(143,90,57,0.2)')}
            >
              <Mail className="w-5 h-5 shrink-0" style={{ color: '#8F5A39' }} />
              <span className="text-sm truncate">kumbharkartik150@gmail.com</span>
            </a>
            <a
              href="tel:+919322130400"
              className="flex items-center gap-3 p-4 rounded-xl transition-all"
              style={{ background: '#fff', border: '1px solid rgba(143,90,57,0.2)', color: '#000' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#8F5A39')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(143,90,57,0.2)')}
            >
              <Phone className="w-5 h-5 shrink-0" style={{ color: '#8F5A39' }} />
              <span className="text-sm">+91 93221 30400</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-6">
            {[
              { href: 'https://github.com/kartikkumbhar150', label: 'GitHub', icon: <GitHubIcon className="w-5 h-5" /> },
              { href: 'https://www.linkedin.com/in/kartik-kumbhar150/', label: 'LinkedIn', icon: <LinkedInIcon className="w-5 h-5" /> },
              { href: 'mailto:kumbharkartik150@gmail.com', label: 'Email', icon: <Mail className="w-5 h-5" /> },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid rgba(143,90,57,0.3)', background: '#F4EFE7', color: '#8F5A39' }}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#8F5A39';
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#F4EFE7';
                  (e.currentTarget as HTMLElement).style.color = '#8F5A39';
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
