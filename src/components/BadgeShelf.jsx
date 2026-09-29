import { useRef, useState, useEffect } from 'react'
import { Award, Trophy, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { badges } from '../data/portfolio.js'

export default function BadgeShelf() {
  const trophies = badges.filter((b) => b.type === 'trophy').length
  // Up to 7 badges fit on one desktop row; beyond that the shelf becomes a
  // horizontal scroller with arrows (same pattern as the projects row).
  // On mobile the CSS turns either variant into a 2-per-row grid.
  const scrollable = badges.length > 7
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 8)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8)
  }

  useEffect(() => {
    if (!scrollable) return
    update()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [scrollable])

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.bshelf__card')
    const gap = parseFloat(getComputedStyle(el).columnGap) || 16
    el.scrollBy({ left: dir * ((card ? card.offsetWidth : 180) + gap) * 2, behavior: 'smooth' })
  }

  const cards = badges.map((b) => (
    <a
      key={b.image}
      className={`bshelf__card bshelf__card--${b.type}`}
      href={b.file}
      target="_blank"
      rel="noopener"
      title={b.title}
      aria-label={`Open certificate for ${b.title}`}
    >
      <span className="bshelf__open">
        <ExternalLink size={13} />
      </span>
      <div className="bshelf__medal">
        <img src={b.image} alt={b.title} loading="lazy" />
        <span className="bshelf__shine" />
      </div>
      <span className="bshelf__type">
        {b.type === 'trophy' ? <Trophy size={11} /> : <Award size={11} />}
        {b.type}
      </span>
      <div className="bshelf__title">{b.title}</div>
      <div className="bshelf__issuer">
        {b.issuer} · {b.date}
      </div>
    </a>
  ))

  return (
    <div className="bshelf">
      <div className="bshelf__head">
        <h3 className="about__subtitle">
          Badges &amp; Trophies<span className="star">*</span>
        </h3>
        <span className="bshelf__count">
          {badges.length - trophies} badges · {trophies} trophies
        </span>
      </div>

      {scrollable ? (
        <div className="bshelf__scroller">
          {!atStart && (
            <button
              className="projects__arrow projects__arrow--left"
              onClick={() => scroll(-1)}
              aria-label="Scroll badges left"
            >
              <ChevronLeft size={22} />
            </button>
          )}
          {!atEnd && (
            <button
              className="projects__arrow projects__arrow--right"
              onClick={() => scroll(1)}
              aria-label="Scroll badges right"
            >
              <ChevronRight size={22} />
            </button>
          )}
          <div className="bshelf__grid bshelf__grid--scroll" ref={trackRef}>
            {cards}
          </div>
        </div>
      ) : (
        <div className="bshelf__grid">{cards}</div>
      )}
    </div>
  )
}
