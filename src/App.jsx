import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import LandingsPage from './pages/LandingsPage';
import StackPage from './pages/StackPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import { playStartupSound } from './utils/SoundFX';

function App() {
  const startupSoundPlayed = useRef(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!startupSoundPlayed.current) {
        playStartupSound();
        startupSoundPlayed.current = true;
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="proyectos" element={<ProjectsPage />} />
          <Route path="landings" element={<LandingsPage />} />
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="stack" element={<StackPage />} />
          <Route path="clientes" element={<ClientsPage />} />
          <Route path="contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
