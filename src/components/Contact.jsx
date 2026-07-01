import { useState } from 'react'
import { MapPin, Phone, Mail, Github, Linkedin, Instagram, Send } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result?.error || 'Something went wrong. Please try again or email me directly.')
      }

      setStatus('success')
      setErrorMessage('')
      form.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Something went wrong. Please try again or email me directly.')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact__card">
          <div className="contact__intro">
            <h2>
              Let's build the <span className="hl">future</span>.
            </h2>
            <p>
              I'm currently open to new opportunities in Python, AI automation
              and machine learning. Whether you have a question or just want to
              say hi, my inbox is always open.
            </p>

            <div className="contact__list">
              <div className="contact__item">
                <span className="ci"><MapPin size={20} /></span>
                {profile.location}
              </div>
              <div className="contact__item">
                <span className="ci"><Phone size={20} /></span>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </div>
              <div className="contact__item">
                <span className="ci"><Mail size={20} /></span>
                <a href={profile.links.email}>{profile.email}</a>
              </div>
            </div>

            <div className="contact__socials">
              <a className="icon-btn" href={profile.links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a className="icon-btn" href={profile.links.github} target="_blank" rel="noopener" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a className="icon-btn" href={profile.links.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a className="icon-btn" href={profile.links.email} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <h3 className="contact__form-title">Get In Touch</h3>

            <div className="contact__field">
              <label htmlFor="cf-name">Name</label>
              <input id="cf-name" name="name" type="text" required placeholder="Your name" />
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="contact__field">
                <label htmlFor="cf-phone">Phone Number</label>
                <input id="cf-phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                rows="4"
                required
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary contact__send"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="contact__note contact__note--ok">
                ✅ Thanks! Your message has been sent — I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__note contact__note--err">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
