export default function SectionDivider() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0 clamp(1.25rem, 4vw, 2rem)',
      margin: '0 auto',
      maxWidth: '1200px',
    }}>
      <span style={{ color: '#8F5A39', fontWeight: 300, fontSize: 18, userSelect: 'none' }}>+</span>
      <div style={{
        flex: 1,
        height: 1,
        background: 'rgba(143, 90, 57, 0.18)',
        margin: '0 8px',
      }} />
      <span style={{ color: '#8F5A39', fontWeight: 300, fontSize: 18, userSelect: 'none' }}>+</span>
    </div>
  );
}
