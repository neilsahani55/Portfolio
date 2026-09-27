import { Award, Trophy, BadgeCheck, ExternalLink } from 'lucide-react'
import { badges } from '../data/portfolio.js'

export default function BadgeShelf() {
  const trophies = badges.filter((b) => b.type === 'trophy').length

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

      <div className="bshelf__grid">
        {badges.map((b) => (
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
            <span className="bshelf__passed">
              <BadgeCheck size={13} />
              {b.type === 'trophy' ? 'All assessments passed' : 'Assessment passed'}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
