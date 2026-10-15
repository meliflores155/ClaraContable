import SectionTitle from '../atoms/SectionTitle'

const INCLUDES = [
  { icon: '📅', title: 'Reportes mensuales', desc: 'Estados financieros claros cada mes para que sepas exactamente cómo va tu negocio.' },
  { icon: '💬', title: 'Comunicación directa', desc: 'Línea abierta por WhatsApp y correo para resolver tus dudas cuando surjan.' },
  { icon: '🔔', title: 'Alertas y recordatorios', desc: 'Te aviso de fechas importantes del SAT para que nunca se te pase un vencimiento.' },
  { icon: '📂', title: 'Expediente digital', desc: 'Todos tus documentos organizados en la nube, accesibles en cualquier momento.' },
  { icon: '🛡️', title: 'Confidencialidad total', desc: 'Tu información está protegida con los más altos estándares de seguridad.' },
  { icon: '🎯', title: 'Plan personalizado', desc: 'Cada plan se adapta al tamaño y necesidades específicas de tu negocio.' },
]

export default function Includes() {
  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div className="container">
        <SectionTitle
          tag="Incluido"
          title="¿Qué incluye trabajar conmigo?"
          subtitle="Más que contabilidad: un acompañamiento completo para tu tranquilidad."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {INCLUDES.map((item, i) => (
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
              <div style={{ fontSize: 32, marginBottom: 16, transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) rotate(3deg)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 17,
                fontWeight: 700,
                color: '#1a3a6e',
                marginBottom: 8,
              }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          ))}
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
