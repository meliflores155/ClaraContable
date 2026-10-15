import Button from '../atoms/Button'

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1a3a6e 0%, #0f2a5c 50%, #0a1f4a 100%)',
      paddingTop: 140,
      paddingBottom: 96,
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: -150,
        right: -150,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,119,34,0.12) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -100,
        left: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '15%',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,119,34,0.06) 0%, transparent 70%)',
      }} />

      {/* Floating particles */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'rgba(232,119,34,0.4)',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '20%',
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.2)',
        animation: 'float 6s ease-in-out infinite 1s',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '25%',
        left: '30%',
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: 'rgba(232,119,34,0.3)',
        animation: 'float 7s ease-in-out infinite 2s',
      }} />

      <div className="container hero-grid" style={{
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
            padding: '8px 20px',
            borderRadius: 24,
            marginBottom: 28,
            letterSpacing: '0.5px',
            border: '1px solid rgba(232,119,34,0.2)',
          }}>
            ✨ Contabilidad profesional
          </span>

          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.08,
            marginBottom: 24,
            fontFamily: "'Poppins', sans-serif",
          }}>
            Tu negocio en orden,{' '}
            <span style={{
              background: 'linear-gradient(135deg, #e87722, #f5a623)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline',
            }}>
              tu mente en paz
            </span>
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.75,
            marginBottom: 40,
            maxWidth: 480,
          }}>
            Servicios contables, fiscales y de nómina para emprendedores y
            PyMEs que quieren crecer sin preocuparse por los números.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
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

          {/* Trust indicators */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            flexWrap: 'wrap',
          }}>
            {[
              { num: '100+', label: 'Clientes satisfechos' },
              { num: '5+', label: 'Años de experiencia' },
              { num: '100%', label: 'Cumplimiento fiscal' },
            ].map((item, i) => (
              <div key={i} style={{
                animation: `fadeInUp 0.6s ease both ${0.3 + i * 0.15}s`,
              }}>
                <p style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: '#e87722',
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1,
                }}>{item.num}</p>
                <p style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: 4,
                  letterSpacing: '0.3px',
                }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          animation: 'fadeInUp 0.8s ease both 0.2s',
        }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 460 }}>
            {/* Main card */}
            <div style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 24,
              padding: '36px 32px',
              animation: 'float 6s ease-in-out infinite',
            }}>
              {/* Dashboard header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 28,
              }}>
                <div>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>
                    Balance mensual
                  </p>
                  <p style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: '#fff',
                    fontFamily: "'Poppins', sans-serif",
                  }}>$128,450</p>
                </div>
                <div style={{
                  background: 'rgba(16,185,129,0.15)',
                  color: '#10b981',
                  fontSize: 13,
                  fontWeight: 600,
                  padding: '6px 14px',
                  borderRadius: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}>
                  ↗ +12.5%
                </div>
              </div>

              {/* Chart bars */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: 8,
                height: 120,
                marginBottom: 24,
              }}>
                {[45, 65, 40, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: 6,
                    background: i >= 10
                      ? 'linear-gradient(180deg, #e87722, #f5a623)'
                      : i >= 8
                        ? 'rgba(232,119,34,0.4)'
                        : 'rgba(255,255,255,0.1)',
                    transition: 'height 0.5s ease',
                    animation: `scaleIn 0.5s ease both ${0.05 * i}s`,
                  }} />
                ))}
              </div>

              {/* Stats row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 12,
              }}>
                {[
                  { label: 'Ingresos', value: '$245K', color: '#10b981' },
                  { label: 'Gastos', value: '$116K', color: '#f59e0b' },
                  { label: 'Impuestos', value: '$28K', color: '#e87722' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 12,
                    padding: '14px 12px',
                    textAlign: 'center',
                  }}>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>
                      {stat.label}
                    </p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: stat.color }}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating mini card - top right */}
            <div style={{
              position: 'absolute',
              top: -16,
              right: -20,
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 16,
              padding: '14px 18px',
              animation: 'float 5s ease-in-out infinite 1s',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'rgba(16,185,129,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
              }}>✓</div>
              <div>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Declaración</p>
                <p style={{ fontSize: 13, color: '#10b981', fontWeight: 600 }}>Presentada</p>
              </div>
            </div>

            {/* Floating mini card - bottom left */}
            <div style={{
              position: 'absolute',
              bottom: -12,
              left: -24,
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 16,
              padding: '14px 18px',
              animation: 'float 7s ease-in-out infinite 0.5s',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'rgba(232,119,34,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
              }}>📊</div>
              <div>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Ahorro fiscal</p>
                <p style={{ fontSize: 13, color: '#e87722', fontWeight: 600 }}>-$32,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            text-align: center;
          }
          .hero-grid > div:first-child > div:last-child {
            justify-content: center;
          }
          .hero-grid > div:first-child p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div:first-child > div:nth-child(5) {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
