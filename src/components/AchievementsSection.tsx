// AchievementsSection – 4-column photo cards, click to open split modal (photo left, details right)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink, Trophy, X } from 'lucide-react';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';

// Allianz images
import allianzMain from '../assets/allianz.JPG';
import allianz2_1 from '../assets/allianz2 (1).jpg';
import allianz2_2 from '../assets/allianz2 (2).jpg';
import allianz2_3 from '../assets/allianz2 (3).jpg';

interface Achievement {
  badge?: string;
  badgeColor?: 'bronze' | 'sky' | 'green';
  title: string;
  org: string;
  location: string;
  date: string;
  description: string;
  postUrl?: string;
  photos?: string[];   // [mainPhoto, thumb1, thumb2, thumb3]
}

const ACHIEVEMENTS: Achievement[] = [
  {
    badge: 'Winner · €3,000',
    badgeColor: 'bronze',
    title: "Allianz Tech Championship '25",
    org: 'Allianz',
    location: 'International',
    date: '2025',
    description:
      'Awarded €3,000 scholarship for an innovative technical solution in insurance technology — selected among top applicants worldwide. Competed against international teams to design a next-generation solution for the insurance industry.',
    postUrl: '#',
    photos: [allianzMain, allianz2_1, allianz2_2, allianz2_3],
  },
  {
    badge: 'Runner-up',
    badgeColor: 'sky',
    title: 'Technology Grand Infusion Challenge 2025',
    org: 'International Level',
    location: 'International',
    date: '2025',
    description:
      'Secured Runner-up position in the Technology Grand Infusion Challenge 2025 against international competition with an AI-driven solution. Presented to a panel of industry experts and secured recognition for innovative thinking.',
    postUrl: '#',
  },
  {
    badge: '1st Prize',
    badgeColor: 'bronze',
    title: 'Prakalp 2025',
    org: 'JSPM Tathawade',
    location: 'Pune',
    date: '2025',
    description:
      'Won 1st Prize in a national-level project competition at JSPM Tathawade, recognized for technical excellence and innovation. The project showcased an AI-powered solution evaluated by a jury of industry professionals.',
    postUrl: '#',
  },
  {
    badge: 'Domain Master',
    badgeColor: 'sky',
    title: 'Morpheus National Level Hackathon',
    org: 'SIT Lonavala',
    location: 'Lonavala',
    date: '2025',
    description:
      'Earned the prestigious Domain Master title at the Morpheus National Level Hackathon held at SIT Lonavala. Selected as the best performer within the technical domain among all participating teams.',
    postUrl: '#',
  },
  {
    badge: 'Best Paper',
    badgeColor: 'sky',
    title: 'Best Research Paper – ETFI 2026',
    org: 'ETFI Conference',
    location: 'Published',
    date: '2026',
    description:
      'Published and awarded Best Research Paper at ETFI 2026 for "IoT-Enabled Smart Umbrella for Environmental Monitoring and User Convenience". The paper was peer-reviewed and recognized for its practical IoT application and environmental impact.',
    postUrl: '#',
  },
  {
    badge: 'Funded · AU$250',
    badgeColor: 'green',
    title: 'Research Funding',
    org: 'La Trobe University, Australia',
    location: 'Australia',
    date: '2025',
    description:
      'Received AU$250 research funding from La Trobe University for the AI-driven learning disabilities detection project achieving 80% accuracy — a 70% improvement over traditional detection methods. Developed an end-to-end ML pipeline using Python, Scikit-learn, and PyTorch.',
    postUrl: '#',
  },
  {
    badge: 'Pupil · 450+ Solved',
    badgeColor: 'sky',
    title: 'Competitive Programming',
    org: 'Codeforces · Multi-Platform',
    location: 'Online',
    date: 'Ongoing',
    description:
      'Achieved Codeforces Pupil rank with 450+ problems solved across competitive programming platforms including Codeforces, LeetCode, and CodeChef. Consistently participates in rated rounds to sharpen algorithmic thinking and problem-solving skills.',
    postUrl: '#',
  },
];

const BADGE_STYLES = {
  bronze: { background: '#8F5A39', color: '#fff' },
  sky: { background: '#A6D7F0', color: '#000' },
  green: { background: '#d1f4e0', color: '#166534', border: '1px solid #a7f3d0' },
};

