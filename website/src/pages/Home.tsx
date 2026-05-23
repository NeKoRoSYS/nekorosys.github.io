import { Link } from 'react-router-dom';
import { PillButton } from '../components/Buttons';
import { PopoutBlock } from '../components/PageRenderer';
import { FadeIn, PageWrapper } from '../components/PageTransition';
import Colors from '../shared/Colors';

export default function Home() {
  return (
    <PageWrapper>
        <div className="flex flex-col w-full items-center animate-in fade-in duration-700 mt-42 mb-16">
            <div className="mt-12 mb-20 text-center">
                <FadeIn delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-[0_0_8px_rgba(0,180,110,0.75)] text-transparent bg-clip-text bg-linear-to-br from-green-600 to-green-400 tracking-tight">
                        Hello, World!
                    </h1>
                    <p className="mt-4 text-gray-400 text-lg tracking-widest uppercase font-medium">
                        Welcome to my website.
                    </p>
                </FadeIn>
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-6xl px-4">
                <PopoutBlock className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                    <div className={`w-4 h-4 rounded-full ${Colors.indicatorPulse}`} />
                    <h4 className="font-bold text-xl text-white">{"$ fastfetch"}</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
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