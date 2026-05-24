import { Link } from 'react-router-dom';
import { PillButton } from '../components/Buttons';
import { PopoutBlock, PopoutPanel } from '../components/Popouts';
import { FadeIn, PageWrapper } from '../components/PageTransition';
import Colors from '../shared/Colors';

interface LabelProps {
  children: string;
}

const Label = ({ children }: LabelProps) => (
  <span className={`${Colors.textAccent} font-mono mr-2 select-none`}>
    {`> ${children}:`}
  </span>
);

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

        <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl justify-center">
          <PopoutBlock className="flex-1 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
              <h4 className="font-bold text-lg sm:text-xl text-white">{"$ fastfetch"}</h4>
            </div>
            
            <div className="space-y-3 text-sm sm:text-base text-gray-400 overflow-hidden wrap-break-word">
              <p><Label>Name</Label>John Marky G. Malibiran</p>
              <p><Label>Alias</Label>NeKoRoSYS</p>
              <p><Label>Role</Label>Graphic Designer | Full-Stack Web & Game Developer</p>
            </div>
          </PopoutBlock>
        </div>

        <div className='mt-12 w-full max-w-62.5 flex justify-center'>
            <Link to="/portfolio" className="w-full">
                <PillButton delay={0.3} className="w-full">{<b>Hire Me</b>}</PillButton>
            </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl justify-center mt-24">
          <PopoutPanel className="flex-1 w-full">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="font-bold text-3xl sm:text-5xl text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">About Me</h1>
            </div>
          </PopoutPanel>
        </div>
      </div>
    </PageWrapper>
  );
}