import Button from '../atoms/Button'

const SIGNALS = [
  {
    title: 'Tu contador no responde',
    desc: 'O te contesta dias despues, cuando ya paso el plazo.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92V19.92a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    title: 'No sabes cuanto ganas realmente',
    desc: 'Porque nunca recibes un estado financiero claro.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        <line x1="4" y1="4" x2="20" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Multas o notificaciones del SII',
    desc: 'Te han llegado y nadie te explico que hacer.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Tu contabilidad esta atrasada',
    desc: 'Y cada mes se hace mas dificil ponerse al dia.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'La Operacion Renta siempre es una urgencia',
    desc: 'De ultima semana, con estres y sin tiempo para revisar.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Te piden antecedentes que no tienes',
    desc: 'Tu banco o medio de pago necesita documentos que no tienes ordenados.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
]

export default function Signals() {
  return (
    <section style={{
      padding: '88px 0',
      background: 'linear-gradient(180deg, #f0f4fa 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: -80,
        right: -80,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,119,34,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -60,
        left: -60,
        width: 250,
        height: 250,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,58,110,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(232,119,34,0.1)',
            border: '1px solid rgba(232,119,34,0.25)',
            color: '#e87722',
            fontWeight: 700,
            fontSize: 14,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            padding: '8px 20px',
            borderRadius: 999,
            marginBottom: 20,
          }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#e87722" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Te suena familiar?
          </div>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#0a1628',
            maxWidth: 720,
            margin: '0 auto',
            lineHeight: 1.1,
          }}>
            Señales de que tu contabilidad necesita otro nivel
          </h2>

          <p style={{
            marginTop: 18,
            color: '#4a5568',
            maxWidth: '56ch',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 17,
          }}>
            Si te identificas con alguna, no estás solo. Muchos de mis clientes llegaron
            así y hoy operan sin problemas con el SII.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 20,
          justifyContent: 'center',
        }}>
          {SIGNALS.map((signal, i) => (
            <div key={i} style={{
              flex: '1 1 320px',
              maxWidth: 540,
              minWidth: 0,
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 16,
              padding: '28px 28px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 18,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease',
              cursor: 'default',
              animation: `fadeInUp 0.6s ease both ${0.1 * i}s`,
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
              }}
            >
              {/* Icon box */}
              <div style={{
                flex: 'none',
                width: 48,
                height: 48,
                background: 'linear-gradient(135deg, #e87722, #d4691a)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(232,119,34,0.3)',
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) rotate(3deg)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {signal.icon}
              </div>

              {/* Text */}
              <div>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#0a1628',
                  marginBottom: 6,
                }}>{signal.title}</h3>
                <p style={{
                  color: '#4a5568',
                  fontSize: 15,
                  lineHeight: 1.55,
                }}>{signal.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{
            color: '#4a5568',
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 20,
          }}>
            Si alguna te suena, puedo ayudarte a solucionarlo.
          </p>
          <Button href="#contacto">
            Conversemos sobre tu caso
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}
