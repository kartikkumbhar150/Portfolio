import { motion } from 'framer-motion';
import { GraduationCap, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';

export default function EducationSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-24 md:py-32 px-5 md:px-8 w-full">
      <FadeUp>
        <SectionHeader
          pill="Education"
          title="Academic Background"
          subtitle="My educational journey and academic achievements."
        />
      </FadeUp>

      {/* 👇 YE RAHA PERFECT CENTERING KA CODE 👇 */}
      <div className="w-full flex justify-center pt-12 md:pt-16">
        <div className="w-full max-w-3xl">
          <FadeUp delay={0.1}>
            <motion.div
              className="rounded-2xl cursor-pointer overflow-hidden"
              style={{
                background: '#fff',
                border: '1px solid rgba(143,90,57,0.18)',
                boxShadow: '0 2px 12px rgba(143,90,57,0.06)',
              }}
              whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(143,90,57,0.14)' }}
              transition={{ duration: 0.2 }}
              onClick={() => setExpanded((e) => !e)}
            >
              {/* Main row */}
              <div className="flex items-center gap-5 px-6 py-5">
                {/* Logo box */}
                <div
                  className="shrink-0 w-14 h-14 rounded-lg flex items-center justify-center"
                  style={{ background: '#F4EFE7', border: '1px solid rgba(143,90,57,0.18)' }}
                >
                  <GraduationCap className="w-7 h-7" style={{ color: '#8F5A39' }} />
                </div>

                {/* Text block */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-base md:text-lg font-bold leading-tight"
                    style={{ color: '#000', fontFamily: '"Playfair Display", serif' }}
                  >
                    Bachelor of Engineering (B.E.)
                  </h3>
                  <p className="text-sm mt-0.5 font-medium" style={{ color: 'rgba(0,0,0,0.65)' }}>
                    Dr. D. Y. Patil Institute of Technology, Pune
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(0,0,0,0.4)' }}>
                    Computer Engineering
                  </p>
                </div>

                {/* Right: date + CGPA badge + chevron */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className="text-sm font-mono whitespace-nowrap"
                      style={{ color: 'rgba(0,0,0,0.55)' }}
                    >
                      2023 – 2027
                    </span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-md"
                      style={{ background: '#A6D7F0', color: '#000', border: '1px solid #7bbde0' }}
                    >
                      9.03 CGPA
                    </span>
                  </div>
                  <ChevronDown
                    className="w-5 h-5 transition-transform duration-300"
                    style={{
                      color: '#8F5A39',
                      transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Expanded details */}
              <motion.div
                initial={false}
                animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div
                  className="px-6 pb-6 pt-4 grid grid-cols-2 sm:grid-cols-3 gap-5"
                  style={{ borderTop: '1px solid rgba(143,90,57,0.12)' }}
                >
                  {[
                    { label: 'Degree', value: 'B.E. Computer Engineering' },
                    { label: 'Duration', value: '4 Years (2023–2027)' },
                    { label: 'CGPA', value: '9.03 / 10' },
                    { label: 'Location', value: 'Pimpri, Pune' },
                    { label: 'Status', value: 'Currently Enrolled' },
                    { label: 'Focus Areas', value: 'AI, ML, Full Stack' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p
                        className="text-[11px] font-semibold uppercase tracking-wider"
                        style={{ color: '#8F5A39' }}
                      >
                        {item.label}
                      </p>
                      <p className="text-sm mt-0.5" style={{ color: '#000' }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}