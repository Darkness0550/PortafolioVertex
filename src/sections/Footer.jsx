import VertexLogo from '../assets/VertexLogo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalType, setModalType] = useState(null);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const closeModal = () => setModalType(null);

  return (
    <>
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
          <Link to="/contacto" className="font-body text-secondary interactive" style={{ fontSize: '15px', transition: 'color 0.2s', whiteSpace: 'nowrap', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Contacto</Link>
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
        <button onClick={() => setModalType('terms')} className="font-body text-secondary interactive" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', transition: 'color 0.2s', padding: 0 }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
          Términos y Condiciones
        </button>
        <button onClick={() => setModalType('privacy')} className="font-body text-secondary interactive" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', transition: 'color 0.2s', padding: 0 }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
          Políticas de Privacidad
        </button>
      </div>
    </footer>

      {/* Modals */}
      {modalType && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'
        }}>
          <div onClick={closeModal} style={{ position: 'absolute', inset: 0, background: 'rgba(3, 4, 10, 0.85)', backdropFilter: 'blur(8px)' }} />
          
          <div className="panel" style={{
            position: 'relative', zIndex: 1, width: '100%', maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto',
            background: 'var(--abyss)', border: '1px solid var(--border-glow)', borderRadius: '16px', padding: '32px'
          }}>
            <button onClick={closeModal} className="interactive font-code" style={{
              position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '14px'
            }}>
              [ Cerrar ✕ ]
            </button>
            
            <h3 className="font-display text-primary" style={{ fontSize: '28px', marginBottom: '24px', color: 'var(--vertex-accent)' }}>
              {modalType === 'terms' ? 'Términos y Condiciones' : 'Políticas de Privacidad'}
            </h3>
            
            <div className="font-body text-secondary" style={{ fontSize: '15px', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <p><em>(Reemplaza este texto con tus políticas legales reales).</em></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
