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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      let p = -(rect.top - window.innerHeight + window.innerHeight / 2) / rect.height;
      p = Math.max(0, Math.min(1, p * 1.5));
      setProgress(p * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="section-reveal process-section" style={{ padding: '160px 24px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <h2 className="font-display text-primary" style={{ fontSize: 'clamp(37px, 5vw, 46px)', marginBottom: '80px', textAlign: 'center' }}>Proceso</h2>

        <div className="process-timeline" style={{ position: 'relative', padding: '40px 0', paddingLeft: '40px' }}>
          
          <div style={{ position: 'absolute', top: 0, left: '11px', width: '2px', height: '100%', backgroundColor: '#272A30' }}></div>
          <div style={{ position: 'absolute', top: 0, left: '11px', width: '2px', height: `${progress}%`, backgroundColor: 'var(--vertex-accent)', transition: 'height 0.1s' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2, gap: '48px' }}>
            {steps.map((step) => (
              <div key={step.id} className="interactive process-step panel" style={{ 
                position: 'relative', 
                padding: '28px',
                borderRadius: '12px',
                boxShadow: 'var(--glow-accent-subtle)',
                transition: 'border-color 0.3s, box-shadow 0.3s'
              }}>
                <div className="process-node" style={{ 
                  position: 'absolute', 
                  top: '36px', 
                  left: '-37px', 
                  width: '16px', 
                  height: '16px', 
                  backgroundColor: 'var(--abyss)', 
                  border: '3px solid var(--vertex-accent)',
                  borderRadius: '50%',
                  zIndex: 10,
                  boxShadow: '0 0 10px var(--vertex-accent)'
                }}></div>
                
                <div className="font-code text-accent process-label" style={{ fontSize: '15px', marginBottom: '12px', display: 'inline-block' }}>
                  [ {step.id} ] {step.title}
                </div>
                
                <p className="font-body text-secondary" style={{ fontSize: '17px', lineHeight: '1.6', marginBottom: '12px' }}>
                  {step.desc}
                </p>
                
                <div className="font-code text-primary" style={{ fontSize: '14px', opacity: 0.8 }}>
                  ⏱ {step.time}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
