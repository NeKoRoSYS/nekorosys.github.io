import { PopoutBlock } from '../components/PageRenderer';
import { FadeIn, PageWrapper } from '../components/PageTransition';

export default function Home() {
  return (
    <PageWrapper>
        <div className="flex flex-col w-full items-center animate-in fade-in duration-700">
            <div className="mt-12 mb-20 text-center">
                <FadeIn delay={0.1}>
                    <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-br from-purple-400 to-cyan-400 tracking-tight drop-shadow-[0_0_20px_rgba(211,34,238,0.4)]">
                    NeKoRoSYS
                    </h1>
                    <p className="mt-4 text-gray-400 text-lg tracking-widest uppercase font-medium">
                    Central Operations Command
                    </p>
                </FadeIn>
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-6xl px-4">
                <PopoutBlock className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <h3 className="font-bold text-xl text-white">Environment</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                    <p><span className="text-purple-400 font-mono">OS:</span> Arch Linux</p>
                    <p><span className="text-purple-400 font-mono">Display:</span> Wayland (Hyprland)</p>
                    <p><span className="text-purple-400 font-mono">Shell:</span> Zsh</p>
                    <p><span className="text-purple-400 font-mono">UI:</span> Quickshell (QML)</p>
                </div>
                </PopoutBlock>
            </div>
        </div>
    </PageWrapper>
  );
}