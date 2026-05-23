import { useEffect, useState, type RefObject } from 'react';
import { useInView } from 'motion/react';

export function CheckScrollOnTop() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isCurrentlyAtTop = window.scrollY < 100;
      setIsAtTop((prev) => (prev !== isCurrentlyAtTop ? isCurrentlyAtTop : prev));
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isAtTop;
}

export function CheckIfAboveCenter(object: RefObject<HTMLDivElement | null>) {
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