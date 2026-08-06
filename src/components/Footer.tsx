import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid rgba(143,90,57,0.18)',
      padding: '2rem clamp(1.25rem, 4vw, 2rem)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '1rem',
      }} className="footer-grid">
        {/* Left */}
        <div>
          <p style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 700, fontSize: '1.1rem', margin: '0 0 0.15rem', color: '#000',
          }}>
            Kartik Kumbhar
          </p>
          <p style={{ margin: 0, fontSize: '0.78rem', color: 'rgba(0,0,0,0.4)' }}>
            Full Stack Developer &amp; AI Engineer
          </p>
        </div>

        {/* Center: social icons */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <a href="https://github.com/kartikkumbhar150" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ width: 36, height: 36 }} aria-label="GitHub">
            <GitHubIcon size={16} />
          </a>
          <a href="https://www.linkedin.com/in/kartik-kumbhar150/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ width: 36, height: 36 }} aria-label="LinkedIn">
            <LinkedInIcon size={16} />
          </a>
          <a href="mailto:kumbharkartik150@gmail.com" className="social-icon" style={{ width: 36, height: 36 }} aria-label="Email">
            <Mail size={16} />
          </a>
        </div>

        {/* Right */}
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, fontSize: '0.78rem', color: 'rgba(0,0,0,0.4)' }}>
            &copy; {year} Kartik Kumbhar. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .footer-grid > *:last-child {
            text-align: center !important;
          }
          .footer-grid > *:nth-child(2) {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
