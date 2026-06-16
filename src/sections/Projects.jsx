import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';

const projects = [
  { name: 'PyraChat CRM', company: 'Pyramid', year: '2024', desc: 'CRM omnicanal self-hosted.\nReemplazó respond.io.\nIntegra WhatsApp + Meta.', stack: 'NestJS · React · Supabase\nBullMQ · Socket.io · IA', link: 'crm.pyramid.edu.pe', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'ConTalento', company: 'Empleabilidad PA', year: '2024', desc: 'Plataforma de conexión talento-empresa. Matching automatizado.', stack: 'Next.js · Node · PostgreSQL', link: '', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'PyramidCert', company: 'Pyramid', year: '2023', desc: 'Emisión y validación de certificados inmutables.', stack: 'React · Express · Web3', link: '', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'PIA Asistente IA', company: 'Pyramid', year: '2024', desc: 'Agente conversacional avanzado para soporte académico.', stack: 'Python · OpenAI · Redis', link: '', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'COLAB Task Manager', company: 'Pyramid', year: '2025', desc: 'Gestor de tareas colaborativo en tiempo real.', stack: 'Vue · NestJS · WebSockets', link: '', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'PyraCheck Asistencia', company: 'Pyramid', year: '2024', desc: 'Control de asistencia con geocerca y validación biométrica.', stack: 'Flutter · Firebase · GCP', link: '', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'Pyramid Academy LMS', company: 'Pyramid', year: '2017+', desc: 'Plataforma educativa core. Más de 9k alumnos activos.', stack: 'MERN Stack · AWS', link: '', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'GeoMod SaaS', company: 'Vertex', year: '2025', desc: 'Modelamiento geoespacial de alta precisión como servicio.', stack: 'React · Python · PostGIS', link: '', video: 'https://www.w3schools.com/html/mov_bbb.mp4' }
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
        
        <div className="projects-grid">
          {projects.map((p, i) => (
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
                    if (video) video.play().catch(() => {});
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
      </div>
    </section>
  );
}
