import { useEffect, useRef, useState } from 'react';
import './Landings.css';

const landings = [
  {
    id: 'apex',
    name: 'Apex',
    tagline: 'Velocidad. Conversión. Resultados.',
    desc: 'Landing page diseñada para convertir visitantes en clientes desde el primer segundo.',
    color: '#00C8FF',
    icon: '⚡',
    badge: 'E-COMMERCE',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'consorcio',
    name: 'Consorcio Los Andes',
    tagline: 'Presencia. Confianza. Autoridad.',
    desc: 'Identidad digital corporativa que transmite seriedad y profesionalismo en el sector construcción.',
    color: '#FF6B35',
    icon: '🏗️',
    badge: 'CORPORATIVO',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'pyramid',
    name: 'Pyramid Structures',
    tagline: 'Ingeniería. Precisión. Escala.',
    desc: 'Web industrial de alta gama que posiciona a la empresa en la cima del mercado de estructuras.',
    color: '#A259FF',
    icon: '🔺',
    badge: 'INDUSTRIA',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

function LandingCard({ landing, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePos({ x, y });
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    const video = e.currentTarget.querySelector('video');
    if (video) video.play().catch(() => {});
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
    const video = e.currentTarget.querySelector('video');
    if (video) video.pause();
  };

  return (
    <div
      ref={cardRef}
      className={`lc-card ${visible ? 'lc-card--visible' : ''}`}
      style={{ '--delay': `${index * 150}ms`, '--accent': landing.color }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="lc-card-inner"
        style={{
          transform: isHovered
            ? `perspective(800px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg) scale(1.02)`
            : 'perspective(800px) rotateX(0) rotateY(0) scale(1)',
        }}
      >
        {/* Glow layer */}
        <div className="lc-card-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${landing.color}22 0%, transparent 70%)` }} />

        {/* Video preview */}
        <div className="lc-card-media">
          <video src={landing.video} muted loop playsInline className="lc-card-video" />
          <div className="lc-card-media-overlay" style={{ background: `linear-gradient(180deg, transparent 0%, #090a0f 100%)` }} />
          <span className="lc-badge font-code" style={{ color: landing.color, borderColor: `${landing.color}55`, background: `${landing.color}10` }}>
            {landing.badge}
          </span>
          <span className="lc-icon">{landing.icon}</span>
        </div>

        {/* Content */}
        <div className="lc-card-body">
          <h3 className="lc-card-name font-display">{landing.name}</h3>
          <p className="lc-card-tagline font-display" style={{ color: landing.color }}>{landing.tagline}</p>
          <p className="lc-card-desc font-body">{landing.desc}</p>
          <div className="lc-card-cta font-code" style={{ color: landing.color }}>
            VER PROYECTO ↗
          </div>
        </div>

        {/* Shimmer border */}
        <div className="lc-card-border" style={{ '--glow': landing.color }} />
      </div>
    </div>
  );
}

export default function Landings() {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="landings" className="landings-root">

      {/* ── CINEMATIC HERO ── */}
      <div className="landings-hero" ref={heroRef}>
        <div className="landings-hero-bg" style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
        <div className="landings-hero-noise" />

        <div className="landings-hero-content container">
          <div className="lh-eyebrow font-code">DISEÑO WEB · LANDING PAGES · CONVERSIÓN</div>

          <h1 className="lh-title font-display">
            <span className="lh-line">¿Tu página</span>
            <span className="lh-line lh-line--accent">no vende?</span>
          </h1>

          <p className="lh-subtitle font-body">
            La mejoramos. La hacemos desde cero. La personalizamos a tu gusto.<br />
            <strong>Tu página ideal, lista para convertir.</strong>
          </p>

          <div className="lh-actions">
            <a href="#contacto" className="lh-btn lh-btn--primary font-display interactive">
              <span>MEJORAR MI PÁGINA</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
            <a href="#contacto" className="lh-btn lh-btn--ghost font-code interactive">
              VER PROCESO →
            </a>
          </div>

          <div className="lh-stats">
            {[['3', 'Landings entregadas'], ['100%', 'Satisfacción'], ['48h', 'Entrega rápida']].map(([val, label]) => (
              <div key={label} className="lh-stat">
                <span className="lh-stat-val font-display">{val}</span>
                <span className="lh-stat-label font-body">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lh-scroll-hint font-code">
          <div className="lh-scroll-line" />
          scroll
        </div>
      </div>

      {/* ── CARDS GRID ── */}
      <div className="landings-showcase">
        <div className="container">
          <div className="ls-header">
            <p className="ls-label font-code">— PORTAFOLIO DE LANDINGS</p>
            <h2 className="ls-title font-display">Trabajos <span className="ls-title-accent">recientes</span></h2>
          </div>

          <div className="lc-grid">
            {landings.map((l, i) => (
              <LandingCard key={l.id} landing={l} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA STRIP ── */}
      <div className="landings-strip">
        <div className="landings-strip-glow" />
        <div className="container landings-strip-inner">
          <div>
            <p className="font-code ls-strip-label">¿LISTO PARA EL CAMBIO?</p>
            <h3 className="font-display ls-strip-title">Hacemos tu landing page.<br />Diseñada para <em>vender.</em></h3>
          </div>
          <a href="#contacto" className="lh-btn lh-btn--primary font-display interactive">
            <span>SOLICITAR LANDING</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
