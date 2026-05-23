import { HoverCard, HoverItem } from '../components/Hoverables';
import { PopoutBlock, PopoutPanel } from '../components/Popouts';
import { FadeIn, PageWrapper } from '../components/PageTransition';

import Icons from '../shared/Icons'

export default function Portfolio() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full items-center animate-in fade-in duration-700 mt-24 md:mt-42 mb-16">
        
        <div className="mt-8 md:mt-12 mb-16 md:mb-20 text-center px-4">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-[0_0_8px_rgba(0,180,110,0.75)] text-transparent bg-clip-text bg-linear-to-br from-green-600 to-green-300 tracking-tight">
              Creation
            </h1>
            <p className="mt-4 text-gray-400 text-sm sm:text-lg tracking-widest uppercase font-medium">
              as I see fit.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <h1 className="mb-12 text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">
            Versatile
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 sm:gap-0 md:gap-8 max-w-6xl w-full px-4 mb-20">
          
          <HoverCard>
            <h4 className="font-bold text-xl text-white mb-6 text-center">Frontend</h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-0">
                <HoverItem name="React" iconSrc={Icons.reactIcon} />
                <HoverItem name="Tailwind" iconSrc={Icons.tailwindIcon} />
                <HoverItem name="TypeScript" iconSrc={Icons.typescriptIcon} />
                <HoverItem name="JavaScript" iconSrc={Icons.javascriptIcon} />
                <HoverItem name="HTML5" iconSrc={Icons.html5Icon} />
                <HoverItem name="CSS3" iconSrc={Icons.css3Icon} />
            </div>
          </HoverCard>

          <HoverCard>
            <h4 className="font-bold text-xl text-white mb-6 text-center">Backend</h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-0">
                <HoverItem name="C#" iconSrc={Icons.csharpIcon} />
                <HoverItem name="C++" iconSrc={Icons.cplusplusIcon} />
                <HoverItem name="Python" iconSrc={Icons.pythonIcon} />
                <HoverItem name="Next.js" iconSrc={Icons.nextjsIcon} />
                <HoverItem name="Node.js" iconSrc={Icons.nodejsIcon} />
                <HoverItem name="MongoDB" iconSrc={Icons.mongodbIcon} />
            </div>
          </HoverCard>

          <HoverCard>
            <h4 className="font-bold text-xl text-white mb-6 text-center">DevOps</h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-0">
                <HoverItem name="Linux" iconSrc={Icons.linuxIcon} />
                <HoverItem name="Docker" iconSrc={Icons.dockerIcon} />
                <HoverItem name="Git" iconSrc={Icons.gitIcon} />
                <HoverItem name="Bash" iconSrc={Icons.bashIcon} />
            </div>
          </HoverCard>

          <HoverCard>
            <h4 className="font-bold text-xl text-white mb-6 text-center">Tools</h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-0">
                <HoverItem name="VS Code" iconSrc={Icons.vscodeIcon} />
                <HoverItem name="Unity" iconSrc={Icons.unityIcon} />
            </div>
          </HoverCard>
        </div>

        <div className="flex flex-col gap-8 w-full px-4">
          <PopoutPanel>
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="font-bold text-3xl sm:text-5xl text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">My Projects</h1>
            </div>
          </PopoutPanel>

          <PopoutBlock>
            <div className="flex items-center justify-center gap-4 mb-4">
              <h4 className="font-bold text-xl text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">Work With Me</h4>
            </div>
          </PopoutBlock>
        </div>
      </div>
    </PageWrapper>
  );
}