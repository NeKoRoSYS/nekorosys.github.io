import Colors from "../shared/Colors";
import { Link, useLocation } from "react-router-dom";
import { CheckScrollOnTop } from '../shared/Utils'

export function HeaderBar() {
  const location = useLocation();
  const isActive = (path:string) => location.pathname === path;
  const isAtTop = CheckScrollOnTop();

  return (
    <header className={`fixed top-0 left-0 w-full border-b ${ isAtTop ? "bg-transparent border-purple-400/0" : "backdrop-blur-md border-purple-400/80 bg-purple-950/20" } z-50 flex justify-center transition-[filter, colors] duration-300`}>
      
      <div className="w-full max-w-7xl py-8 px-8 flex justify-between items-center">
        <div className={`font-extrabold ${ isAtTop ? "drop-shadow-[0_0_8px_rgba(0,180,110,0.75)] text-transparent bg-clip-text bg-linear-to-br from-green-600 to-green-300" : "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]  text-white" } text-xl text-white-500 tracking-wide`}>
          NeKoRoSYS
        </div>
        
        <nav className={`flex gap-6 text-sm font-medium ${Colors.textMutedNav}`}>
          <Link to="/home" className={`${isActive('/home') ? 'text-purple-400' : ''} hover:text-purple-400 duration-500 transition-all`}>Home</Link>
          <Link to="/portfolio" className={`${isActive('/portfolio') ? 'text-purple-400' : ''} hover:text-purple-400 duration-500 transition-all`}>Portfolio</Link>
          <Link to="/blogs" className={`${isActive('/blogs') ? 'text-purple-400' : ''} hover:text-purple-400 duration-500 transition-all`}>Blogs</Link>
        </nav>
      </div>

    </header>
  );
}

export function FooterBar() {
  return (
    <footer className="w-full mt-auto border-t border-gray-600/80 bg-gray-900/20 backdrop-blur-md z-50 flex flex-col justify-center">
      
      <div className="w-full max-w-7xl pt-8 pb-16 px-7 flex justify-center items-center mx-auto">
        <nav className={`w-full flex justify-center gap-6 items-center text-sm font-medium ${Colors.textMutedNav}`}>
          <p>Made with 💜 by NeKoRoSYS</p>
        </nav>
      </div>

    </footer>
  );
}