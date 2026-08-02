// Footer – minimal Travertine footer with name, links, copyright
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t px-5 py-8"
      style={{ background: '#F4EFE7', borderColor: 'rgba(143,90,57,0.15)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p
            className="font-bold text-base"
            style={{ fontFamily: '"Playfair Display", serif', color: '#000' }}
          >
            Kartik Kumbhar
          </p>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(0,0,0,0.45)' }}>
            Full Stack Developer & AI Engineer
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: 'https://github.com/kartikkumbhar150', label: 'GitHub', icon: <GitHubIcon className="w-4 h-4" /> },
            { href: 'https://linkedin.com/in/kartik-kumbhar', label: 'LinkedIn', icon: <LinkedInIcon className="w-4 h-4" /> },
            { href: 'mailto:kumbharkartik150@gmail.com', label: 'Email', icon: <Mail className="w-4 h-4" /> },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{ border: '1px solid rgba(143,90,57,0.25)', background: '#fff', color: '#8F5A39' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#8F5A39';
                (e.currentTarget as HTMLElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#fff';
                (e.currentTarget as HTMLElement).style.color = '#8F5A39';
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>
          © {year} Kartik Kumbhar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
