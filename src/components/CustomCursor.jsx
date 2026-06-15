import { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  useEffect(() => {
    // Only on desktop
    if (window.innerWidth <= 768) return;
    
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };
    
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, .interactive')) {
        if (ringRef.current) ringRef.current.classList.add('hover');
        if (dotRef.current) {
          if (e.target.closest('button, .cta')) {
            dotRef.current.style.opacity = '0';
          }
        }
      } else {
        if (ringRef.current) ringRef.current.classList.remove('hover');
        if (dotRef.current) dotRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    let animationFrameId;
    const render = () => {
      ringX += (mouseX - ringX) * 0.15; // smooth trailing
      ringY += (mouseY - ringY) * 0.15;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (window.innerWidth <= 768) return null;

  return (
    <>
      <div ref={ringRef} className="cursor-ring pointer-events-none"></div>
      <div ref={dotRef} className="cursor-dot pointer-events-none"></div>
    </>
  );
}
