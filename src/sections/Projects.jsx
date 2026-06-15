import { useState } from 'react';
import './Projects.css';

const projects = [
  { name: 'PyraChat CRM', company: 'Pyramid', year: '2024', desc: 'CRM omnicanal self-hosted.\nReemplazó respond.io.\nIntegra WhatsApp + Meta.', stack: 'NestJS · React · Supabase\nBullMQ · Socket.io · IA', link: 'crm.pyramid.edu.pe' },
  { name: 'ConTalento', company: 'Empleabilidad PA', year: '2024', desc: 'Plataforma de conexión talento-empresa. Matching automatizado.', stack: 'Next.js · Node · PostgreSQL', link: '' },
  { name: 'PyramidCert', company: 'Pyramid', year: '2023', desc: 'Emisión y validación de certificados inmutables.', stack: 'React · Express · Web3', link: '' },
  { name: 'PIA Asistente IA', company: 'Pyramid', year: '2024', desc: 'Agente conversacional avanzado para soporte académico.', stack: 'Python · OpenAI · Redis', link: '' },
  { name: 'COLAB Task Manager', company: 'Pyramid', year: '2025', desc: 'Gestor de tareas colaborativo en tiempo real.', stack: 'Vue · NestJS · WebSockets', link: '' },
  { name: 'PyraCheck Asistencia', company: 'Pyramid', year: '2024', desc: 'Control de asistencia con geocerca y validación biométrica.', stack: 'Flutter · Firebase · GCP', link: '' },
  { name: 'Pyramid Academy LMS', company: 'Pyramid', year: '2017+', desc: 'Plataforma educativa core. Más de 9k alumnos activos.', stack: 'MERN Stack · AWS', link: '' },
  { name: 'GeoMod SaaS', company: 'Vertex', year: '2025', desc: 'Modelamiento geoespacial de alta precisión como servicio.', stack: 'React · Python · PostGIS', link: '' }
];

export default function Projects() {
  return (
    <section id="proyectos" className="section-reveal projects-section">
      <div className="projects-bg"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '120px 24px' }}>
        <h2 className="font-display text-primary" style={{ fontSize: '40px', marginBottom: '64px' }}>Proyectos en Producción</h2>
        
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card interactive">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div className="font-code text-accent" style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div className="live-dot"></div> EN VIVO
                </div>
                <div className="font-code text-secondary" style={{ fontSize: '11px' }}>[{p.year}]</div>
              </div>
              
              <h3 className="font-display text-primary" style={{ fontSize: '18px', marginBottom: '12px' }}>{p.name}</h3>
              
              <p className="font-body text-secondary" style={{ fontSize: '13px', lineHeight: '1.5', marginBottom: '24px', flexGrow: 1, whiteSpace: 'pre-line' }}>
                {p.desc}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {p.stack.split(/·|\n/).map((tech, idx) => {
                  const t = tech.trim();
                  if (!t) return null;
                  return (
                    <span key={idx} className="font-code" style={{
                      fontSize: '11px',
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
                <div className="font-code text-secondary" style={{ fontSize: '11px' }}>
                  [{p.link} ↗]
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
