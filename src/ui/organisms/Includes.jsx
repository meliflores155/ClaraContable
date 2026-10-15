import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Includes() {
  const INCLUDES = [
    {
      title: 'Contabilidad mensual',
      desc: 'Registro ordenado de todas tus operaciones mes a mes. Ingresos, gastos y movimientos siempre al día en el SII.',
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" />
          <path d="M8 10h8" />
          <path d="M8 14h4" />
        </svg>
      ),
    },
    {
      title: 'Declaración de impuestos',
      desc: 'Declaraciones de IVA, PPM, retenciones y renta anual. Me aseguro de que cada formulario se presente a tiempo.',
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      title: 'Remuneraciones',
      desc: 'Cálculo de sueldos, imposiciones, AFP, salud y anticipos. Tus trabajadores con sus liquidaciones listas cada mes.',
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      title: 'Pre-balance en línea',
      desc: 'Accede a tu información financiera cuando quieras. Revisa cómo va tu negocio sin esperar a fin de mes.',
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Regularizaciones tributarias',
      desc: '¿Tienes deudas o declaraciones atrasadas con el SII? Te ayudo a ponerte al día y evitar multas innecesarias.',
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Soporte directo',
      desc: 'Asesoría por WhatsApp y videollamada. Resuelvo tus dudas tributarias y contables sin que tengas que ir a una oficina.',
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
    },
  ]

  const [headerRef, headerVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 })
  const [noteRef, noteVisible] = useScrollReveal()

  return (
    <section style={{ padding: '88px 0', background: '#f7f9fc', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute', top: -80, left: -80, width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,58,110,0.05) 0%, transparent 70%)', pointerEvents: 'none',
        animation: 'expandCircle 11s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: -60, right: -60, width: 250, height: 250, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,119,34,0.05) 0%, transparent 70%)', pointerEvents: 'none',
        animation: 'driftUp 10s ease-in-out infinite 1s',
      }} />

      <div className="container">
        {/* Header */}
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(232,119,34,0.1)',
            color: '#e87722',
            fontWeight: 700,
            fontSize: 13,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            padding: '8px 20px',
            borderRadius: 999,
            marginBottom: 16,
          }}>
            Todo incluido
          </div>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: '#0a1628',
            maxWidth: 700,
            margin: '0 auto',
            lineHeight: 1.1,
          }}>
            ¿Qué incluye mi servicio de contabilidad?
          </h2>

          <p style={{
            marginTop: 16,
            fontSize: 18,
            color: '#5a6b83',
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Un servicio integral para que no te preocupes de nada. Cada mes me encargo de todo esto por ti:
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className={`includes-grid reveal-stagger ${gridVisible ? 'visible' : ''}`} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {INCLUDES.map((item, i) => (
            <div key={i} style={{
              background: '#ffffff',
              borderRadius: 14,
              padding: '32px 28px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(26,58,110,0.04)',
              position: 'relative',
              overflow: 'hidden',
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
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(26,58,110,0.04)'
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: 'linear-gradient(90deg, #2563eb, #e87722)',
              }} />

              {/* Icon */}
              <div style={{
                width: 52,
                height: 52,
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 18,
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) rotate(3deg)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {item.icon}
              </div>

              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: '#0a1628',
                marginBottom: 8,
              }}>{item.title}</h3>

              <p style={{
                color: '#5a6b83',
                fontSize: 15,
                lineHeight: 1.6,
              }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div ref={noteRef} className={`reveal-scale ${noteVisible ? 'visible' : ''}`} style={{
          textAlign: 'center',
          marginTop: 40,
          padding: '24px 32px',
          background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
          borderRadius: 12,
          color: '#ffffff',
        }}>
          <p style={{ fontSize: 17, fontWeight: 600, marginBottom: 4 }}>
            También incluye: boletas de honorarios, operación renta y mucho más
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>
            Cada negocio es distinto. Conversemos para armar un plan que se ajuste a lo que necesitas.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .includes-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
