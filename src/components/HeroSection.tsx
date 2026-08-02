// HeroSection.tsx
import { motion } from 'framer-motion';
import { Mail, FileText, Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './icons';
import TextRotate from './TextRotate';
import mePhoto from '../assets/me.jpg';

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/kartikkumbhar150',
    label: 'GitHub',
    icon: <GitHubIcon className="w-5 h-5" />,
  },
  {
    href: 'https://linkedin.com/in/kartik-kumbhar',
    label: 'LinkedIn',
    icon: <LinkedInIcon className="w-5 h-5" />,
  },
];

const containerVariants: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 flex items-center overflow-hidden">
      {/* 
        Adjusted grid columns for better balance and significantly increased the gap 
        Removed the weird translate-x-8 that threw off centering
      */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">

        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col space-y-8 md:space-y-10" // Increased vertical spacing
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header text block */}
          <motion.div className="flex-1 min-w-0 text-center lg:text-left" variants={itemVariants}>
            <h1
              className="text-lg sm:text-3xl md:text-4xl font-semibold mb-2"
              style={{ color: 'rgba(0,0,0,0.45)', fontFamily: '"Playfair Display", serif' }}
            >
              Hi, I'm
            </h1>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: '"Playfair Display", serif', color: '#000' }}
            >
              Kartik Kumbhar
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 font-semibold mt-4 text-base md:text-xl">
              <TextRotate words={['Full Stack Developer', 'AI & ML Engineer', 'Hackathon Winner', 'Research Contributor']} />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants}>
            <p
              className="text-base md:text-lg text-center lg:text-left leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ color: 'rgba(0,0,0,0.58)' }}
            >
              Computer Engineering student at{' '}
              <span className="font-semibold" style={{ color: '#000' }}>
                Dr. D. Y. Patil Institute of Technology
              </span>{' '}
              with strong foundations in full-stack development, machine learning, and AI. Experienced in
              building scalable platforms with{' '}
              <span className="font-semibold" style={{ color: '#000' }}>Flutter</span>,{' '}
              <span className="font-semibold" style={{ color: '#000' }}>Spring Boot</span>,{' '}
              <span className="font-semibold" style={{ color: '#000' }}>React</span>, and{' '}
              <span className="font-semibold" style={{ color: '#000' }}>PyTorch</span>. Multiple{' '}
              <span className="font-semibold" style={{ color: '#8F5A39' }}>
                national &amp; international hackathon winner
              </span>{' '}
              and research contributor with publications and funded projects.
            </p>
          </motion.div>

          {/* CTA + Contacts */}
          <motion.div
            className="flex flex-col items-center lg:items-start gap-6 md:gap-8"
            variants={itemVariants}
          >
            {/* Buttons */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-4 w-full md:w-auto">
              <a
                href="#contact"
                className="group flex-1 md:flex-none inline-flex h-12 md:h-14 items-center justify-center rounded-xl px-8 text-sm md:text-base font-medium text-white transition-all shadow-sm hover:shadow-md"
                style={{ background: '#8F5A39', border: '1px solid #6b4229' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#6b4229')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#8F5A39')}
              >
                <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                Contact Me
              </a>
              <a
                href="/kartik-kumbhar-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 md:flex-none inline-flex h-12 md:h-14 items-center justify-center rounded-xl px-8 text-sm md:text-base font-medium transition-all shadow-sm hover:shadow-md"
                style={{
                  background: '#F4EFE7',
                  border: '1px solid rgba(143,90,57,0.3)',
                  color: '#000',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#ede5d8')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#F4EFE7')}
              >
                <FileText className="w-5 h-5 mr-2" aria-hidden="true" />
                View Resume
              </a>
            </div>

            {/* Contact details + Social icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8 pt-2">
              <a
                href="tel:+919322130400"
                className="inline-flex items-center gap-2 text-sm md:text-base hover:opacity-80 transition-opacity"
                style={{ color: 'rgba(0,0,0,0.65)' }}
              >
                <Phone className="w-4 h-4" style={{ color: '#8F5A39' }} />
                +91 93221 30400
              </a>
              <a
                href="mailto:kumbharkartik150@gmail.com"
                className="inline-flex items-center gap-2 text-sm md:text-base hover:opacity-80 transition-opacity"
                style={{ color: 'rgba(0,0,0,0.65)' }}
              >
                <Mail className="w-4 h-4" style={{ color: '#8F5A39' }} />
                kumbharkartik150@gmail.com
              </a>

              <div className="flex gap-3 ml-2">
                {SOCIAL_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200"
                      style={{
                        border: '1px solid rgba(143,90,57,0.3)',
                        background: '#F4EFE7',
                        color: '#8F5A39',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = '#8F5A39';
                        (e.currentTarget as HTMLElement).style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = '#F4EFE7';
                        (e.currentTarget as HTMLElement).style.color = '#8F5A39';
                      }}
                    >
                      {link.icon}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Cascading Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-md mx-auto aspect-[3.5/4] mt-12 lg:mt-0 mb-8 lg:mb-0 lg:ml-auto"
        >
          {/* 
            Changed translations to positive numbers so they cascade to the bottom right.
            This moves the visual weight away from the text column instead of towards it.
          */}
          <div
            className="absolute inset-0 rounded-2xl border"
            style={{
              borderColor: 'rgba(143,90,57,0.15)',
              transform: 'translate(24px, 24px)',
            }}
          />
          <div
            className="absolute inset-0 rounded-2xl border"
            style={{
              borderColor: 'rgba(143,90,57,0.25)',
              transform: 'translate(12px, 12px)',
            }}
          />

          {/* Main Image Container */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden z-10"
            style={{
              boxShadow: '-10px -10px 40px rgba(0,0,0,0.05), 10px 10px 40px rgba(0,0,0,0.08)',
              background: '#ede5d8',
            }}
          >
            <img
              src={mePhoto}
              alt="Kartik Kumbhar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}