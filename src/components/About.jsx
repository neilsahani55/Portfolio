import { useState } from 'react'
import { GraduationCap, ArrowUpRight } from 'lucide-react'
import { about } from '../data/portfolio.js'
import CertCarousel from './CertCarousel.jsx'
import CompetencyOrbit from './CompetencyOrbit.jsx'
import CertModal from './CertModal.jsx'

export default function About() {
  const [certOpen, setCertOpen] = useState(false)

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about__box">
          {/* Left column — heading + focus chips */}
          <div className="about__col about__col--left">
            <span className="eyebrow">
              <span className="dot" /> {about.eyebrow}
            </span>
            <h2 className="section-title about__heading">{about.heading}</h2>
            <div className="about__chips">
              {about.focus.map((f) => (
                <span className="chip" key={f}>
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — story */}
          <div className="about__col about__col--right about__story">
            {about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Education + Certifications side by side (2:3) */}
        <div className="about__row">
          {/* Education */}
          <div className="about__edu">
            <h3 className="about__subtitle">
              Education<span className="star">*</span>
            </h3>
            <div className="edu__list">
              {about.education.map((e) => (
                <div className="edu__card" key={e.degree}>
                  <span className="edu__icon">
                    <GraduationCap size={22} />
                  </span>
                  <div className="edu__body">
                    <div className="edu__degree">{e.degree}</div>
                    <div className="edu__meta">
                      <span className="edu__place">{e.place}</span>
                      <span className="edu__period">{e.period}</span>
                    </div>
                    <span className="edu__score">{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications carousel */}
          <div className="about__certs">
            <div className="about__certs-head">
              <h3 className="about__subtitle">
                Certifications<span className="star">*</span>
              </h3>
              <button className="about__viewall" onClick={() => setCertOpen(true)}>
                View All <ArrowUpRight size={14} />
              </button>
            </div>
            <CertCarousel />
          </div>
        </div>

        <div className="about__core">
          <div className="core__left">
            <h3 className="about__subtitle">
              Core Competencies<span className="star">*</span>
            </h3>
            <div className="core__list">
              {about.competencies.map((c) => (
                <div className="fact" key={c}>
                  <div className="value">{c}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="core__orbit">
            <CompetencyOrbit />
          </div>
        </div>
      </div>

      <CertModal open={certOpen} onClose={() => setCertOpen(false)} />
    </section>
  )
}
