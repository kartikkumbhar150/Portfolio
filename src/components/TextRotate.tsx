import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TextRotateProps {
  words: string[];
  interval?: number;
  className?: string;
  pillStyle?: boolean;
}

export default function TextRotate({ words, interval = 2500, className = '', pillStyle = false }: TextRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  const content = (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={pillStyle ? '' : className}
        style={{ display: 'inline-block' }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );

  if (pillStyle) {
    return (
      <span
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#A6D7F0',
          color: '#000',
          borderRadius: 9999,
          padding: '2px 14px',
          fontWeight: 500,
          minWidth: '260px',
          overflow: 'hidden',
        }}
      >
        {content}
      </span>
    );
  }

  return content;
}
