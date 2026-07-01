import { ArrowUpRight, Globe } from 'lucide-react'
import Robot from './Robot.jsx'
import MagnetizeButton from './MagnetizeButton.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <h1 className="hero__title">
          NEEL<span className="star">*</span>
          <br />
          SAHANI
        </h1>

        <div className="hero__visual">
          <div className="hero__globe" aria-hidden="true">
            <Globe size={22} />
          </div>
          <span className="hero__note">// building<br />the future</span>

          <div className="hero__robot">
            <div className="hero__orbit" aria-hidden="true">
              <svg viewBox="0 0 500 500" fill="none">
                <path
                  d="M250 60 C400 60 470 200 420 320 C370 440 180 470 90 380 C10 300 60 120 200 80"
                  stroke="rgba(14,14,16,0.18)"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                />
                <circle cx="420" cy="320" r="4" fill="var(--accent)" />
                <circle cx="90" cy="380" r="4" fill="var(--orange)" />
                <circle cx="200" cy="80" r="3" fill="rgba(14,14,16,0.3)" />
              </svg>
            </div>
            <Robot />
          </div>
        </div>

        <span className="hero__badge">
          AI Automation Engineer <span className="star">*</span>
        </span>

        <p className="hero__intro">
          Building intelligent systems, AI products and automation workflows that
          create <span className="hl">real impact</span>.
        </p>

        <div className="hero__cta">
          <MagnetizeButton className="btn btn--primary" href="#projects">
            Explore My Work <ArrowUpRight size={16} />
          </MagnetizeButton>
        </div>
      </div>
    </section>
  )
}
