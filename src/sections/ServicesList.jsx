import { Code, LayoutTemplate, ShoppingCart, Bot, CheckCircle2 } from 'lucide-react';
import './Services.css';

export default function ServicesList() {
  const services = [
    {
      id: 'custom-software',
      title: 'Desarrollo a Medida',
      description: 'Construimos sistemas robustos, desde paneles administrativos (SaaS) hasta aplicaciones web complejas, diseñados para escalar con tu negocio.',
      icon: <Code size={28} />,
      features: [
        'Arquitectura escalable y segura',
        'APIs y microservicios',
        'Paneles de control (Dashboards)',
        'Bases de datos optimizadas'
      ]
    },
    {
      id: 'premium-landings',
      title: 'Landings Premium',
      description: 'Páginas de aterrizaje de alta conversión con diseño inmersivo, animaciones 3D fluidas y optimización para campañas de marketing.',
      icon: <LayoutTemplate size={28} />,
      features: [
        'Diseño inmersivo y animaciones fluidas',
        'Optimización extrema de velocidad (SEO)',
        'Copywriting orientado a conversión',
        'Integración con Analytics y Pixels'
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce y Pagos',
      description: 'Tiendas online de alto rendimiento con flujos de pago integrados, pasarelas locales e internacionales (Stripe, Culqi) y suscripciones.',
      icon: <ShoppingCart size={28} />,
      features: [
        'Integración de pasarelas de pago',
        'Gestión de inventarios en tiempo real',
        'Sistemas de suscripción recurrente',
        'Experiencia de compra sin fricciones'
      ]
    },
    {
      id: 'ai-automation',
      title: 'Automatización & IA',
      description: 'Implementamos flujos automáticos, chatbots inteligentes y procesos automatizados para reducir costos operativos y mejorar la atención.',
      icon: <Bot size={28} />,
      features: [
        'Chatbots con Inteligencia Artificial',
        'Automatización de flujos de trabajo',
        'Integración de LLMs (OpenAI, Gemini)',
        'Conexión de múltiples herramientas (Zapiers/Webhooks)'
      ]
    }
  ];

  return (
    <section className="services-grid-container section-reveal">
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card interactive">
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3 className="font-display text-primary service-title">
              {service.title}
            </h3>
            <p className="font-body text-secondary service-description">
              {service.description}
            </p>
            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index} className="font-code service-feature-item">
                  <CheckCircle2 size={16} className="service-feature-icon" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