// ── Modal ──────────────────────────────────────────────────────────────────────
function AchievementModal({
  achievement,
  onClose,
}: {
  achievement: Achievement;
  onClose: () => void;
}) {
  const badgeStyle = BADGE_STYLES[achievement.badgeColor ?? 'bronze'];

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }} />

      {/* Modal panel */}
      <motion.div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden flex flex-col md:flex-row"
        style={{
          background: '#fff',
          boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
          maxHeight: '90vh',
        }}
        initial={{ scale: 0.93, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 12, opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left – Photo */}
        <div
          className="relative w-full md:w-[45%] shrink-0 flex flex-col"
          style={{ minHeight: 320, background: '#F0EBE3', overflow: 'hidden' }}
        >
          {/* Main photo or placeholder */}
          {achievement.photos && achievement.photos.length > 0 ? (
            <img
              src={achievement.photos[0]}
              alt={achievement.title}
              className="w-full h-full object-cover"
              style={{ flex: 1, minHeight: 220 }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 p-8 flex-1">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(143,90,57,0.12)' }}
              >
                <Trophy className="w-8 h-8" style={{ color: '#8F5A39' }} />
              </div>
              <span className="text-sm font-medium text-center" style={{ color: 'rgba(143,90,57,0.55)' }}>
                Photos coming soon
              </span>
            </div>
          )}

          {/* Thumbnail strip at bottom */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {(achievement.photos && achievement.photos.length > 1
              ? achievement.photos.slice(1, 4)
              : [null, null, null]
            ).map((src, i) =>
              src ? (
                <img
                  key={i}
                  src={src}
                  alt={`${achievement.title} ${i + 2}`}
                  className="w-14 h-10 rounded-md object-cover"
                  style={{ border: '2px solid rgba(255,255,255,0.6)' }}
                />
              ) : (
                <div
                  key={i}
                  className="w-14 h-10 rounded-md"
                  style={{ background: '#E8E1D9', border: '1px solid rgba(0,0,0,0.08)' }}
                />
              )
            )}
          </div>

          {/* Badge */}
          {achievement.badge && (
            <div className="absolute top-4 left-4">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={badgeStyle}
              >
                {achievement.badge}
              </span>
            </div>
          )}
        </div>

        {/* Right – Details */}
        <div className="flex flex-col flex-1 p-7 md:p-9 overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="self-end mb-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ background: '#F4EFE7', color: '#000', border: '1px solid rgba(0,0,0,0.1)' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#ede5d8')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#F4EFE7')}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <h2
            className="text-2xl md:text-3xl font-bold leading-snug mb-2"
            style={{ fontFamily: '"Playfair Display", serif', color: '#000' }}
          >
            {achievement.title}
          </h2>
          <p className="text-base font-semibold mb-1" style={{ color: '#8F5A39' }}>
            {achievement.org}
          </p>
          <div
            className="flex items-center gap-1.5 text-sm mb-6"
            style={{ color: 'rgba(0,0,0,0.45)' }}
          >
            <MapPin className="w-3.5 h-3.5" />
            {achievement.location} · {achievement.date}
          </div>

          <p
            className="text-base leading-[1.75] flex-1"
            style={{ color: 'rgba(0,0,0,0.7)' }}
          >
            {achievement.description}
          </p>

          {achievement.postUrl && achievement.postUrl !== '#' && (
            <a
              href={achievement.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start mt-8 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              style={{
                background: '#8F5A39',
                color: '#fff',
                border: '1px solid #6b4229',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#6b4229')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#8F5A39')}
            >
              <ExternalLink className="w-4 h-4" />
              View post
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Card ───────────────────────────────────────────────────────────────────────
function AchievementCard({
  achievement,
  index,
  onOpen,
}: {
  achievement: Achievement;
  index: number;
  onOpen: () => void;
}) {
  const badgeStyle = BADGE_STYLES[achievement.badgeColor ?? 'bronze'];

  return (
    <FadeUp delay={index * 0.07}>
      <motion.div
        className="rounded-2xl overflow-hidden flex flex-col cursor-pointer"
        style={{
          background: '#fff',
          border: '1px solid rgba(0,0,0,0.09)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        }}
        whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(0,0,0,0.11)' }}
        transition={{ duration: 0.22 }}
        onClick={onOpen}
      >
        {/* Main photo or placeholder */}
        <div className="relative w-full" style={{ aspectRatio: '16/9', background: '#F0EBE3', overflow: 'hidden' }}>
          {achievement.photos && achievement.photos.length > 0 ? (
            <img
              src={achievement.photos[0]}
              alt={achievement.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(143,90,57,0.12)' }}
              >
                <Trophy className="w-5 h-5" style={{ color: '#8F5A39' }} />
              </div>
              <span className="text-[11px] font-medium" style={{ color: 'rgba(143,90,57,0.45)' }}>
                Photo coming soon
              </span>
            </div>
          )}

          {achievement.badge && (
            <div className="absolute top-2.5 left-2.5">
              <span
                className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                style={badgeStyle}
              >
                {achievement.badge}
              </span>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex gap-1.5 px-3 pt-2.5">
          {(achievement.photos && achievement.photos.length > 1
            ? achievement.photos.slice(1, 4)
            : [null, null, null]
          ).map((src, i) =>
            src ? (
              <img
                key={i}
                src={src}
                alt={`thumb ${i}`}
                className="w-12 h-8 rounded-md object-cover shrink-0"
                style={{ border: '1px solid rgba(0,0,0,0.07)' }}
              />
            ) : (
              <div
                key={i}
                className="w-12 h-8 rounded-md shrink-0"
                style={{ background: '#E8E1D9', border: '1px solid rgba(0,0,0,0.07)' }}
              />
            )
          )}
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1 px-3 pt-2.5 pb-4 gap-1">
          <h3
            className="text-sm font-bold leading-snug"
            style={{ color: '#000', fontFamily: '"Playfair Display", serif' }}
          >
            {achievement.title}
          </h3>
          <p className="text-xs font-medium" style={{ color: 'rgba(0,0,0,0.6)' }}>
            {achievement.org}
          </p>
          <div className="flex items-center gap-1 text-[11px]" style={{ color: 'rgba(0,0,0,0.38)' }}>
            <MapPin className="w-2.5 h-2.5" />
            {achievement.location} · {achievement.date}
          </div>
        </div>
      </motion.div>
    </FadeUp>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function AchievementsSection() {
  const [active, setActive] = useState<Achievement | null>(null);

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 w-full flex flex-col gap-12 md:gap-16">
      <FadeUp>
        <SectionHeader
          pill="Milestones"
          title="Hackathons, Awards & Recognition"
          subtitle="Building under pressure with impactful solutions — highlights from national and international competitions and research."
        />
      </FadeUp>

      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {ACHIEVEMENTS.map((achievement, i) => (
          <AchievementCard
            key={achievement.title}
            achievement={achievement}
            index={i}
            onOpen={() => setActive(achievement)}
          />
        ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <AchievementModal achievement={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
