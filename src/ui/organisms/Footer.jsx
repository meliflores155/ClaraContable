import { CONTACT, SOCIAL } from '../../config/constants'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Footer() {
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 })
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a1628 0%, #0f1b2d 100%)',
      color: '#94a3b8',
      fontSize: 14,
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {/* Top accent line */}
      <div style={{
        height: 4,
        background: 'linear-gradient(90deg, #2563eb 0%, #e87722 50%, #2563eb 100%)',
      }} />

      <div style={{
        maxWidth: 1160,
        margin: '0 auto',
        padding: '56px 32px 0',
        boxSizing: 'border-box',
      }}>
        {/* Grid */}
        <div ref={gridRef} className={`footer-grid reveal-stagger ${gridVisible ? 'visible' : ''}`} style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 0.8fr 0.8fr 1fr',
          gap: 48,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Col 1: Brand */}
          <div>
            <a href="#inicio" style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 24,
              fontWeight: 800,
              color: '#ffffff',
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: 16,
            }}>
              Clara<span style={{ color: '#e87722' }}>Contable</span>
            </a>
            <p style={{ lineHeight: 1.7, marginBottom: 24, color: '#7a8ba3' }}>
              Contabilidad e impuestos para pymes y emprendedores, explicados en simple. Te ayudo a ordenar tu negocio para que tú te dediques a hacerlo crecer.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              <SocialIcon
                label="Instagram"
                url={SOCIAL.instagram || '#'}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                }
              />
              <SocialIcon
                label="LinkedIn"
                url={SOCIAL.linkedin || '#'}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                }
              />
              <SocialIcon
                label="Facebook"
                url={SOCIAL.facebook || '#'}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div>
            <h4 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: '#ffffff',
              margin: '0 0 20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>Servicios</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['Contabilidad completa', 'Declaración de impuestos', 'Inicio de actividades', 'Asesoría tributaria', 'Remuneraciones'].map((s) => (
                <a key={s} href="#servicios" style={{ color: '#7a8ba3', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#e87722'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#7a8ba3'}
                >{s}</a>
              ))}
            </nav>
          </div>

          {/* Col 3: Enlaces */}
          <div>
            <h4 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: '#ffffff',
              margin: '0 0 20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>Enlaces</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Sobre mí', href: '#sobre-mi' },
                { label: 'Cómo trabajo', href: '#proceso' },
                { label: 'Preguntas frecuentes', href: '#preguntas' },
                { label: 'Contacto', href: '#contacto' },
              ].map((item) => (
                <a key={item.label} href={item.href} style={{ color: '#7a8ba3', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#e87722'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#7a8ba3'}
                >{item.label}</a>
              ))}
            </nav>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h4 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: '#ffffff',
              margin: '0 0 20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>Contacto</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Phone */}
              <ContactItem
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e87722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                }
                title={CONTACT.phone}
                sub="WhatsApp disponible"
              />

              {/* Email */}
              <ContactItem
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e87722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                title={CONTACT.email}
                sub="Respuesta en 24 hrs"
              />

              {/* Location */}
              <ContactItem
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e87722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                title={CONTACT.city}
                sub="Atención presencial y remota"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px 24px',
          padding: '24px 0',
        }}>
          <span style={{ color: '#5a6b83' }}>
            © {new Date().getFullYear()} ClaraContable. Todos los derechos reservados.
          </span>
          <span style={{ color: '#5a6b83' }}>
            Hecho con dedicación para pymes chilenas
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  )
}

function SocialIcon({ label, url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 40,
        height: 40,
        borderRadius: 8,
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#94a3b8',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(232,119,34,0.15)'
        e.currentTarget.style.borderColor = 'rgba(232,119,34,0.3)'
        e.currentTarget.style.color = '#e87722'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
        e.currentTarget.style.color = '#94a3b8'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {icon}
    </a>
  )
}

function ContactItem({ icon, title, sub }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
      <div style={{
        width: 36,
        height: 36,
        borderRadius: 8,
        background: 'rgba(232,119,34,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <span style={{ display: 'block', color: '#ffffff', fontWeight: 600, fontSize: 14, marginBottom: 2 }}>
          {title}
        </span>
        <span style={{ fontSize: 13, color: '#5a6b83' }}>{sub}</span>
      </div>
    </div>
  )
}
