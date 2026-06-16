import { useEffect, useRef, useState } from 'react';
import Cliente1Logo from '../assets/images/Cliente1.png';
import Cliente2Logo from '../assets/images/Cliente2.png';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) { setCount(end); return; }

    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const startTime = performance.now();
        const update = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(ease * end));
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const clients = [
  { name: 'Magnética', logo: Cliente1Logo },
  { name: 'Trisagio Studios', logo: Cliente2Logo },
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

export default function Credentials() {
  return (
    <section className="section-reveal" style={{ backgroundColor: 'var(--panel)', borderTop: '1px solid var(--border-glow)', borderBottom: '1px solid var(--border-glow)' }}>
      <div className="container credentials-row" style={{ display: 'flex', height: '120px', flexWrap: 'wrap' }}>
        {[
          { num: 50, suffix: '+', label: 'Proyectos' },
          { num: 9300, suffix: '+', label: 'Usuarios activos' },
          { num: 99, suffix: '.2%', label: 'Uptime' },
          { num: 8, suffix: '', label: 'Sistemas vivos' }
        ].map((item, i) => (
          <div key={i} className="credentials-item" style={{
            flex: '1 1 200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '2%',
            borderRight: i !== 3 ? '1px solid var(--border-glow)' : 'none'
          }}>
            <div className="font-display text-primary" style={{ fontSize: 'clamp(23px, 4vw, 55px)', lineHeight: '1.2' }}>
              <CountUp end={item.num} />
              <span className="text-accent">{item.suffix}</span>
            </div>
            <div className="font-code text-secondary" style={{ fontSize: '13px', textTransform: 'uppercase' }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <div className="container" style={{ padding: '48px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '20px' }}>
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
    </section>
  );
}
