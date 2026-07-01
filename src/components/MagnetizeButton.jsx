import { useState, useEffect } from 'react'

// Magnetize button (adapted from the 21st.dev MagnetizeButton to this project's
// plain-CSS/JSX setup — no Tailwind/shadcn/framer-motion). Particles scatter
// around the button and get pulled to the center on hover. Renders an <a> so it
// keeps anchor behaviour (e.g. #projects smooth scroll).
export default function MagnetizeButton({
  children,
  className = '',
  particleCount = 12,
  ...props
}) {
  const [particles, setParticles] = useState([])
  const [attracting, setAttracting] = useState(false)

  useEffect(() => {
    setParticles(
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.round(Math.random() * 160 - 80),
        y: Math.round(Math.random() * 160 - 80),
      })),
    )
  }, [particleCount])

  return (
    <a
      className={`magnetize ${className}`.trim()}
      onMouseEnter={() => setAttracting(true)}
      onMouseLeave={() => setAttracting(false)}
      onTouchStart={() => setAttracting(true)}
      onTouchEnd={() => setAttracting(false)}
      {...props}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className={`magnetize__dot${attracting ? ' is-on' : ''}`}
          style={{
            transform: attracting
              ? 'translate(-50%, -50%)'
              : `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))`,
          }}
        />
      ))}
      <span className="magnetize__content">{children}</span>
    </a>
  )
}
