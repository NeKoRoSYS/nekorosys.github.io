import { useRef, type ReactNode } from 'react'; 
import { motion, useInView } from 'framer-motion'; 
import { CheckIfAboveCenter } from '../shared/Effects';
import { innerBlockVariants, innerPanelVariants } from '../shared/Animations';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export function PopoutBlock({ children, className = "" }: WrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.35 });
  const aboveCenter = CheckIfAboveCenter(containerRef);

  return ( 
    <div ref={containerRef} className={`w-full max-w-2xl mb-12 min-h-30 ${className}`}> 
      <motion.div 
        variants={innerBlockVariants}
        initial={aboveCenter ? "hiddenTop" : "hiddenBottom"}
        animate={isInView ? "visible" : aboveCenter ? "hiddenTop" : "hiddenBottom"}
        style={{ willChange: "auto" }}
        className="bg-white/10 hover:bg-gray-900/25 backdrop-blur-md p-8 rounded-2xl border border-white/80 hover:border-purple-400/80 text-left text-xl leading-relaxed text-gray-100 hover:text-purple-300 shadow-xl hover:drop-shadow-[0_0_16px_rgba(211,34,238,0.5)] transition-[filter,shadow,border,bg]"
      >
        {children} 
      </motion.div>
    </div> 
  );
}

export function PopoutPanel({ children, className = "" }: WrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.35 });
  const aboveCenter = CheckIfAboveCenter(containerRef);
  
  return ( 
    <motion.div
      ref={containerRef}
      initial={aboveCenter ? "hiddenTop" : "hiddenBottom"}
      animate={isInView ? "visible" : aboveCenter ? "hiddenTop" : "hiddenBottom"}
      style={{ willChange: "auto" }}
      viewport={{ once: false, margin: "-10% 0px -10% 0px", amount: 0.35 }} 
      className={`w-full mb-8 relative min-h-30 ${className}`}
    > 
      <motion.div 
        variants={innerPanelVariants}
        className="w-screen relative left-1/2 -translate-x-1/2 border-gray-600/80 bg-gray-900/20 backdrop-blur-md p-8 border-y text-center text-xl leading-relaxed text-purple-300 shadow-xl" 
      > 
        <div className="md:max-w-8xl mx-auto px-6 min-h-150 flex flex-col items-center">
           {children}
        </div> 
      </motion.div> 
    </motion.div> 
  ); 
} 

