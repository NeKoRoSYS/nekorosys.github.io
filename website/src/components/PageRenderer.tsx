import { useEffect, useRef } from 'react'; 
import { motion, useInView, type Variants } from 'framer-motion'; 
import Lenis from '@studio-freight/lenis'; 

const innerBlockVariants: Variants = { 
  hidden: { opacity: 0, scale: 0.92, y: 40 }, 
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 14, duration: 0.8 } } 
}; 

const innerPanelVariants: Variants = { 
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.8 } } 
}; 

const texts: Record<string, string> = { 
  block1: "<strong>First block</strong> content here. Lorem ipsum dolor sit amet.", 
  block2: "<em>Second block</em> with different content. Donec sodales arcu vehicula.", 
  block3: "Third block text content. Curabitur quis lorem nec sem ultrices." 
}; 

function PopoutBlock({ htmlString }: { htmlString: string }) { 
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return ( 
    <div ref={containerRef} className="w-full max-w-2xl mb-12 min-h-30"> 
      <motion.div 
        variants={innerBlockVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="bg-gray-900/25 backdrop-blur-md p-8 rounded-2xl border border-purple-700/75 text-left text-xl leading-relaxed text-purple-300 shadow-xl"
      >
        <div dangerouslySetInnerHTML={{ __html: htmlString }} /> 
      </motion.div>
    </div> 
  ); 
} 

function PopoutPanel({ htmlString }: { htmlString: string }) { 
  return ( 
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: false, margin: "-10% 0px -10% 0px", amount: 0.2 }} 
      className="w-full mb-8 relative min-h-30"
    > 
      <motion.div 
        variants={innerPanelVariants}
        className="w-screen relative left-1/2 -translate-x-1/2 bg-purple-950/25 backdrop-blur-md p-8 border-y border-purple-700/75 text-center text-xl leading-relaxed text-purple-300 shadow-xl" 
      > 
        <div className="max-w-6xl mx-auto px-6" dangerouslySetInnerHTML={{ __html: htmlString }} /> 
      </motion.div> 
    </motion.div> 
  ); 
} 

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
    <div className="w-full mx-auto py-20 px-4 gap-12 flex flex-col items-center overflow-x-hidden"> 
      {Object.entries(texts).map(([key, content]) => ( 
        <PopoutBlock key={key} htmlString={content} /> 
      ))} 
      {Object.entries(texts).map(([key, content]) => ( 
        <PopoutPanel key={key} htmlString={content} /> 
      ))} 
    </div> 
  ); 
}
