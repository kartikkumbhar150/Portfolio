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

  const currentWords = words[index].split(' ');

  const content = (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        className={pillStyle ? '' : className}
        style={{ display: 'inline-block' }}
        exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
      >
        {currentWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.1, // stagger by word
            }}
            style={{ display: 'inline-block', marginRight: i < currentWords.length - 1 ? '0.25em' : 0 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
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
          background: '#ede5d8',
          color: '#8F5A39',
          border: '1px solid rgba(143,90,57,0.2)',
          borderRadius: 9999,
          padding: '6px 20px',
          minWidth: '280px',
          overflow: 'hidden',
        }}
      >
        {content}
      </span>
    );
  }

  return content;
}
