import { useEffect, useState } from 'react';
import arrowIcon from '../assets/arrow.webp'

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight;
          const screenHeight = window.innerHeight;
          const currentScroll = window.scrollY;

          setIsVisible(totalHeight > screenHeight && currentScroll < 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleVisibility();

    window.addEventListener('scroll', handleVisibility, { passive: true });
    window.addEventListener('resize', handleVisibility, { passive: true });
    
    let timeoutId: number;
    const observer = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleVisibility, 100);
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleVisibility);
      window.removeEventListener('resize', handleVisibility);
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);
  
  return (
    <footer 
      className={`fixed bottom-0 left-0 w-full h-50 z-51 transition-all duration-500 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="w-full h-full bg-linear-to-b from-black/0 to-75% to-black/75 flex items-center justify-center">
        <div 
        className="w-5 h-5 bg-yellow-500 animate-[float_2s_ease-in-out_infinite] mt-10"
        style={{
            WebkitMaskImage: `url(${arrowIcon})`,
            maskImage: `url(${arrowIcon})`,
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat'
        }}
        />
      </div>
    </footer>
  );
}
