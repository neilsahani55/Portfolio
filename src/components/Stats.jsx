import { Code2, Box, Rocket, TrendingUp } from 'lucide-react'
import { stats } from '../data/portfolio.js'

const iconMap = { code: Code2, box: Box, rocket: Rocket, trend: TrendingUp }
const toneMap = {
  orange: { color: 'var(--t-orange)', bg: 'var(--t-orange-bg)' },
  purple: { color: 'var(--t-purple)', bg: 'var(--t-purple-bg)' },
  lime: { color: 'var(--t-lime)', bg: 'var(--t-lime-bg)' },
  blue: { color: 'var(--t-blue)', bg: 'var(--t-blue-bg)' },
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__wrap">
          {stats.map((s) => {
            const Icon = iconMap[s.icon]
            const tone = toneMap[s.tone]
            return (
              <div className="stat" key={s.title}>
                <div className="stat__icon" style={{ background: tone.bg, color: tone.color }}>
                  <Icon size={26} />
                </div>
                <div>
                  <div className="stat__value" style={{ color: tone.color }}>
                    {s.value}
                  </div>
                  <div className="stat__title">{s.title}</div>
                  <div className="stat__note">{s.note}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
