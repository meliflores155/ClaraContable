import { useState, useEffect } from 'react'
import Button from '../atoms/Button'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(26,58,110,0.08)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      {/* Shimmer accent line */}
      <div style={{
        height: 3,
        background: 'linear-gradient(90deg, #1a3a6e, #e87722, #1a3a6e)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 3s linear infinite',
      }} />

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 72,
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 22,
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          transition: 'transform 0.3s ease',
        }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: 'linear-gradient(135deg, #1a3a6e, #2a4a7e)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 18,
            fontWeight: 800,
          }}>C</span>
          <span>
            <span style={{ color: '#1a3a6e' }}>Clara</span>
            <span style={{ color: '#e87722' }}>Contable</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
          <Button href="#contacto" style={{ padding: '10px 24px', fontSize: 14 }}>
            Agenda tu consulta
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="mobile-menu-btn"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span style={{
            display: 'block',
            width: 24,
            height: 2.5,
            background: '#1a3a6e',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: 24,
            height: 2.5,
            background: '#1a3a6e',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block',
            width: 24,
            height: 2.5,
            background: '#1a3a6e',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          borderTop: '1px solid rgba(26,58,110,0.08)',
        }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#374151',
                padding: '8px 0',
              }}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contacto" onClick={() => setMenuOpen(false)} style={{ textAlign: 'center', justifyContent: 'center' }}>
            Agenda tu consulta
          </Button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      style={{
        fontSize: 15,
        fontWeight: 500,
        color: '#374151',
        position: 'relative',
        transition: 'color 0.25s',
        paddingBottom: 4,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#1a3a6e'
        e.currentTarget.querySelector('.underline').style.width = '100%'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '#374151'
        e.currentTarget.querySelector('.underline').style.width = '0'
      }}
    >
      {children}
      <span className="underline" style={{
        position: 'absolute',
        bottom: -2,
        left: 0,
        width: 0,
        height: 2.5,
        background: 'linear-gradient(90deg, #1a3a6e, #e87722)',
        borderRadius: 2,
        transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
      }} />
    </a>
  )
}
