import SectionTitle from '../atoms/SectionTitle'
import Button from '../atoms/Button'

const STEPS = [
  { num: '01', title: 'Conversamos', desc: 'Agendas una llamada gratuita donde conozco tu situación y necesidades.' },
  { num: '02', title: 'Diagnóstico', desc: 'Analizo tu situación fiscal actual e identifico oportunidades de mejora.' },
  { num: '03', title: 'Propuesta', desc: 'Te presento un plan personalizado con precios claros y sin sorpresas.' },
  { num: '04', title: 'Manos a la obra', desc: 'Empiezo a trabajar de inmediato con reportes mensuales y comunicación constante.' },
]

export default function Process() {
  return (
    <section id="proceso" style={{ padding: '96px 0', background: '#f8f9fc' }}>
      <div className="container">
        <SectionTitle
          tag="Proceso"
          title="¿Cómo empezamos?"
          subtitle="En 4 pasos sencillos ponemos tu contabilidad en orden."
        />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          maxWidth: 640,
          margin: '0 auto 48px',
        }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: 24,
              position: 'relative',
              paddingBottom: i < STEPS.length - 1 ? 48 : 0,
            }}>
              {/* Timeline line */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: 23,
                  top: 48,
                  width: 2,
                  height: 'calc(100% - 48px)',
                  background: 'linear-gradient(180deg, #e87722, rgba(232,119,34,0.2))',
                }} />
              )}

              {/* Number circle */}
              <div style={{
                width: 48,
                height: 48,
                minWidth: 48,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1a3a6e, #2a4a7e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: 16,
                zIndex: 1,
              }}>
                {step.num}
              </div>

              {/* Content */}
              <div style={{ flex: 1, paddingTop: 4 }}>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 19,
                  fontWeight: 700,
                  color: '#1a3a6e',
                  marginBottom: 6,
                }}>{step.title}</h3>
                <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button href="#contacto">
            Conversemos hoy
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}
