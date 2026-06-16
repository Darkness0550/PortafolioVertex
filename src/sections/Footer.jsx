import VertexLogo from '../assets/VertexLogo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
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
    <footer style={{ borderTop: '0.5px solid var(--border-glow)', backgroundColor: 'var(--abyss)', padding: '40px 24px' }}>
      <div className="container footer-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
        
        <div style={{ flex: '1', minWidth: '160px' }}>
          <button 
            className="interactive"
            onClick={handleLogoClick}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <img src={VertexLogo} alt="Vertex Logo" style={{ height: '20px' }} />
          </button>
          <div className="font-code text-secondary" style={{ fontSize: '13px' }}>
            // Trayectoria de Vertex Creación 2017 - {new Date().getFullYear()}
          </div>
        </div>

        <div className="footer-nav" style={{ flex: '1', display: 'flex', justifyContent: 'center', gap: '24px' }}>
          <Link to="/proyectos" className="font-body text-secondary interactive" style={{ fontSize: '15px', transition: 'color 0.2s', whiteSpace: 'nowrap', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Proyectos</Link>
          <Link to="/stack" className="font-body text-secondary interactive" style={{ fontSize: '15px', transition: 'color 0.2s', whiteSpace: 'nowrap', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Stack</Link>
          <Link to="/clientes" className="font-body text-secondary interactive" style={{ fontSize: '15px', transition: 'color 0.2s', whiteSpace: 'nowrap', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Clientes</Link>
          <Link to="/" onClick={() => setTimeout(() => { window.location.hash = 'contacto'; }, 100)} className="font-body text-secondary interactive" style={{ fontSize: '15px', transition: 'color 0.2s', whiteSpace: 'nowrap', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Contacto</Link>
        </div>

        <div className="footer-social" style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', gap: '16px', minWidth: '160px' }}>
          <a href="#" target="_blank" rel="noreferrer" className="interactive text-secondary" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="LinkedIn"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="interactive text-secondary" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="GitHub"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="interactive text-secondary" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
        <a href="#terminos" className="font-body text-secondary interactive" style={{ fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
          Términos y Condiciones
        </a>
        <a href="#privacidad" className="font-body text-secondary interactive" style={{ fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
          Políticas de Privacidad
        </a>
      </div>
    </footer>
  );
}
