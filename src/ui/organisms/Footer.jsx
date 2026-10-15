import { CONTACT, SOCIAL } from '../../config/constants'

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0f2a5c 0%, #091e42 100%)',
      color: '#fff',
      paddingTop: 72,
      paddingBottom: 32,
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 40,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 22,
              fontWeight: 800,
              marginBottom: 16,
            }}>
              <span style={{ color: '#fff' }}>Clara</span>
              <span style={{ color: '#e87722' }}>Contable</span>
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              Servicios contables profesionales para emprendedores y PyMEs.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {Object.entries(SOCIAL).map(([name, url]) => (
                <SocialIcon key={name} name={name} url={url} />
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 20 }}>
              Servicios
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Contabilidad general', 'Declaraciones fiscales', 'Nómina', 'Asesoría fiscal', 'Facturación', 'Constitución'].map((s) => (
                <li key={s}>
                  <a href="#servicios" style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#e87722'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 20 }}>
              Empresa
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Sobre mí', href: '#sobre-mi' },
                { label: 'Proceso', href: '#proceso' },
                { label: 'Testimonios', href: '#testimonios' },
                { label: 'Preguntas frecuentes', href: '#faq' },
                { label: 'Contacto', href: '#contacto' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#e87722'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 20 }}>
              Contacto
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
              <li>{CONTACT.email}</li>
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.city}</li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
            &copy; {new Date().getFullYear()} ClaraContable. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
            >Aviso de privacidad</a>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
            >Términos</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

function SocialIcon({ name, url }) {
  const icons = {
    facebook: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
    instagram: 'M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6zM12 16a4 4 0 110-8 4 4 0 010 8zm5-9a1 1 0 110-2 1 1 0 010 2z',
    linkedin: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z',
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      style={{
        width: 38,
        height: 38,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={icons[name] || ''} />
      </svg>
    </a>
  )
}
