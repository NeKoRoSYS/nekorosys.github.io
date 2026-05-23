import HoverCard from '../components/HoverCard';
import { PopoutBlock, PopoutPanel } from '../components/PageRenderer';
import { FadeIn, PageWrapper } from '../components/PageTransition';
import Colors from '../shared/Colors'

export default function Portfolio() {
  return (
    <PageWrapper>
        <div className="flex flex-col w-full items-center animate-in fade-in duration-700 mt-32 mb-15 gap-10">

            <div className="mt-12 mb-20 text-center">
                <FadeIn delay={0.1}>
                    <h1 className="text-7xl font-extrabold drop-shadow-[0_0_8px_rgba(110,0,180,0.75)] text-transparent bg-clip-text bg-linear-to-br from-purple-400 to-pink-400 tracking-tight">
                        Creation
                    </h1>
                    <p className="mt-4 text-gray-400 text-lg tracking-widest uppercase font-medium">
                        as I see fit.
                    </p>
                </FadeIn>
            </div>

            <FadeIn delay={0.2}>
                <h1 className='text-3xl font-extrabold text-white tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'>Versatile</h1>
            </FadeIn>

            <div className="flex flex-col md:flex-row gap-8 max-w-6xl px-4 mb-20">
                <HoverCard>
                    <div className="flex justify-center-safe items-center gap-3 mb-4">
                        <h3 className="font-bold text-xl text-white">Frontend</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                        <p><span className={`${Colors.textAccent}`}>React</span></p>
                        <p><span className={`${Colors.textAccent}`}>Tailwind</span></p>
                        <p><span className={`${Colors.textAccent}`}>TypeScript</span></p>
                        <p><span className={`${Colors.textAccent}`}>JavaScript</span></p>
                        <p><span className={`${Colors.textAccent}`}>HTML</span></p>
                        <p><span className={`${Colors.textAccent}`}>CSS</span></p>
                    </div>
                </HoverCard>
                <HoverCard>
                    <div className="flex justify-center-safe items-center gap-3 mb-4">
                        <h3 className="font-bold text-xl text-white">Backend</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                        <p><span className={`${Colors.textAccent}`}>Unity</span></p>
                        <p><span className={`${Colors.textAccent}`}>C#</span></p>
                        <p><span className={`${Colors.textAccent}`}>C++</span></p>
                        <p><span className={`${Colors.textAccent}`}>Python</span></p>
                        <p><span className={`${Colors.textAccent}`}>Next.js</span></p>
                        <p><span className={`${Colors.textAccent}`}>Node.js</span></p>
                        <p><span className={`${Colors.textAccent}`}>MongoDB</span></p>
                    </div>
                </HoverCard>
                <HoverCard>
                    <div className="flex justify-center-safe items-center gap-3 mb-4">
                        <h3 className="font-bold text-xl text-white">DevOps</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                        <p><span className={`${Colors.textAccent}`}>Linux</span></p>
                        <p><span className={`${Colors.textAccent}`}>Docker</span></p>
                        <p><span className={`${Colors.textAccent}`}>Git</span></p>
                        <p><span className={`${Colors.textAccent}`}>Bash</span></p>
                    </div>
                </HoverCard>
                <HoverCard>
                    <div className="flex justify-center-safe items-center gap-3 mb-4">
                        <h3 className="font-bold text-xl text-white">Tools</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                        <p><span className={`${Colors.textAccent}`}>VS Code</span></p>
                        <p><span className={`${Colors.textAccent}`}>Unity</span></p>
                    </div>
                </HoverCard>
            </div>

            <div className="flex flex-col gap-8 w-full px-4">
                <PopoutPanel>
                    <div className="flex items-center gap-3 mb-4">
                        <h1 className="font-bold text-5x1 text-white">My Projects</h1>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                    </div>
                </PopoutPanel>

                <PopoutBlock>
                    <div className="flex items-center gap-3 mb-4">
                        <h3 className="font-bold text-xl text-white">Work With Me</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                    </div>
                </PopoutBlock>
            </div>
        </div>
    </PageWrapper>
  );
}