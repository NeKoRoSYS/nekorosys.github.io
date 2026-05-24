import { useEffect, useState, type RefObject } from 'react';
import { useInView } from 'motion/react';
import { useLocation } from 'react-router-dom';

export function CheckIfRouteActive(path: string) {
  const location = useLocation();
  return location.pathname === path;
}

export function CopyTextToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied to clipboard!");
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}


export function CheckScrollOnTop() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsAtTop(window.scrollY < 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};