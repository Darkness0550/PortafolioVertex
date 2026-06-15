import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import AmbientParticles from './components/AmbientParticles';
import SmoothScroll from './components/SmoothScroll';
import ScrollIndicator from './components/ScrollIndicator';

import Hero from './sections/Hero';
import Credentials from './sections/Credentials';
import Statement from './sections/Statement';
import Projects from './sections/Projects';
import Diagnostic from './sections/Diagnostic';
import TechStack from './sections/TechStack';
import Process from './sections/Process';
import Testimonial from './sections/Testimonial';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.section-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <SmoothScroll>
      <CustomCursor />
      <AmbientParticles />
      <ScrollIndicator />
      
      <Navbar />
      
      <main>
        <Hero />
        <Credentials />
        <Statement />
        <Projects />
        <Diagnostic />
        <TechStack />
        <Process />
        <Testimonial />
        <CTA />
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}

export default App;
