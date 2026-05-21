export default function HeaderBar() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-purple-400/80 bg-purple-950/10 backdrop-blur-md z-50 flex justify-center">
      
      <div className="w-full max-w-7xl py-7 px-8 flex justify-between items-center">
        <div className="font-bold text-xl text-white-500 tracking-wide drop-shadow-[0_0_10px_rgba(211,34,238,0.5)]">
          NeKoRoSYS
        </div>
        
        <nav className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">Home</a>
          <a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">About</a>
        </nav>
      </div>

    </header>
  );
}