import { useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolio.js'

export default function CertModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="cmodal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="cmodal__panel" onClick={(e) => e.stopPropagation()}>
        <div className="cmodal__head">
          <h3>
            All Certifications<span className="star">*</span>
          </h3>
          <button className="cmodal__close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="cmodal__body">
          <table className="cmodal__table">
            <thead>
              <tr>
                <th>#</th>
                <th>Certificate</th>
                <th>Issuer</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((c, i) => (
                <tr key={c.file}>
                  <td className="cmodal__num">{i + 1}</td>
                  <td className="cmodal__name">{c.title}</td>
                  <td className="cmodal__issuer">{c.issuer}</td>
                  <td>
                    <a className="cmodal__view" href={c.file} target="_blank" rel="noopener">
                      View <ExternalLink size={13} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
