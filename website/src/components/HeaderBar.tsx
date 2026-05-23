import { Link } from "react-router-dom";
import { CheckScrollOnTop } from '../effects/Effects'
import Colors from "../shared/Colors";

export default function HeaderBar() {
  const isAtTop = CheckScrollOnTop();

  return (
    <header className={`fixed top-0 left-0 w-full border-b ${ isAtTop ? "bg-transparent border-purple-400/0" : "backdrop-blur-md border-purple-400/80 bg-purple-950/20" } z-50 flex justify-center transition-[filter, colors] duration-300`}
    >
      
      <div className="w-full max-w-7xl py-7 px-8 flex justify-between items-center">
        <div className={`font-extrabold ${ isAtTop ? "drop-shadow-[0_0_10px_rgba(110,0,180,0.75)] text-transparent bg-clip-text bg-linear-to-br from-purple-400 to-pink-400" : "drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]  text-white" } text-xl text-white-500 tracking-wide`}>
          NeKoRoSYS
        </div>
        
        <nav className={`flex gap-6 text-sm font-medium ${Colors.textMutedNav}`}>
          <Link to="/home" className="hover:text-purple-400 transition-all">Home</Link>
          <Link to="/portfolio" className="hover:text-purple-400 transition-all">Portfolio</Link>
          <Link to="/blogs" className="hover:text-purple-400 transition-all">Blogs</Link>
        </nav>
      </div>

    </header>
  );
}