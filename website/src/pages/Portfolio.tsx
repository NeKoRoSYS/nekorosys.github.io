import { HoverCard, HoverItem } from '../components/Hoverables';
import { PopoutPanel } from '../components/Popouts';
import { FadeIn, PageWrapper } from '../components/PageTransition';
import Icons from '../shared/Icons'
import Colors from '../shared/Colors';
import { ProjectsMarquee } from '../components/MarqueeCarousel';
import { RectButton } from '../components/Buttons';

const techStack = {
  languages: [
    { name: ">TypeScript", iconSrc: Icons.typescriptIcon },
    { name: ">JavaScript", iconSrc: Icons.javascriptIcon },
    { name: ">C#", iconSrc: Icons.csharpIcon },
    { name: ">C++", iconSrc: Icons.cplusplusIcon },
    { name: ">Python", iconSrc: Icons.pythonIcon },
  ],
  frontend: [
    { name: ">React", iconSrc: Icons.reactIcon },
    { name: ">Tailwind", iconSrc: Icons.tailwindIcon },
    { name: ">Next.js", iconSrc: Icons.nextjsIcon },
    { name: ">Vite", iconSrc: Icons.viteIcon },
  ],
  backend: [
    { name: ">Node.js", iconSrc: Icons.nodejsIcon },
    { name: ">MongoDB", iconSrc: Icons.mongodbIcon },
  ],
  devops: [
    { name: ">Linux", iconSrc: Icons.linuxIcon },
    { name: ">Git", iconSrc: Icons.gitIcon },
    { name: ">Docker", iconSrc: Icons.dockerIcon },
    { name: ">Kubernetes", iconSrc: Icons.kubernetesIcon },
    { name: ">Bash/Zsh", iconSrc: Icons.bashIcon },
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

interface LinkBtnProps {
  children: string;
  href?: string;
  className: string;
  iconSrc: string;
  delay: number;
}

const LinkBtn = ({ children, href = "#", className, iconSrc, delay }: LinkBtnProps) => {
  const isMailto = href.startsWith("mailto:");

  return (
    <a 
      href={href} 
      target={isMailto ? undefined : "_blank"} 
      rel={isMailto ? undefined : "noopener noreferrer"} 
      className="flex-1 min-w-40 max-w-full flex"
    >
      <RectButton delay={delay} invertIcon={true} className={className} iconSrc={iconSrc}>
        <b>{children}</b>
      </RectButton>
    </a>
  );
};


export default function Portfolio() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full items-center animate-in fade-in duration-700 mt-24 md:mt-42 mb-16 px-4">
        
        <div className="mt-8 md:mt-12 mb-16 md:mb-20 text-center">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-[0_0_8px_rgba(57,255,20,0.75)] text-transparent bg-clip-text bg-linear-to-br from-[#39FF14] to-green-200 tracking-tight">
              Creation
            </h1>
            <p className="mt-4 text-gray-400 text-sm sm:text-lg tracking-widest uppercase font-medium">
              as I see fit.
            </p>
          </FadeIn>
        </div>

        <div className="mt-8 flex flex-col items-center w-full max-w-5xl gap-8">
          <FadeIn delay={0.2}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center mb-4">
              { `{ Versatile == true }` }
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            <HoverCard>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
                <h4 className="font-bold text-lg sm:text-sm text-gray-100">{"$ ls ./skills/languages"}</h4>
              </div>
              <div className="flex-1 flex flex-wrap justify-center content-center gap-2 sm:gap-0">
                  {techStack.languages.map((tech) => (
                    <HoverItem key={tech.name} name={tech.name} iconSrc={tech.iconSrc} />
                  ))}
              </div>
            </HoverCard>

            <HoverCard>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
                <h4 className="font-bold text-lg sm:text-sm text-gray-100">{"$ ls ./skills/frontend"}</h4>
              </div>
              <div className="flex-1 flex flex-wrap justify-center content-center gap-2 sm:gap-0">
                  {techStack.frontend.map((tech) => (
                    <HoverItem key={tech.name} name={tech.name} iconSrc={tech.iconSrc} />
                  ))}
              </div>
            </HoverCard>

            <HoverCard>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
                <h4 className="font-bold text-lg sm:text-sm text-gray-100">{"$ ls ./skills/backend"}</h4>
              </div>
              <div className="flex-1 flex flex-wrap justify-center content-center gap-2 sm:gap-0">
                  {techStack.backend.map((tech) => (
                    <HoverItem key={tech.name} name={tech.name} iconSrc={tech.iconSrc} />
                  ))}
              </div>
            </HoverCard>

             <HoverCard>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
                <h4 className="font-bold text-lg sm:text-sm text-gray-100">{"$ ls ./skills/devops"}</h4>
              </div>
              <div className="flex-1 flex flex-wrap justify-center content-center gap-2 sm:gap-0">
                  {techStack.devops.map((tech) => (
                    <HoverItem key={tech.name} name={tech.name} iconSrc={tech.iconSrc} />
                  ))}
              </div>
            </HoverCard>

            <HoverCard>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
                <h4 className="font-bold text-lg sm:text-sm text-gray-100">{"$ ls ./skills/tools"}</h4>
              </div>
              <div className="flex-1 flex flex-wrap justify-center content-center gap-2 sm:gap-0">
                  {techStack.tools.map((tech) => (
                    <HoverItem key={tech.name} name={tech.name} iconSrc={tech.iconSrc} />
                  ))}
              </div>
            </HoverCard>

            <HoverCard>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
                <h4 className="font-bold text-lg sm:text-sm text-gray-100">{"$ ls ./skills/graphic-design"}</h4>
              </div>
              <div className="flex-1 flex flex-col items-center-safe justify-center-safe space-y-3 text-sm text-gray-400 overflow-hidden wrap-break-word px-2">
                  <p><Label>Alight Motion</Label>Video Editing</p>
                  <p><Label>Photoshop</Label>Editing</p>
                  <p><Label>IbisPaint</Label>Illustration</p>
                  <p><Label>Canva</Label>Layout Design</p>
                  <p><Label>Figma</Label>UI/UX Prototyping</p>
              </div>
            </HoverCard>
          </div>
        </div>

        <div className="mt-24 w-full">
          <PopoutPanel className='flex items-center justify-center-safe mb-0!'>
            <div className="flex items-center justify-center gap-4">
              <div className={`w-4 h-4 rounded-full min-w-4 ${Colors.indicatorPulse}`} />
              <h1 className="font-bold text-3xl sm:text-5xl text-gray-100 drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">$ ls ./my-projects</h1>
            </div>

            <ProjectsMarquee/>

            <div className='left-0 w-full px-6 flex flex-col md:flex-row items-center justify-center gap-4'>
                <p className="text-gray-400 font-mono text-sm uppercase tracking-widest md:mr-2 shrink-0">...and more on</p>
                <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 max-w-70 sm:max-w-md">
                    <LinkBtn delay={0} className={Colors.behance} iconSrc={Icons.behanceIcon} href="https://behance.com/NeKoRoSYS">Behance</LinkBtn>
                    <LinkBtn delay={0.1} className={Colors.github} iconSrc={Icons.githubIcon} href="https://github.com/NeKoRoSYS">GitHub</LinkBtn>
                </div>
            </div>
          </PopoutPanel>
        </div>
        
        <div className="mt-24 flex flex-col items-center w-full max-w-4xl gap-8">
          <FadeIn delay={0.2}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] text-center">
              Work with Me
            </h1>
          </FadeIn>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            <LinkBtn delay={0.6} href="https://discord.gg/invite/tZsMTPNYU8" className={Colors.discord} iconSrc={Icons.discordIcon}>Discord</LinkBtn>
            <LinkBtn delay={0.1} href="https://linkedin.com/in/malibiran-johnmarky" className={Colors.linkedin} iconSrc={Icons.linkedinIcon}>LinkedIn</LinkBtn>
            <LinkBtn delay={0.4} href="mailto:nekorosys@gmail.com" className={Colors.google} iconSrc={Icons.emailIcon}>Mail</LinkBtn>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}