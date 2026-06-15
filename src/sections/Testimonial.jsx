export default function Testimonial() {
  return (
    <section className="section-reveal" style={{ backgroundColor: 'var(--panel)', padding: '120px 24px', borderTop: '1px solid var(--border-glow)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ position: 'relative', maxWidth: '800px', textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ 
            position: 'absolute', 
            top: '-60px', 
            left: '-40px', 
            fontSize: '120px', 
            color: 'var(--vertex-red)', 
            opacity: 0.15, 
            fontFamily: 'serif',
            lineHeight: 1
          }}>
            "
          </span>
          <h2 className="font-display text-primary" style={{ fontSize: 'clamp(24px, 4vw, 32px)', lineHeight: '1.4', marginBottom: '24px', position: 'relative', zIndex: 2 }}>
            "Antes teníamos tres herramientas para lo que PyraChat hace solo. En dos meses teníamos el sistema vivo."
          </h2>
          <div className="font-code text-secondary" style={{ fontSize: '12px' }}>
            — Director de Operaciones, Pyramid Academy
          </div>
        </div>

        <div style={{ display: 'flex', gap: '24px', width: '100%', flexWrap: 'wrap' }}>
          {[
            { label: 'Tiempo de deploy', val: '-40%' },
            { label: 'Costo de infra', val: '-$1.2k/mo' },
            { label: 'Adopción', val: '100%' }
          ].map((m, i) => (
            <div key={i} className="interactive" style={{ 
              flex: '1 1 200px', 
              padding: '24px', 
              border: '1px solid var(--border-glow)', 
              borderRadius: '8px',
              backgroundColor: 'var(--abyss)',
              transition: 'box-shadow 0.2s, border-color 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--glow-red-subtle)'; e.currentTarget.style.borderColor = 'var(--vertex-red)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-glow)'; }}
            >
              <div className="font-code text-secondary" style={{ fontSize: '11px', marginBottom: '8px' }}>{m.label}</div>
              <div className="font-display text-red" style={{ fontSize: '24px' }}>{m.val}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
