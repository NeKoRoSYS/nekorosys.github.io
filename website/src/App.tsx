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
    <header className="w-full border-b border-slate-800/80 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 flex justify-center">
      
      <div className="w-full max-w-4xl py-5 px-6 flex justify-between items-center">
        <div className="font-bold text-xl text-cyan-400 tracking-wide drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]">
          0xNeKoRoSYS
        </div>
        
        <nav className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">About</a>
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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const popOutVariants: Variants = {
    hidden: { opacity: 0, scale: 0, y: 0 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 }
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-start bg-slate-900 text-white overflow-y-auto scrollbar-none selection:bg-cyan-500/30">
      <Background />
      <HeaderBar />
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto px-6 pb-24">
        <div className="mt-20 flex flex-col items-center gap-12 text-center">
          <h1 className="text-5xl font-extrabold text-cyan-400 tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            Hello world!
          </h1>

          <motion.div 
            variants={popOutVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 text-left leading-relaxed text-slate-300 shadow-xl"
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales arcu vehicula iaculis pretium. Curabitur quis lorem nec sem ultrices bibendum faucibus vitae erat. Nulla malesuada, erat a tristique molestie, magna ex mollis nisl, at varius quam nisl ut dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          </motion.div>

          <motion.div 
            variants={popOutVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 text-left leading-relaxed text-slate-300 shadow-xl"
          >
            "In scelerisque et nunc sit amet viverra. Proin venenatis leo sit amet tempus bibendum. Phasellus mollis at sapien a finibus. Nam tristique tempus tincidunt. Proin blandit sit amet tortor in consectetur. Nunc eget gravida massa, ut tincidunt orci. Etiam sollicitudin mi in fermentum gravida."
          </motion.div>

          <motion.div 
            variants={popOutVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 text-left leading-relaxed text-slate-300 shadow-xl"
          >
            "Proin quis arcu elit. Nullam euismod augue sed nulla varius semper. Suspendisse quis scelerisque odio. Cras placerat, orci nec eleifend euismod, odio lorem eleifend velit, sit amet tincidunt est dolor eu purus. Phasellus tempor egestas lorem, eget placerat magna dignissim eget."
          </motion.div>
        </div>
      </div>
    </div>
  );
}
