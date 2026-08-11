import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Projects.css';
import colabVD from '../assets/video/COLABVD.mp4';
import crmVD from '../assets/video/CRMVD.mp4';
import contalentoVD from '../assets/video/ConTalentoVD.mp4';
import ubixVD from '../assets/video/UbixVD.mp4';
import piaVD from '../assets/video/PIAVD.mp4';
import pyramidAcademyVD from '../assets/video/PYRAMIDACADEMYVD.mp4';
import pyramidStructuresVD from '../assets/video/PYRAMIDSTRUCTURESVD.mp4';
import losAndesVD from '../assets/video/LOSANDESVD.mp4';

const projects = [
  { name: 'PyraChat CRM', company: 'Pyramid', year: '2026', desc: 'CRM omnicanal que centraliza WhatsApp, Facebook e Instagram en una sola plataforma, permitiendo gestionar conversaciones, clientes y oportunidades de venta desde un único lugar.', stack: 'NestJS · React · Supabase\nBullMQ · Socket.io · IA', link: 'crm.pyramid.edu.pe', video: crmVD },
  { name: 'ConTalento', company: 'Empleabilidad PA', year: '2024', desc: 'Plataforma inteligente que conecta a empresas con los mejores candidatos, automatizando el proceso de selección y facilitando la búsqueda del empleo ideal.', stack: 'Next.js · Node · PostgreSQL', link: 'contalento.pe', video: contalentoVD },
  // { name: 'PyramidCert', company: 'Pyramid', year: '2023', desc: 'Emisión y validación de certificados inmutables.', stack: 'React · Express · Web3', link: '', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'PIA Asistente IA', company: 'Pyramid', year: '2025', desc: 'Asistente virtual inteligente disponible 24/7 que resuelve dudas, brinda soporte y guía a los usuarios de manera rápida y natural.', stack: 'Python · OpenAI · Redis', link: '', video: piaVD },
  { name: 'COLAB Task Manager', company: 'Pyramid', year: '2026', desc: 'Herramienta de gestión de proyectos que permite a los equipos organizar sus tareas, comunicarse en vivo y mejorar su productividad diaria.', stack: 'Vue · NestJS · WebSockets', link: 'colab.vertexdev.tech', video: colabVD },
  { name: 'Ubix', company: 'Vertex', year: '2025', desc: 'Sistema moderno para el control de asistencia de personal, utilizando ubicación por GPS y reconocimiento facial para mayor seguridad y precisión.', stack: 'Flutter · Firebase · GCP', link: 'ubix.vertexdev.tech', video: ubixVD },
  { name: 'Pyramid Academy LMS', company: 'Pyramid', year: '2017+', desc: 'Plataforma educativa virtual donde miles de estudiantes pueden acceder a cursos, evaluaciones y recursos de aprendizaje de forma sencilla e intuitiva.', stack: 'MERN Stack · AWS', link: '', video: pyramidAcademyVD },
  { name: 'Pyramid Structures', company: 'Pyramid', year: '2024', desc: 'Web corporativa moderna para empresa de estructuras, mostrando servicios de ingeniería y construcción de manera profesional.', stack: 'React · Node · CSS', link: '', video: pyramidStructuresVD },
  { name: 'De Los Andes', company: 'Minería y Construcción', year: '2024', desc: 'Plataforma corporativa para empresa del sector minero y construcción, destacando sus proyectos, servicios y consultorías especializadas.', stack: 'React · Node · MySQL', link: '', video: losAndesVD },
  // { name: 'GeoMod SaaS', company: 'Vertex', year: '2025', desc: 'Plataforma especializada que permite procesar y visualizar mapas y datos geográficos complejos de manera accesible para cualquier usuario.', stack: 'React · Python · PostGIS', link: '', video: 'https://www.w3schools.com/html/mov_bbb.mp4' }
];

