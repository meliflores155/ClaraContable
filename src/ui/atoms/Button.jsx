const variants = {
  cta: {
    background: 'linear-gradient(135deg, #e87722, #f28c28)',
    color: '#fff',
    boxShadow: '0 8px 28px rgba(232,119,34,0.35)',
    hoverShadow: '0 12px 36px rgba(232,119,34,0.5)',
  },
  white: {
    background: '#fff',
    color: '#2563eb',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    hoverShadow: '0 8px 28px rgba(0,0,0,0.12)',
  },
  outline: {
    background: 'transparent',
    color: '#2563eb',
    border: '2px solid #2563eb',
    boxShadow: 'none',
    hoverShadow: '0 4px 16px rgba(26,58,110,0.15)',
  },
}

export default function Button({
  children,
  variant = 'cta',
  href,
  onClick,
  type = 'button',
  style: customStyle = {},
  ...props
}) {
  const v = variants[variant] || variants.cta

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '14px 32px',
    borderRadius: 10,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    border: v.border || 'none',
    background: v.background,
    color: v.color,
    boxShadow: v.boxShadow,
    cursor: 'pointer',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    textDecoration: 'none',
    ...customStyle,
  }

  const handleEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-2px)'
    e.currentTarget.style.boxShadow = v.hoverShadow
  }
  const handleLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = v.boxShadow
  }

  if (href) {
    return (
      <a
        href={href}
        style={baseStyle}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={baseStyle}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </button>
  )
}
