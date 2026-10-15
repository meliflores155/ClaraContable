import Button from '../atoms/Button'

export default function CtaBand() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #e87722, #f28c28)',
      padding: '64px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 24,
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(24px, 3vw, 32px)',
            fontWeight: 800,
            color: '#fff',
            marginBottom: 8,
          }}>
            ¿Lista para poner tu contabilidad en orden?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.9)' }}>
            Tu primera consulta es totalmente gratis y sin compromiso.
          </p>
        </div>
        <Button variant="white" href="#contacto">
          Agendar consulta gratis
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </section>
  )
}
