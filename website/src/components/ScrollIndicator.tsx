import { useEffect, useState } from 'react';
import arrowIcon from '../assets/arrow.png'

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const screenHeight = window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > screenHeight && currentScroll < 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleVisibility();

    window.addEventListener('scroll', handleVisibility);
    window.addEventListener('resize', handleVisibility);
    
    const observer = new MutationObserver(handleVisibility);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleVisibility);
      window.removeEventListener('resize', handleVisibility);
      observer.disconnect();
    };
  }, []);
  
  return (
    <footer 
      className={`fixed bottom-0 left-0 w-full h-50 z-50 transition-all duration-500 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="w-full h-full bg-linear-to-b from-black/0 to-75% to-black/75 flex items-center justify-center-safe">
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
