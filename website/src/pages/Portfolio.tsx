import { HoverCard, HoverItem } from '../components/Hoverables';
import { PopoutBlock, PopoutPanel } from '../components/Popouts';
import { FadeIn, PageWrapper } from '../components/PageTransition';
import Icons from '../shared/Icons'
import Colors from '../shared/Colors';
import { ProjectsMarquee } from '../components/MarqueeCarousel';

const techStack = {
  frontend: [
    { name: ">React", iconSrc: Icons.reactIcon },
    { name: ">Tailwind", iconSrc: Icons.tailwindIcon },
    { name: ">TypeScript", iconSrc: Icons.typescriptIcon },
    { name: ">JavaScript", iconSrc: Icons.javascriptIcon },
    { name: ">HTML5", iconSrc: Icons.html5Icon },
    { name: ">CSS3", iconSrc: Icons.css3Icon },
  ],
  backend: [
    { name: ">C#", iconSrc: Icons.csharpIcon },
    { name: ">C++", iconSrc: Icons.cplusplusIcon },
    { name: ">Python", iconSrc: Icons.pythonIcon },
    { name: ">Next.js", iconSrc: Icons.nextjsIcon },
    { name: ">Node.js", iconSrc: Icons.nodejsIcon },
    { name: ">MongoDB", iconSrc: Icons.mongodbIcon },
  ],
  devops: [
    { name: ">Linux", iconSrc: Icons.linuxIcon },
    { name: ">Docker", iconSrc: Icons.dockerIcon },
    { name: ">Git", iconSrc: Icons.gitIcon },
    { name: ">Bash", iconSrc: Icons.bashIcon },
  ],
  tools: [
    { name: ">Unity", iconSrc: Icons.unityIcon },
    { name: ">VS Code", iconSrc: Icons.vscodeIcon },
  ]
};

interface LabelProps {
  children: string;
}

const Label = ({ children }: LabelProps) => (
  <span className={`${Colors.textAccent} font-mono mr-2 select-none`}>
    {`> ${children}:`}
  </span>
);

export default function Portfolio() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full items-center animate-in fade-in duration-700 mt-24 md:mt-42 mb-16">
        
        <div className="mt-8 md:mt-12 mb-24 md:mb-20 text-center px-4">
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
          <h1 className="mb-6 text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">
            { `{ Versatile == true }` }
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full px-4 mx-auto sm:gap-0 md:gap-8 mt-8 mb-8">

        <HoverCard className='mb-8 md:mb-0'>
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
            <h4 className="font-bold text-lg sm:text-xl text-white">{"$ ls ./skills/graphic-design"}</h4>
          </div>
          
          <div className="space-y-3 text-sm sm:text-base text-gray-400 overflow-hidden wrap-break-word">
              <p><Label>Adobe Photoshop</Label>General-purpose Editing</p>
              <p><Label>IbisPaint</Label>Illustration</p>
              <p><Label>Canva</Label>Layout Design</p>
          </div>
        </HoverCard>
        
        <HoverCard>
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
            <h4 className="font-bold text-lg sm:text-xl text-white">{"$ ls ./utils/main-dev-tools"}</h4>
          </div>
          
          <div className="space-y-3 text-sm sm:text-base text-gray-400 overflow-hidden wrap-break-word">
              <p><Label>Unity</Label>Main Game Engine</p>
              <p><Label>VS Code</Label>Code Editor</p>
              <br></br>
          </div>
        </HoverCard>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-0 md:gap-8 max-w-4xl w-full px-4 mb-22 md:mb-24 mx-auto">
          <HoverCard className='mb-8 md:mb-0'>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
              <h4 className="font-bold text-lg sm:text-sm text-white">{"$ ls ./skills/frontend"}</h4>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-0">
                {techStack.frontend.map((tech) => (
                  <HoverItem key={tech.name} name={tech.name} iconSrc={tech.iconSrc} />
                ))}
            </div>
          </HoverCard>

          <HoverCard className='mb-8 md:mb-0'>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
              <h4 className="font-bold text-lg sm:text-sm text-white">{"$ ls ./skills/backend"}</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-0">
                {techStack.backend.map((tech) => (
                  <HoverItem key={tech.name} name={tech.name} iconSrc={tech.iconSrc} />
                ))}
            </div>
          </HoverCard>

          <HoverCard>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
              <h4 className="font-bold text-lg sm:text-sm text-white">{"$ ls ./skills/devops"}</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-0">
                {techStack.devops.map((tech) => (
                  <HoverItem key={tech.name} name={tech.name} iconSrc={tech.iconSrc} />
                ))}
            </div>
          </HoverCard>
        </div>

        <div className="flex flex-col gap-16 w-full">
          <PopoutPanel className='flex items-center justify-center-safe'>
            <div className="flex items-center justify-center gap-4">
              <h1 className="font-bold text-3xl sm:text-5xl text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">My Projects</h1>
            </div>

            <ProjectsMarquee/>

            <p className='absolute bottom-0 mb-5'>...and more! On: <b><a href='https://behance.com/NeKoRoSYS' target='_blank'>Behance</a></b> | <b><a href='https://github.com/NeKoRoSYS' target='_blank'>GitHub</a></b></p>
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