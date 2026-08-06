import Cliente1Logo from '../assets/images/Cliente1.png';
import Cliente2Logo from '../assets/images/Cliente2.png';
import Cliente3Logo from '../assets/images/Cliente3.png';
import Cliente4Logo from '../assets/images/Cliente4.png';
import Cliente5Logo from '../assets/images/Cliente5.png';
import Cliente6Logo from '../assets/images/Cliente6.png';

const clients = [
  { name: 'Cliente 1', logo: Cliente1Logo },
  { name: 'Cliente 2', logo: Cliente2Logo },
  { name: 'Cliente 3', logo: Cliente3Logo },
  { name: 'Cliente 4', logo: Cliente4Logo },
  { name: 'Cliente 5', logo: Cliente5Logo },
  { name: 'Cliente 6', logo: Cliente6Logo },
];

const logoHoverIn = (e) => {
  e.currentTarget.style.opacity = '1';
  e.currentTarget.style.filter = 'grayscale(0%) drop-shadow(0 0 12px rgba(3, 151, 163, 0.5))';
  e.currentTarget.style.transform = 'scale(1.08) translateY(-4px)';
};

const logoHoverOut = (e) => {
  e.currentTarget.style.opacity = '0.5';
  e.currentTarget.style.filter = 'grayscale(100%) brightness(0.8)';
  e.currentTarget.style.transform = 'scale(1) translateY(0)';
};

export default function Testimonial() {
  return (
    <section className="section-reveal testimonial-section" style={{ backgroundColor: 'var(--panel)', padding: '120px 24px', borderTop: '1px solid var(--border-glow)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ position: 'relative', maxWidth: '800px', textAlign: 'center', marginBottom: '80px', width: '100%' }}>
          <span className="testimonial-quote-mark" style={{ 
            position: 'absolute', 
            top: '-60px', 
            left: '-40px', 
            fontSize: '138px', 
            color: 'var(--vertex-accent)', 
            opacity: 0.15, 
            fontFamily: 'serif',
            lineHeight: 1,
            userSelect: 'none'
          }}>
            "
          </span>
          <h2 className="font-display text-primary" style={{ fontSize: 'clamp(21px, 3vw, 35px)', lineHeight: '1.5', marginBottom: '24px', position: 'relative', zIndex: 2 }}>
            "Antes teníamos tres herramientas para lo que PyraChat hace solo. En dos meses teníamos el sistema vivo."
          </h2>
          <div className="font-code text-secondary" style={{ fontSize: '14px' }}>
            — Director de Operaciones, Pyramid Academy
          </div>
        </div>

        <div className="testimonial-metrics" style={{ display: 'flex', gap: '24px', width: '100%', flexWrap: 'wrap' }}>
          {[
            { label: 'Tiempo de deploy', val: '-40%' },
            { label: 'Costo de infra', val: '-$1.2k/mo' },
            { label: 'Adopción', val: '100%' }
          ].map((m, i) => (
            <div key={i} className="interactive testimonial-metric" style={{ 
              flex: '1 1 180px', 
              padding: '24px', 
              border: '1px solid var(--border-glow)', 
              borderRadius: '8px',
              backgroundColor: 'var(--abyss)',
              transition: 'box-shadow 0.2s, border-color 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--glow-accent-subtle)'; e.currentTarget.style.borderColor = 'var(--vertex-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-glow)'; }}
            >
              <div className="font-code text-secondary" style={{ fontSize: '13px', marginBottom: '8px' }}>{m.label}</div>
              <div className="font-display text-accent" style={{ fontSize: '28px' }}>{m.val}</div>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div style={{ marginTop: '64px', width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '48px' }}>
          <div className="font-code text-secondary" style={{ fontSize: '13px', textAlign: 'center', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '3px' }}>
            Confían en nosotros
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '60px', 
            flexWrap: 'wrap' 
          }}>
            {clients.map((client, idx) => (
              <div 
                key={idx}
                className="client-logo-interactive interactive"
                style={{
                  opacity: 0.5,
                  filter: 'grayscale(100%) brightness(0.8)',
                  transform: 'scale(1) translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  userSelect: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={logoHoverIn}
                onMouseLeave={logoHoverOut}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  style={{ 
                    height: '50px', 
                    width: 'auto', 
                    objectFit: 'contain',
                    maxWidth: '180px',
                  }} 
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

