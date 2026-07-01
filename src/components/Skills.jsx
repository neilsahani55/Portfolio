import { useRef, useEffect } from 'react'
import {
  Globe,
  ChevronLeft,
  ChevronRight,
  Bot,
  Code2,
  BrainCircuit,
  Database,
  Boxes,
  BarChart3,
  Sparkles,
  Cpu,
  Network,
} from 'lucide-react'
import {
  skillsIntro,
  techRows,
  whatIBuild,
  currentlyExploring,
} from '../data/portfolio.js'

const BUILD_ICONS = {
  bot: Bot,
  code: Code2,
  brain: BrainCircuit,
  database: Database,
  boxes: Boxes,
  chart: BarChart3,
  sparkles: Sparkles,
  cpu: Cpu,
  network: Network,
}

// Brand logo (simpleicons CDN) with a letter-badge fallback.
function TechLogo({ name, slug, src }) {
  const url = src || (slug ? `https://cdn.simpleicons.org/${slug}` : null)
  return (
    <span className="tech">
      {url ? (
        <img
          className="tech__logo"
          src={url}
          alt=""
          loading="lazy"
          onError={(e) => {
            e.currentTarget.replaceWith(
              Object.assign(document.createElement('span'), {
                className: 'tech__fallback',
                textContent: name[0],
              }),
            )
          }}
        />
      ) : (
        <span className="tech__fallback">{name[0]}</span>
      )}
      <span className="tech__name">{name}</span>
    </span>
  )
}

function TechRow({ items, dir }) {
  const maskRef = useRef(null)
  const ctrl = useRef({ paused: false, manual: false, timer: 0 })

  useEffect(() => {
    const el = maskRef.current
    if (!el) return
    const half = () => el.scrollWidth / 2
    // right-moving rows start at the middle so they can scroll backwards seamlessly
    if (dir === 'right') el.scrollLeft = half()
    let raf = 0
    let last = 0
    const speed = 45 // px per second
    const enter = () => (ctrl.current.paused = true)
    const leave = () => (ctrl.current.paused = false)
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
    const step = (t) => {
      if (!last) last = t
      const dt = (t - last) / 1000
      last = t
      const c = ctrl.current
      if (!c.paused && !c.manual) {
        const w = half()
        el.scrollLeft += (dir === 'left' ? 1 : -1) * speed * dt
        if (el.scrollLeft >= w) el.scrollLeft -= w
        else if (el.scrollLeft <= 0) el.scrollLeft += w
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mouseenter', enter)
      el.removeEventListener('mouseleave', leave)
      clearTimeout(ctrl.current.timer)
    }
  }, [dir])

  const nudge = (d) => {
    const el = maskRef.current
    if (!el) return
    const half = el.scrollWidth / 2
    const item = el.querySelector('.tech')
    const groupEl = el.querySelector('.techrow__group')
    const gap = groupEl ? parseFloat(getComputedStyle(groupEl).columnGap) || 46 : 46
    const amount = item ? (item.offsetWidth + gap) * 2 : 220 // ~2 logos per click
    ctrl.current.manual = true
    let target = el.scrollLeft + d * amount
    // wrap so it never clamps at the start/end (content is duplicated)
    if (target < 0) {
      el.scrollLeft += half
      target += half
    } else if (target > el.scrollWidth - el.clientWidth) {
      el.scrollLeft -= half
      target -= half
    }
    el.scrollTo({ left: target, behavior: 'smooth' })
    clearTimeout(ctrl.current.timer)
    ctrl.current.timer = setTimeout(() => (ctrl.current.manual = false), 1200)
  }

  const group = (key) => (
    <div className="techrow__group" key={key} aria-hidden={key === 1 ? 'true' : undefined}>
      {items.map((t, i) => (
        <TechLogo key={`${t.name}-${i}`} name={t.name} slug={t.slug} src={t.src} />
      ))}
    </div>
  )

  return (
    <div className="techrow">
      <div className="techrow__card">
        <button
          className="techrow__arrow techrow__arrow--left"
          onClick={() => nudge(1)}
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="techrow__mask" ref={maskRef}>
          <div className="techrow__track">
            {group(0)}
            {group(1)}
          </div>
        </div>
        <button
          className="techrow__arrow techrow__arrow--right"
          onClick={() => nudge(-1)}
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="skills__head">
          <div>
            <span className="eyebrow">
              <span className="dot" /> {skillsIntro.eyebrow}
            </span>
            <h2 className="skills__title">
              {skillsIntro.titleLine1}
              <br className="skills__br" />{' '}
              {skillsIntro.titleLine2} <span className="hl">{skillsIntro.titleAccent}</span>
              <Globe className="skills__globe" size={26} />
            </h2>
            <p className="section-lead">{skillsIntro.lead}</p>
          </div>

          <div className="skills__deco" aria-hidden="true">
            <span className="skills__cube skills__cube--main" />
            <span className="skills__cube skills__cube--a" />
            <span className="skills__cube skills__cube--b" />
            <span className="skills__dot skills__dot--1" />
            <span className="skills__dot skills__dot--2" />
            <span className="skills__dot skills__dot--3" />
          </div>
        </div>

        <div className="techrows">
          {techRows.map((row, i) => (
            <TechRow key={i} items={row.items} dir={row.dir} />
          ))}
        </div>

        <div className="techfoot">
          <div className="techfoot__col">
            <h4 className="techfoot__title">What I Build</h4>
            <div className="techfoot__grid">
              {whatIBuild.map((b) => {
                const Icon = BUILD_ICONS[b.icon] || Boxes
                return (
                  <span className="buildchip" key={b.label}>
                    <span className="buildchip__icon">
                      <Icon size={16} />
                    </span>
                    <span className="buildchip__label">{b.label}</span>
                  </span>
                )
              })}
            </div>
          </div>

          <div className="techfoot__col">
            <h4 className="techfoot__title">Currently Exploring</h4>
            <div className="techfoot__grid">
              {currentlyExploring.map((b) => {
                const Icon = BUILD_ICONS[b.icon] || Sparkles
                return (
                  <span className="buildchip buildchip--explore" key={b.label}>
                    <span className="buildchip__icon">
                      <Icon size={16} />
                    </span>
                    <span className="buildchip__label">{b.label}</span>
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
