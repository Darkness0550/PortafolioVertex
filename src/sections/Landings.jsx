import './Landings.css';

const landings = [
  { 
    name: 'Apex', 
    desc: 'Landing page moderna y orientada a la conversión. Diseño enfocado en resultados.', 
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    link: 'apex' 
  },
  { 
    name: 'Consorcio Los Andes', 
    desc: 'Presencia digital corporativa para el sector construcción. Seriedad y confianza.', 
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    link: 'consorciolosandes' 
  },
  { 
    name: 'Pyramid Structures', 
    desc: 'Diseño industrial y estructurado para destacar en el mercado de ingeniería.', 
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    link: 'pyramidstructures' 
  }
];

export default function Landings() {
  return (
    <section id="landings" className="section-reveal landings-section">
      <div className="landings-bg"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '120px 24px' }}>
        
        <div className="landings-header-wrapper">
          <div className="landings-header-text">
            <h2 className="font-display text-primary landings-title">Atrae más clientes con una Landing Page</h2>
            <p className="font-body text-secondary landings-subtitle">
              ¿Tu página actual no te agrada o no vende? <span className="text-accent font-code" style={{ fontSize: '15px' }}>{"< La mejoramos />"}</span> o si no tienes una, <span className="text-accent font-code" style={{ fontSize: '15px' }}>{"< hacemos tu página />"}</span> personalizada a tu gusto para que llame la atención.
            </p>
          </div>
          <div className="landings-header-cta font-code">
            <a href="#contacto" className="landings-btn">MEJORAR MI PÁGINA ↗</a>
          </div>
        </div>

        <div className="landings-grid">
          {landings.map((l, i) => (
            <div key={i} className="landing-card interactive">
              <div 
                className="landing-video-container"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.pause();
                }}
              >
                <video src={l.video} muted loop playsInline className="landing-video" />
                <div className="landing-video-overlay"></div>
              </div>
              
              <div className="landing-card-content">
                <h3 className="font-display text-primary">{l.name}</h3>
                <p className="font-body text-secondary">
                  {l.desc}
                </p>
                {l.link && (
                  <div className="font-code text-accent" style={{ fontSize: '13px', marginTop: '16px' }}>
                    [{l.link}]
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
