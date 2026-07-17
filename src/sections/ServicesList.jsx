import { Laptop, ShoppingCart, MousePointerClick, Smartphone, PieChart, Bot, CheckCircle2 } from 'lucide-react';
import './Services.css';

export default function ServicesList() {
  const services = [
    {
      id: 'web-systems',
      title: 'Sistemas Web a Medida',
      description: 'Plataformas diseñadas exactamente para cómo funciona tu negocio. Ideal para gestionar inventarios, personal o clientes desde cualquier lugar.',
      icon: <Laptop size={28} />,
      features: [
        'Hecho a la medida de tu empresa',
        'Acceso seguro desde la nube',
        'Crecimiento sin límites técnicos'
      ]
    },
    {
      id: 'virtual-stores',
      title: 'Tiendas Virtuales',
      description: 'Vende tus productos las 24 horas del día. Integramos pasarelas de pago (Yape, Plin, Tarjetas) para que cobres por internet de forma segura.',
      icon: <ShoppingCart size={28} />,
      features: [
        'Cobros automáticos integrados',
        'Gestión fácil de tus productos',
        'Experiencia de compra rápida'
      ]
    },
    {
      id: 'landing-pages',
      title: 'Páginas de Aterrizaje',
      description: 'Páginas web optimizadas visualmente para un solo objetivo: captar clientes potenciales, generar contactos o vender un servicio puntual.',
      icon: <MousePointerClick size={28} />,
      features: [
        'Diseños que atrapan la atención',
        'Carga rápida en celulares',
        'Formularios conectados a tu correo'
      ]
    },
    {
      id: 'mobile-apps',
      title: 'Aplicaciones Móviles',
      description: 'Lleva tu negocio al bolsillo de tus clientes. Creamos apps para Android y iPhone que son intuitivas, rápidas y muy fáciles de usar.',
      icon: <Smartphone size={28} />,
      features: [
        'Notificaciones directas al celular',
        'Diseño moderno e intuitivo',
        'Publicación en tiendas de apps'
      ]
    },
    {
      id: 'dashboards',
      title: 'Paneles Administrativos',
      description: 'Ten el control total. Visualiza tus métricas más importantes, ventas y reportes diarios de tu empresa en un solo panel privado.',
      icon: <PieChart size={28} />,
      features: [
        'Gráficos en tiempo real',
        'Exportación de reportes',
        'Control de accesos para tu equipo'
      ]
    },
    {
      id: 'chatbots',
      title: 'Chatbots y Automatización',
      description: 'Ahorra tiempo dejando que un asistente virtual inteligente responda mensajes frecuentes en WhatsApp o en tu página web.',
      icon: <Bot size={28} />,
      features: [
        'Respuestas automáticas 24/7',
        'Asistentes inteligentes (IA)',
        'Tareas repetitivas en piloto automático'
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
