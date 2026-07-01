import { useState } from 'react'
import { Github, Linkedin, Mail, ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio.js'
import { useScrollSpy } from '../hooks.js'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(ids)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#home" className="brand" onClick={close}>
          <span className="brand__prompt">{'>_'}</span> NEEL
        </a>

        <nav className={`nav__links${open ? ' open' : ''}`}>
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'active' : ''}
              onClick={close}
            >
              {l.label}
            </a>
          ))}

          {/* extras shown only inside the mobile dropdown */}
          <div className="nav__menu-extra">
            <a className="btn btn--connect" href="#contact" onClick={close}>
              Let's Connect <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>

        <div className="nav__actions">
          <div className="nav__socials">
            <a className="icon-btn" href={profile.links.github} target="_blank" rel="noopener" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a className="icon-btn" href={profile.links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a className="icon-btn" href={profile.links.email} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
          <a className="btn btn--connect" href="#contact">
            Let's Connect <ArrowUpRight size={16} />
          </a>
          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
