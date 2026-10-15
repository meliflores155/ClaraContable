import SectionTitle from '../atoms/SectionTitle'

const TESTIMONIALS = [
  {
    name: 'María García',
    role: 'Dueña de boutique',
    text: 'Desde que trabajo con ClaraContable, dejé de preocuparme por el SAT. Todo está en orden y me explica cada detalle con paciencia.',
    initials: 'MG',
  },
  {
    name: 'Roberto Hernández',
    role: 'Emprendedor tech',
    text: 'Profesional, puntual y siempre disponible. Me ayudó a constituir mi empresa y ahora lleva toda mi contabilidad. 100% recomendada.',
    initials: 'RH',
  },
  {
    name: 'Ana López',
    role: 'Freelancer',
    text: 'Por fin entiendo mis obligaciones fiscales. Su forma de explicar es clara y sin tecnicismos. La mejor decisión que tomé.',
    initials: 'AL',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" style={{
      padding: '96px 0',
      background: 'linear-gradient(135deg, #1a3a6e 0%, #0f2a5c 100%)',
    }}>
      <div className="container">
        <SectionTitle
          tag="Testimonios"
          title="Lo que dicen mis clientes"
          subtitle="La confianza de mis clientes es mi mejor carta de presentación."
          light
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: '32px 28px',
              transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), background 0.3s ease, border-color 0.3s ease',
              cursor: 'default',
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
              {/* Stars */}
              <div style={{ color: '#f59e0b', fontSize: 18, marginBottom: 16 }}>
                ★★★★★
              </div>
              <p style={{
                fontSize: 15,
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.7,
                marginBottom: 24,
                fontStyle: 'italic',
              }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #e87722, #f28c28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 14,
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: '#fff', fontSize: 15 }}>{t.name}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #testimonios .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
