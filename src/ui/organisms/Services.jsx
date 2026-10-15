import SectionTitle from '../atoms/SectionTitle'
import Button from '../atoms/Button'

const SERVICES = [
  { icon: '📊', title: 'Contabilidad general', desc: 'Registro y control de todas tus operaciones financieras con reportes claros mensuales.' },
  { icon: '🧾', title: 'Declaraciones fiscales', desc: 'Presentación puntual de tus declaraciones mensuales y anuales ante el SAT.' },
  { icon: '👥', title: 'Nómina', desc: 'Cálculo, timbrado y gestión completa de la nómina de tus empleados.' },
  { icon: '💡', title: 'Asesoría fiscal', desc: 'Estrategias personalizadas para optimizar tu carga fiscal legalmente.' },
  { icon: '📄', title: 'Facturación electrónica', desc: 'Emisión y administración de tus CFDI con soporte técnico incluido.' },
  { icon: '🏢', title: 'Constitución de empresas', desc: 'Te acompaño en todo el proceso de alta y formalización de tu negocio.' },
]

export default function Services() {
  return (
    <section id="servicios" style={{
      padding: '96px 0',
      background: 'linear-gradient(135deg, #1a3a6e 0%, #0f2a5c 100%)',
    }}>
      <div className="container">
        <SectionTitle
          tag="Servicios"
          title="Soluciones contables a tu medida"
          subtitle="Cada servicio está diseñado para darte tranquilidad y resultados reales."
          light
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginBottom: 48,
        }}>
          {SERVICES.map((service, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: '32px 28px',
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
              <div style={{ fontSize: 32, marginBottom: 16 }}>{service.icon}</div>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 17,
                fontWeight: 700,
                color: '#fff',
                marginBottom: 8,
              }}>{service.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button href="#contacto">
            Solicitar cotización
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #servicios .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
