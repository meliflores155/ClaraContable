import { useScrollReveal, useCounter } from '../../hooks/useScrollReveal'

const INFO_CARDS = [
  {
    label: 'Formación',
    text: 'Contadora Auditora, Universidad [por definir]',
    color: 'primary',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1a3a6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    label: 'Especialización',
    text: 'Tributaria, pymes y personas naturales',
    color: 'primary',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1a3a6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    label: 'Enfoque',
    text: 'Contabilidad clara, sin letra chica',
    color: 'cta',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#e87722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    label: 'Atención',
    text: 'Directa, por WhatsApp y videollamada',
    color: 'cta',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#e87722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
]

const COLOR_STYLES = {
  primary: {
    iconBg: 'linear-gradient(135deg, rgba(26,58,110,0.1) 0%, rgba(26,58,110,0.05) 100%)',
    labelColor: '#1a3a6e',
  },
  cta: {
    iconBg: 'linear-gradient(135deg, rgba(232,119,34,0.12) 0%, rgba(232,119,34,0.05) 100%)',
    labelColor: '#e87722',
  },
}

export default function About() {
  const [photoRef, photoVisible] = useScrollReveal()
  const [textRef, textVisible] = useScrollReveal()
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 })
  const yearsCount = useCounter(10, 1800, photoVisible)
  return (
    <section id="sobre-mi" style={{
      padding: '100px 0',
      background: 'linear-gradient(180deg, #f0f4fa 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative elements - animated */}
      <div style={{
        position: 'absolute',
        top: -80,
        right: -80,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,58,110,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'expandCircle 10s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -60,
        left: -60,
        width: 250,
        height: 250,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,119,34,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'driftUp 12s ease-in-out infinite 3s',
      }} />

      <div className="about-layout" style={{
        maxWidth: 1160,
        margin: '0 auto',
        padding: '0 32px',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '56px 80px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Photo */}
        <div ref={photoRef} className={`reveal-left ${photoVisible ? 'visible' : ''}`} style={{ flex: '0 1 400px', minWidth: 0, textAlign: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Decorative frame behind photo */}
            <div style={{
              position: 'absolute',
              top: -12,
              left: -12,
              right: -12,
              bottom: -12,
              borderRadius: 24,
              background: 'linear-gradient(135deg, #1a3a6e 0%, #e87722 100%)',
              opacity: 0.12,
            }} />
            <div style={{
              position: 'absolute',
              top: -6,
              left: -6,
              right: -6,
              bottom: -6,
              borderRadius: 20,
              border: '2px solid rgba(26,58,110,0.08)',
            }} />

            {/* Photo placeholder */}
            <div style={{
              width: 340,
              height: 420,
              background: 'linear-gradient(145deg, #e8edf5 0%, #d5dce8 100%)',
              borderRadius: 16,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(26,58,110,0.15)',
            }}>
              <div style={{ textAlign: 'center', color: '#8a9ab5', padding: 24 }}>
                <svg viewBox="0 0 24 24" width="72" height="72" fill="none" stroke="#8a9ab5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <p style={{ marginTop: 12, fontSize: 14, fontWeight: 500 }}>[Foto profesional]</p>
              </div>
            </div>

            {/* Experience badge */}
            <div style={{
              position: 'absolute',
              bottom: -16,
              right: -16,
              background: 'linear-gradient(135deg, #e87722 0%, #d4691a 100%)',
              color: '#ffffff',
              padding: '14px 20px',
              borderRadius: 14,
              boxShadow: '0 8px 24px rgba(232,119,34,0.35)',
              textAlign: 'center',
              animation: 'pulseOrange 3s ease-in-out infinite',
            }}>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 28,
                fontWeight: 800,
                lineHeight: 1,
              }}>{yearsCount}+</div>
              <div style={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                opacity: 0.95,
              }}>Años de experiencia</div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className={`reveal-right ${textVisible ? 'visible' : ''}`} style={{ flex: '1 1 480px', minWidth: 0 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'linear-gradient(135deg, rgba(26,58,110,0.08) 0%, rgba(26,58,110,0.04) 100%)',
            color: '#1a3a6e',
            fontWeight: 700,
            fontSize: 13,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            padding: '8px 18px',
            borderRadius: 999,
            marginBottom: 20,
          }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Sobre mí
          </div>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            marginBottom: 8,
            color: '#0f1b2d',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            [Nombre de la contadora]
          </h2>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 19,
            marginBottom: 8,
          }}>
            <span style={{ color: '#1a3a6e' }}>Contadora Auditora</span>
            {' '}
            <span style={{ color: '#cbd5e0' }}>·</span>
            {' '}
            <span style={{ color: '#e87722' }}>ClaraContable</span>
          </p>

          {/* Accent line */}
          <div style={{
            width: 60,
            height: 4,
            background: 'linear-gradient(90deg, #1a3a6e 0%, #e87722 100%)',
            borderRadius: 2,
            marginBottom: 20,
          }} />

          <p style={{
            color: '#4a5568',
            fontSize: 17,
            lineHeight: 1.75,
            marginBottom: 32,
          }}>
            Llevo más de 10 años ayudando a pymes y emprendedores a mantener su contabilidad al día, con un servicio cercano y transparente. Mi objetivo es que te concentres en hacer crecer tu negocio mientras yo me encargo de todo lo tributario y contable.
          </p>

          {/* Info cards 2x2 */}
          <div ref={cardsRef} className={`about-info-grid reveal-stagger ${cardsVisible ? 'visible' : ''}`} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            marginBottom: 36,
          }}>
            {INFO_CARDS.map((card, i) => {
              const colors = COLOR_STYLES[card.color]
              return (
                <div key={i} style={{
                  padding: 22,
                  background: '#ffffff',
                  borderRadius: 14,
                  border: '1px solid #e8edf5',
                  boxShadow: '0 4px 16px rgba(26,58,110,0.06)',
                  display: 'flex',
                  gap: 14,
                  alignItems: 'flex-start',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,58,110,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,58,110,0.06)'
                  }}
                >
                  <div style={{
                    width: 42,
                    height: 42,
                    minWidth: 42,
                    background: colors.iconBg,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: colors.labelColor,
                      marginBottom: 3,
                    }}>{card.label}</div>
                    <p style={{
                      color: '#5a6b83',
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}>{card.text}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-layout {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .about-layout > div:first-child {
            flex: 1 1 auto !important;
          }
          .about-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
