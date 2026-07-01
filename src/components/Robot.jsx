import { useEffect, useRef, useState } from 'react'

// Hand-built SVG robot — fast, transparent background, no watermark.
// Matches the reference render: brushed-silver head with a glossy black
// screen + glowing eyes, a black mic connector, a short realistic helical
// spring on a black base, and a beveled cube body. Head pivots on the spring
// joint and the eyes track the cursor.
export default function Robot() {
  const ref = useRef(null)
  const [p, setP] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Touch devices have no cursor — run a continuous autonomous motion instead.
    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (coarse) {
      let raf = 0
      let start = 0
      const loop = (now) => {
        if (!start) start = now
        const t = (now - start) / 1000
        setP({
          x: Math.sin(t * 0.9) * 0.8,
          y: Math.sin(t * 0.6 + 1) * 0.5,
        })
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
      return () => cancelAnimationFrame(raf)
    }

    let raf = 0
    let target = { x: 0, y: 0 }
    const apply = () => {
      raf = 0
      setP(target)
    }
    const onMove = (e) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const clamp = (v) => Math.max(-1, Math.min(1, v))
      target = {
        x: clamp((e.clientX - cx) / (window.innerWidth / 2)),
        y: clamp((e.clientY - cy) / (window.innerHeight / 2)),
      }
      if (!raf) raf = requestAnimationFrame(apply)
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const headStyle = {
    transform: `translate(${p.x * 8}px, ${p.y * 6}px) rotate(${p.x * 9}deg)`,
    transformOrigin: '190px 214px',
    transition: 'transform 0.18s ease-out',
  }
  const eyeStyle = {
    transform: `translate(${p.x * 16}px, ${p.y * 11}px)`,
    transition: 'transform 0.12s ease-out',
  }
  const bodyStyle = {
    transform: `translate(${p.x * 6}px, ${p.y * 4}px)`,
    transition: 'transform 0.3s ease-out',
  }

  // Realistic helical spring (continuous wire), short and chunky.
  const sTop = 224
  const sBot = 258
  const turns = 4
  const srx = 19
  const sry = 6
  const segs = turns * 22
  let helix = ''
  for (let i = 0; i <= segs; i++) {
    const t = (i / segs) * turns * Math.PI * 2
    const x = 190 + srx * Math.cos(t)
    const y = sTop + (i / segs) * (sBot - sTop) + sry * Math.sin(t)
    helix += `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
  }

  return (
    <svg
      ref={ref}
      className="robot"
      viewBox="0 0 380 480"
      role="img"
      aria-label="Friendly robot mascot that follows the cursor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="metalHead" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#e1e2e7" />
          <stop offset="75%" stopColor="#bdbfc7" />
          <stop offset="100%" stopColor="#94969f" />
        </linearGradient>
        <linearGradient id="metalFront" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#fdfdff" />
          <stop offset="50%" stopColor="#d4d5db" />
          <stop offset="100%" stopColor="#a3a5ae" />
        </linearGradient>
        <linearGradient id="cheekShade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.16)" />
        </linearGradient>
        <linearGradient id="topBlack" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#33343a" />
          <stop offset="100%" stopColor="#08090b" />
        </linearGradient>
        <linearGradient id="orange" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#ff8048" />
          <stop offset="50%" stopColor="#f4541d" />
          <stop offset="100%" stopColor="#cf3409" />
        </linearGradient>
        {/* glossy orange right face */}
        <linearGradient id="orange2" x1="0" y1="0" x2="0.18" y2="1">
          <stop offset="0%" stopColor="#ff9c5f" />
          <stop offset="32%" stopColor="#ff6c31" />
          <stop offset="68%" stopColor="#ee4a17" />
          <stop offset="100%" stopColor="#c4300a" />
        </linearGradient>
        {/* brushed steel front face (with reflection lift near the base) */}
        <linearGradient id="steel" x1="0" y1="0" x2="0.12" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="22%" stopColor="#ecedf0" />
          <stop offset="52%" stopColor="#caccd2" />
          <stop offset="80%" stopColor="#b7b9c0" />
          <stop offset="100%" stopColor="#d8dade" />
        </linearGradient>
        {/* glossy black top */}
        <linearGradient id="topGloss" x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0%" stopColor="#26272d" />
          <stop offset="45%" stopColor="#0d0e12" />
          <stop offset="100%" stopColor="#1b1c22" />
        </linearGradient>
        <radialGradient id="frontGloss" cx="34%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="boltInner" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#26272c" />
          <stop offset="70%" stopColor="#45474e" />
          <stop offset="100%" stopColor="#5c5e66" />
        </radialGradient>
        {/* vertical brushed grain */}
        <pattern id="brushV" width="4" height="6" patternUnits="userSpaceOnUse">
          <line x1="0.6" y1="0" x2="0.6" y2="6" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
          <line x1="2.4" y1="0" x2="2.4" y2="6" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />
        </pattern>
        <filter id="brushedV" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9 0.014" numOctaves="2" seed="9" stitchTiles="stitch" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0" />
        </filter>
        <linearGradient id="screen" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#23242b" />
          <stop offset="45%" stopColor="#0d0e12" />
          <stop offset="100%" stopColor="#050507" />
        </linearGradient>
        {/* spring metal: bright top -> dark bottom */}
        <linearGradient id="coilV" x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0%" stopColor="#fdfdff" />
          <stop offset="40%" stopColor="#c4c6cd" />
          <stop offset="75%" stopColor="#7e8088" />
          <stop offset="100%" stopColor="#45474e" />
        </linearGradient>
        <linearGradient id="mount" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3b42" />
          <stop offset="100%" stopColor="#101115" />
        </linearGradient>
        <linearGradient id="mic" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#101115" />
          <stop offset="45%" stopColor="#34353c" />
          <stop offset="100%" stopColor="#0c0d10" />
        </linearGradient>
        <radialGradient id="bolt" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fbfbfd" />
          <stop offset="45%" stopColor="#c7c9cf" />
          <stop offset="100%" stopColor="#6c6e75" />
        </radialGradient>
        <radialGradient id="eye" cx="50%" cy="34%" r="66%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="28%" stopColor="#e0d4ff" />
          <stop offset="66%" stopColor="#9d79ff" />
          <stop offset="100%" stopColor="#6233ee" />
        </radialGradient>
        <radialGradient id="floor" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(14,14,16,0.26)" />
          <stop offset="70%" stopColor="rgba(14,14,16,0.08)" />
          <stop offset="100%" stopColor="rgba(14,14,16,0)" />
        </radialGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="brushed" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.85" numOctaves="2" seed="7" stitchTiles="stitch" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
        </filter>
        <clipPath id="clipFront">
          <path d="M95 300 L265 300 L265 432 L95 432 Z" />
        </clipPath>
        <clipPath id="clipHead">
          <rect x="86" y="68" width="208" height="130" rx="30" />
        </clipPath>
      </defs>

      {/* ground shadow */}
      <ellipse cx="190" cy="456" rx="150" ry="20" fill="url(#floor)" />
      <ellipse cx="178" cy="452" rx="96" ry="11" fill="rgba(14,14,16,0.18)" filter="url(#soft)" />

      {/* ============ BODY + NECK (move together) ============ */}
      <g style={bodyStyle}>
        {/* ---- cube ---- */}
        {/* RIGHT FACE (glossy orange) */}
        <path d="M265 300 L320 266 L320 398 L265 432 Z" fill="url(#orange2)" />
        {/* bright specular along the leading (front) edge */}
        <path d="M265 300 L282 290 L282 422 L265 432 Z" fill="rgba(255,255,255,0.28)" />
        {/* soft reflection lower-right */}
        <path d="M282 402 L320 380 L320 398 L282 420 Z" fill="rgba(255,255,255,0.08)" />

        {/* TOP FACE (glossy black) */}
        <path d="M95 300 L150 266 L320 266 L265 300 Z" fill="url(#topGloss)" />
        {/* reflection sheen on the top */}
        <path d="M122 299 L168 270 L246 270 L208 299 Z" fill="rgba(255,255,255,0.10)" />

        {/* FRONT FACE (brushed steel) */}
        <path d="M95 300 L265 300 L265 432 L95 432 Z" fill="url(#steel)" />
        <g clipPath="url(#clipFront)">
          {/* vertical brushed grain + fine noise */}
          <rect x="95" y="300" width="170" height="132" fill="url(#brushV)" opacity="0.85" />
          <rect x="95" y="300" width="170" height="132" filter="url(#brushedV)" opacity="0.05" />
          {/* soft gloss reflection (upper-left) */}
          <ellipse cx="150" cy="338" rx="120" ry="78" fill="url(#frontGloss)" />
          {/* left light strip */}
          <path d="M118 300 L150 300 L120 432 L92 432 Z" fill="rgba(255,255,255,0.18)" />
          {/* warm bounce light from the orange face near the right edge */}
          <rect x="248" y="300" width="17" height="132" fill="rgba(247,90,40,0.10)" />
          {/* bottom ambient occlusion */}
          <rect x="95" y="416" width="170" height="16" fill="rgba(0,0,0,0.14)" />
        </g>

        {/* CHROME BEVEL EDGES (fake rounded corners) */}
        <path d="M95 300 L265 300" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M95 300 L150 266" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />
        <path d="M150 266 L320 266" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M265 300 L265 432" stroke="rgba(255,255,255,0.42)" strokeWidth="2" strokeLinecap="round" />
        <path d="M95 300 L95 432" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M320 266 L320 398" stroke="rgba(255,180,150,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        {/* darkened bottom edges */}
        <path d="M95 432 L265 432" stroke="rgba(0,0,0,0.16)" strokeWidth="2" />
        <path d="M265 432 L320 398" stroke="rgba(0,0,0,0.22)" strokeWidth="2" />

        {/* RECESSED SCREW BOLTS on the orange face */}
        {[
          { cx: 297, cy: 326 },
          { cx: 291, cy: 388 },
        ].map((b) => (
          <g key={b.cy}>
            <circle cx={b.cx + 1} cy={b.cy + 1.5} r="13" fill="rgba(0,0,0,0.3)" />
            <circle cx={b.cx} cy={b.cy} r="12" fill="url(#bolt)" />
            <circle cx={b.cx} cy={b.cy} r="11" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1" />
            <circle cx={b.cx} cy={b.cy} r="7.5" fill="url(#boltInner)" />
            <circle cx={b.cx} cy={b.cy} r="2.8" fill="#34363c" />
            <circle cx={b.cx - 3.5} cy={b.cy - 3.5} r="2" fill="rgba(255,255,255,0.85)" />
          </g>
        ))}

        {/* ---- short helical spring on a black base ---- */}
        <ellipse cx="196" cy="284" rx="28" ry="9" fill="rgba(0,0,0,0.24)" filter="url(#soft)" />
        <path d="M173 284 L207 284 L202 260 L178 260 Z" fill="url(#mount)" />
        <ellipse cx="190" cy="260" rx="18" ry="6" fill="#2c2d33" />
        {/* spring wire: dark underlay + bright metal */}
        <path d={helix} fill="none" stroke="#15161a" strokeWidth="9.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d={helix} fill="none" stroke="url(#coilV)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* ============ HEAD (with mic connector) ============ */}
      <g style={headStyle}>
        {/* mic connector — overlaps head bottom and spring top */}
        <g>
          <rect x="178" y="190" width="24" height="12" rx="5" fill="#15161a" />
          <rect x="181" y="196" width="18" height="22" rx="9" fill="url(#mic)" />
          <line x1="185" y1="203" x2="195" y2="203" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" />
          <line x1="185" y1="207" x2="195" y2="207" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" />
          <line x1="185" y1="211" x2="195" y2="211" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" />
          <circle cx="190" cy="221" r="9" fill="#1a1b1f" />
          <circle cx="187" cy="218" r="2.6" fill="rgba(255,255,255,0.3)" />
        </g>

        <g transform="rotate(-8 190 132)">
          {/* drop shadow under the head */}
          <rect x="92" y="76" width="200" height="126" rx="30" fill="rgba(0,0,0,0.25)" filter="url(#soft)" />
          {/* silver shell */}
          <rect x="86" y="68" width="208" height="130" rx="30" fill="url(#metalHead)" />
          <g clipPath="url(#clipHead)">
            <rect x="86" y="68" width="208" height="130" filter="url(#brushed)" opacity="0.08" />
            <rect x="200" y="68" width="94" height="130" fill="url(#cheekShade)" />
            <rect x="96" y="72" width="170" height="12" rx="6" fill="rgba(255,255,255,0.5)" />
            <rect x="96" y="186" width="200" height="14" fill="rgba(0,0,0,0.14)" />
          </g>
          {/* chrome screen frame */}
          <rect x="98" y="82" width="166" height="102" rx="26" fill="#c2c4cb" />
          <rect x="100" y="84" width="162" height="98" rx="24" fill="#5b5d65" />
          {/* glossy black screen */}
          <rect x="105" y="89" width="152" height="88" rx="20" fill="url(#screen)" />
          <path d="M114 94 H230 Q236 94 232 106 L120 122 Q110 114 114 94 Z" fill="rgba(255,255,255,0.06)" />

          {/* eyes (track cursor) */}
          <g style={eyeStyle}>
            <circle cx="155" cy="132" r="29" fill="#8a5cff" opacity="0.5" filter="url(#soft)" />
            <circle cx="210" cy="132" r="29" fill="#8a5cff" opacity="0.5" filter="url(#soft)" />
            <circle className="robot__eye" cx="155" cy="132" r="20" fill="url(#eye)" />
            <circle className="robot__eye" cx="210" cy="132" r="20" fill="url(#eye)" />
            <circle cx="148" cy="125" r="6" fill="#ffffff" opacity="0.95" />
            <circle cx="203" cy="125" r="6" fill="#ffffff" opacity="0.95" />
          </g>

          {/* mic dot + side button */}
          <circle cx="181" cy="164" r="2.6" fill="#2a2b30" />
          <rect x="272" y="114" width="9" height="26" rx="4.5" fill="#1f2025" />
          <rect x="273.5" y="116" width="2.5" height="22" rx="1.2" fill="rgba(255,255,255,0.18)" />
        </g>
      </g>
    </svg>
  )
}
