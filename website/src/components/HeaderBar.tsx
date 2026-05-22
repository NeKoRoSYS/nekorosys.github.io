import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function useIsAtTop() {
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


export default function HeaderBar() {
  const isAtTop = useIsAtTop();

  return (
    <header className={`fixed top-0 left-0 w-full border-b ${ isAtTop ? "bg-transparent border-purple-400/0" : "backdrop-blur-md border-purple-400/80 bg-purple-950/20" } z-50 flex justify-center transition-[filter, colors] duration-300`}
    >
      
      <div className="w-full max-w-7xl py-7 px-8 flex justify-between items-center">
        <div className="font-extrabold text-transparent bg-clip-text bg-linear-to-br from-purple-400 to-cyan-400 text-xl text-white-500 tracking-wide drop-shadow-[0_0_10px_rgba(211,34,238,0.5)]">
          NeKoRoSYS
        </div>
        
        <nav className="flex gap-6 text-sm font-medium text-slate-400">
          <Link to="/home" className="hover:text-purple-400 transition-all">Home</Link>
          <Link to="/about" className="hover:text-purple-400 transition-all">About</Link>
        </nav>
      </div>

    </header>
  );
}