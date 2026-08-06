import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import VertexLogo from '../assets/VertexLogo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

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
      backgroundColor: scrolled ? 'rgba(3, 4, 10, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-glow)' : 'none',
    }}>
      <button 
        className="navbar-logo interactive" 
        onClick={handleLogoClick}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <img src={VertexLogo} alt="Vertex Logo" style={{ height: '32px' }} />
      </button>
      
      <div className="nav-links" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '32px' }}>
          <Link to="/proyectos" className="font-body interactive text-secondary" style={{ fontSize: '18px', transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color='var(--text-primary)'} onMouseLeave={e => e.target.style.color='var(--text-secondary)'}>Proyectos</Link>
          <Link to="/landings" className="font-body interactive text-secondary" style={{ fontSize: '18px', transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color='var(--text-primary)'} onMouseLeave={e => e.target.style.color='var(--text-secondary)'}>Landings</Link>
          <Link to="/servicios" className="font-body interactive text-secondary" style={{ fontSize: '18px', transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color='var(--text-primary)'} onMouseLeave={e => e.target.style.color='var(--text-secondary)'}>Servicios</Link>
          <Link to="/stack" className="font-body interactive text-secondary" style={{ fontSize: '18px', transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color='var(--text-primary)'} onMouseLeave={e => e.target.style.color='var(--text-secondary)'}>Stack</Link>
          <Link to="/clientes" className="font-body interactive text-secondary" style={{ fontSize: '18px', transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color='var(--text-primary)'} onMouseLeave={e => e.target.style.color='var(--text-secondary)'}>Clientes</Link>
          <Link to="/contacto" className="font-body interactive text-secondary" style={{ fontSize: '18px', transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color='var(--text-primary)'} onMouseLeave={e => e.target.style.color='var(--text-secondary)'}>Contacto</Link>
        </div>
        <Link to="/contacto" className="cta font-display interactive" style={{
          border: '1px solid var(--vertex-accent)',
          padding: '10px 20px',
          color: 'var(--vertex-accent)',
          fontSize: '16px',
          letterSpacing: '1px',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--vertex-accent)'; e.currentTarget.style.color = 'var(--abyss)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--vertex-accent)'; }}
        >
          INICIAR PROYECTO
        </Link>
      </div>
    </nav>
  );
}