export default function Projects() {
  const location = useLocation();
  const isStandalone = location.pathname === '/proyectos';
  const [flippedId, setFlippedId] = useState(null);

  const handleFlip = (i, e) => {
    if (!isStandalone) return;
    // Don't flip if clicking links
    if (e.target.tagName.toLowerCase() === 'a') return;
    setFlippedId(flippedId === i ? null : i);
  };

  return (
    <section id="proyectos" className="section-reveal projects-section">
      <div className="projects-bg"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '120px 24px' }}>
        <h2 className="font-display text-primary" style={{ fontSize: '46px', marginBottom: '64px' }}>Proyectos en Producción</h2>

        <div className={`projects-grid ${!isStandalone ? 'projects-grid-home' : ''}`}>
          {projects.slice(0, isStandalone ? projects.length : 3).map((p, i) => (
            <div
              key={i}
              className={`project-card-wrapper ${flippedId === i ? 'flipped' : ''}`}
            >
              <div className="project-card-inner">
                {/* FRONT OF CARD */}
                <div
                  className={`project-card interactive front-face ${isStandalone ? 'clickable' : ''}`}
                  onClick={(e) => handleFlip(i, e)}
                  onMouseEnter={(e) => {
                    if (flippedId === i) return;
                    const video = e.currentTarget.querySelector('video');
                    if (video) video.play().catch(() => { });
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) video.pause();
                  }}
                >
                  <div className="project-video-container" style={{ cursor: isStandalone ? 'pointer' : 'default' }}>
                    <video src={p.video} muted loop playsInline className="project-video" />
                    <div className="project-video-overlay"></div>
                    {isStandalone && (
                      <div className="demo-hint font-code">VER DEMO ↻</div>
                    )}
                  </div>

                  <div className="project-card-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div className="font-code text-accent" style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div className="live-dot"></div> EN VIVO
                      </div>
                      <div className="font-code text-secondary" style={{ fontSize: '13px' }}>[{p.year}]</div>
                    </div>

                    <h3 className="font-display text-primary" style={{ fontSize: '21px', marginBottom: '12px' }}>{p.name}</h3>

                    <p className="font-body text-secondary" style={{ fontSize: '15px', lineHeight: '1.5', marginBottom: '24px', flexGrow: 1, whiteSpace: 'pre-line' }}>
                      {p.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                      {p.stack.split(/·|\n/).map((tech, idx) => {
                        const t = tech.trim();
                        if (!t) return null;
                        return (
                          <span key={idx} className="font-code" style={{
                            fontSize: '13px',
                            color: 'var(--vertex-accent)',
                            border: '1px solid rgba(3, 151, 163, 0.4)',
                            borderRadius: '16px',
                            padding: '4px 10px',
                            backgroundColor: 'rgba(3, 151, 163, 0.05)'
                          }}>
                            {t}
                          </span>
                        );
                      })}
                    </div>

                    {p.link && (
                      <div className="font-code text-secondary" style={{ fontSize: '13px' }}>
                        <a href={`https://${p.link}`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>[{p.link} ↗]</a>
                      </div>
                    )}
                  </div>
                </div>

                {/* BACK OF CARD */}
                {isStandalone && (
                  <div className="project-card back-face">
                    <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden' }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); setFlippedId(null); }}
                        className="font-code"
                        style={{
                          position: 'absolute',
                          top: '16px',
                          right: '16px',
                          zIndex: 20,
                          background: 'rgba(3, 4, 10, 0.8)',
                          border: '1px solid var(--vertex-accent)',
                          color: 'var(--vertex-accent)',
                          padding: '8px 16px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          backdropFilter: 'blur(4px)'
                        }}
                      >
                        VOLVER ✕
                      </button>
                      <video
                        src={p.video}
                        autoPlay={flippedId === i}
                        muted={false}
                        controls
                        className="project-video-full"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {!isStandalone && (
          <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center' }}>
            <Link to="/proyectos" className="interactive panel" style={{
              padding: '16px 32px',
              border: '1px solid var(--vertex-accent)',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'var(--vertex-accent)',
              fontFamily: 'var(--font-code)',
              fontSize: '14px',
              transition: 'all 0.3s'
            }}>
              [ Ver todos los proyectos → ]
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
