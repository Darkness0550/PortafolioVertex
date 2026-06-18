import { useNavigate } from 'react-router-dom';
import './Landings.css'; // Reusing the lstrip styles

export default function LandingAd() {
  const navigate = useNavigate();

  return (
    <section className="section-reveal">
      <div className="lstrip" style={{ borderTop: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="lstrip-glow" />
        <div className="lstrip-inner">
          <div>
            <p className="lstrip-label">¿LISTO PARA EL CAMBIO?</p>
            <h3 className="lstrip-title">
              Hacemos tu landing page.<br />
              Diseñada para <em>vender.</em>
            </h3>
          </div>
          <button 
            onClick={() => navigate('/landings')} 
            className="lh-btn-primary"
            style={{ cursor: 'pointer', border: 'none' }}
          >
            VER SERVICIO DE LANDINGS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
