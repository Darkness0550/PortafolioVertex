import { useEffect, useRef, useState } from 'react';
import './Landings.css';

const landings = [
  {
    id: 'apex',
    name: 'Apex',
    tagline: 'Velocidad. Conversión. Resultados.',
    desc: 'Landing page diseñada para convertir visitantes en clientes desde el primer segundo.',
    color: '#00C8FF',
    emoji: '⚡',
    badge: 'E-COMMERCE',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'consorcio',
    name: 'Consorcio Los Andes',
    tagline: 'Presencia. Confianza. Autoridad.',
    desc: 'Identidad digital corporativa que transmite seriedad y profesionalismo en construcción.',
    color: '#FF6B35',
    emoji: '🏗️',
    badge: 'CORPORATIVO',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'pyramid',
    name: 'Pyramid Structures',
    tagline: 'Ingeniería. Precisión. Escala.',
    desc: 'Web industrial de alta gama que posiciona a la empresa en la cima del mercado.',
    color: '#A259FF',
    emoji: '🔺',
    badge: 'INDUSTRIA',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

/* ── Card with IntersectionObserver entrance ── */
function LandingCard({ item, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleEnter = (e) => {
    const v = e.currentTarget.querySelector('video');
    if (v) v.play().catch(() => {});
  };

  const handleLeave = (e) => {
    const v = e.currentTarget.querySelector('video');
    if (v) { v.pause(); v.currentTime = 0; }
  };

  return (
    <div
      ref={ref}
      className={`lc-card ${visible ? 'lc-card-in' : ''}`}
      style={{ '--d': `${index * 140}ms`, '--c': item.color }}
    >
      <div
        className="lc-wrap"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {/* top accent glow */}
        <div className="lc-glow" />

        {/* media */}
        <div className="lc-media">
          <video src={item.video} muted loop playsInline className="lc-video" />
          <div className="lc-media-fade" />
          <span
            className="lc-badge"
            style={{
              color: item.color,
              borderColor: `${item.color}55`,
              background: `${item.color}15`,
            }}
          >
            {item.badge}
          </span>
          <span className="lc-emoji">{item.emoji}</span>
        </div>

        {/* body */}
        <div className="lc-body">
          <h3 className="lc-name">{item.name}</h3>
          <p className="lc-tagline" style={{ color: item.color }}>{item.tagline}</p>
          <p className="lc-desc">{item.desc}</p>
          <span className="lc-cta" style={{ color: item.color }}>VER PROYECTO ↗</span>
        </div>
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function Landings() {
  return (
    <section id="landings" className="landings-root">

      {/* ── HERO ── */}
      <div className="lh-section">
        <div className="lh-bg" />
        <div className="lh-noise" />

        <div className="lh-content">
          <p className="lh-eyebrow">DISEÑO WEB &nbsp;·&nbsp; LANDING PAGES &nbsp;·&nbsp; CONVERSIÓN</p>

          <h2 className="lh-title">
            <span className="lh-line">¿Tu página</span>
            <span className="lh-line-accent">no vende?</span>
          </h2>

          <p className="lh-sub">
            La mejoramos. La hacemos desde cero. La personalizamos a tu gusto.<br />
            <strong>Tu página ideal, lista para convertir.</strong>
          </p>

          <div className="lh-actions">
            <a href="#contacto" className="lh-btn-primary">
              MEJORAR MI PÁGINA
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
            <a href="#contacto" className="lh-btn-ghost">VER PROCESO →</a>
          </div>

          <div className="lh-stats">
            {[['3+', 'Landings entregadas'], ['100%', 'Satisfacción'], ['48h', 'Entrega rápida']].map(([val, lbl]) => (
              <div className="lh-stat" key={lbl}>
                <span className="lh-stat-num">{val}</span>
                <span className="lh-stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lh-scroll">
          <div className="lh-scroll-bar" />
          <span className="lh-scroll-txt">scroll</span>
        </div>
      </div>

      {/* ── SHOWCASE ── */}
      <div className="ls-section">
        <div className="ls-head">
          <p className="ls-eyebrow">— PORTAFOLIO DE LANDINGS</p>
          <h2 className="ls-title">
            Trabajos <span className="ls-title-hl">recientes</span>
          </h2>
        </div>

        <div className="lc-grid">
          {landings.map((item, i) => (
            <LandingCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className="lstrip">
        <div className="lstrip-glow" />
        <div className="lstrip-inner">
          <div>
            <p className="lstrip-label">¿LISTO PARA EL CAMBIO?</p>
            <h3 className="lstrip-title">
              Hacemos tu landing page.<br />
              Diseñada para <em>vender.</em>
            </h3>
          </div>
          <a href="#contacto" className="lh-btn-primary">
            SOLICITAR LANDING
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
