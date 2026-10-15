import { useState, useEffect, useCallback } from 'react'
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
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Detect active section
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? 'rgba(255,255,255,0.95)'
          : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled
          ? '0 4px 30px rgba(37,99,235,0.08), 0 1px 3px rgba(0,0,0,0.06)'
          : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(37,99,235,0.08)'
          : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {/* Animated gradient accent line */}
        <div style={{
          height: scrolled ? 2 : 3,
          background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 25%, #f97316 50%, #fb923c 75%, #2563eb 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 4s linear infinite',
          transition: 'height 0.3s ease',
        }} />

        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? 64 : 72,
          transition: 'height 0.3s ease',
        }}>
          {/* Logo */}
          <a href="#" style={{
            fontFamily: "'Poppins', sans-serif",
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            transition: 'transform 0.3s ease',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {/* Logo icon with gradient */}
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Subtle shine effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
                borderRadius: '12px 12px 0 0',
              }} />
              <span style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
                position: 'relative',
                zIndex: 1,
                letterSpacing: '-0.02em',
              }}>C</span>
            </div>

            {/* Logo text */}
            <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#1e293b' }}>Clara</span>
              <span style={{
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Contable</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={activeSection === link.href.replace('#', '')}
              >
                {link.label}
              </NavLink>
            ))}
            <div style={{ marginLeft: 12 }}>
              <Button href="#contacto" style={{
                padding: '10px 22px',
                fontSize: 14,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                boxShadow: '0 4px 14px rgba(249,115,22,0.35)',
              }}>
                Agenda tu consulta
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Button>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="mobile-menu-btn"
            style={{
              display: 'none',
              width: 44,
              height: 44,
              borderRadius: 10,
              background: menuOpen ? 'rgba(37,99,235,0.08)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              transition: 'background 0.3s ease',
              flexShrink: 0,
            }}
          >
            <span style={{
              position: 'absolute',
              left: 10,
              width: 24,
              height: 2.5,
              background: '#2563eb',
              borderRadius: 2,
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              top: menuOpen ? 21 : 14,
              transform: menuOpen ? 'rotate(45deg)' : 'none',
            }} />
            <span style={{
              position: 'absolute',
              left: 10,
              top: 21,
              width: 24,
              height: 2.5,
              background: '#2563eb',
              borderRadius: 2,
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? 'translateX(8px)' : 'none',
            }} />
            <span style={{
              position: 'absolute',
              left: 10,
              width: 24,
              height: 2.5,
              background: '#2563eb',
              borderRadius: 2,
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              top: menuOpen ? 21 : 28,
              transform: menuOpen ? 'rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99,
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(4px)',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
      }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: 'min(320px, 85vw)',
        height: '100vh',
        zIndex: 101,
        background: '#ffffff',
        boxShadow: '-8px 0 30px rgba(0,0,0,0.12)',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}>
        {/* Mobile menu header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid #e5e7eb',
        }}>
          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 20,
            fontWeight: 800,
          }}>
            <span style={{ color: '#1e293b' }}>Clara</span>
            <span style={{ color: '#f97316' }}>Contable</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'rgba(37,99,235,0.06)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              color: '#64748b',
            }}
          >
            ✕
          </button>
        </div>

        {/* Mobile nav links */}
        <div style={{ padding: '16px 24px', flex: 1 }}>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 17,
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                color: activeSection === link.href.replace('#', '') ? '#2563eb' : '#1e293b',
                padding: '16px 12px',
                borderRadius: 10,
                background: activeSection === link.href.replace('#', '') ? 'rgba(37,99,235,0.06)' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}
            >
              {/* Active dot */}
              {activeSection === link.href.replace('#', '') && (
                <span style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#2563eb',
                  flexShrink: 0,
                }} />
              )}
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile CTA */}
        <div style={{ padding: '16px 24px 32px' }}>
          <Button
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            style={{
              width: '100%',
              textAlign: 'center',
              justifyContent: 'center',
              padding: '16px 24px',
              fontSize: 16,
              borderRadius: 12,
            }}
          >
            Agenda tu consulta
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function NavLink({ href, children, active }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      style={{
        fontSize: 14,
        fontWeight: 600,
        fontFamily: "'Poppins', sans-serif",
        color: active ? '#2563eb' : hovered ? '#2563eb' : '#475569',
        position: 'relative',
        transition: 'color 0.3s ease',
        padding: '8px 14px',
        borderRadius: 8,
        background: active ? 'rgba(37,99,235,0.06)' : hovered ? 'rgba(37,99,235,0.04)' : 'transparent',
        textDecoration: 'none',
        letterSpacing: '-0.01em',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {/* Bottom indicator */}
      <span style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: active ? 20 : hovered ? 16 : 0,
        height: 2.5,
        background: 'linear-gradient(90deg, #2563eb, #3b82f6)',
        borderRadius: 2,
        transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
      }} />
    </a>
  )
}
