// HeroSection – original left content + cascading image right layout
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
    <section className="min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 px-5 md:px-8 flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto lg:translate-x-8 grid grid-cols-1 lg:grid-cols-[58%_42%] gap-16 lg:gap-12 items-center">
        {/* Left Column: Original Text Content */}
        <motion.div
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text block */}
          <motion.div className="flex-1 min-w-0 text-center md:text-left" variants={itemVariants}>
            <h1
              className="text-lg sm:text-3xl md:text-4xl font-semibold"
              style={{ color: 'rgba(0,0,0,0.45)', fontFamily: '"Playfair Display", serif' }}
            >
              Hi, I'm
            </h1>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-0.5 md:mt-2 font-bold leading-tight"
              style={{ fontFamily: '"Playfair Display", serif', color: '#000' }}
            >
              Kartik Kumbhar
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 font-semibold mt-3 md:mt-4 text-base md:text-lg">
              <TextRotate words={['Full Stack Developer', 'AI & ML Engineer', 'Hackathon Winner', 'Research Contributor']} />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants}>
            <p
              className="text-sm sm:text-base max-sm:text-left md:text-lg text-center md:text-left leading-relaxed max-w-lg mx-auto md:mx-0"
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

          {/* CTA + contacts */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-4 md:gap-6"
            variants={itemVariants}
          >
            {/* Buttons */}
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 w-full md:w-auto">
              <a
                href="#contact"
                className="group flex-1 md:flex-none inline-flex h-11 md:h-12 items-center justify-center rounded-lg px-6 sm:px-8 text-sm md:text-base font-medium text-white transition-colors"
                style={{ background: '#8F5A39', border: '1px solid #6b4229' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#6b4229')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#8F5A39')}
              >
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                Contact
              </a>
              <a
                href="/kartik-kumbhar-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 md:flex-none inline-flex h-11 md:h-12 items-center justify-center rounded-lg px-6 sm:px-8 text-sm md:text-base font-medium transition-colors"
                style={{
                  background: '#F4EFE7',
                  border: '1px solid rgba(143,90,57,0.3)',
                  color: '#000',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#ede5d8')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#F4EFE7')}
              >
                <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
                Resume
              </a>
            </div>

            {/* Contact details + social icons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
              {/* Phone */}
              <a
                href="tel:+919322130400"
                className="inline-flex items-center gap-2 text-sm md:text-base"
                style={{ color: 'rgba(0,0,0,0.55)' }}
              >
                <Phone className="w-4 h-4" style={{ color: '#8F5A39' }} />
                +91 93221 30400
              </a>
              {/* Email */}
              <a
                href="mailto:kumbharkartik150@gmail.com"
                className="inline-flex items-center gap-2 text-sm md:text-base"
                style={{ color: 'rgba(0,0,0,0.55)' }}
              >
                <Mail className="w-4 h-4" style={{ color: '#8F5A39' }} />
                kumbharkartik150@gmail.com
              </a>
              {/* Social icons */}
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
                    className="w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center transition-all duration-200"
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
          </motion.div>
        </motion.div>

        {/* Right Column: Cascading Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[280px] sm:max-w-xs mx-auto lg:max-w-none lg:w-[65%] xl:w-[55%] lg:ml-auto aspect-[3.5/4] mt-12 lg:mt-0"
        >
          {/* Stacked Frames (Back to Front) */}
          <div
            className="absolute inset-0 rounded-2xl border"
            style={{
              borderColor: 'rgba(143,90,57,0.15)',
              transform: 'translate(-32px, -32px)',
            }}
          />
          <div
            className="absolute inset-0 rounded-2xl border"
            style={{
              borderColor: 'rgba(143,90,57,0.25)',
              transform: 'translate(-20px, -20px)',
            }}
          />
          <div
            className="absolute inset-0 rounded-2xl border"
            style={{
              borderColor: 'rgba(143,90,57,0.4)',
              transform: 'translate(-8px, -8px)',
            }}
          />

          {/* Main Image Container */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
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
