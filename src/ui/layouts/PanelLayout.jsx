import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function PanelLayout() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: "'Poppins', sans-serif",
        color: '#1a3a6e',
      }}>
        Cargando...
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/panel/login" replace />
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar will go here */}
      <aside style={{
        width: 260,
        background: '#1a3a6e',
        color: '#fff',
        padding: '32px 20px',
        fontFamily: "'Poppins', sans-serif",
      }}>
        <h2 style={{ fontSize: 20, marginBottom: 40 }}>
          <span style={{ color: '#ffffff' }}>Clara</span>
          <span style={{ color: '#e87722' }}>Contable</span>
        </h2>
        <nav>
          <p style={{ opacity: 0.7, fontSize: 14 }}>Panel de administración</p>
        </nav>
      </aside>

      <div style={{ flex: 1, background: '#f8f9fc', padding: 32 }}>
        <Outlet />
      </div>
    </div>
  )
}
