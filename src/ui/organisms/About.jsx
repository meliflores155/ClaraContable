import SectionTitle from '../atoms/SectionTitle'
import Button from '../atoms/Button'

export default function About() {
  return (
    <section id="sobre-mi" style={{ padding: '96px 0', background: '#f8f9fc' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
        alignItems: 'center',
      }}>
        {/* Photo placeholder */}
        <div style={{
          borderRadius: 20,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1a3a6e 0%, #2a4a7e 100%)',
          aspectRatio: '4/5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(255,255,255,0.3)',
          fontSize: 72,
        }}>
          👩‍💼
        </div>

        {/* Text */}
        <div>
          <SectionTitle
            tag="Sobre mí"
            title="Conóceme"
            subtitle=""
            center={false}
          />
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.8, marginBottom: 16 }}>
            Soy contadora pública con más de X años de experiencia ayudando a
            emprendedores y pequeñas empresas a mantener sus finanzas en orden
            y cumplir con sus obligaciones fiscales sin estrés.
          </p>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.8, marginBottom: 32 }}>
            Mi misión es ser más que tu contadora: quiero ser tu aliada
            estratégica, alguien en quien puedas confiar para tomar las mejores
            decisiones financieras para tu negocio.
          </p>
          <Button href="#contacto">
            Conóceme y conversemos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sobre-mi .container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
