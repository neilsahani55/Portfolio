import { Trophy } from 'lucide-react'
import { experience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="eyebrow">
          <span className="dot" /> Career
        </span>
        <h2 className="section-title">
          Experience<span className="star">.</span>
        </h2>

        <div className="exp">
          {experience.map((e) => (
            <article className="card exp__card" key={e.role}>
              <div className="exp__meta">
                <div className="role">{e.role}</div>
                <div className="company">{e.company}</div>
                <span className="period">{e.period}</span>
              </div>
              <div>
                <ul className="exp__points">
                  {e.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                {e.award && (
                  <div className="exp__award" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Trophy size={16} color="var(--orange)" /> {e.award}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
