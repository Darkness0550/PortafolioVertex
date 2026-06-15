import { useState, useEffect } from 'react';

const options = [
  { id: 'crm', icon: '💬', label: 'CRM / Comunicaciones', response: 'Sistema de referencia: PyraChat CRM\nProblema resuelto: Centralizar WhatsApp + Facebook + Instagram\nsin depender de respond.io ($X/mes ahorrados).\nStack implementado: NestJS · React · Supabase · WhatsApp Cloud API' },
  { id: 'portal', icon: '🛍️', label: 'Portal / Marketplace', response: 'Sistema de referencia: ConTalento\nProblema resuelto: Autogestión de usuarios y matching de oportunidades a escala.\nStack implementado: Next.js · Node · PostgreSQL' },
  { id: 'lms', icon: '🎓', label: 'LMS / Educación', response: 'Sistema de referencia: Pyramid Academy LMS\nProblema resuelto: Soporte para 9,300+ usuarios con alta concurrencia.\nStack implementado: MERN Stack · AWS' },
  { id: 'ia', icon: '🤖', label: 'Asistente IA / Bot', response: 'Sistema de referencia: PIA Asistente IA\nProblema resuelto: Reducción de 60% en tickets de soporte repetitivos.\nStack implementado: Python · OpenAI · Redis' },
  { id: 'app', icon: '📊', label: 'App de Gestión', response: 'Sistema de referencia: COLAB Task Manager\nProblema resuelto: Colaboración en tiempo real y flujos personalizados.\nStack implementado: Vue · NestJS · WebSockets' },
  { id: 'saas', icon: '⚡', label: 'SaaS / Calculadora', response: 'Sistema de referencia: GeoMod SaaS\nProblema resuelto: Procesamiento pesado en backend y visualización rápida.\nStack implementado: React · Python · PostGIS' }
];

export default function Diagnostic() {
  const [selected, setSelected] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!selected) return;
    
    setTypedText('');
    const fullText = options.find(o => o.id === selected).response;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTypedText(fullText);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [selected]);

  return (
    <section className="section-reveal" style={{ backgroundColor: 'var(--abyss)', padding: '120px 24px' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 className="font-display text-primary" style={{ fontSize: '40px', textAlign: 'center', marginBottom: '64px' }}>
          ¿Qué estás construyendo?
        </h2>
        
        {!isMobile ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
            {options.map((opt) => (
              <button 
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className="interactive panel"
                style={{ 
                  padding: '32px 16px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '16px',
                  borderRadius: '12px',
                  opacity: selected ? (selected === opt.id ? 1 : 0.2) : 1,
                  transition: 'opacity 0.3s',
                  border: selected === opt.id ? '1px solid var(--vertex-accent)' : '1px solid var(--border-glow)'
                }}
              >
                <span style={{ fontSize: '40px' }}>{opt.icon}</span>
                <span className="font-code text-secondary" style={{ fontSize: '12px' }}>[ {opt.label} ]</span>
              </button>
            ))}
          </div>
        ) : (
          <select 
            className="font-code text-primary panel" 
            style={{ width: '100%', padding: '16px', marginBottom: '40px', borderRadius: '8px', border: '1px solid var(--vertex-accent)' }}
            onChange={(e) => setSelected(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Selecciona una opción</option>
            {options.map(opt => <option key={opt.id} value={opt.id}>{opt.icon} {opt.label}</option>)}
          </select>
        )}

        {selected && (
          <div style={{ position: 'relative', marginTop: '24px' }}>
            <div style={{ position: 'absolute', top: '10px', left: '-10px', width: '100%', height: '100%', border: '1px solid rgba(3, 151, 163, 0.4)', zIndex: 0 }}></div>
            
            <div className="panel" style={{ 
              position: 'relative',
              zIndex: 1,
              padding: '32px',
              minHeight: '150px',
              border: '1px solid var(--border-glow)'
            }}>
              <pre className="font-code text-secondary" style={{ 
                fontSize: '13px', 
                whiteSpace: 'pre-wrap', 
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                {typedText}
              </pre>
              
              <a href="#contacto" className="interactive font-code text-accent" style={{ fontSize: '13px', borderBottom: '1px solid var(--vertex-accent)', paddingBottom: '2px' }}>
                [Hablar sobre tu proyecto similar →]
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
