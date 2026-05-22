import { useEffect, useRef, useState, type ReactNode } from 'react'; 
import { motion, useInView, type Variants } from 'framer-motion'; 
import Lenis from '@studio-freight/lenis'; 

const innerBlockVariants: Variants = { 
  hiddenTop: { opacity: 0, scale: 0.92, y: -40 }, 
  hiddenBottom: { opacity: 0, scale: 0.92, y: 40 }, 
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 14, duration: 0.8 } }
};

const innerPanelVariants: Variants = { 
  hiddenTop: { opacity: 0, y: -40 }, 
  hiddenBottom: { opacity: 0, y: 40 }, 
  visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.8 } } 
}; 

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export function PopoutBlock({ children, className = "" }: WrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.35 });
  const [isAboveCenter, setIsAboveCenter] = useState(false);

  useEffect(() => {
    if (!isInView && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerY = window.innerHeight / 2;
      const relativeY = rect.top + rect.height / 2 - centerY;
      
      setIsAboveCenter(relativeY < 0);
    }
  }, [isInView]);

  return ( 
    <div ref={containerRef} className={`w-full max-w-2xl mb-12 min-h-30 ${className}`}> 
      <motion.div 
        variants={innerBlockVariants}
        initial={isAboveCenter ? "hiddenTop" : "hiddenBottom"}
        animate={isInView ? "visible" : isAboveCenter ? "hiddenTop" : "hiddenBottom"}
        className="bg-white/10 hover:bg-gray-900/25 backdrop-blur-md p-8 rounded-2xl border border-white/80 hover:border-purple-400/80 text-left text-xl leading-relaxed text-gray-100 hover:text-purple-300 shadow-xl hover:drop-shadow-[0_0_15px_rgba(211,34,238,0.5)] transition-[filter,shadow,border,bg]"
      >
        {children} 
      </motion.div>
    </div> 
  );
}

//function PopoutPanel({ children, className = "" }: WrapperProps) {
//  const containerRef = useRef<HTMLDivElement>(null);
//  const isInView = useInView(containerRef, { once: false, amount: 0.35 });
//  const [isAboveCenter, setIsAboveCenter] = useState(false);
//
//  useEffect(() => {
//    if (!isInView && containerRef.current) {
//      const rect = containerRef.current.getBoundingClientRect();
//      const centerY = window.innerHeight / 2;
//      const relativeY = rect.top + rect.height / 2 - centerY;
//      
//      setIsAboveCenter(relativeY < 0);
//    }
//  }, [isInView]);
//  
//  return ( 
//    <motion.div
//      ref={containerRef}
//      initial={isAboveCenter ? "hiddenTop" : "hiddenBottom"}
//      animate={isInView ? "visible" : isAboveCenter ? "hiddenTop" : "hiddenBottom"}
//      viewport={{ once: false, margin: "-10% 0px -10% 0px", amount: 0.35 }} 
//      className={`w-full mb-8 relative min-h-30 ${className}`}
//    > 
//      <motion.div 
//        variants={innerPanelVariants}
//        className="w-screen relative left-1/2 -translate-x-1/2 bg-purple-950/25 backdrop-blur-md p-8 border-y border-purple-400/80 text-center text-xl leading-relaxed text-purple-300 shadow-xl" 
//      > 
//        <div className="max-w-6xl mx-auto px-6 min-h-150 flex flex-col items-center">
//           {children}
//        </div> 
//      </motion.div> 
//    </motion.div> 
//  ); 
//} 

export default function ScrollSection() { 
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
    return () => lenis.destroy(); 
  }, []); 

  return (
    <div className="gap-0 flex flex-col items-center text-center py-20">
      
      <div className="max-w-6xl mx-7 px-4 gap-12 flex grid-cols-3 justify-center-safe items-center"> 
      </div> 
      
      <div className="max-w-6xl w-full mx-auto px-4 flex flex-col items-center"> 
      </div> 

      <div className="w-full mx-auto px-4 gap-12 flex flex-col items-center">
      </div> 
    </div>
  );
}
