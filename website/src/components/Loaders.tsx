import { useRef } from 'react';
import { motion, useInView, type Transition } from 'framer-motion';
import { CheckIfAboveCenter } from '../shared/Effects';
import { innerBlockVariants, innerPanelVariants } from '../shared/Animations';

const pulseTransition: Transition = {
  duration: 1.5,
  repeat: Infinity,
  ease: "easeInOut"
};

export function BlockLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.35 });
  const aboveCenter = CheckIfAboveCenter(containerRef);

  return (
    <div ref={containerRef} className="w-full max-w-2xl mb-12 min-h-30">
      <motion.div
        variants={innerBlockVariants}
        initial={aboveCenter ? "hiddenTop" : "hiddenBottom"}
        animate={isInView ? "visible" : aboveCenter ? "hiddenTop" : "hiddenBottom"}
        style={{ willChange: "auto" }}
        className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20 h-full w-full shadow-xl flex flex-col gap-4"
      >
        <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={pulseTransition} className="h-6 bg-white/10 rounded w-3/4"></motion.div>
        <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={pulseTransition} className="h-4 bg-white/10 rounded w-full"></motion.div>
        <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={pulseTransition} className="h-4 bg-white/10 rounded w-5/6"></motion.div>
      </motion.div>
    </div>
  );
}

export function PanelLoader() {
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
      className="w-full mb-8 relative min-h-30"
    >
      <motion.div
        variants={innerPanelVariants}
        className="w-screen relative left-1/2 -translate-x-1/2 bg-purple-950/10 backdrop-blur-md p-8 border-y border-purple-400/30 shadow-xl flex flex-col items-center justify-center"
      >
        <div className="max-w-6xl w-full mx-auto px-6 min-h-150 flex flex-col gap-6 items-center justify-center">
           <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={pulseTransition} className="h-8 bg-purple-400/20 rounded w-1/3"></motion.div>
           <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={pulseTransition} className="h-4 bg-purple-400/10 rounded w-1/2"></motion.div>
           <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={pulseTransition} className="h-4 bg-purple-400/10 rounded w-2/5"></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PageLoader() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] w-full z-10">
      <motion.div
        animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 rounded-full border-t-2 border-purple-500 border-r-2 shadow-[0_0_15px_rgba(211,34,238,0.5)] animate-spin"
      />
      <motion.p 
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={pulseTransition}
        className="mt-6 text-purple-400/80 tracking-widest text-sm font-medium uppercase"
      >
      </motion.p>
    </div>
  );
}