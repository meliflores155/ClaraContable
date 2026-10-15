import { useState } from 'react'
import SectionTitle from '../atoms/SectionTitle'

const FAQ_ITEMS = [
  {
    q: '¿Cuánto cuestan tus servicios?',
    a: 'Los precios varían según el tamaño de tu negocio y los servicios que necesites. Agendamos una consulta gratuita para darte una cotización personalizada sin compromiso.',
  },
  {
    q: '¿Trabajas con personas físicas y morales?',
    a: 'Sí, atiendo tanto personas físicas con actividad empresarial como personas morales (empresas constituidas).',
  },
  {
    q: '¿Cómo es la comunicación?',
    a: 'Tendrás línea directa conmigo por WhatsApp, correo electrónico y videollamada. Respondo en menos de 24 horas hábiles.',
  },
  {
    q: '¿Puedes ayudarme si ya tengo problemas con el SAT?',
    a: 'Por supuesto. Puedo regularizar tu situación fiscal, atender requerimientos y ayudarte a ponerte al día con tus obligaciones.',
  },
  {
    q: '¿Necesito estar en la misma ciudad?',
    a: 'No. Trabajo de manera 100% remota con clientes en todo México. Todo lo manejamos de forma digital.',
  },
  {
    q: '¿Cómo empezamos a trabajar juntos?',
    a: 'Simplemente agenda tu consulta gratuita. En esa primera llamada conozco tu situación y te presento una propuesta personalizada.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" style={{ padding: '96px 0', background: '#fff' }}>
      <div className="container">
        <SectionTitle
          tag="FAQ"
          title="Preguntas frecuentes"
          subtitle="Las respuestas a las dudas más comunes de mis clientes."
        />

        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} style={{
              borderBottom: '1px solid #e5e7eb',
            }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '20px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s ease',
                }}
              >
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#1a3a6e',
                }}>
                  {item.q}
                </span>
                <span style={{
                  fontSize: 22,
                  color: '#e87722',
                  fontWeight: 300,
                  transition: 'transform 0.3s ease',
                  transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                  flexShrink: 0,
                  marginLeft: 16,
                }}>
                  +
                </span>
              </button>
              <div style={{
                maxHeight: openIndex === i ? 200 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}>
                <p style={{
                  fontSize: 15,
                  color: '#6b7280',
                  lineHeight: 1.7,
                  paddingBottom: 20,
                }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
