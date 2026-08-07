import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, ExternalLink, MapPin, Calendar } from 'lucide-react';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';
import allianz1 from '../assets/allianz.JPG';
import allianz2 from '../assets/allianz2.JPG';
import allianz3 from '../assets/allianz3.JPG';
import allianz4 from '../assets/allianz4.JPG';
import la1 from '../assets/la.jpeg';
import la2 from '../assets/la2.jpeg';
import la3 from '../assets/la3.jpeg';

const achievements = [
  {
    id: 'allianz',
    title: 'Allianz Tech Championship 2025',
    org: 'Allianz SE',
    location: 'India',
    date: '2025',
    badge: { label: 'Winner', color: 'bronze' },
    prize: '€3,000',
    description: "Winner – Allianz India Technology Championship 2025\n\nI'm incredibly honored to share that I have been declared the Winner of the Allianz India Technology Championship 2025, held at the Allianz Technology R&D Center, Pune. Receiving this prestigious recognition along with a €3000 scholarship marks a significant milestone in my journey of innovation and technology.\n\nI sincerely thank Dr. Dheeraj Agrawal Sir and the dedicated TPO Team of Dr. D. Y. Patil Institute of Technology, Pimpri, Pune for their visionary mentorship and constant encouragement. Your belief in our potential empowers us to step onto global platforms with confidence.\n\nA special thanks to Allianz Technology for creating a championship that recognizes innovation purely on talent, impact, and technical excellence. Being selected among a limited number of top colleges in India makes this achievement even more meaningful.\n\nWhat made this moment truly unforgettable was Allianz Technology's beautiful gesture of inviting my parents to the award ceremony. Sharing the stage with them transformed this achievement into a lifelong memory filled with pride, gratitude, and emotion.\n\nExcited to keep building, innovating, and pushing boundaries.",
    photos: [allianz1, allianz2, allianz3, allianz4],
    link: null,
  },
  {
    id: 'tgic',
    title: 'Technology Grand Infusion Challenge 2025',
    org: 'TGIC',
    location: 'India',
    date: '2025',
    badge: { label: 'Runner-up', color: 'sky' },
    prize: '₹1,00,000',
    description: "Runner-Up – Technology Infusion Grand Challenge (TIGC) 2025 – Asia Level 🏆✨ organized by La Trobe University, Australia. Honored to share that our team was awarded a cash prize of ₹1,00,000 for our innovation and research contribution.🚀\n\nGrateful to be part of a platform that encourages student-led innovation, research, and real-world problem solving across Asia.\n\nProud to share this achievement with my amazing teammates Ajit Paraskar and Hitesh Khare.\n\nSpecial thanks to the TIGC organizers, Vijaylakshmi Suman, Diana Heatherich, and Dr. Aniruddha Desai, along with our college, Dr. D. Y. Patil Institute of Technology, Pimpri, Pune, for their constant guidance and support throughout this journey. Looking forward to creating more impactful solutions ahead! 🚀",
    photos: [la1, la2, la3],
    link: null,
  },
  {
    id: 'prakalp',
    title: 'Prakalp 2025',
    org: 'DYPIT',
    location: 'Pune, India',
    date: '2025',
    badge: { label: '1st Prize', color: 'bronze' },
    prize: null,
    description: 'First prize at Prakalp 2025, an institution-level project competition, for developing an innovative AI-integrated web application.',
    photos: [],
    link: null,
  },
  {
    id: 'morpheus',
    title: 'Morpheus National Level Hackathon',
    org: 'Morpheus',
    location: 'India',
    date: '2025',
    badge: { label: 'Domain Master', color: 'sky' },
    prize: null,
    description: 'Awarded Domain Master at the Morpheus National Level Hackathon for outstanding performance in the AI & Machine Learning domain.',
    photos: [],
    link: null,
  },
  {
    id: 'etfi',
    title: 'Best Research Paper – ETFI 2026',
    org: 'ETFI Conference',
    location: 'International',
    date: '2026',
    badge: { label: 'Best Paper', color: 'sky' },
    prize: null,
    description: 'Best Research Paper award at ETFI 2026 for the paper on AI-generated content detection using multimodal machine learning approaches.',
    photos: [],
    link: null,
  },
  {
    id: 'research-funding',
    title: 'Research Funding – La Trobe University',
    org: 'La Trobe University',
    location: 'Melbourne, Australia',
    date: '2025',
    badge: { label: 'Funded', color: 'green' },
    prize: 'AU$250',
    description: 'Received research funding from La Trobe University to support collaborative research on AI-generated content detection systems.',
    photos: [],
    link: null,
  },
  {
    id: 'cp',
    title: 'Competitive Programming',
    org: 'Codeforces / LeetCode',
    location: 'Online',
    date: 'Ongoing',
    badge: { label: 'Pupil', color: 'sky' },
    prize: '450+ Solved',
    description: 'Rated Pupil on Codeforces with 450+ problems solved across platforms including LeetCode and Codeforces. Regular participant in competitive programming contests.',
    photos: [],
    link: null,
  },
];

function badgeStyles(color: string) {
  if (color === 'bronze') return { background: '#F4EFE7', color: '#8F5A39', border: '1px solid rgba(143,90,57,0.3)' };
  if (color === 'sky') return { background: '#A6D7F0', color: '#000', border: '1px solid #7bbde0' };
  if (color === 'green') return { background: '#d1f4e0', color: '#166534', border: '1px solid #a7f3d0' };
  return {};
}

