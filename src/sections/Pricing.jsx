import { Check, ArrowRight, Rocket, TrendingUp, Shield, Box, ShieldCheck, Clock, Headphones, Handshake, Zap } from 'lucide-react';
import './Pricing.css';

const COTIZADOR_URL = 'https://precotiza.vertexdev.tech/#/catalog/vertex-developers';

const plans = [
  {
    id: 'esencial',
    icon: <Rocket size={32} />,
    name: 'ESENCIAL',
    price: '950',
    tagline: 'Ideal para emprendedores que quieren iniciar su presencia en internet.',
    features: [
      'Hasta 5 secciones',
      'Diseño responsive',
      'Formulario de contacto',
      'Botón de WhatsApp',
      'Google Maps',
      'Redes sociales',
      'SEO básico e indexación en Google',
      'Capacitación (30 min)',
      '30 días de soporte',
    ],
    cta: 'CONTRATAR',
    highlight: false,
  },
  {
    id: 'profesional',
    icon: <TrendingUp size={32} />,
    name: 'PROFESIONAL',
    price: '1,490',
    tagline: 'Para empresas que buscan generar más clientes y destacar frente a la competencia.',
    features: [
      'Todo lo del plan Esencial, más:',
      'Hasta 12 secciones',
      'Blog / Noticias',
      'Catálogo de servicios o productos',
      'Galería avanzada',
      'Formularios personalizados',
      'Descarga de documentos (PDF)',
      'Integración con Google Analytics',
      'Optimización de velocidad',
      '60 días de soporte',
      'Capacitación (1 hora)',
    ],
    cta: 'CONTRATAR',
    highlight: true,
  },
  {
    id: 'empresarial',
    icon: <Shield size={32} />,
    name: 'EMPRESARIAL',
    price: '2,490',
    tagline: 'Para empresas que quieren digitalizar procesos y automatizar su gestión.',
    features: [
      'Todo lo del plan Profesional, más:',
      'Gestión de usuarios y roles',
      'Reservas y agenda',
      'Solicitudes de cotización',
      'Eventos y calendario',
      'Panel administrativo completo',
      'Integraciones (WhatsApp, Mailchimp, Google Calendar, etc.)',
      'Plugins y herramientas premium',
      'Seguridad y rendimiento avanzado',
      '90 días de soporte',
      'Capacitación (2 horas)',
    ],
    cta: 'CONTRATAR',
    highlight: false,
  },
  {
    id: 'personalizado',
    icon: <Box size={32} />,
    name: 'SITIO WEB PERSONALIZADO',
    price: null,
    tagline: 'Desarrollamos la solución digital que tu negocio necesita.',
    features: [
      'Diseño y funcionalidades a medida',
      'Sistemas web (CRM, ERP, reservas, portales, intranets y más)',
      'Integraciones con APIs y servicios externos',
      'PWA (aplicaciones web progresivas)',
      'Escalable y optimizado para crecer con tu negocio',
      'Soporte y mantenimiento',
    ],
    cta: 'CONTÁCTANOS',
    highlight: false,
    custom: true,
  },
];

const badges = [
  { icon: <ShieldCheck size={20} />, text: 'Diseño 100% personalizado' },
  { icon: <Clock size={20} />, text: 'Entrega puntual y eficiente' },
  { icon: <Headphones size={20} />, text: 'Soporte y capacitación incluidos' },
  { icon: <Handshake size={20} />, text: 'Acompañamiento constante' },
];

export default function Pricing() {
  return (
    <section id="planes" className="pricing-section section-reveal">
      <div className="container">

        {/* Header */}
        <div className="pricing-header">
          <span className="pricing-eyebrow font-code text-accent">[ planes ]</span>
          <h2 className="font-display text-primary pricing-title">
            Elige tu plan
          </h2>
          <p className="font-body text-secondary pricing-subtitle">
            Soluciones diseñadas para cada etapa de tu negocio. Transparencia total, sin costos ocultos.
          </p>
        </div>

        {/* Cards grid */}
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card interactive${plan.highlight ? ' pricing-card--highlight' : ''}${plan.custom ? ' pricing-card--custom' : ''}`}
            >
              {plan.highlight && (
                <div className="pricing-badge font-code" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Zap size={12} /> Más popular
                </div>
              )}

              {/* Icon */}
              <div className="pricing-icon-wrapper">
                {plan.icon}
              </div>

              {/* Name */}
              <h3 className={`font-display pricing-plan-name${plan.highlight ? ' text-accent' : ' text-primary'}`}>
                {plan.name}
              </h3>

              {/* Price */}
              {plan.price ? (
                <div className="pricing-price-row">
                  <span className="pricing-currency font-display text-secondary">S/</span>
                  <span className="pricing-amount font-display text-primary">{plan.price}</span>
                </div>
              ) : (
                <div className="pricing-price-custom font-display text-secondary">
                  A cotizar
                </div>
              )}

              {/* Tagline */}
              <p className="font-body text-secondary pricing-tagline">
                {plan.tagline}
              </p>

              {/* Divider */}
              <div className="pricing-divider" />

              {/* Features */}
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`pricing-feature-item font-body${feature.startsWith('Todo lo') ? ' pricing-feature-header' : ''}`}>
                    {!feature.startsWith('Todo lo') && (
                      <Check size={15} className="pricing-check-icon" />
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={COTIZADOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`pricing-cta font-display interactive${plan.custom ? ' pricing-cta--solid' : ''}`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="pricing-badges">
          {badges.map((b, i) => (
            <div key={i} className="pricing-badge-item font-body text-secondary">
              <span className="pricing-badge-icon">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
