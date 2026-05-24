import type { ReactNode } from "react";
import { HoverCard } from "./Hoverables";
import Colors from "../shared/Colors";

interface MarqueeCarouselProps {
  children: ReactNode;
}

export function MarqueeCarousel({ children }: MarqueeCarouselProps): React.JSX.Element {
  return (
    <div className="w-full py-6 relative flex justify-center">
      <div 
        className="w-full overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="group flex w-max">
          {[...Array(3)].map((_, i) => (
            <div 
                key={`marquee-track-${i}`} 
                className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]" 
                aria-hidden={i > 0 ? "true" : undefined}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface ProjectData {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  image?: string;
}

const myProjects: ProjectData[] = [
  {
    title: "'NeKONTROLLER'",
    description: "A input-handler layer solution that sits on top of Unity's New Input System.",
    techStack: ["Unity", "C#"],
    link: "https://github.com/NeKoRoSYS/NeKONTROLLER",
  },
  {
    title: "'NeKoRoGEAR'",
    description: "A custom 3D game engine programmed from scratch with C++.",
    techStack: ["C++", "OpenGL", "SDL3", "GLAD"],
    link: "https://github.com/NeKoRoSYS/NeKoRoGEAR",
  },
  {
    title: "'NeKoRoSHELL'",
    description: "A minimal, generic, and modular ricing/customization framework for Arch Linux + Hyprland.",
    techStack: ["Bash", "C++", "Arch Linux", "Hyprland", "Wayland"],
    link: "https://github.com/NeKoRoSYS/NeKoRoSHELL",
  },
  {
    title: "'NeKoRoSHELL DLux'",
    description: "An optional upgrade for NeKoRoSHELL that replaces everything with Quickshell UI elements.",
    techStack: ["Bash", "Arch Linux", "Hyprland", "Wayland", "Quickshell", "QML"],
    link: "https://github.com/NeKoRoSYS/NeKoRoSHELL-DLux",
  },
  {
    title: "'NeKoRoBOT.js'",
    description: "A full-stack Discord.js bot template. Powers 'nexsplit'.",
    techStack: ["Node.js", "Discord.js", "Python", "MongoDB", "Docker"],
    link: "https://github.com/NeKoRoSYS/NeKoRoBOT.js",
  },
  {
    title: "'nexsplit'",
    description: "A full-stack Discord.js bot that handles custom matchmaking features for the game Standoff 2.",
    techStack: ["Node.js", "Discord.js", "Python", "MongoDB", "Docker"],
    link: "https://discord.gg/cxjwAnWCjr",
  },
];

export function ProjectsMarquee() {
  return (
    <div className="w-full rounded-2xl">
      <MarqueeCarousel>
        {myProjects.map((project, index) => (
            <HoverCard 
                key={`${project.title}-${index}`} 
                className="flex-none! w-80 sm:w-96 md:w-md p-8 flex flex-col justify-start items-start gap-4 min-h-64 cursor-default"
                animate={false}
            >
                <div className="flex items-center gap-4 mb-2">
                  <p className={`${Colors.textAccent}`}>{'>'}</p>
                  <h4 className="font-bold text-xl text-white">{project.title}</h4>
                </div>
                
                <p className="text-base text-gray-400 line-clamp-4 leading-relaxed mb-auto">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs sm:text-sm font-mono text-green-400 bg-green-400/10 px-3 py-1.5 rounded-md border border-green-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <b><a className={`${ project.link ? "visible" : "hidden" }`}href={project.link} target="_blank">View Here</a></b>
            </HoverCard>
        ))}
      </MarqueeCarousel>
    </div>
  );
}