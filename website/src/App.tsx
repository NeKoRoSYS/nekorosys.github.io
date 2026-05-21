import Background from './components/Background'
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';
import ScrollSection from './components/PageRenderer';

export default function App() {

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-start bg-black text-white overflow-x-hidden scrollbar-none selection:bg-purple-300/30">
      <Background />
      <HeaderBar />
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-6 pb-24">
        <div className="mt-44 flex flex-col items-center text-center">
          <h1 className="text-7xl font-extrabold text-purple-500 tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            Hello, World!
          </h1>
          <ScrollSection/>
        </div>
      </div>

      <FooterBar/>
    </div>
  );
}