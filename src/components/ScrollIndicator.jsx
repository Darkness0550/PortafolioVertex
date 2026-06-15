import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollHeight(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '1px',
      height: '100%',
      backgroundColor: 'var(--border-glow)',
      zIndex: 9990
    }}>
      <div style={{
        width: '1px',
        height: scrollHeight,
        backgroundColor: 'var(--vertex-red)',
        transition: 'height 0.1s'
      }}></div>
    </div>
  );
}
