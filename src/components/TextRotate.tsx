// TextRotate – animated word-cycling component using Framer Motion
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TextRotateProps {
  words: string[];
  interval?: number;
}

export default function TextRotate({ words, interval = 2800 }: TextRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className="inline-flex items-center overflow-hidden rounded-lg px-3 py-1.5 text-sm sm:text-base md:text-4xl font-semibold"
      style={{ background: '#A6D7F0', border: '1px solid #7bbde0', color: '#000', minWidth: '280px', justifyContent: 'center' }}
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
