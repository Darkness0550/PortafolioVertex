import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 5%',
      transition: 'background-color 0.3s, backdrop-filter 0.3s',
      backgroundColor: scrolled ? 'rgba(3, 4, 10, 0.7)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-glow)' : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 20H2L12 2Z" fill="var(--vertex-red)"/>
        </svg>
        <span className="font-display text-primary" style={{ fontSize: '20px', letterSpacing: '1px' }}>VERTEX</span>
      </div>
      
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="nav-links">
        <div style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '24px' }}>
          <a href="#proyectos" className="font-body interactive" style={{ fontSize: '14px' }}>Proyectos</a>
          <a href="#stack" className="font-body interactive" style={{ fontSize: '14px' }}>Stack</a>
          <a href="#contacto" className="font-body interactive" style={{ fontSize: '14px' }}>Contacto</a>
        </div>
        <button className="cta font-display interactive" style={{
          border: '1px solid var(--vertex-red)',
          padding: '8px 16px',
          color: 'var(--vertex-red)',
          fontSize: '12px',
          letterSpacing: '1px',
          transition: 'all 0.2s',
          cursor: 'none'
        }}
        onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--vertex-red)'; e.target.style.color = 'var(--abyss)'; }}
        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--vertex-red)'; }}
        >
          INICIAR PROYECTO
        </button>
      </div>
    </nav>
  );
}
