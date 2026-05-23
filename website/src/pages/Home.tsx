import { PopoutBlock } from '../components/PageRenderer';
import { FadeIn, PageWrapper } from '../components/PageTransition';
import Colors from '../shared/Colors';

export default function Home() {
  return (
    <PageWrapper>
        <div className="flex flex-col w-full items-center animate-in fade-in duration-700 mt-32 mb-15">
            <div className="mt-12 mb-20 text-center">
                <FadeIn delay={0.1}>
                    <h1 className="text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_0_20px_rgba(211,34,238,0.4)]">
                        Hello, World!
                    </h1>
                </FadeIn>
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-6xl px-4">
                <PopoutBlock className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${Colors.indicatorPulse}`} />
                    <h3 className="font-bold text-xl text-white">{"$ fastfetch"}</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                    <p><span className="text-purple-400 font-mono">Name:</span> John Marky Malibiran</p>
                    <p><span className="text-purple-400 font-mono">Online Alias:</span> NeKoRoSYS</p>
                    <p><span className="text-purple-400 font-mono">Favorite OS:</span> Arch Linux</p>
                </div>
                </PopoutBlock>
            </div>
        </div>
    </PageWrapper>
  );
}