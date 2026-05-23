import { Link } from 'react-router-dom';
import { PillButton } from '../components/Buttons';
import { PopoutBlock } from '../components/PageRenderer';
import { FadeIn, PageWrapper } from '../components/PageTransition';
import Colors from '../shared/Colors';

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full items-center animate-in fade-in duration-700 mt-24 md:mt-42 mb-16 px-4">
        
        <div className="mt-8 md:mt-12 mb-16 md:mb-20 text-center">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-[0_0_8px_rgba(0,180,110,0.75)] text-transparent bg-clip-text bg-linear-to-br from-green-600 to-green-300 tracking-tight">
              Hello, World!
            </h1>
            <p className="mt-4 text-gray-400 text-sm sm:text-lg tracking-widest uppercase font-medium">
              Welcome to my website.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
          <PopoutBlock className="flex-1 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
              <h4 className="font-bold text-lg sm:text-xl text-white">{"$ fastfetch"}</h4>
            </div>
            
            <div className="space-y-3 text-sm sm:text-base text-gray-400 overflow-hidden wrap-break-word">
              <p><span className={`${Colors.textAccent} font-mono`}>{"> Name:"}</span> John Marky Malibiran</p>
              <p><span className={`${Colors.textAccent} font-mono`}>{"> Online Alias:"}</span> NeKoRoSYS</p>
              <p><span className={`${Colors.textAccent} font-mono`}>{"> Favorite OS:"}</span> Arch Linux</p>
            </div>
          </PopoutBlock>
        </div>

        <Link to="/portfolio" className='mt-16'><PillButton>{"Hire Me"}</PillButton></Link>
      </div>
    </PageWrapper>
  );
}