// ProjectsSection – full-width project cards with tech tags, live/GitHub links
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GitHubIcon } from './icons';
import FadeUp from './FadeUp';

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  accentColor: string;
}

const PROJECTS: Project[] = [
  {
    title: 'GAIA – Generative AI Impact Analytics',
    subtitle: 'Real-Time CO₂ Tracking & ESG Optimization Platform',
    description: [
      'Designed a sustainability-focused framework for Generative AI enabling measurable reductions in token usage (15%+) through prompt optimization and usage monitoring.',
      'Implemented a Chrome Extension + Flask backend for real-time multi-platform AI tracking with low-latency processing.',
      'Created an ESG analytics dashboard providing actionable CO₂ insights and reports, designed for enterprise-scale extensibility and compliance.',
    ],
    tags: ['Python', 'Flask', 'Chrome Extension', 'ESG Analytics', 'Generative AI'],
    liveUrl: '#',
    githubUrl: 'https://github.com/kartikkumbhar150',
    accentColor: '#8F5A39',
  },
  {
    title: 'HireX – AI-Powered Professional Networking Platform',
    subtitle: 'Full-Stack Networking, Chat & Hiring Workflows',
    description: [
      'Built a scalable full-stack platform using React, Express, FastAPI, MongoDB, Redis, and Qdrant supporting networking, chat, events, and hiring workflows.',
      'Developed an AI-based identity verification pipeline with face liveness detection and vector similarity matching to reduce fraudulent and duplicate accounts.',
      'Implemented JWT/OAuth authentication, WebSockets, QR-based event systems, and Dockerized deployment.',
    ],
    tags: ['React', 'Express', 'FastAPI', 'MongoDB', 'Redis', 'Qdrant', 'Docker', 'AI/ML'],
    githubUrl: 'https://github.com/kartikkumbhar150',
    accentColor: '#A6D7F0',
  },
];

function TechTag({ tag }: { tag: string }) {
  return (
    <span
      className="text-xs md:text-sm font-medium px-3 py-1.5 rounded-md"
      style={{ background: '#F4EFE7', color: '#8F5A39', border: '1px solid rgba(143,90,57,0.2)' }}
    >
      {tag}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accentIsBronze = project.accentColor === '#8F5A39';

  return (
    <FadeUp delay={index * 0.12}>
      <motion.div
        className="relative overflow-hidden rounded-2xl"
        style={{
          background: '#fff',
          border: '1px solid rgba(143,90,57,0.18)',
          boxShadow: '0 2px 16px rgba(143,90,57,0.07)',
        }}
        whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(143,90,57,0.14)' }}
        transition={{ duration: 0.25 }}
      >
        {/* Top accent */}
        <div
          className="h-1.5 w-full"
          style={{
            background: accentIsBronze
              ? 'linear-gradient(90deg, #8F5A39, #b07a55)'
              : 'linear-gradient(90deg, #A6D7F0, #7bbde0)',
          }}
        />

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
            <div>
              <h3
                className="text-xl md:text-2xl font-bold leading-tight"
                style={{ fontFamily: '"Playfair Display", serif', color: '#000' }}
              >
                {project.title}
              </h3>
              <p className="text-sm md:text-base font-medium mt-3" style={{ color: '#8F5A39' }}>
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
                  style={{ background: '#8F5A39', color: '#fff', border: '1px solid #6b4229' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#6b4229')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#8F5A39')}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
                style={{
                  background: '#F4EFE7',
                  color: '#000',
                  border: '1px solid rgba(143,90,57,0.25)',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#ede5d8')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#F4EFE7')}
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Bullets */}
          <ul className="space-y-4 mb-10">
            {project.description.map((item, i) => (
              <li key={i} className="flex gap-4 text-sm md:text-base leading-[1.7]" style={{ color: 'rgba(0,0,0,0.68)' }}>
                <span
                  className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                  style={{ background: project.accentColor }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-4">
            {project.tags.map((tag) => (
              <TechTag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </motion.div>
    </FadeUp>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-8">
      <FadeUp>
        <div className="flex items-center flex-col justify-center mb-16 md:mb-20">
          <span
            className="mb-10 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm"
            style={{ background: '#fff', color: '#8F5A39', border: '1px solid rgba(143,90,57,0.35)' }}
          >
            Projects
          </span>
          <div className="flex items-center gap-4">
            <h2
              className="text-3xl md:text-5xl font-bold text-center leading-tight"
              style={{ fontFamily: '"Playfair Display", serif', color: '#000' }}
            >
              Featured Projects
            </h2>
            <a
              href="https://github.com/kartikkumbhar150"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium transition-colors"
              style={{ color: '#8F5A39' }}
            >
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="max-w-2xl text-center mt-8 md:mt-10 leading-[1.7]" style={{ color: 'rgba(0,0,0,0.55)' }}>
            Scalable applications, AI systems, and developer tools built with real-world impact.
          </p>
        </div>
      </FadeUp>

      <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Mobile "View all" */}
      <div className="flex justify-center mt-8 md:hidden">
        <a
          href="https://github.com/kartikkumbhar150"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg"
          style={{ color: '#8F5A39', border: '1px solid rgba(143,90,57,0.3)', background: '#fff' }}
        >
          View all projects <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
