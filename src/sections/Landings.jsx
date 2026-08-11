import { useEffect, useRef, useState } from 'react';
import { Building2, Triangle } from 'lucide-react';
import './Landings.css';
import losAndesVD from '../assets/video/LOSANDESVD.mp4';
import pyramidStructuresVD from '../assets/video/PYRAMIDSTRUCTURESVD.mp4';

const landings = [
  /*
  {
    id: 'apex',
    name: 'Apex',
    tagline: 'Velocidad. Conversión. Resultados.',
    desc: 'Landing page diseñada para convertir visitantes en clientes desde el primer segundo.',
    color: '#00C8FF',
    emoji: '⚡',
    badge: 'CORPORATIVO',
    link: null,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  */
  {
    id: 'consorcio',
    name: 'Consorcio Los Andes',
    tagline: 'Presencia. Confianza. Autoridad.',
    desc: 'Web profesional corporativa para una empresa especializada en ingeniería, construcción y mantenimiento para los sectores minero e industrial.',
    color: '#FF6B35',
    icon: <Building2 size={32} />,
    badge: 'CORPORATIVO',
    link: 'https://losandes.ing/',
    video: losAndesVD,
  },
  {
    id: 'pyramid',
    name: 'Pyramid Structures',
    tagline: 'Ingeniería. Precisión. Escala.',
    desc: 'Web profesional corporativa para la presentación de servicios de ingeniería estructural, arquitectura y metodología BIM.',
    color: '#A259FF',
    icon: <Triangle size={32} />,
    badge: 'CORPORATIVO',
    link: 'https://pyramid.com.pe/',
    video: pyramidStructuresVD,
  },
];

const processSteps = [
  {
    id: '01',
    title: 'Preventa & Propuesta',
    desc: 'Discovery call • brief del cliente • estimación • propuesta comercial • contrato',
  },
  {
    id: '02',
    title: 'Diagnóstico',
    desc: 'Workshop técnico • mapeamos tu proceso real',
    time: '3–5 días',
  },
  {
    id: '03',
    title: 'Arquitectura',
    desc: 'Stack, DB y UX antes de una sola línea de código',
    time: '5–10 días',
    stacks: [
      { name: 'Next.js', focus: 'Rendimiento & SEO', benefit: 'Cargas ultra rápidas y posicionamiento óptimo.' },
      { name: 'React', focus: 'Interactividad', benefit: 'Interfaces de usuario dinámicas y responsivas.' },
      { name: 'Tailwind', focus: 'Diseño a medida', benefit: 'Estilos consistentes y UI moderna.' },
      { name: 'Node.js', focus: 'Escalabilidad', benefit: 'Backend robusto y operaciones de alto tráfico.' }
    ],
  },
  {
    id: '04',
    title: 'Construcción',
    desc: 'Sprints de 2 semanas con entrega demostrable',
    time: '4–16 semanas',
  },
  {
    id: '05',
    title: 'QA & Testing',
    desc: 'Pruebas funcionales • UAT con cliente • corrección de bugs • staging',
  },
  {
    id: '06',
    title: 'Lanzamiento',
    desc: 'Deploy + docs + 30 días soporte acotado',
    time: 'Continuo',
  },
  {
    id: '07',
    title: 'Mantenimiento & Evolución',
    desc: 'Plan de mantenimiento • SLA • nuevas features • retainer mensual',
  },
  {
    id: '08',
    title: 'Cierre & Handoff',
    desc: 'Capacitación al cliente • entrega de repos • documentación final • acta de cierre',
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
          <span className="lc-emoji">{item.icon}</span>
        </div>

        {/* body */}
        <div className="lc-body">
          <h3 className="lc-name">{item.name}</h3>
          <p className="lc-tagline" style={{ color: item.color }}>{item.tagline}</p>
          <p className="lc-desc">{item.desc}</p>
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer" className="lc-cta" style={{ color: item.color, textDecoration: 'none' }}>VER PROYECTO ↗</a>
          ) : (
            <span className="lc-cta" style={{ color: item.color }}>PRÓXIMAMENTE</span>
          )}
        </div>
      </div>
    </div>
  );
}
/* ── Process Card with IntersectionObserver entrance ── */
function ProcessCard({ step, index }) {
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

  return (
    <div
      ref={ref}
      className={`lp-card-wrapper ${visible ? 'lp-card-in' : ''}`}
      style={{ '--d': `${index * 120}ms` }}
    >
      <div className="lp-number-col">
        <div className="lp-number-box">{step.id}</div>
        {index < processSteps.length - 1 && <div className="lp-line" />}
      </div>
      
      <div className="lp-card">
        <div className="lp-glow" />
        <div className="lp-body">
          <div className="lp-header">
            <h3 className="lp-title">{step.title}</h3>
            {step.time && <span className="lp-time">⏱ {step.time}</span>}
          </div>
          <p className="lp-desc">{step.desc}</p>
          
          {step.stacks && (
            <div className="lp-stacks">
              {step.stacks.map((stk) => (
                <div key={stk.name} className="lp-stack-item">
                  <span className="lp-stack-name">{stk.name}</span>
                  <div className="lp-stack-tooltip">
                    <span className="lp-tooltip-focus">{stk.focus}</span>
                    <span className="lp-tooltip-benefit">{stk.benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
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
            <a href="https://cotizador.vertexdev.tech/precotizador" target="_blank" rel="noopener noreferrer" className="lh-btn-primary">
              MEJORAR MI PÁGINA
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
            <a href="#proceso" className="lh-btn-ghost">VER PROCESO →</a>
          </div>

          <div className="lh-stats">
            {[['15+', 'Proyectos web'], ['100%', 'Satisfacción'], ['100%', 'A medida']].map(([val, lbl]) => (
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

      {/* ── PROCESS ── */}
      <div className="lp-section" id="proceso">
        <div className="ls-head">
          <p className="ls-eyebrow">— NUESTRO MÉTODO</p>
          <h2 className="ls-title">
            El <span className="ls-title-hl">proceso ideal</span>
          </h2>
          <p className="lh-sub" style={{ marginTop: '24px', opacity: 1, animation: 'none' }}>
            Desarrollo transparente, estructurado y sin sorpresas.
          </p>
        </div>

        <div className="lp-timeline">
          {processSteps.map((step, i) => (
            <ProcessCard key={step.id} step={step} index={i} />
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
          <a href="https://cotizador.vertexdev.tech/precotizador" target="_blank" rel="noopener noreferrer" className="lh-btn-primary">
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
