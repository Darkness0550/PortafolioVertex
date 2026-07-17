import ServicesList from '../sections/ServicesList';
import CTA from '../sections/CTA';
import '../sections/Services.css'; // Import the CSS we created earlier

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero section-reveal">
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="font-code text-accent" style={{ fontSize: '16px', marginBottom: '24px' }}>
            [ Nuestras Capacidades ]
          </div>
          
          <h1 className="font-display text-primary" style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: '1.1', marginBottom: '24px' }}>
            Ingeniería que <br/>
            impulsa el <span className="text-accent">futuro</span>.
          </h1>
          
          <p className="font-body text-secondary" style={{ fontSize: '18px', maxWidth: '600px', marginBottom: '32px' }}>
            No solo escribimos código; diseñamos soluciones tecnológicas escalables que resuelven problemas reales y aceleran el crecimiento de tu negocio. Descubre cómo podemos colaborar.
          </p>
        </div>
      </section>

      <ServicesList />
      
      <CTA />
    </>
  );
}
