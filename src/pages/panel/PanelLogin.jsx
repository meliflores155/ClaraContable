import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function PanelLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await signIn(email, password)
      navigate('/panel/dashboard')
    } catch (err) {
      setError('Credenciales incorrectas')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a3a6e 0%, #0f2a5c 100%)',
      padding: 24,
    }}>
      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        borderRadius: 16,
        padding: '48px 40px',
        width: '100%',
        maxWidth: 420,
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}>
        <h1 style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 28,
          textAlign: 'center',
          marginBottom: 8,
        }}>
          <span style={{ color: '#1a3a6e' }}>Clara</span>
          <span style={{ color: '#e87722' }}>Contable</span>
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: 32,
          fontSize: 14,
        }}>
          Panel de Administración
        </p>

        {error && (
          <p style={{
            background: '#fef2f2',
            color: '#ef4444',
            padding: '10px 16px',
            borderRadius: 8,
            fontSize: 14,
            marginBottom: 16,
          }}>
            {error}
          </p>
        )}

        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#374151', display: 'block', marginBottom: 6 }}>
            Correo electrónico
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1.5px solid #e5e7eb',
              borderRadius: 10,
              fontSize: 15,
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: 24 }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#374151', display: 'block', marginBottom: 6 }}>
            Contraseña
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1.5px solid #e5e7eb',
              borderRadius: 10,
              fontSize: 15,
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            background: 'linear-gradient(135deg, #e87722, #f28c28)',
            color: '#fff',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            borderRadius: 10,
            border: 'none',
            cursor: loading ? 'wait' : 'pointer',
            opacity: loading ? 0.7 : 1,
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
        >
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  )
}
