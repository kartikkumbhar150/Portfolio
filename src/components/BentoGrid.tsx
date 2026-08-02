// BentoGrid – project preview card, GitHub contribution graph, profile photo, social tiles, DSA stats
import { motion } from 'framer-motion';
import { ArrowUpRight, Code } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './icons';
import FadeUp from './FadeUp';

export default function BentoGrid() {
  return (
    <section className="py-10 relative z-20 px-5 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

        {/* GAIA Project Card */}
        <FadeUp className="md:col-span-2 h-48">
          <a
            href="https://github.com/kartikkumbhar150"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full block"
          >
            <div
              className="h-full flex flex-col justify-between border rounded-xl relative overflow-hidden group"
              style={{ borderColor: 'rgba(143,90,57,0.3)' }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #8F5A39 0%, #b07a55 50%, #A6D7F0 100%)',
                  opacity: 0.85,
                }}
              />
              <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    <GitHubIcon className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className="text-white text-xs px-2 py-1 rounded-full flex items-center gap-1"
                    style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
                  >
                    Featured
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    GAIA – Generative AI Impact Analytics
                  </h3>
                  <p className="text-slate-100 text-sm line-clamp-1">
                    Real-Time CO₂ Tracking & ESG Optimization Platform
                  </p>
                </div>
              </div>
            </div>
          </a>
        </FadeUp>

        {/* GitHub contribution graph */}
        <FadeUp delay={0.08} className="md:col-span-2 h-48">
          <a
            href="https://github.com/kartikkumbhar150"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full block"
          >
            <div
              className="h-full border rounded-xl p-4 flex items-center justify-center shadow-sm relative overflow-hidden"
              style={{ background: '#fff', borderColor: 'rgba(143,90,57,0.18)' }}
            >
              <div className="relative scale-105 z-10 w-full h-full flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 px-2">
                  <div className="w-3 h-3 rounded-sm" style={{ background: '#8F5A39' }} />
                  <div className="w-3 h-3 rounded-sm" style={{ background: '#b07a55' }} />
                  <div className="w-3 h-3 rounded-sm" style={{ background: '#c9a882' }} />
                  <div className="w-3 h-3 rounded-sm" style={{ background: '#ede5d8' }} />
                  <span className="text-xs ml-auto" style={{ color: 'rgba(0,0,0,0.45)' }}>
                    Contribution Graph
                  </span>
                </div>
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src="https://ghchart.rshah.org/8F5A39/kartikkumbhar150"
                    alt="GitHub Contributions"
                    className="object-cover object-right w-full h-full"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '';
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Fallback */}
                  <div
                    className="w-full h-full items-center justify-center"
                    style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
                  >
                    <span className="text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>GitHub Activity</span>
                    <div className="flex gap-1 flex-wrap justify-center">
                      {Array.from({ length: 52 }).map((_, wi) => (
                        <div key={wi} className="flex flex-col gap-0.5">
                          {Array.from({ length: 7 }).map((_, di) => (
                            <div
                              key={di}
                              className="w-2.5 h-2.5 rounded-sm"
                              style={{
                                background: Math.random() > 0.6 ? '#8F5A39' : Math.random() > 0.5 ? '#c9a882' : '#F4EFE7',
                                opacity: 0.7 + Math.random() * 0.3,
                              }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </FadeUp>

        {/* Profile photo placeholder */}
        <FadeUp delay={0.14} className="md:col-span-1 h-48 rounded-xl shadow-sm">
          <div
            className="h-full border rounded-xl relative overflow-hidden"
            style={{ background: '#F4EFE7', borderColor: 'rgba(143,90,57,0.18)' }}
          >
            {/* Monogram avatar */}
            <div className="absolute inset-0 flex items-end justify-start p-4">
              <div className="w-full h-full absolute inset-0 flex items-center justify-center">
                <span
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: 56,
                    color: 'rgba(143,90,57,0.25)',
                    userSelect: 'none',
                    letterSpacing: '-2px',
                  }}
                >
                  KK
                </span>
              </div>
            </div>
            <div className="absolute top-3 right-3 p-2 rounded-full" style={{ background: '#8F5A39' }}>
              <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{ background: 'linear-gradient(to top, rgba(244,239,231,0.95), transparent)' }}
            >
              <p className="font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#000' }}>
                Kartik Kumbhar
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Social + DSA tiles */}
        <div className="md:col-span-1 flex flex-col gap-4 h-48">
          <div className="flex gap-4 h-1/2">
            {/* LinkedIn */}
            <motion.div
              className="flex-1 shadow-sm rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://linkedin.com/in/kartik-kumbhar"
                target="_blank"
                rel="noopener noreferrer"
                className="h-full block"
              >
                <div
                  className="h-full border rounded-xl flex items-center justify-center hover:brightness-110 transition-all"
                  style={{ background: '#0077b5', borderColor: '#0077b5' }}
                >
                  <LinkedInIcon className="w-8 h-8 text-white" />
                </div>
              </a>
            </motion.div>
            {/* GitHub */}
            <motion.div
              className="flex-1 shadow-sm rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
            >
              <a
                href="https://github.com/kartikkumbhar150"
                target="_blank"
                rel="noopener noreferrer"
                className="h-full block"
              >
                <div
                  className="h-full border rounded-xl flex items-center justify-center hover:bg-neutral-100 transition-all"
                  style={{ background: '#fff', borderColor: 'rgba(143,90,57,0.18)', color: '#000' }}
                >
                  <GitHubIcon className="w-8 h-8" />
                </div>
              </a>
            </motion.div>
          </div>

          {/* DSA stats */}
          <motion.div
            className="h-1/2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.34 }}
          >
            <div
              className="h-full border rounded-xl flex items-center justify-center relative overflow-hidden shadow-sm"
              style={{ background: '#fff', borderColor: 'rgba(143,90,57,0.18)' }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
                style={{ color: '#8F5A39' }}
              >
                <Code className="w-28 h-28 rotate-12" />
              </div>
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#8F5A39' }} />
                  <span className="font-medium tracking-widest uppercase text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>
                    Codeforces
                  </span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#000' }}>450+ problems</h3>
                <p className="text-sm" style={{ color: 'rgba(0,0,0,0.5)' }}>Pupil rank · multi-platform</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* HireX project tile */}
        <FadeUp delay={0.18} className="md:col-span-2 h-48">
          <a
            href="https://github.com/kartikkumbhar150"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full block"
          >
            <div
              className="h-full border rounded-xl relative overflow-hidden group"
              style={{ background: '#fff', borderColor: 'rgba(143,90,57,0.18)', boxShadow: '0 2px 8px rgba(143,90,57,0.07)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, rgba(166,215,240,0.3), rgba(143,90,57,0.1))' }}
              />
              <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ background: '#F4EFE7', border: '1px solid rgba(143,90,57,0.2)' }}
                  >
                    <GitHubIcon className="w-5 h-5" style={{ color: '#8F5A39' }} />
                  </div>
                  <span className="text-xs font-medium" style={{ color: 'rgba(0,0,0,0.45)' }}>
                    Featured Project
                  </span>
                </div>
                <div>
                  <h3
                    className="font-bold text-lg flex items-center gap-2"
                    style={{ color: '#000', fontFamily: '"Playfair Display", serif' }}
                  >
                    HireX
                    <span className="font-normal text-sm" style={{ color: 'rgba(0,0,0,0.4)' }}>
                      / kartikkumbhar150
                    </span>
                  </h3>
                  <p className="text-sm line-clamp-1" style={{ color: 'rgba(0,0,0,0.55)' }}>
                    AI-Powered Professional Networking Platform
                  </p>
                </div>
              </div>
            </div>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
