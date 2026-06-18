import { useState, useRef, useEffect } from 'react';
import { playHoverSound } from '../utils/SoundFX';

const techGroups = [
  {
    title: 'FRONTEND',
    items: [
      { name: 'React', concept: 'Biblioteca UI reactiva', benefit: 'Interfaces ultra rápidas con actualización inteligente del DOM. Ecosistema masivo y componentes reutilizables.' },
      { name: 'Next.js', concept: 'Framework fullstack SSR/SSG', benefit: 'SEO nativo, cargas instantáneas y rutas automáticas. La mejor opción para webs de alto rendimiento.' },
      { name: 'WordPress', concept: 'CMS flexible y universal', benefit: 'Administración de contenido sin código para el cliente. Ideal cuando necesitas escalar sin depender de nosotros.' },
      { name: 'Flutter', concept: 'Apps nativas multiplataforma', benefit: 'Un solo código para iOS, Android y web. Rendimiento cercano al nativo con diseños premium.' },
    ]
  },
  {
    title: 'BACKEND',
    items: [
      { name: 'NestJS', concept: 'Framework backend estructurado', benefit: 'Arquitectura modular y escalable lista para producción. Ideal para APIs complejas y sistemas empresariales.' },
      { name: 'Express', concept: 'Servidor minimalista Node', benefit: 'Velocidad y flexibilidad para APIs rápidas. Perfecto cuando necesitamos control total sobre la arquitectura.' },
      { name: 'FastAPI', concept: 'API Python de alto rendimiento', benefit: 'Documentación automática y validación nativa. Excelente para proyectos con lógica de datos o IA.' },
      { name: 'Node.js', concept: 'Runtime JS asíncrono', benefit: 'Manejo de miles de conexiones simultáneas sin bloqueos. El estándar para aplicaciones en tiempo real.' },
      { name: 'Python', concept: 'Lenguaje versátil y potente', benefit: 'La herramienta #1 para IA, análisis de datos y automatización. Librerías sin igual para cualquier reto técnico.' },
    ]
  },
  {
    title: 'DATA',
    items: [
      { name: 'Supabase', concept: 'Backend as a Service open-source', benefit: 'Base de datos PostgreSQL + Auth + Storage en minutos. Alternativa a Firebase con datos en tu control.' },
      { name: 'MySQL', concept: 'Base de datos relacional probada', benefit: 'El estándar de la industria durante 30 años. Confiable, rápido y compatible con cualquier stack.' },
      { name: 'Prisma', concept: 'ORM moderno para Node/TS', benefit: 'Queries tipadas que eliminan errores en tiempo real. Migraciones automáticas y modelos legibles.' },
      { name: 'Redis', concept: 'Base de datos en memoria', benefit: 'Caché ultrarrápido que reduce la carga al servidor. Imprescindible para sistemas con alto tráfico.' },
      { name: 'BullMQ', concept: 'Sistema de colas con Redis', benefit: 'Procesos en background confiables con reintentos automáticos. Ideal para emails, reportes y tareas pesadas.' },
      { name: 'R2 Storage', concept: 'Almacenamiento cloud sin egress', benefit: 'Alternativa a S3 de Cloudflare. Sin costos de salida de datos y compatible con cualquier SDK S3.' },
    ]
  },
  {
    title: 'INFRA & IA',
    items: [
      { name: 'Cloudways', concept: 'Hosting cloud gestionado', benefit: 'Servidores en DigitalOcean/AWS con panel intuitivo. Escalamos sin tocar configuración manual.' },
      { name: 'Cloudflare', concept: 'CDN + seguridad global', benefit: 'Protección DDoS, caché mundial y certificados SSL gratuitos. Tu web más rápida y segura por defecto.' },
      { name: 'PM2', concept: 'Process manager para Node', benefit: 'Reinicio automático en fallos y despliegues sin tiempo de inactividad. El guardián de tus servicios en producción.' },
      { name: 'DeepSeek', concept: 'Modelo de IA eficiente', benefit: 'Inteligencia artificial de bajo costo y alto rendimiento. Ideal para integraciones IA sin depender de OpenAI.' },
      { name: 'WhatsApp API', concept: 'Mensajería empresarial oficial', benefit: 'Automatiza comunicaciones con tu audiencia donde ya están. CRM, notificaciones y bots en el canal #1 de Latinoamérica.' },
      { name: 'Culqi', concept: 'Pasarela de pagos peruana', benefit: 'Cobros con tarjeta, Yape y PagoEfectivo adaptados al mercado local. Integración directa sin intermediarios.' },
    ]
  },
];

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const sphereRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!hoveredTech || !sphereRef.current || isMobile) { setLines([]); return; }
    const section = document.getElementById('stack');
    if (!section) return;
    const sectionRect = section.getBoundingClientRect();
    const sphereRect = sphereRef.current.getBoundingClientRect();
    const sphereCenterX = sphereRect.left - sectionRect.left + sphereRect.width / 2;
    const sphereCenterY = sphereRect.top - sectionRect.top + sphereRect.height / 2;
    const el = document.getElementById(`tech-${hoveredTech}`);
    if (el) {
      const elRect = el.getBoundingClientRect();
      const elX = elRect.left - sectionRect.left;
      const elY = elRect.top - sectionRect.top + elRect.height / 2;
      setLines([{ x1: elX, y1: elY, x2: sphereCenterX + 50, y2: sphereCenterY }]);
    }
  }, [hoveredTech, isMobile]);

  const handleMouseEnter = (tech) => {
    const key = tech.name.replace(/\s+/g, '-');
    setHoveredTech(key);
    if (!isMobile) playHoverSound();
  };

  const allItems = techGroups.flatMap(g => g.items);
  const hoveredData = hoveredTech
    ? allItems.find(t => t.name.replace(/\s+/g, '-') === hoveredTech)
    : null;

  return (
    <section id="stack" className="section-reveal techstack-section" style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(3,151,163,0.1) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }}></div>

      {/* Sphere */}
      <div className="techstack-sphere" style={{ flex: '1 1 40%', minWidth: '300px', position: 'relative', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img
          ref={sphereRef}
          src="/assets/sphere_render.png"
          alt="Network Sphere"
          style={{
            width: '120%',
            maxWidth: '800px',
            transform: hoveredTech ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 2s ease-out',
            marginLeft: '-20%',
            mixBlendMode: 'screen',
          }}
        />

        {/* Floating tooltip over sphere */}
        {hoveredData && !isMobile && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(3, 4, 10, 0.92)',
            border: '1px solid var(--vertex-accent)',
            borderRadius: '12px',
            padding: '20px 24px',
            width: '280px',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 0 40px rgba(3, 151, 163, 0.25), 0 16px 48px rgba(0,0,0,0.8)',
            zIndex: 20,
            animation: 'tooltipIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
            pointerEvents: 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--vertex-accent)', boxShadow: '0 0 8px var(--vertex-accent)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--text-primary)', fontWeight: 700 }}>
                {hoveredData.name}
              </span>
            </div>
            <div style={{
              fontFamily: 'var(--font-code)',
              fontSize: '11px',
              color: 'var(--vertex-accent)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '10px',
              padding: '4px 10px',
              background: 'rgba(3, 151, 163, 0.1)',
              borderRadius: '4px',
              display: 'inline-block',
            }}>
              {hoveredData.concept}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              {hoveredData.benefit}
            </p>
          </div>
        )}
      </div>

      {/* Tech List */}
      <div className="techstack-grid" style={{ flex: '1 1 60%', minWidth: '300px', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 5%' }}>
        {/* Mobile tooltip */}
        {hoveredData && isMobile && (
          <div style={{
            background: 'rgba(3, 4, 10, 0.95)',
            border: '1px solid var(--vertex-accent)',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '24px',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '6px', fontWeight: 700 }}>{hoveredData.name}</div>
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--vertex-accent)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>{hoveredData.concept}</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>{hoveredData.benefit}</p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '40px' }}>
          {techGroups.map((group, idx) => (
            <div key={idx}>
              <div className="font-code text-primary" style={{ fontSize: '15px', marginBottom: '16px', borderBottom: '1px solid var(--border-glow)', paddingBottom: '8px' }}>
                {group.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {group.items.map((tech) => {
                  const key = tech.name.replace(/\s+/g, '-');
                  const isActive = hoveredTech === key;
                  return (
                    <div
                      key={tech.name}
                      id={`tech-${key}`}
                      className="font-body interactive"
                      onMouseEnter={() => !isMobile && handleMouseEnter(tech)}
                      onMouseLeave={() => !isMobile && setHoveredTech(null)}
                      onClick={() => isMobile && (hoveredTech === key ? setHoveredTech(null) : handleMouseEnter(tech))}
                      style={{
                        fontSize: '15px',
                        color: isActive ? 'var(--abyss)' : 'var(--text-secondary)',
                        backgroundColor: isActive ? 'var(--vertex-accent)' : 'rgba(3, 151, 163, 0.05)',
                        border: `1px solid ${isActive ? 'var(--vertex-accent)' : 'rgba(3, 151, 163, 0.2)'}`,
                        borderRadius: '6px',
                        padding: '10px 16px',
                        boxShadow: isActive ? '0 0 20px rgba(3, 151, 163, 0.6)' : 'none',
                        opacity: hoveredTech ? (isActive ? 1 : 0.4) : 1,
                        transform: isActive ? 'scale(1.05) translateX(8px)' : 'scale(1)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{tech.name}</span>
                      <span style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        backgroundColor: isActive ? 'var(--abyss)' : 'var(--vertex-accent)',
                        opacity: isActive ? 1 : 0.3,
                        transition: 'all 0.3s'
                      }}></span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SVG Connection Lines */}
      {!isMobile && (
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 8 }}>
          {lines.map((line, i) => (
            <g key={i}>
              <line
                x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                stroke="var(--vertex-accent)"
                strokeWidth="2"
                opacity="0.6"
                style={{ filter: 'drop-shadow(0 0 4px rgba(3, 151, 163, 0.5))' }}
              />
              <circle cx={line.x2} cy={line.y2} r="4" fill="var(--vertex-accent)" style={{ filter: 'drop-shadow(0 0 6px rgba(3, 151, 163, 0.8))' }} />
            </g>
          ))}
        </svg>
      )}

      <style>{`
        @keyframes tooltipIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.88); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </section>
  );
}
