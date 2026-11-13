import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';
import ubixVD from '../assets/video/UbixVD.mp4';
import colabVD from '../assets/video/COLABVD.mp4';

const apps = [
    {
        name: 'UBIX CONTROL',
        year: '2025',
        desc: 'Sistema móvil y web para control de asistencia de personal, marcaje biométrico con reconocimiento facial y geolocalización GPS en tiempo real.',
        stack: 'TypeScript · React Native · H2 · MySQL',
        video: ubixVD,
        playStoreUrl: 'https://play.google.com/store/apps/details?id=tech.vertexdev.ubix&pcampaignid=web_share'
    },
    {
        name: 'COLLAB Workspace',
        year: '2026',
        desc: 'Plataforma colaborativa para equipos de trabajo, gestión de tareas en tiempo real, chat integrado y sincronización ágil de proyectos.',
        stack: 'TypeScript · React Native · MySQL',
        video: colabVD,
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.comovamosmobile&pcampaignid=web_share'
    },
    {
        name: 'Inspect Estructuras',
        year: '2026',
        desc: 'Aplicación digital para la inspección y evaluación de estructuras que permite a ingenieros y arquitectos registrar patologías, documentar daños con fotografías, evaluar niveles de severidad, generar reportes técnicos y gestionar alertas SOS ante emergencias.',
        stack: 'TypeScript · React Native · H2 · MySQL',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.psinspect.mobile&pcampaignid=web_share'
    }
];

export default function Apps() {
    const location = useLocation();
    const isStandalone = location.pathname === '/apps';
    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (i, e) => {

        if (e.target.closest('a') || e.target.closest('button')) return;
        setFlippedId(flippedId === i ? null : i);
    };

    return (
        <section id="apps" style={{ position: 'relative', zIndex: 10, backgroundColor: 'var(--abyss)', padding: '60px 0 100px 0' }}>
            <div className="container" style={{ position: 'relative', zIndex: 10, padding: '0 24px' }}>

                {/* Encabezado */}
                <div style={{ marginBottom: '48px' }}>
                    <div className="font-code text-accent" style={{ fontSize: '14px', marginBottom: '12px' }}>
                        [ Aplicaciones Móviles Oficiales ]
                    </div>
                    <h2 className="font-display text-primary" style={{ fontSize: 'clamp(32px, 5vw, 46px)' }}>
                        Apps en Google Play
                    </h2>
                </div>
                <div className="projects-grid">
                    {apps.map((app, i) => (
                        <div
                            key={i}
                            className={`project-card-wrapper ${flippedId === i ? 'flipped' : ''}`}
                        >
                            <div className="project-card-inner">

                                <div
                                    className="project-card interactive front-face clickable"
                                    onClick={(e) => handleFlip(i, e)}
                                    onMouseEnter={(e) => {
                                        if (flippedId === i) return;
                                        const video = e.currentTarget.querySelector('video');
                                        if (video) video.play().catch(() => { });
                                    }}
                                    onMouseLeave={(e) => {
                                        const video = e.currentTarget.querySelector('video');
                                        if (video) video.pause();
                                    }}
                                >
                                    {/* Video con Overlay y el hint VER DEMO */}
                                    <div className="project-video-container" style={{ cursor: 'pointer' }}>
                                        <video src={app.video} muted loop playsInline className="project-video" />
                                        <div className="project-video-overlay"></div>
                                        <div className="demo-hint font-code">VER DEMO ↻</div>
                                    </div>

                                    {/* Contenido de la tarjeta */}
                                    <div className="project-card-content">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                            <div className="font-code" style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981' }}>
                                                <div className="live-dot" style={{ backgroundColor: '#10b981' }}></div> EN GOOGLE PLAY
                                            </div>
                                            <div className="font-code text-secondary" style={{ fontSize: '13px' }}>[{app.year}]</div>
                                        </div>

                                        <h3 className="font-display text-primary" style={{ fontSize: '22px', marginBottom: '12px' }}>
                                            {app.name}
                                        </h3>

                                        <p className="font-body text-secondary" style={{ fontSize: '15px', lineHeight: '1.5', marginBottom: '20px', flexGrow: 1 }}>
                                            {app.desc}
                                        </p>

                                        {/* Chips de tecnologías */}
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                                            {app.stack.split('·').map((tech, idx) => (
                                                <span key={idx} className="font-code" style={{
                                                    fontSize: '12px',
                                                    color: 'var(--vertex-accent)',
                                                    border: '1px solid rgba(3, 151, 163, 0.4)',
                                                    borderRadius: '16px',
                                                    padding: '3px 10px',
                                                    backgroundColor: 'rgba(3, 151, 163, 0.05)'
                                                }}>
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Botón a Google Play Store */}
                                        <a
                                            href={app.playStoreUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="interactive panel"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '10px',
                                                padding: '12px 20px',
                                                borderRadius: '8px',
                                                border: '1px solid var(--border-glow)',
                                                color: 'var(--text-primary)',
                                                textDecoration: 'none',
                                                fontFamily: 'var(--font-code)',
                                                fontSize: '13px',
                                                transition: 'all 0.2s ease',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.borderColor = 'var(--vertex-accent)';
                                                e.currentTarget.style.color = 'var(--vertex-accent)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.borderColor = 'var(--border-glow)';
                                                e.currentTarget.style.color = 'var(--text-primary)';
                                            }}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.328-.61-.83-.61-1.42V3.234c0-.59.242-1.092.61-1.42zm11.238 11.24L4.85 23.05c.343.14.733.167 1.137-.063l11.45-6.52-2.59-3.413zm2.467-2.008l3.195 1.819c1.026.585 1.026 1.54 0 2.124l-3.195 1.819-2.023-2.881 2.023-2.881zm-2.467-2.008l2.59-3.413-11.45-6.52c-.404-.23-.794-.203-1.137-.063l9.997 10.003z" />
                                            </svg>
                                            <span>Descargar en Google Play ↗</span>
                                        </a>

                                    </div>
                                </div>

                                {/* BACK DE LA TARJETA */}
                                <div className="project-card back-face">
                                    <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden' }}>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setFlippedId(null); }}
                                            className="font-code"
                                            style={{
                                                position: 'absolute',
                                                top: '16px',
                                                right: '16px',
                                                zIndex: 20,
                                                background: 'rgba(3, 4, 10, 0.85)',
                                                border: '1px solid var(--vertex-accent)',
                                                color: 'var(--vertex-accent)',
                                                padding: '8px 16px',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                backdropFilter: 'blur(4px)'
                                            }}
                                        >
                                            VOLVER ✕
                                        </button>
                                        <video
                                            src={app.video}
                                            autoPlay={flippedId === i}
                                            muted={false}
                                            controls
                                            className="project-video-full"
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
