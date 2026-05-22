import { useEffect, useState, type RefObject } from 'react';
import Lenis from '@studio-freight/lenis';
import { useInView } from 'motion/react';

export function SmoothScroller() {
  useEffect(() => { 
    const lenis = new Lenis({ 
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    }); 

    function raf(time: number) { 
      lenis.raf(time); 
      requestAnimationFrame(raf); 
    } 

    requestAnimationFrame(raf); 
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

export function CheckScrollOnTop() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isAtTop;
}

export function CheckIfAboveCenter(object: RefObject<HTMLDivElement>) {
  const isInView = useInView(object, { once: false, amount: 0.35 });
  const [isAboveCenter, setIsAboveCenter] = useState(false);

  useEffect(() => {
    if (!isInView && object.current) {
      const rect = object.current.getBoundingClientRect();
      const centerY = window.innerHeight / 2;
      const relativeY = rect.top + rect.height / 2 - centerY;
      
      setIsAboveCenter(relativeY < 0);
    }
  }, [isInView]);

  return isAboveCenter;
}