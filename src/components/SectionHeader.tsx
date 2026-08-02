// SectionHeader – pill badge + Playfair heading + optional subtitle
interface SectionHeaderProps {
  pill: string;
  title: string;
  subtitle?: string;
  pillColor?: 'bronze' | 'sky';
}

export default function SectionHeader({
  pill,
  title,
  subtitle,
  pillColor = 'bronze',
}: SectionHeaderProps) {
  const pillStyle =
    pillColor === 'sky'
      ? { background: '#A6D7F0', color: '#000', border: '1px solid #7bbde0' }
      : { background: '#fff', color: '#8F5A39', border: '1px solid rgba(143,90,57,0.35)' };

  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-10">
      <span
        className="px-4 py-1.5 rounded-full text-sm font-medium shadow-sm"
        style={pillStyle}
      >
        {pill}
      </span>
      <h2
        className="text-3xl md:text-5xl font-bold text-center leading-tight"
        style={{ fontFamily: '"Playfair Display", serif', color: '#000' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-center leading-[1.7]" style={{ color: 'rgba(0,0,0,0.55)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
