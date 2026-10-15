export default function CtaBand() {
  return (
    <section style={{
      background: '#e87722',
      padding: '56px 0',
      textAlign: 'center',
    }}>
      <div className="container">
        <h2 style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(28px, 4vw, 36px)',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: 12,
          lineHeight: 1.1,
        }}>
          La primera reunión es sin costo
        </h2>

        <p style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: 18,
          maxWidth: '50ch',
          margin: '0 auto 28px',
        }}>
          Conversemos sobre tu negocio y te entrego una propuesta con precio fijo, sin compromiso.
        </p>

        <a
          href="#contacto"
          style={{
            background: '#ffffff',
            color: '#1a3a6e',
            textDecoration: 'none',
            fontWeight: 700,
            padding: '16px 36px',
            borderRadius: 8,
            fontSize: 17,
            minHeight: 52,
            boxSizing: 'border-box',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Agendar reunión gratuita
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  )
}
