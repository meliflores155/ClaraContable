import Button from '../atoms/Button'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const SERVICES = [
  {
    title: 'Contabilidad mensual',
    desc: 'Registro tus ventas, compras y gastos, hago la conciliación bancaria y te envío un informe mensual claro.',
    color: 'primary', // blue
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'IVA y declaraciones',
    desc: 'Preparo y presento tu F29 dentro de plazo y te aviso con anticipación cuánto debes pagar. Sin multas ni recargos.',
    color: 'cta', // orange
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Declaración de renta',
    desc: 'Operación Renta para personas y empresas: reviso qué te corresponde recuperar y evito observaciones del SII.',
    color: 'primary',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: 'Inicio de actividades',
    desc: 'Te acompaño a iniciar actividades en el SII, elegir el régimen tributario y emitir tu primera boleta o factura.',
    color: 'cta',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
  },
  {
    title: 'Remuneraciones',
    desc: 'Preparo liquidaciones de sueldo, contratos, finiquitos y la declaración de cotizaciones en Previred.',
    color: 'primary',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Balances y estados financieros',
    desc: 'Elaboro el balance anual y los estados financieros para bancos, licitaciones o para saber cómo va tu negocio.',
    color: 'cta',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 118 2.83" />
        <path d="M22 12A10 10 0 0012 2v10z" />
      </svg>
    ),
  },
]

const COLOR_MAP = {
  primary: {
    iconBg: 'linear-gradient(135deg, #1a3a6e 0%, #0f2a5c 100%)',
    iconShadow: '0 4px 16px rgba(26,58,110,0.3)',
    topLine: 'linear-gradient(90deg, #1a3a6e, #4a7fd4)',
  },
  cta: {
    iconBg: 'linear-gradient(135deg, #e87722 0%, #d4691a 100%)',
    iconShadow: '0 4px 16px rgba(232,119,34,0.3)',
    topLine: 'linear-gradient(90deg, #e87722, #f5a623)',
  },
}

export default function Services() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 })
  return (
    <section id="servicios" style={{
      padding: '90px 0',
      background: 'linear-gradient(170deg, #0a1628 0%, #132744 50%, #0f2a5c 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: 'linear-gradient(90deg, #1a3a6e 0%, #e87722 50%, #1a3a6e 100%)',
      }} />

      {/* Decorative elements - animated */}
      <div style={{
        position: 'absolute', top: 80, right: -100, width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,119,34,0.08) 0%, transparent 70%)', pointerEvents: 'none',
        animation: 'expandCircle 10s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -80, width: 350, height: 350, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,58,110,0.15) 0%, transparent 70%)', pointerEvents: 'none',
        animation: 'driftUp 12s ease-in-out infinite 2s',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,119,34,0.04) 0%, transparent 60%)', pointerEvents: 'none',
        animation: 'breathe 9s ease-in-out infinite',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 60,
            background: 'linear-gradient(135deg, #e87722 0%, #d4691a 100%)',
            borderRadius: 18,
            marginBottom: 22,
            boxShadow: '0 6px 24px rgba(232,119,34,0.3)',
          }}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 16,
            lineHeight: 1.1,
          }}>
            Servicios para tu pyme
          </h2>

          <p style={{
            color: '#94a3b8',
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: '54ch',
            margin: '0 auto',
          }}>
            Desde el inicio de actividades hasta la Operación Renta, me encargo de toda
            tu contabilidad para que te concentres en tu negocio.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className={`services-grid reveal-stagger ${gridVisible ? 'visible' : ''}`} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 22,
        }}>
          {SERVICES.map((service, i) => {
            const colors = COLOR_MAP[service.color]
            return (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 18,
                padding: '32px 26px',
                position: 'relative',
                overflow: 'hidden',
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
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: colors.topLine,
                }} />

                {/* Icon */}
                <div style={{
                  width: 54,
                  height: 54,
                  background: colors.iconBg,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  boxShadow: colors.iconShadow,
                  transition: 'transform 0.3s ease',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) rotate(3deg)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {service.icon}
                </div>

                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 10,
                  color: '#ffffff',
                }}>{service.title}</h3>

                <p style={{
                  color: '#94a3b8',
                  fontSize: 14,
                  lineHeight: 1.7,
                }}>{service.desc}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Button href="#contacto">
            Cotizar un servicio
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
