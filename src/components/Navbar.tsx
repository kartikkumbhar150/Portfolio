import { useState, useEffect } from 'react';
import { Home, Folder, Mail, GraduationCap, Briefcase, Trophy, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'hero', label: 'Home', icon: <Home size={18} /> },
  { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
  { id: 'achievements', label: 'Achievements', icon: <Trophy size={18} /> },
  { id: 'projects', label: 'Projects', icon: <Folder size={18} /> },
  { id: 'skills', label: 'Skills', icon: <Code2 size={18} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'education', 'experience', 'achievements', 'projects', 'skills', 'contact'];
      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on your layout
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'rgba(244, 240, 235, 0.8)', // Matching the theme background slightly
      backdropFilter: 'blur(16px)',
      padding: '0.4rem',
      borderRadius: '9999px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
      border: '1px solid rgba(255,255,255,0.5)'
    }}>
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: isActive ? '0.5rem' : '0',
              padding: isActive ? '0.55rem 1.1rem' : '0.55rem 0.65rem',
              borderRadius: '9999px',
              border: 'none',
              background: isActive ? '#8F5A39' : 'transparent',
              color: isActive ? '#fff' : '#8F5A39',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              overflow: 'hidden'
            }}
          >
            {item.icon}
            <AnimatePresence>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, width: 0, scale: 0.9 }}
                  animate={{ opacity: 1, width: 'auto', scale: 1 }}
                  exit={{ opacity: 0, width: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    originX: 0
                  }}
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        );
      })}
    </div>
  );
}
