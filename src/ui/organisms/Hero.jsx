import Button from '../atoms/Button'
import { CONTACT } from '../../config/constants'
import { useParallax } from '../../hooks/useScrollReveal'

export default function Hero() {
  const parallaxRef = useParallax(0.4)
  return (
    <section style={{
      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #0a1f4a 100%)',
      paddingTop: 140,
      paddingBottom: 80,
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Background decorative elements - animated */}
      <div ref={parallaxRef} style={{
        position: 'absolute',
        top: -150,
        right: -150,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,119,34,0.08) 0%, transparent 70%)',
        animation: 'expandCircle 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -100,
        left: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
        animation: 'driftUp 10s ease-in-out infinite',
      }} />

      {/* Subtle grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
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
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.9)',
            fontSize: 14,
            fontWeight: 500,
            padding: '10px 20px',
            borderRadius: 30,
            marginBottom: 32,
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Contadora profesional en [Ciudad]
          </span>

          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.08,
            marginBottom: 24,
            fontFamily: "'Poppins', sans-serif",
          }}>
            Tus impuestos al día y tu negocio{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f97316, #f5a623)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              en orden
            </span>
          </h1>

          <p style={{
            fontSize: 17,
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75,
            marginBottom: 36,
            maxWidth: 520,
          }}>
            Llevo la contabilidad, los impuestos y las remuneraciones de tu pyme.
            Cada mes recibes un resumen claro y sin letra chica.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 36 }}>
            <Button href="#contacto">
              Cotizar ahora
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
            <Button
              variant="outline"
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hola, me interesa cotizar sus servicios contables.')}`}
              style={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.25)',
                gap: 10,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </Button>
          </div>

          {/* Trust checks */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px 32px',
          }}>
            {[
              'Primera reunión sin costo',
              'Respuesta el mismo día',
              'Sin contrato de permanencia',
            ].map((text, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                animation: `fadeInUp 0.5s ease both ${0.4 + i * 0.1}s`,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="rgba(16,185,129,0.15)" />
                  <path d="M8 12l3 3 5-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* F29 Summary Card */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          animation: 'fadeInUp 0.8s ease both 0.3s',
        }}>
          <div style={{
            background: '#fff',
            borderRadius: 20,
            padding: '32px 28px',
            width: '100%',
            maxWidth: 420,
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            animation: 'floatSlow 6s ease-in-out infinite',
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 6,
            }}>
              <div>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#2563eb',
                  marginBottom: 4,
                }}>Resumen de abril</h3>
                <p style={{ fontSize: 13, color: '#6b7280' }}>
                  Empresa Demo SpA · RUT 76.XXX.XXX-X
                </p>
              </div>
              <span style={{
                background: '#2563eb',
                color: '#fff',
                fontSize: 13,
                fontWeight: 700,
                padding: '5px 14px',
                borderRadius: 8,
              }}>2025</span>
            </div>

            {/* Table */}
            <div style={{ marginTop: 20 }}>
              {/* Header row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 90px 90px',
                padding: '10px 0',
                borderBottom: '2px solid #e5e7eb',
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Concepto</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>Debe</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>Haber</span>
              </div>

              {/* Data rows */}
              {[
                { concepto: 'Ventas del mes', debe: '', haber: '4.280.000' },
                { concepto: 'Compras y gastos', debe: '2.615.000', haber: '' },
                { concepto: 'IVA débito', debe: '', haber: '813.200' },
                { concepto: 'IVA crédito', debe: '496.850', haber: '' },
                { concepto: 'Remuneraciones', debe: '1.120.000', haber: '' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 90px 90px',
                  padding: '14px 0',
                  borderBottom: '1px solid #f3f4f6',
                  animation: `fadeInUp 0.4s ease both ${0.5 + i * 0.08}s`,
                }}>
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{row.concepto}</span>
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 600, textAlign: 'right', fontFamily: "'Poppins', sans-serif" }}>{row.debe}</span>
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 600, textAlign: 'right', fontFamily: "'Poppins', sans-serif" }}>{row.haber}</span>
                </div>
              ))}
            </div>

            {/* Status bar */}
            <div style={{
              marginTop: 20,
              background: '#f0fdf4',
              borderRadius: 12,
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid #bbf7d0',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#10b981" />
                  <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#166534',
                }}>Cuadra</span>
              </div>
              <span style={{ fontSize: 13, color: '#4ade80', fontWeight: 500 }}>
                F29 listo antes del día 12
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
