import { useState } from 'react';
import './CTA.css';

export default function CTA() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <section id="contacto" className="section-reveal cta-section" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        
        <div className="cta-form-col" style={{ flex: '1 1 50%', minWidth: '300px', paddingRight: '5%' }}>
          <h2 className="font-display text-primary cta-title" style={{ fontSize: 'clamp(46px, 6vw, 83px)', lineHeight: '1.1', marginBottom: '64px' }}>
            Construyamos<br />
            algo que dure.
          </h2>

          <div style={{ minHeight: '280px', position: 'relative' }}>
            {status === 'success' ? (
              <div style={{ animation: 'fade-in 0.5s' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span className="font-code text-accent" style={{ fontSize: '16px' }}>[ ✓ ]</span>
                  <pre className="font-code text-primary" style={{ fontSize: '16px', whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                    Briefing recibido.
                    Te contactamos en menos de 24 horas.
                    — Equipo Vertex
                  </pre>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '48px', opacity: status === 'submitting' ? 0.5 : 1, transition: 'opacity 0.3s' }}>
                
                <div className="input-group first">
                  <input type="text" required placeholder=" " className="cta-input interactive font-body text-primary" />
                  <label className="cta-label font-code text-accent">Nombre o empresa</label>
                </div>
                
                <div className="input-group">
                  <input type="email" required placeholder=" " className="cta-input interactive font-body text-primary" />
                  <label className="cta-label font-code text-secondary">Email o WhatsApp</label>
                </div>
                
                <div className="input-group">
                  <input type="text" required placeholder=" " className="cta-input interactive font-body text-primary" />
                  <label className="cta-label font-code text-secondary">Describe tu proyecto en una línea</label>
                </div>

                <div>
                  <button type="submit" className="interactive font-display" style={{
                    border: '1px solid var(--vertex-accent)',
                    padding: '16px 32px',
                    color: 'var(--vertex-accent)',
                    fontSize: '16px',
                    letterSpacing: '1px',
                    background: 'transparent',
                    transition: 'all 0.15s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--vertex-accent)'; e.currentTarget.style.color = 'var(--abyss)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--vertex-accent)'; }}
                  >
                    INICIAR PROYECTO <span>▶</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>

      <div className="cta-image-wrapper">
        <div className="cta-glow-amber"></div>
        <img src="/assets/triangle_render.png" alt="Vertex Triangle" className="cta-triangle" />
      </div>
    </section>
  );
}
