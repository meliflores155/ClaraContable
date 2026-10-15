import SectionTitle from '../atoms/SectionTitle'

const REASONS = [
  { icon: '🎓', title: 'Experiencia comprobada', desc: 'Más de X años ayudando a emprendedores y PyMEs a cumplir con sus obligaciones fiscales.' },
  { icon: '🤝', title: 'Trato personalizado', desc: 'No eres un número más. Conozco tu negocio y te doy atención directa.' },
  { icon: '⚡', title: 'Respuesta rápida', desc: 'Respondo en menos de 24 horas. Tu tiempo es valioso y lo respeto.' },
  { icon: '💰', title: 'Precios justos', desc: 'Planes accesibles sin comprometer la calidad del servicio.' },
]

export default function WhyMe() {
  return (
    <section style={{
      padding: '96px 0',
      background: 'linear-gradient(135deg, #1a3a6e 0%, #0f2a5c 100%)',
    }}>
      <div className="container">
        <SectionTitle
          tag="Diferencial"
          title="¿Por qué trabajar conmigo?"
          subtitle="Lo que me distingue es la combinación de experiencia, compromiso y cercanía."
          light
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          {REASONS.map((reason, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: '32px 24px',
              textAlign: 'center',
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
              <div style={{ fontSize: 36, marginBottom: 16 }}>{reason.icon}</div>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 17,
                fontWeight: 700,
                color: '#fff',
                marginBottom: 8,
              }}>{reason.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container > div:nth-child(2) {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
