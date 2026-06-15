import { useEffect, useRef, useState } from 'react';
import './Process.css';

const steps = [
  { id: '01', title: 'Diagnóstico', desc: 'Workshop técnico. Mapeamos tu proceso real.', time: '3–5 días' },
  { id: '02', title: 'Arquitectura', desc: 'Stack, DB y UX antes de una sola línea de código.', time: '5–10 días' },
  { id: '03', title: 'Construcción', desc: 'Sprints de 2 semanas con entrega demostrable.', time: '4–16 semanas' },
  { id: '04', title: 'Lanzamiento', desc: 'Deploy + docs + 30 días soporte incluido.', time: 'Continuo' }
];

export default function Process() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = rect.top - windowHeight + windowHeight / 2;
      const total = rect.height;
      
      let p = -start / total;
      p = Math.max(0, Math.min(1, p * 1.5));
      setProgress(p * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="section-reveal process-section" style={{ padding: '160px 24px', position: 'relative' }}>
      <div className="container">
        
        <div style={{ position: 'relative', padding: '40px 0' }}>
          {!isMobile && (
            <>
              <div style={{ position: 'absolute', top: '90px', left: 0, width: '100%', height: '1px', backgroundColor: '#272A30' }}></div>
              <div style={{ position: 'absolute', top: '90px', left: 0, width: `${progress}%`, height: '1px', backgroundColor: 'var(--vertex-cyan)', transition: 'width 0.1s' }}></div>
            </>
          )}
          
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', position: 'relative', zIndex: 2, gap: isMobile ? '48px' : '0' }}>
            {steps.map((step) => (
              <div key={step.id} className="interactive process-step" style={{ flex: '1', paddingRight: isMobile ? '0' : '20px' }}>
                <div style={{ height: '40px', marginBottom: '16px', display: 'flex', alignItems: 'flex-end' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" className="process-geo" style={{ fill: 'none', stroke: 'var(--text-secondary)', strokeWidth: '1px' }}>
                    <polygon points="12,2 22,20 2,20" />
                  </svg>
                </div>
                
                <div className="font-code text-cyan process-label" style={{ fontSize: '13px', marginBottom: '16px', background: 'var(--abyss)', display: 'inline-block', paddingRight: '12px' }}>
                  [ {step.id} ] {step.title}
                </div>
                
                <p className="font-body text-secondary" style={{ fontSize: '14px', lineHeight: '1.5', marginBottom: '24px', maxWidth: '220px' }}>
                  {step.desc}
                </p>
                
                <div className="font-code text-primary" style={{ fontSize: '11px' }}>
                  {step.time}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
