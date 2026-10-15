import SectionTitle from '../atoms/SectionTitle'
import Button from '../atoms/Button'

const SIGNALS = [
  { icon: '⚠️', title: 'Multas del SAT', desc: 'Recibes notificaciones o multas por errores en tus declaraciones.' },
  { icon: '📋', title: 'Desorden fiscal', desc: 'No sabes cuánto debes pagar de impuestos ni cuándo.' },
  { icon: '🧾', title: 'Facturas acumuladas', desc: 'Tienes facturas sin organizar y no llevas control.' },
  { icon: '💸', title: 'Pagas de más', desc: 'Sientes que pagas más impuestos de lo que deberías.' },
  { icon: '📉', title: 'Sin estados financieros', desc: 'No tienes claridad sobre la salud financiera de tu negocio.' },
  { icon: '🔄', title: 'Cambio de contador', desc: 'Tu contador actual no te da confianza ni resultados.' },
]

export default function Signals() {
  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div className="container">
        <SectionTitle
          tag="Identifícate"
          title="¿Reconoces alguna de estas señales?"
          subtitle="Si alguna de estas situaciones te suena familiar, es momento de tomar el control de tus finanzas."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginBottom: 48,
        }}>
          {SIGNALS.map((signal, i) => (
            <div key={i} style={{
              background: '#ffffff',
              borderRadius: 16,
              padding: '32px 28px',
              border: '1px solid #e5e7eb',
              transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease',
              cursor: 'default',
              animation: `fadeInUp 0.6s ease both ${0.1 * i}s`,
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                fontSize: 32,
                marginBottom: 16,
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) rotate(3deg)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {signal.icon}
              </div>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 17,
                fontWeight: 700,
                color: '#1a3a6e',
                marginBottom: 8,
              }}>{signal.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>
                {signal.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button href="#contacto">
            Quiero poner orden
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
