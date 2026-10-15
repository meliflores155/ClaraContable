import { useState } from 'react'
import SectionTitle from '../atoms/SectionTitle'
import Button from '../atoms/Button'
import { CONTACT } from '../../config/constants'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to Supabase or email service
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    border: '1.5px solid #e5e7eb',
    borderRadius: 10,
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: "'Inter', sans-serif",
  }

  return (
    <section id="contacto" style={{
      padding: '96px 0',
      background: 'linear-gradient(135deg, #1a3a6e 0%, #0f2a5c 100%)',
    }}>
      <div className="container">
        <SectionTitle
          tag="Contacto"
          title="Hablemos de tu negocio"
          subtitle="Completa el formulario o escríbeme directamente. Tu primera consulta es gratis."
          light
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          maxWidth: 960,
          margin: '0 auto',
        }}>
          {/* Form */}
          <form onSubmit={handleSubmit} style={{
            background: '#fff',
            borderRadius: 20,
            padding: '40px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            <input
              name="name"
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              name="email"
              type="email"
              placeholder="Tu correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              name="phone"
              placeholder="Tu teléfono (opcional)"
              value={form.phone}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="¿En qué puedo ayudarte?"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
            <Button type="submit" style={{ justifyContent: 'center', width: '100%' }}>
              {sent ? '¡Mensaje enviado! ✓' : 'Enviar mensaje'}
            </Button>
          </form>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>
            {[
              { icon: '📧', label: 'Correo', value: CONTACT.email },
              { icon: '📱', label: 'Teléfono', value: CONTACT.phone },
              { icon: '📍', label: 'Ubicación', value: CONTACT.city },
              { icon: '🕐', label: 'Horario', value: CONTACT.hours },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 2 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 16, color: '#fff', fontWeight: 500 }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contacto .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
