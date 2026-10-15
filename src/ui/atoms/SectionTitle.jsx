export default function SectionTitle({ tag, title, subtitle, light = false, center = true }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 56 }}>
      {tag && (
        <span style={{
          display: 'inline-block',
          background: light ? 'rgba(255,255,255,0.12)' : 'rgba(26,58,110,0.08)',
          color: light ? '#fff' : '#1a3a6e',
          fontSize: 13,
          fontWeight: 600,
          padding: '6px 18px',
          borderRadius: 20,
          marginBottom: 16,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        }}>
          {tag}
        </span>
      )}
      <h2 style={{
        fontSize: 'clamp(28px, 4vw, 40px)',
        fontWeight: 800,
        color: light ? '#fff' : '#1a3a6e',
        marginBottom: subtitle ? 16 : 0,
        lineHeight: 1.15,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: 17,
          color: light ? 'rgba(255,255,255,0.8)' : '#6b7280',
          maxWidth: 640,
          margin: center ? '0 auto' : undefined,
          lineHeight: 1.65,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
