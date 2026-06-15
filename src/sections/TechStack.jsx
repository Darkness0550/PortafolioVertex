import { useState, useRef, useEffect } from 'react';

const techGroups = [
  { title: 'FRONTEND', items: ['React', 'Next.js', 'WordPress', 'Flutter'] },
  { title: 'BACKEND', items: ['NestJS', 'Express', 'FastAPI', 'Node.js', 'Python'] },
  { title: 'DATA', items: ['Supabase', 'MySQL', 'Prisma', 'Redis', 'BullMQ', 'R2 Storage'] },
  { title: 'INFRA & IA', items: ['Cloudways', 'Cloudflare', 'PM2', 'DeepSeek', 'WhatsApp API', 'Culqi'] }
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

  return (
    <section id="stack" className="section-reveal techstack-section" style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
      
      <div style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(3,151,163,0.1) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }}></div>

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
      </div>

      <div className="techstack-grid" style={{ flex: '1 1 60%', minWidth: '300px', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '40px' }}>
          {techGroups.map((group, idx) => (
            <div key={idx}>
              <div className="font-code text-primary" style={{ fontSize: '15px', marginBottom: '16px', borderBottom: '1px solid var(--border-glow)', paddingBottom: '8px' }}>
                {group.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {group.items.map((tech) => (
                  <div 
                    key={tech} 
                    id={`tech-${tech.replace(/\s+/g, '-')}`}
                    className="font-body interactive"
                    onMouseEnter={() => !isMobile && setHoveredTech(tech.replace(/\s+/g, '-'))}
                    onMouseLeave={() => !isMobile && setHoveredTech(null)}
                    style={{ 
                      fontSize: '16px', 
                      color: hoveredTech === tech.replace(/\s+/g, '-') ? 'var(--text-primary)' : 'var(--text-secondary)',
                      opacity: hoveredTech ? (hoveredTech === tech.replace(/\s+/g, '-') ? 1 : 0.3) : 1,
                      transition: 'all 0.2s',
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {!isMobile && (
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 8 }}>
          {lines.map((line, i) => (
            <g key={i}>
              <line 
                x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} 
                stroke="var(--vertex-accent)" 
                strokeWidth="1" 
                opacity="0.4" 
              />
              <circle cx={line.x2} cy={line.y2} r="3" fill="var(--vertex-accent)" />
            </g>
          ))}
        </svg>
      )}
    </section>
  );
}
