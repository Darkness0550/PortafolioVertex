import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import AmbientParticles from './AmbientParticles';
import SmoothScroll from './SmoothScroll';
import ScrollIndicator from './ScrollIndicator';
import Footer from '../sections/Footer';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll on navigation
    window.scrollTo(0, 0);

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

    // Timeout allows DOM to update after route change
    setTimeout(() => {
      const elements = document.querySelectorAll('.section-reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <SmoothScroll>
      <CustomCursor />
      <AmbientParticles />
      <ScrollIndicator />
      
      <Navbar />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}
