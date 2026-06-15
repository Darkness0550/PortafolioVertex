import { useEffect, useRef, useState } from 'react';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const startTime = performance.now();
        const update = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(easeProgress * end));
          if (progress < 1) {
            requestAnimationFrame(update);
          }
        };
        requestAnimationFrame(update);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

export default function Credentials() {
  return (
    <section className="section-reveal" style={{ backgroundColor: 'var(--panel)', borderTop: '1px solid var(--border-glow)', borderBottom: '1px solid var(--border-glow)' }}>
      <div className="container" style={{ display: 'flex', height: '120px' }}>
        {[
          { num: 50, suffix: '+', label: 'Proyectos' },
          { num: 9300, suffix: '+', label: 'Usuarios activos' },
          { num: 99, suffix: '.2%', label: 'Uptime' },
          { num: 8, suffix: '', label: 'Sistemas vivos' }
        ].map((item, i) => (
          <div key={i} style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '2%',
            borderRight: i !== 3 ? '1px solid var(--border-glow)' : 'none'
          }}>
            <div className="font-display text-primary" style={{ fontSize: 'clamp(24px, 4vw, 48px)', lineHeight: '1.2' }}>
              <CountUp end={item.num} />
              <span className="text-cyan">{item.suffix}</span>
            </div>
            <div className="font-code text-secondary" style={{ fontSize: '11px', textTransform: 'uppercase' }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
