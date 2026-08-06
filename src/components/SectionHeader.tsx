import FadeUp from './FadeUp';

interface SectionHeaderProps {
  pill: string;
  title: string;
  subtitle?: string;
  pillColor?: 'bronze' | 'sky';
}

export default function SectionHeader({ pill, title, subtitle, pillColor = 'bronze' }: SectionHeaderProps) {
  const pillStyles = pillColor === 'sky'
    ? { background: '#A6D7F0', color: '#000', border: '1px solid #7bbde0' }
    : { background: '#F4EFE7', color: '#8F5A39', border: '1px solid rgba(143,90,57,0.3)' };

  return (
    <FadeUp>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{
          ...pillStyles,
          display: 'inline-block',
          fontSize: 13,
          fontWeight: 600,
          borderRadius: 9999,
          padding: '4px 14px',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          {pill}
        </span>
        <h2 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          lineHeight: 1.1,
          color: '#000',
          margin: 0,
        }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{ marginTop: '0.75rem', color: 'rgba(0,0,0,0.55)', fontSize: '1rem', lineHeight: 1.75 }}>
            {subtitle}
          </p>
        )}
      </div>
    </FadeUp>
  );
}
