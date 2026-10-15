import Button from '../atoms/Button'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const STEPS = [
  {
    title: 'Conversamos',
    desc: 'Me cuentas cómo funciona tu negocio y qué necesitas. Sin costo.',
    color: 'primary',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: 'Propuesta clara',
    desc: 'Te entrego un valor fijo por escrito, sin compromiso ni letra chica.',
    color: 'primary',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Ordeno tu situación',
    desc: 'Reviso tu estado en el SII y dejo todo regularizado.',
    color: 'cta',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Trabajo mensual',
    desc: 'Me envías tus documentos, los registro y presento tus impuestos.',
    color: 'primary',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Te informo',
    desc: 'Cada mes recibes un resumen claro con lo importante y lo que viene.',
    color: 'cta',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

const COLOR_MAP = {
  primary: {
    iconBg: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    iconShadow: '0 8px 24px rgba(26,58,110,0.4)',
    iconBorder: '3px solid rgba(255,255,255,0.1)',
    badgeBg: '#2563eb',
  },
  cta: {
    iconBg: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    iconShadow: '0 8px 24px rgba(232,119,34,0.35)',
    iconBorder: '3px solid rgba(255,255,255,0.15)',
    badgeBg: '#f97316',
  },
}

export default function Process() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [stepsRef, stepsVisible] = useScrollReveal({ threshold: 0.1 })
  const [ctaRef, ctaVisible] = useScrollReveal()
  return (
    <section id="proceso" style={{
      padding: '100px 0',
      background: 'linear-gradient(180deg, #0a1628 0%, #101d33 50%, #0f1b2d 100%)',
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
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      {/* Decorative glow - animated */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,119,34,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'breathe 8s ease-in-out infinite',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`} style={{ display: 'inline-block' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'linear-gradient(135deg, rgba(232,119,34,0.2) 0%, rgba(232,119,34,0.08) 100%)',
          color: '#f97316',
          fontWeight: 700,
          fontSize: 13,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          padding: '8px 18px',
          borderRadius: 999,
          marginBottom: 20,
          border: '1px solid rgba(232,119,34,0.15)',
        }}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
          Proceso
        </div>

        <h2 style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 700,
          color: '#ffffff',
          maxWidth: 600,
          margin: '0 auto 12px',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}>
          ¿Cómo trabajo contigo?
        </h2>

        <p style={{
          color: '#8a9bb5',
          fontSize: 18,
          maxWidth: 520,
          margin: '0 auto 56px',
        }}>
          Un proceso simple y transparente para que tu contabilidad esté siempre al día
        </p>
        </div>

        {/* Timeline steps */}
        <div ref={stepsRef} className={`process-timeline reveal-stagger ${stepsVisible ? 'visible' : ''}`} style={{
          display: 'flex',
          flexWrap: 'nowrap',
          gap: 0,
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Connecting line */}
          <div className="process-line" style={{
            position: 'absolute',
            top: 36,
            left: '10%',
            right: '10%',
            height: 3,
            background: 'linear-gradient(90deg, #2563eb 0%, #f97316 100%)',
            opacity: 0.3,
            zIndex: 0,
            borderRadius: 2,
          }} />

          {STEPS.map((step, i) => {
            const colors = COLOR_MAP[step.color]
            return (
              <div key={i} style={{
                flex: 1,
                minWidth: 0,
                textAlign: 'center',
                padding: '0 6px',
                position: 'relative',
                zIndex: 1,
                animation: `fadeInUp 0.6s ease both ${0.12 * i}s`,
              }}>
                {/* Icon box */}
                <div style={{
                  width: 72,
                  height: 72,
                  background: colors.iconBg,
                  borderRadius: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: colors.iconShadow,
                  border: colors.iconBorder,
                  transition: 'transform 0.3s ease',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) rotate(3deg)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {step.icon}
                </div>

                {/* Step badge */}
                <div style={{
                  display: 'inline-block',
                  background: colors.badgeBg,
                  color: '#ffffff',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: 11,
                  padding: '3px 12px',
                  borderRadius: 999,
                  marginBottom: 12,
                  letterSpacing: '0.04em',
                }}>
                  PASO {i + 1}
                </div>

                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: 10,
                }}>{step.title}</h3>

                <p style={{
                  color: '#8a9bb5',
                  fontSize: 14,
                  lineHeight: 1.6,
                }}>{step.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className={`reveal-scale ${ctaVisible ? 'visible' : ''}`} style={{
          marginTop: 56,
          padding: '28px 40px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          display: 'inline-flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '16px 32px',
          justifyContent: 'center',
        }}>
          <div style={{ textAlign: 'left' }}>
            <p style={{
              color: '#ffffff',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              marginBottom: 4,
            }}>¿Lista para empezar?</p>
            <p style={{
              color: '#8a9bb5',
              fontSize: 15,
            }}>El primer paso es una conversación sin costo ni compromiso</p>
          </div>

          <Button href="#contacto">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92V19.92a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Conversemos hoy
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-timeline {
            flex-direction: column !important;
            gap: 32px !important;
            align-items: center;
          }
          .process-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
