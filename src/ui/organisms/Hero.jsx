import Button from '../atoms/Button'

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1a3a6e 0%, #0f2a5c 100%)',
      paddingTop: 140,
      paddingBottom: 96,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorative circles */}
      <div style={{
        position: 'absolute',
        top: -120,
        right: -120,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'rgba(232,119,34,0.08)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -80,
        left: -80,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.03)',
      }} />

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: 64,
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Text */}
        <div style={{ animation: 'fadeInLeft 0.8s ease both' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(232,119,34,0.15)',
            color: '#f28c28',
            fontSize: 13,
            fontWeight: 600,
            padding: '6px 18px',
            borderRadius: 20,
            marginBottom: 24,
            letterSpacing: '0.5px',
          }}>
            Contabilidad profesional
          </span>

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Tu negocio en orden,{' '}
            <span style={{
              background: 'linear-gradient(135deg, #e87722, #f28c28)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              tu mente en paz
            </span>
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.7,
            marginBottom: 36,
            maxWidth: 500,
          }}>
            Servicios contables, fiscales y de nómina para emprendedores y
            PyMEs que quieren crecer sin preocuparse por los números.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Button href="#contacto">
              Agenda tu consulta gratis
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
            <Button variant="outline" href="#servicios" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              Ver servicios
            </Button>
          </div>
        </div>

        {/* Illustration placeholder */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          animation: 'float 6s ease-in-out infinite',
        }}>
          <div style={{
            width: 400,
            height: 400,
            borderRadius: 24,
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.4)',
            fontSize: 64,
          }}>
            📊
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
