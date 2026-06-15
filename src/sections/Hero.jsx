import { useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section section-reveal" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div className="hero-atmosphere"></div>
      
      <div className="hero-orbit">
        <div className="hero-orbit-dot"></div>
      </div>
      
      <img src="/assets/cube_render.png" alt="Data Cube" className="hero-cube" />
      
      <div className="container hero-content" style={{ position: 'relative', zIndex: 10, paddingTop: '25vh' }}>
        <div className="font-code text-accent" style={{ fontSize: '14px', marginBottom: '24px' }}>
          [ Desarrollo de Software ]
        </div>
        
        <h1 className="font-display text-primary hero-title" style={{ fontSize: 'clamp(40px, 8vw, 72px)', lineHeight: '1.1', marginBottom: '32px', zIndex: 20, position: 'relative' }}>
          Construimos<br />
          sistemas que<br />
          no fallan.
        </h1>
        
        <p className="font-body text-secondary hero-subtitle" style={{ fontSize: '18px', maxWidth: '400px', marginBottom: '48px' }}>
          Software real.<br />
          Infraestructura real.
        </p>
        
        <div className="hero-cta-row" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#contacto" className="cta interactive font-display text-accent" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', borderBottom: '1px solid var(--vertex-accent)', paddingBottom: '4px' }}>
            INICIAR PROYECTO <span>▶</span>
          </a>
          <a href="#proyectos" className="font-code text-secondary interactive" style={{ fontSize: '12px' }}>
            ver trabajo ↓
          </a>
        </div>
      </div>

      <div className="hero-ticker">
        <div className="ticker-content font-code text-secondary">
          <span>// 8 sistemas · 9,300 usuarios · 99.2% uptime</span>
          <span>// 8 sistemas · 9,300 usuarios · 99.2% uptime</span>
          <span>// 8 sistemas · 9,300 usuarios · 99.2% uptime</span>
          <span>// 8 sistemas · 9,300 usuarios · 99.2% uptime</span>
        </div>
      </div>
    </section>
  );
}
