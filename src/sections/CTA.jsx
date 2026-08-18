import './CTA.css';

export default function CTA() {

  return (
    <section id="contacto" className="section-reveal cta-section" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        
        <div className="cta-form-col" style={{ flex: '1 1 50%', minWidth: '300px', paddingRight: '5%' }}>
          <h2 className="font-display text-primary cta-title" style={{ fontSize: 'clamp(46px, 6vw, 83px)', lineHeight: '1.1', marginBottom: '24px' }}>
            Construyamos<br />
            algo que dure.
          </h2>

          <p className="font-body text-secondary" style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '48px', maxWidth: '450px' }}>
            ¿Estás listo para dar el siguiente paso? Realiza una pre-cotización y cuéntanos sobre esa idea que cambiará las reglas del juego. Nos encargamos del resto.
          </p>

          <div style={{ position: 'relative' }}>
            <a 
              href="https://precotiza.vertexdev.tech/#/catalog/vertex-developers"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive font-display" 
              style={{
                border: '1px solid var(--vertex-accent)',
                padding: '18px 36px',
                color: 'var(--vertex-accent)',
                fontSize: '18px',
                letterSpacing: '1.5px',
                background: 'transparent',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.backgroundColor = 'var(--vertex-accent)'; 
                e.currentTarget.style.color = 'var(--abyss)'; 
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.4)';
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.backgroundColor = 'transparent'; 
                e.currentTarget.style.color = 'var(--vertex-accent)'; 
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              COTIZA CON NOSOTROS <span style={{ transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>▶</span>
            </a>
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
