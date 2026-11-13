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
            <Link to="/Apps" className="font-body text-secondary interactive" style={{ fontSize: '15px', transition: 'color 0.2s', whiteSpace: 'nowrap', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Apps</Link>
            <Link to="/stack" className="font-body text-secondary interactive" style={{ fontSize: '15px', transition: 'color 0.2s', whiteSpace: 'nowrap', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Stack</Link>
            <Link to="/clientes" className="font-body text-secondary interactive" style={{ fontSize: '15px', transition: 'color 0.2s', whiteSpace: 'nowrap', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Clientes</Link>
            <Link to="/contacto" className="font-body text-secondary interactive" style={{ fontSize: '15px', transition: 'color 0.2s', whiteSpace: 'nowrap', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Contacto</Link>
          </div>

          <div className="footer-social" style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', gap: '16px', minWidth: '160px' }}>

            <a href="https://www.facebook.com/profile.php?id=61591589738280" target="_blank" rel="noopener noreferrer" className="interactive text-secondary" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/vertexdevelopers.tech/" target="_blank" rel="noopener noreferrer" className="interactive text-secondary" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37a4 4 0 1 1-3.37-3.37 4 4 0 0 1 3.37 3.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.youtube.com/@VertexDevelopers-i7q" target="_blank" rel="noopener noreferrer" className="interactive text-secondary" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="YouTube">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path            >
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="https://wa.me/51987970396" target="_blank" rel="noopener noreferrer" className="interactive text-secondary" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="WhatsApp">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"></path>
                <path d="M9 10a5 5 0 0 0 5 5l1-1 2 1"></path>
              </svg>
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
              {modalType === 'terms' ? (
                <>
                  <p><strong>1. Identificación</strong><br />
                    Vertex Developers es la unidad tecnológica de la Corporación Pyramid, con sede en Cajamarca, Perú. Desarrollamos y operamos soluciones SaaS para empresas e instituciones educativas, incluyendo UBIX CONTROL, PyraChat, ConTalento, Pyramid Cert y otros sistemas propietarios.</p>

                  <p><strong>2. Objeto del servicio</strong><br />
                    Nuestros servicios consisten en plataformas de software como servicio (SaaS) accesibles vía web y aplicaciones móviles progresivas (PWA). El uso de cualquiera de nuestros productos implica la aceptación plena de estos términos.</p>

                  <p><strong>3. Registro y responsabilidad de cuenta</strong><br />
                    El usuario es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las acciones realizadas bajo su cuenta. Vertex Developers no se responsabiliza por accesos no autorizados derivados de negligencia del usuario.</p>

                  <p><strong>4. Planes, pagos y renovaciones</strong><br />
                    Los pagos se procesan mediante Culqi, plataforma autorizada por la SBS del Perú. Los precios están expresados en Soles Peruanos (PEN) salvo indicación contraria. Las suscripciones se renuevan automáticamente al vencimiento del período contratado.</p>

                  <p><strong>5. Cancelación y reembolsos</strong><br />
                    El usuario puede cancelar su suscripción en cualquier momento desde el panel de administración. El acceso permanecerá activo hasta el fin del período ya pagado. No se realizan reembolsos proporcionales por cancelaciones anticipadas.</p>

                  <p><strong>6. Disponibilidad del servicio</strong><br />
                    Nos comprometemos a mantener una disponibilidad del 99% mensual. Eventos de fuerza mayor, mantenimientos programados o fallos de terceros (proveedores de nube, pasarelas de pago) quedan excluidos de esta garantía.</p>

                  <p><strong>7. Propiedad intelectual</strong><br />
                    Todo el software, diseño, código fuente, marca y contenido de los productos de Vertex Developers son propiedad exclusiva de la empresa. Queda prohibida su reproducción, distribución o ingeniería inversa sin autorización expresa por escrito.</p>

                  <p><strong>8. Limitación de responsabilidad</strong><br />
                    Vertex Developers no será responsable por daños indirectos, lucro cesante o pérdida de datos derivados del uso o imposibilidad de uso de los servicios, salvo dolo o culpa grave comprobada.</p>

                  <p><strong>9. Modificaciones</strong><br />
                    Nos reservamos el derecho de modificar estos términos con previo aviso de 15 días mediante correo electrónico al titular de la cuenta.</p>

                  <p><strong>10. Ley aplicable y jurisdicción</strong><br />
                    Estos términos se rigen por la legislación de la República del Perú. Cualquier controversia se someterá a los juzgados y tribunales de la ciudad de Cajamarca, renunciando las partes a cualquier otro fuero que pudiera corresponderles.</p>

                  <p style={{ color: 'var(--vertex-accent)', fontSize: '13px' }}>Última actualización: Julio 2026 — Vertex Developers, Cajamarca, Perú.</p>
                </>
              ) : (
                <>
                  <p><strong>1. Responsable del tratamiento</strong><br />
                    En cumplimiento de la Ley N° 29733 — Ley de Protección de Datos Personales del Perú y su Reglamento (D.S. 003-2013-JUS), el responsable del tratamiento es Vertex Developers / Corporación Pyramid, con domicilio en Cajamarca, Perú. Contacto: <strong>privacidad@vertexdev.tech</strong></p>

                  <p><strong>2. Datos que recopilamos</strong><br />
                    Recopilamos únicamente los datos necesarios para prestar el servicio contratado: nombre completo, documento de identidad (DNI/CE), correo electrónico, número de teléfono, información de facturación, datos de geolocalización GPS (solo durante el uso de funciones de asistencia), fotografías (selfies en marcados de asistencia), fingerprint de dispositivo y logs de acceso.</p>

                  <p><strong>3. Finalidad del tratamiento</strong><br />
                    Los datos se utilizan exclusivamente para: prestación del servicio contratado, verificación de identidad, control de asistencia, generación de reportes, procesamiento de pagos y mejora continua del servicio. No vendemos ni cedemos datos personales a terceros sin consentimiento expreso, salvo obligación legal.</p>

                  <p><strong>4. Plazo de conservación</strong><br />
                    Los datos se conservan durante la vigencia del contrato de servicio y por un período adicional de hasta 5 años, conforme a las obligaciones legales tributarias y laborales vigentes en el Perú.</p>

                  <p><strong>5. Derechos ARCO</strong><br />
                    Como titular de datos personales tienes derecho de Acceso, Rectificación, Cancelación y Oposición al tratamiento de tu información. Para ejercerlos, envía un correo a <strong>privacidad@vertexdev.tech</strong> adjuntando copia de tu documento de identidad.</p>

                  <p><strong>6. Seguridad de la información</strong><br />
                    Implementamos medidas técnicas y organizativas apropiadas: cifrado TLS en todas las comunicaciones, hashing de contraseñas con bcrypt, autenticación JWT con expiración, aislamiento de datos por empresa (arquitectura multi-tenant), backups diarios y acceso restringido a infraestructura en la nube.</p>

                  <p><strong>7. Cookies y tecnologías similares</strong><br />
                    Nuestras aplicaciones utilizan almacenamiento local (localStorage) para mantener la sesión del usuario. No utilizamos cookies de seguimiento ni publicidad de terceros.</p>

                  <p><strong>8. Transferencias internacionales</strong><br />
                    Algunos servicios de infraestructura pueden procesar datos fuera del Perú (DigitalOcean/Cloudways — USA, Supabase — USA). Estas transferencias se realizan bajo garantías contractuales adecuadas conforme a la normativa peruana aplicable.</p>

                  <p><strong>9. Modificaciones a esta política</strong><br />
                    Nos reservamos el derecho de actualizar esta política. Notificaremos cambios significativos por correo electrónico con al menos 15 días de anticipación.</p>

                  <p style={{ color: 'var(--vertex-accent)', fontSize: '13px' }}>Última actualización: Julio 2026 — Vertex Developers, Cajamarca, Perú.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
