import HoverCard from '../components/HoverCard';
import { PopoutBlock, PopoutPanel } from '../components/PageRenderer';
import { FadeIn, PageWrapper } from '../components/PageTransition';
import Colors from '../shared/Colors'

export default function Portfolio() {
  return (
    <PageWrapper>
        <div className="flex flex-col w-full items-center animate-in fade-in duration-700 mt-42 mb-16">

            <div className="mt-12 mb-20 text-center">
                <FadeIn delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-[0_0_8px_rgba(0,180,110,0.75)] text-transparent bg-clip-text bg-linear-to-br from-green-600 to-green-400 tracking-tight">
                        Creation
                    </h1>
                    <p className="mt-4 text-gray-400 text-lg tracking-widest uppercase font-medium">
                        as I see fit.
                    </p>
                </FadeIn>
            </div>

            <FadeIn delay={0.2}>
                <h1 className='mb-16 text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'>Versatile</h1>
            </FadeIn>

            <div className="flex flex-col md:flex-row md:gap-8 max-w-6xl px-4">
                <HoverCard>
                    <div className="flex justify-center-safe items-center gap-4">
                        <h4 className="font-bold text-xl text-white">Graphic Design</h4>
                    </div>
                </HoverCard>
                <HoverCard>
                    <div className="flex justify-center-safe items-center gap-4">
                        <h4 className="font-bold text-xl text-white">Software</h4>
                    </div>
                </HoverCard>
            </div>
            <div className="flex flex-col md:flex-row md:gap-8 max-w-6xl px-4 mb-20">
                <HoverCard>
                    <div className="flex justify-center-safe items-center gap-4 mb-4">
                        <h4 className="font-bold text-xl text-white">Frontend</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                        <p><span className={`${Colors.textAccent} font-mono`}>React</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>Tailwind</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>TypeScript</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>JavaScript</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>HTML</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>CSS</span></p>
                    </div>
                </HoverCard>
                <HoverCard>
                    <div className="flex justify-center-safe items-center gap-4 mb-4">
                        <h4 className="font-bold text-xl text-white">Backend</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                        <p><span className={`${Colors.textAccent} font-mono`}>Unity</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>C#</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>C++</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>Python</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>Next.js</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>Node.js</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>MongoDB</span></p>
                    </div>
                </HoverCard>
                <HoverCard>
                    <div className="flex justify-center-safe items-center gap-4 mb-4">
                        <h4 className="font-bold text-xl text-white">DevOps</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                        <p><span className={`${Colors.textAccent} font-mono`}>Linux</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>Docker</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>Git</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>Bash</span></p>
                    </div>
                </HoverCard>
                <HoverCard>
                    <div className="flex justify-center-safe items-center gap-4 mb-4">
                        <h4 className="font-bold text-xl text-white">Tools</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                        <p><span className={`${Colors.textAccent} font-mono`}>VS Code</span></p>
                        <p><span className={`${Colors.textAccent} font-mono`}>Unity</span></p>
                    </div>
                </HoverCard>
            </div>

            <div className="flex flex-col gap-8 w-full px-4">
                <PopoutPanel>
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="font-bold text-5x1 text-white">My Projects</h1>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                    </div>
                </PopoutPanel>

                <PopoutBlock>
                    <div className="flex items-center gap-4 mb-4">
                        <h4 className="font-bold text-xl text-white">Work With Me</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                    </div>
                </PopoutBlock>
            </div>
        </div>
    </PageWrapper>
  );
}