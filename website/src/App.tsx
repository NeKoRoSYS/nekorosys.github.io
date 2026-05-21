import { useEffect } from 'react';
import { motion, type Variants } from 'motion/react';
import Lenis from '@studio-freight/lenis';
import backgroundImage from './assets/a.jpeg';

function Background() {
  return (
    <div 
      className="fixed inset-0 z-0 bg-cover bg-center opacity-20 pointer-events-none" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
}

function HeaderBar() {
  return (
    <header className="w-full border-b border-purple-400/80 bg-purple-950/20 backdrop-blur-md sticky top-0 z-50 flex justify-center">
      
      <div className="w-full max-w-4xl py-5 px-6 flex justify-between items-center">
        <div className="font-bold text-xl text-white-500 tracking-wide drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]">
          NeKoRoSYS
        </div>
        
        <nav className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-400 transition-colors">About</a>
        </nav>
      </div>

    </header>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

const popOutVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.92,
      y: 40       
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 70,
        damping: 14, 
        duration: 0.8 
      }
    }
  };

  const texts: Record<string, string> = {
    block1: "<strong>First block</strong> content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    block2: "<em>Second block</em> with different content. Donec sodales arcu vehicula iaculis pretium.",
    block3: "Third block text content. Curabitur quis lorem nec sem ultrices bibendum faucibus vitae erat."
  };
  
  function PopoutBlock({ htmlString }: { htmlString: string }) {
    return (
      <motion.div 
        variants={popOutVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-60px" }}
        className="w-full bg-purple-950/20 backdrop-blur-md p-8 rounded-2xl border border-purple-700/50 text-left leading-relaxed text-purple-300 shadow-xl"
      >
        <div dangerouslySetInnerHTML={{ __html: htmlString }}/>
      </motion.div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-start bg-slate-900 text-white scrollbar-none selection:bg-cyan-500/30">
      <Background />
      <HeaderBar />
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto px-6 pb-24">
        <div className="mt-20 flex flex-col items-center gap-24 text-center">
          <h1 className="text-5xl font-extrabold text-purple-500 tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            Hello world!
          </h1>

          {Object.entries(texts).map(([key, htmlValue]) => (
            <PopoutBlock 
              key={key} 
              htmlString={htmlValue} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
