import { useEffect, useRef, useState } from 'react';

export default function Statement() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.5 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-reveal container" style={{ padding: '120px 24px', display: 'flex', gap: '5%', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 55%', minWidth: '300px', marginBottom: '40px' }}>
        <h2 className="font-display text-primary" style={{ fontSize: 'clamp(40px, 5vw, 56px)', lineHeight: '1.2' }}>
          No vendemos<br />
          horas.<br />
          Entregamos <span style={{ position: 'relative', display: 'inline-block' }}>
            sistemas.
            <svg 
              width="100%" 
              height="20" 
              viewBox="0 0 200 20" 
              preserveAspectRatio="none"
              style={{ position: 'absolute', bottom: '-10px', left: 0 }}
            >
              <path 
                d="M 0 10 Q 50 20 100 10 T 200 10" 
                fill="transparent" 
                stroke="var(--vertex-red)" 
                strokeWidth="4"
                style={{
                  strokeDasharray: 200,
                  strokeDashoffset: isVisible ? 0 : 200,
                  transition: 'stroke-dashoffset 600ms ease-out 300ms'
                }}
              />
            </svg>
          </span>
        </h2>
      </div>
      
      <div style={{ flex: '1 1 40%', minWidth: '300px', paddingTop: '16px' }}>
        <p className="font-body text-secondary" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          "Cada proyecto de Vertex comienza con una pregunta real: ¿qué problema de negocio resuelve este sistema? No empezamos a codear hasta tener la respuesta."
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {['Diagnóstico técnico sin costo', 'Arquitectura antes de presupuesto', 'Deploy en infraestructura del cliente o la nuestra'].map((text, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span className="font-code text-red" style={{ fontSize: '13px' }}>[ ✓ ]</span>
              <span className="font-body text-primary" style={{ fontSize: '15px' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
