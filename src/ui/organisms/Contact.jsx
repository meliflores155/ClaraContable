import { useState } from 'react'
import { CONTACT } from '../../config/constants'

const CONTACT_ITEMS = [
  {
    label: 'WhatsApp',
    value: CONTACT.phone,
    href: `tel:${CONTACT.whatsapp || CONTACT.phone}`,
    isLink: true,
    iconBg: 'linear-gradient(135deg, rgba(37,211,102,0.15) 0%, rgba(37,211,102,0.05) 100%)',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#25d366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92V19.92a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Correo',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    isLink: true,
    iconBg: 'linear-gradient(135deg, rgba(26,58,110,0.2) 0%, rgba(26,58,110,0.08) 100%)',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#6b9fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Ubicación',
    value: CONTACT.city,
    isLink: false,
    iconBg: 'linear-gradient(135deg, rgba(232,119,34,0.15) 0%, rgba(232,119,34,0.05) 100%)',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#e87722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Horario',
    value: CONTACT.hours,
    isLink: false,
    iconBg: 'linear-gradient(135deg, rgba(26,58,110,0.2) 0%, rgba(26,58,110,0.08) 100%)',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#6b9fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

const SERVICE_OPTIONS = [
  'Elige una opción',
  'Contabilidad mensual',
  'Declaración de renta',
  'Inicio de actividades',
  'Remuneraciones',
  'Otro',
]

const inputStyle = {
  font: "400 15px 'Inter', system-ui, sans-serif",
  color: '#1a2332',
  padding: '13px 16px',
  minHeight: 48,
  border: '1.5px solid #e2e8f0',
  borderRadius: 10,
  background: '#f8fafc',
  boxSizing: 'border-box',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
}

const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  fontWeight: 600,
  fontSize: 14,
  color: '#1a2332',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', service: '', message: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hola, soy ${form.name}. Necesito: ${form.service}. ${form.message}`
    const phone = (CONTACT.whatsapp || CONTACT.phone).replace(/[^0-9+]/g, '')
    window.open(`https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contacto" style={{
      padding: '90px 0',
      background: 'linear-gradient(180deg, #0a1628 0%, #101d33 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: 'linear-gradient(90deg, #1a3a6e 0%, #e87722 50%, #1a3a6e 100%)',
      }} />

      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: 60,
        right: -80,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,119,34,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -60,
        left: -60,
        width: 250,
        height: 250,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,58,110,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="contact-layout" style={{
        maxWidth: 1160,
        margin: '0 auto',
        padding: '0 32px',
        boxSizing: 'border-box',
        display: 'flex',
        gap: 56,
        alignItems: 'flex-start',
      }}>
        {/* Left column: title + contact info */}
        <div className="contact-left" style={{ flex: '0 0 380px', paddingTop: 4 }}>
          {/* Icon box */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 56,
            height: 56,
            background: 'linear-gradient(135deg, #e87722 0%, #d4691a 100%)',
            borderRadius: 16,
            marginBottom: 20,
            boxShadow: '0 4px 16px rgba(232,119,34,0.25)',
          }}>
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 38,
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 14,
          }}>Conversemos</h2>

          <p style={{
            color: '#94a3b8',
            fontSize: 16,
            lineHeight: 1.6,
            marginBottom: 32,
          }}>
            Cuéntame qué necesitas y te respondo por WhatsApp el mismo día hábil. La primera reunión no tiene costo.
          </p>

          {/* Contact info stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {CONTACT_ITEMS.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 42,
                  height: 42,
                  background: item.iconBg,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 'none',
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: 11,
                    color: '#64748b',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 1,
                  }}>{item.label}</div>
                  {item.isLink ? (
                    <a href={item.href} style={{
                      color: '#ffffff',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontSize: 15,
                    }}>{item.value}</a>
                  ) : (
                    <span style={{
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: 15,
                    }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: form */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <form onSubmit={handleSubmit} style={{
            background: '#ffffff',
            borderRadius: 18,
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: 4 }}>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: '#0a1628',
                marginBottom: 6,
              }}>Escríbeme directo</h3>
              <p style={{ color: '#64748b', fontSize: 14 }}>
                Completa el formulario y se abrirá WhatsApp con tu mensaje listo
              </p>
            </div>

            <label style={labelStyle}>
              Nombre
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => e.currentTarget.style.borderColor = '#e87722'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
              />
            </label>

            <label style={labelStyle}>
              Qué necesitas
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                style={{ ...inputStyle, appearance: 'auto' }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#e87722'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt === 'Elige una opción' ? '' : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>

            <label style={labelStyle}>
              Mensaje
              <textarea
                name="message"
                rows={3}
                placeholder="Cuéntame brevemente tu situación..."
                value={form.message}
                onChange={handleChange}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#e87722'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
              />
            </label>

            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #e87722 0%, #d4691a 100%)',
                color: '#ffffff',
                font: "700 16px 'Inter', system-ui, sans-serif",
                border: 0,
                borderRadius: 10,
                padding: '16px 24px',
                minHeight: 54,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                boxShadow: '0 4px 16px rgba(232,119,34,0.3)',
                marginTop: 4,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(232,119,34,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(232,119,34,0.3)'
              }}
            >
              {/* WhatsApp filled icon */}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
              Enviar por WhatsApp
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-layout {
            flex-direction: column !important;
          }
          .contact-left {
            flex: 1 1 auto !important;
          }
        }
      `}</style>
    </section>
  )
}
