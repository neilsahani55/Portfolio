import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolio.js'

export default function CertCarousel() {
  const items = certifications
  const n = items.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % n), 1800)
    return () => clearInterval(id)
  }, [paused, n])

  const go = (d) => setIndex((i) => (i + d + n) % n)

  const offsetOf = (i) => {
    let o = i - index
    if (o > n / 2) o -= n
    if (o < -n / 2) o += n
    return o
  }

  return (
    <div
      className="cert"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="cert__stage">
        {items.map((c, i) => {
          const o = offsetOf(i)
          const abs = Math.abs(o)
          const visible = abs <= 2
          const scale = o === 0 ? 1 : abs === 1 ? 0.82 : 0.66
          const rotate = o === 0 ? 0 : o > 0 ? -34 : 34
          const opacity = visible ? (o === 0 ? 1 : abs === 1 ? 0.7 : 0.35) : 0
          const style = {
            transform: `translateX(calc(-50% + ${o * 52}%)) scale(${scale}) rotateY(${rotate}deg)`,
            zIndex: 20 - abs,
            opacity,
            pointerEvents: o === 0 ? 'auto' : 'none',
          }
          return (
            <a
              key={c.file}
              className={`cert__slide${o === 0 ? ' is-active' : ''}`}
              style={style}
              href={c.file}
              target="_blank"
              rel="noopener"
              aria-label={`Open ${c.title}`}
            >
              <div className="cert__media">
                <img src={c.file} alt={c.title} loading="lazy" />
                <span className="cert__open">
                  <ExternalLink size={16} />
                </span>
              </div>
              <div className="cert__meta">
                <div className="cert__title">{c.title}</div>
                <div className="cert__issuer">{c.issuer}</div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="cert__controls">
        <button className="cert__nav" onClick={() => go(-1)} aria-label="Previous certificate">
          <ChevronLeft size={22} />
        </button>
        <div className="cert__dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`cert__dot${i === index ? ' is-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to certificate ${i + 1}`}
            />
          ))}
        </div>
        <button className="cert__nav" onClick={() => go(1)} aria-label="Next certificate">
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  )
}
