import { useEffect, useRef } from 'react'
import {
  Workflow,
  Server,
  BrainCircuit,
  Bot,
  Database,
  BarChart3,
  Settings2,
  Rocket,
  Code2,
} from 'lucide-react'
import { about } from '../data/portfolio.js'

const ICONS = [Workflow, Server, BrainCircuit, Bot, Database, BarChart3, Settings2, Rocket]
const TONES = ['orange', 'lime', 'blue', 'purple']

export default function CompetencyOrbit() {
  const ref = useRef(null)
  const items = about.competencies

  const config = items.map((label, i) => {
    const inner = i < 4
    const idx = inner ? i : i - 4
    return {
      label,
      Icon: ICONS[i % ICONS.length],
      tone: TONES[i % TONES.length],
      ring: inner ? 'inner' : 'outer',
      s: inner ? 0.5 : -0.32,
      p: (idx / 4) * Math.PI * 2 + (inner ? 0 : Math.PI / 4),
    }
  })

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const nodes = Array.from(root.querySelectorAll('.corb__node'))

    const place = (t) => {
      const W = root.clientWidth || 420
      nodes.forEach((el) => {
        const r = W * (el.dataset.ring === 'inner' ? 0.23 : 0.41)
        const a = t * parseFloat(el.dataset.s) + parseFloat(el.dataset.p)
        const x = Math.cos(a) * r
        const y = Math.sin(a) * r
        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
      })
    }

    // Respect reduced-motion: place once, no animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      place(0)
      return
    }

    let raf = 0
    let last = 0
    let t = 0
    let paused = false
    const enter = () => (paused = true)
    const leave = () => (paused = false)
    root.addEventListener('mouseenter', enter)
    root.addEventListener('mouseleave', leave)

    const tick = (now) => {
      if (!last) last = now
      const dt = (now - last) / 1000
      last = now
      if (!paused) t += dt
      place(t)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      root.removeEventListener('mouseenter', enter)
      root.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <div className="corb" ref={ref}>
      <span className="corb__ring corb__ring--outer" />
      <span className="corb__ring corb__ring--inner" />
      <span className="corb__hub">
        <Code2 size={26} />
      </span>
      {config.map((c, i) => {
        const Icon = c.Icon
        return (
          <span
            key={i}
            className={`corb__node corb__node--${c.tone}`}
            data-ring={c.ring}
            data-s={c.s}
            data-p={c.p}
            title={c.label}
          >
            <Icon size={16} />
            <span className="corb__label">{c.label}</span>
          </span>
        )
      })}
    </div>
  )
}