function AchievementCard({ item, onClick }: { item: typeof achievements[0]; onClick: () => void }) {
  const hasPhoto = item.photos.length > 0;
  const badge = badgeStyles(item.badge.color);

  return (
    <FadeUp>
      <motion.div
        className="card-surface"
        style={{ overflow: 'hidden', cursor: 'pointer' }}
        onClick={onClick}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Photo area */}
        <div style={{
          width: '100%',
          paddingTop: '56.25%',
          position: 'relative',
          background: '#F4EFE7',
          overflow: 'hidden',
        }}>
          {hasPhoto ? (
            <img
              src={item.photos[0]}
              alt={item.title}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, #F4EFE7 0%, #ede5d8 100%)',
            }}>
              <Trophy size={40} color="rgba(143,90,57,0.3)" />
            </div>
          )}
          {/* Badge overlay */}
          <div style={{ position: 'absolute', top: 10, left: 10 }}>
            <span style={{
              ...badge,
              fontSize: '0.72rem', fontWeight: 600, borderRadius: 9999,
              padding: '3px 10px', display: 'inline-block',
            }}>
              {item.badge.label}
              {item.prize ? ` · ${item.prize}` : ''}
            </span>
          </div>
        </div>

        {/* Thumbnail strip for multi-photo */}
        {item.photos.length > 1 && (
          <div style={{ display: 'flex', gap: 4, padding: '6px 12px 0', height: 36, overflow: 'hidden' }}>
            {item.photos.slice(1, 4).map((photo, i) => (
              <div key={i} style={{ width: 44, height: 28, borderRadius: 4, overflow: 'hidden', background: '#ede5d8', flexShrink: 0 }}>
                <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            ))}
          </div>
        )}

        <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
          <h3 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 700, fontSize: '1rem', margin: '0 0 0.25rem', lineHeight: 1.3,
          }}>
            {item.title}
          </h3>
          <p style={{ margin: '0 0 0.25rem', fontSize: '0.82rem', color: 'rgba(0,0,0,0.55)', fontWeight: 500 }}>
            {item.org}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: 'rgba(0,0,0,0.38)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <MapPin size={11} /> {item.location}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <Calendar size={11} /> {item.date}
            </span>
          </div>
        </div>
      </motion.div>
    </FadeUp>
  );
}

function Modal({ item, onClose }: { item: typeof achievements[0] | null; onClose: () => void }) {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    if (!item) return;
    setActivePhoto(0);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;
  const badge = badgeStyles(item.badge.color);
  const hasPhotos = item.photos.length > 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem',
        }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: '#fff',
            borderRadius: 20,
            overflow: 'hidden',
            width: '100%',
            maxWidth: 860,
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: hasPhotos ? undefined : 'column',
            boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
          }}
          className="modal-inner"
        >
          {/* Left: photo */}
          {hasPhotos && (
            <div style={{ width: '45%', flexShrink: 0, background: '#F4EFE7', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <img
                  src={item.photos[activePhoto]}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div style={{ position: 'absolute', bottom: 12, left: 12 }}>
                  <span style={{ ...badge, fontSize: '0.75rem', fontWeight: 600, borderRadius: 9999, padding: '3px 10px' }}>
                    {item.badge.label}{item.prize ? ` · ${item.prize}` : ''}
                  </span>
                </div>
              </div>
              {item.photos.length > 1 && (
                <div style={{ display: 'flex', gap: 6, padding: '8px 12px', background: '#fff', borderTop: '1px solid rgba(143,90,57,0.1)' }}>
                  {item.photos.map((photo, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhoto(i)}
                      style={{
                        width: 44, height: 32, borderRadius: 6, overflow: 'hidden',
                        border: i === activePhoto ? '2px solid #8F5A39' : '2px solid transparent',
                        cursor: 'pointer', padding: 0,
                      }}
                    >
                      <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Right: details */}
          <div style={{ flex: 1, padding: '2rem', overflowY: 'auto', position: 'relative' }}>
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 32, height: 32, borderRadius: '50%',
                background: '#F4EFE7', border: '1px solid rgba(143,90,57,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'rgba(0,0,0,0.5)',
              }}
            >
              <X size={16} />
            </button>

            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 700, fontSize: '1.4rem', lineHeight: 1.2,
              margin: '0 2rem 0.5rem 0',
            }}>
              {item.title}
            </h2>
            <p style={{ margin: '0 0 0.4rem', fontWeight: 600, color: 'rgba(0,0,0,0.7)', fontSize: '0.9rem' }}>
              {item.org}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', fontSize: '0.8rem', color: 'rgba(0,0,0,0.4)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <MapPin size={12} /> {item.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Calendar size={12} /> {item.date}
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.65)', lineHeight: 1.75, marginBottom: '1.25rem', whiteSpace: 'pre-wrap' }}>
              {item.description}
            </p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', gap: '0.4rem', textDecoration: 'none', display: 'inline-flex' }}>
                <ExternalLink size={14} /> View post
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Achievements() {
  const [selected, setSelected] = useState<typeof achievements[0] | null>(null);

  return (
    <section id="achievements" style={{ padding: 'clamp(5rem, 8vw, 8rem) clamp(1.25rem, 4vw, 2rem)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader pill="Milestones" title="Hackathons, Awards & Recognition" pillColor="sky" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {achievements.map((item) => (
            <AchievementCard key={item.id} item={item} onClick={() => setSelected(item)} />
          ))}
        </div>
      </div>
      <Modal item={selected} onClose={() => setSelected(null)} />
      <style>{`
        @media (max-width: 600px) {
          .modal-inner { flex-direction: column !important; }
          .modal-inner > *:first-child { width: 100% !important; height: 220px; }
        }
      `}</style>
    </section>
  );
}
