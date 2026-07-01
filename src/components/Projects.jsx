import { useRef, useState, useEffect } from 'react'
import {
  Newspaper,
  Sparkles,
  Bot,
  Workflow,
  Send,
  ShieldCheck,
  Accessibility,
  Clapperboard,
  Globe,
  ArrowUpRight,
  Github,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { projects, projectsIntro } from '../data/portfolio.js'

const ICONS = {
  newspaper: Newspaper,
  sparkles: Sparkles,
  bot: Bot,
  workflow: Workflow,
  send: Send,
  shield: ShieldCheck,
  walk: Accessibility,
  film: Clapperboard,
}

// Badge background matches the project's `tone`.
const TONE_COLORS = {
  violet: '#7c3aed',
  amber: '#ea580c',
  slate: '#475569',
  mint: '#059669',
  sky: '#2563eb',
  rose: '#e11d48',
  dark: '#ff4d1c',
  indigo: '#4f46e5',
}

// Description with a fixed 3-line area; long text gets a "Read more" toggle
// that scrolls within the same height (keeps every card the same size).
function ProjectDesc({ text }) {
  const ref = useRef(null)
  const [overflowing, setOverflowing] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setOverflowing(el.scrollHeight > el.clientHeight + 1)
  }, [text])

  return (
    <>
      <p ref={ref} className={`pcard__desc ${expanded ? 'is-expanded' : 'is-clamped'}`}>
        {text}
      </p>
      {overflowing && (
        <button className="pcard__more" onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </>
  )
}

export default function Projects() {
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
    update()
    const raf = requestAnimationFrame(update)
    const t = setTimeout(update, 350)
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t)
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Move by exactly one card per click.
  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.pcard')
    const gap = parseFloat(getComputedStyle(el).columnGap) || 24
    const amount = card ? card.offsetWidth + gap : el.clientWidth
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <div className="projects__head">
          <div>
            <span className="eyebrow">
              <span className="dot" /> {projectsIntro.eyebrow}
            </span>
            <h2 className="projects__title">
              <span>{projectsIntro.titleLine1}</span>
              <span className="projects__title-line2">
                {projectsIntro.titleLine2} <span className="hl">{projectsIntro.titleAccent}</span>
                <Globe className="projects__globe" size={26} />
              </span>
            </h2>
            <p className="section-lead">{projectsIntro.lead}</p>
          </div>

          <div className="projects__deco" aria-hidden="true">
            <div className="codewin">
              <div className="codewin__bar">
                <i />
                <i />
                <i />
              </div>
              <div className="codewin__code">
                <div className="cl">
                  <span className="kw">build</span>.ship(<span className="str">'ideas'</span>)
                </div>
                <div className="cl">
                  <span className="kw">build</span>.solve(<span className="str">'problems'</span>)
                </div>
                <div className="cl">
                  <span className="kw">build</span>.deploy()
                  <span className="caret" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects__scroller">
          {!atStart && (
            <button
              className="projects__arrow projects__arrow--left"
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} />
            </button>
          )}
          {!atEnd && (
            <button
              className="projects__arrow projects__arrow--right"
              onClick={() => scroll(1)}
              aria-label="Scroll right"
            >
              <ChevronRight size={22} />
            </button>
          )}

          <div className="projects__track" ref={trackRef}>
            {projects.map((p) => {
            const Icon = ICONS[p.icon] || Workflow
            // `color` tints the whole card; `tone` controls the icon color.
            const c = p.color
            const cardStyle = c
              ? {
                  background: `color-mix(in srgb, ${c} 9%, #fff)`,
                  borderColor: `color-mix(in srgb, ${c} 30%, var(--line))`,
                }
              : undefined
            const mediaStyle = c
              ? { background: `linear-gradient(135deg, color-mix(in srgb, ${c} 18%, #fff), color-mix(in srgb, ${c} 52%, #fff))` }
              : undefined
            // Hide a link when its URL is missing or just a "#" placeholder.
            const hasDemo = p.demo && p.demo !== '#'
            const hasCode = p.code && p.code !== '#'
            return (
              <article className="pcard" key={p.title} style={cardStyle}>
                <div
                  className={`pcard__media${c ? '' : ` pcard__media--${p.tone}`}`}
                  style={mediaStyle}
                >
                  {p.badge && (
                    <span
                      className="pcard__badge"
                      style={{ background: TONE_COLORS[p.tone] || '#7c3aed' }}
                    >
                      {p.badge}
                    </span>
                  )}
                  {p.image ? (
                    <img className="pcard__img" src={p.image} alt={p.title} loading="lazy" />
                  ) : (
                    <Icon
                      className="pcard__ghost"
                      size={62}
                      style={c ? { color: 'rgba(14,14,16,0.18)' } : undefined}
                    />
                  )}
                </div>

                <span className={`pcard__icon pcard__icon--${p.tone}`}>
                  <Icon size={24} />
                </span>

                <h3 className="pcard__title">{p.title}</h3>
                <ProjectDesc text={p.desc} />

                <div className="pcard__tags">
                  {p.tags.map((t) => (
                    <span className="pcard__tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                {(hasDemo || hasCode) && (
                  <div className="pcard__foot">
                    {hasDemo && (
                      <a className="pcard__link" href={p.demo} target="_blank" rel="noopener">
                        Live Demo <ArrowUpRight size={14} />
                      </a>
                    )}
                    {hasCode && (
                      <a className="pcard__link" href={p.code} target="_blank" rel="noopener">
                        GitHub <Github size={14} />
                      </a>
                    )}
                  </div>
                )}
              </article>
            )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
