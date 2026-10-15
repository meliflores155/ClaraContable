import { useScrollReveal } from '../../hooks/useScrollReveal'

const REASONS = [
  {
    title: 'Atención directa y personal',
    desc: 'Hablas conmigo, no con intermediarios ni con un formulario. Conozco tu negocio, tus plazos y tus prioridades porque los sigo de cerca.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Respuesta en 24 horas',
    desc: 'Tus dudas no esperan una semana. Me escribes por WhatsApp o correo y te respondo en un día hábil, con la solución clara.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Estándar de auditoría',
    desc: 'Soy contadora auditora. Reviso cada documento como si el SII fuera a fiscalizar mañana. Así duermes tranquilo.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Todo en un solo lugar',
    desc: 'Contabilidad, tributaria, remuneraciones y asesoría legal tributaria. No necesitas contratar a tres personas distintas.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
]

export default function WhyMe() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 })
  return (
    <section id="porque" style={{
      padding: '96px 0',
      background: 'linear-gradient(160deg, #1e3a5f 0%, #2563eb 50%, #1d4ed8 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot pattern overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      {/* Decorative circles - animated */}
      <div style={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: 350,
        height: 350,
        background: '#e87722',
        opacity: 0.06,
        borderRadius: '50%',
        pointerEvents: 'none',
        animation: 'expandCircle 9s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -80,
        left: -60,
        width: 250,
        height: 250,
        background: '#e87722',
        opacity: 0.04,
        borderRadius: '50%',
        pointerEvents: 'none',
        animation: 'driftUp 11s ease-in-out infinite 1s',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'linear-gradient(135deg, #e87722, #d4691a)',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: 13,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            padding: '8px 20px',
            borderRadius: 999,
            marginBottom: 20,
          }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Mi diferencia
          </div>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#ffffff',
            maxWidth: 600,
            margin: '0 auto',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}>
            ¿Por qué trabajar conmigo?
          </h2>

          <p style={{
            marginTop: 16,
            fontSize: 18,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 550,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            No soy una oficina grande con rotación de personal. Soy tu contadora, y me involucro de verdad en tu negocio.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div ref={gridRef} className={`whyme-grid reveal-stagger ${gridVisible ? 'visible' : ''}`} style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          maxWidth: 960,
          margin: '0 auto',
        }}>
          {REASONS.map((reason, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: '36px 32px',
              display: 'flex',
              gap: 20,
              alignItems: 'flex-start',
              transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), background 0.3s ease, border-color 0.3s ease',
              cursor: 'default',
              animation: `fadeInUp 0.6s ease both ${0.1 * i}s`,
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              {/* Icon */}
              <div style={{
                width: 56,
                height: 56,
                background: 'linear-gradient(135deg, #e87722, #d4691a)',
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(232,119,34,0.3)',
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) rotate(3deg)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {reason.icon}
              </div>

              {/* Text */}
              <div>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 21,
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: 8,
                }}>{reason.title}</h3>
                <p style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 15,
                  lineHeight: 1.65,
                }}>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .whyme-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
