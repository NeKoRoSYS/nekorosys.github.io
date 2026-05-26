import { useRef, useState } from "react";
import { PopoutBlock } from "./Popouts";
import Colors from "../shared/Colors";

export interface TimelineItemData {
  title: string;
  institution: string;
  description?: string;
  tags?: string[];
  date?: string;
}

export const educationData: TimelineItemData[] = [
  {
    title: "Junior Highschool",
    institution: "PHINMA Saint Jude College",
    description: "I spent the formative years of my childhood in this school where I met friends, teachers, and peers who contributed to my interest in tech.",
    date: "June 2012 – April 2023",
    tags: ["With High Honors", "With Honors"]
  },
  {
    title: "Senior Highschool",
    institution: "FEU High School",
    description: "Completed my Senior High School years specializing in the STEM strand where I was introduced to subjects that helped me prepare for college.",
    date: "August 2023 – June 2025",
    tags: ["With Honors", "High School Diploma"]
  },
  {
    title: "Freshman - BS Nursing",
    institution: "Pamantasan ng Lungsod ng Maynila",
    description: "Completed a year of studying Nursing, and realized that it did not align with my goals; hence, I decided to shift to the BSCS program.",
    date: "August 2025 – May 2026",
  },
  {
    title: "BS Computer Science",
    institution: "Pamantasan ng Lungsod ng Maynila",
    description: "Will be pursuing the BSCS course to get a formal college degree to supplement my credentials.",
    date: "July 2026 – ???",
  },
];

export const professionalData: TimelineItemData[] = [
  {
    title: "Graphic Designer",
    institution: "Freelance",
    description: "I've been practicing graphic design and have made designs for different purposes, mainly, for clans and organizations from a video game I once spent a lot of my time on. My involvement with said organizations and video game slowly dissipated but up until now I continue to find ways to improve my designs for many other purposes.",
    date: "May 2018 – Present",
    tags: ["Graphic Design"]
  },
  {
    title: "Layout Artist",
    institution: "FEU HS Stem Society",
    description: "I designed eye-catching and themed graphical layouts for the organization's media postings.",
    date: "August 2023 – June 2024",
    tags: ["Graphic Design", "Layout Design"]
  },
  {
    title: "Public Information and Management Officer",
    institution: "FEU HS Brilliant, Young, and Technology-Empowered Students",
    description: "Along the President, the Vice President, the Secretary, and the Treasurer, I was a key executive that helped run the organization. I was responsible for handling the social media platforms that BYTES had at the time, and every information that must be relayed to our members and to the public were managed by me.",
    date: "July 2024 – June 2025",
    tags: ["Account Management", "Information Management", "Crowd Control", "Communication Skills"]
  },
  {
    title: "Team Supervisor",
    institution: "FEU HS Brilliant, Young, and Technology-Empowered Students",
    description: "I supervised the Media and Publications Committee of BYTES to ensure that every media and post from us is up to standards.",
    date: "July 2024 – June 2025",
    tags: ["Motion Graphics", "Video Editing", "Photo Editing", "Graphic Design", "Layout Design", "Photography", "Copywriting"]
  }
];

export const technicalData: TimelineItemData[] = [
  {
    title: "Programmer",
    institution: "Freelance/Hobby",
    description: "I started with game development because I was interested in how games were made. However, I have since then branched out and learned other concepts like web development. My goal is to upskill myself and I believe that my journey in the tech industry is just getting started!",
    date: "January 2020 – Present",
    tags: ["Game Development", "Full-stack Web Development"]
  },
];

interface TimelineProps {
    data: TimelineItemData[];
}

export function Timeline({ data }: TimelineProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleNodeClick = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
        setActiveIndex(index);
        const element = event.currentTarget;
        const container = scrollContainerRef.current;
        
        if (container && element) {
            const scrollLeft = element.offsetLeft - (container.offsetWidth / 2) + (element.offsetWidth / 2);
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    };
    
    return (
        <div className="w-full flex flex-col items-center">
            <style>{`
                /* Override global hiding for Firefox */
                .glass-scrollbar {
                    scrollbar-width: thin !important;
                    scrollbar-color: rgba(168, 85, 247, 0.4) rgba(255, 255, 255, 0.05) !important;
                }
                /* Override global hiding for WebKit (Chrome/Safari/Edge) */
                .glass-scrollbar::-webkit-scrollbar {
                    display: block !important; 
                    height: 8px !important;
                }
                .glass-scrollbar::-webkit-scrollbar-track {
                    display: block !important;
                    background: rgba(255, 255, 255, 0.05) !important;
                    border-radius: 9999px !important;
                    margin: 0 16px !important;
                }
                .glass-scrollbar::-webkit-scrollbar-thumb {
                    display: block !important;
                    background: rgba(168, 85, 247, 0.4) !important;
                    border-radius: 9999px !important;
                }
                .glass-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(168, 85, 247, 0.7) !important;
                }
            `}</style>

            <div 
                ref={scrollContainerRef}
                className="glass-scrollbar w-full max-w-4xl mx-auto mt-8 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 pt-6 pb-12"
            >
                <div className="relative flex justify-start sm:justify-center items-center gap-16 md:gap-24 min-w-max mx-auto px-8">
                    
                    <div className="absolute left-8 right-8 h-1 bg-purple-500/30 z-0 top-1/2 -translate-y-1/2 rounded-full" />
                    
                    {data.map((level, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div 
                                key={index}
                                className="relative z-10 flex flex-col items-center gap-3 cursor-pointer group p-2 snap-center shrink-0"
                                onClick={(e) => handleNodeClick(index, e)}
                            >
                                <div className={`w-5 h-5 rounded-full transition-all duration-300 border-2 flex items-center justify-center ${isActive ? 'bg-[#39FF14] border-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.8)] scale-125' : 'bg-gray-900 border-yellow-500 group-hover:border-[#39FF14] group-hover:scale-110'}`}>
                                    {isActive && <div className="w-2 h-2 bg-black rounded-full" />}
                                </div>
                                
                                <span className={`absolute top-full mt-4 text-xs sm:text-sm font-mono whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-[#39FF14] font-bold drop-shadow-[0_0_4px_rgba(57,255,20,0.5)]' : 'text-gray-500 group-hover:text-purple-400'}`}>
                                    {level.date ? level.date.split('–')[0].trim() : `Item ${index + 1}`}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="w-full max-w-4xl flex justify-center px-4 sm:px-0">
                <PopoutBlock key={activeIndex} animate={true} className="max-w-4xl flex-none! w-full sm:w-[90%] md:w-[80%] flex flex-col justify-center items-start gap-3 min-h-64 p-6 md:p-8">
                    
                    <div className="flex items-center gap-3 mb-2">
                        <p className={`${Colors.textAccent}`}>{'>'}</p>
                        <h4 className="font-bold text-xl sm:text-2xl text-gray-100">{data[activeIndex].title}</h4>
                    </div>
                    
                    <h5 className="font-semibold text-gray-300 text-lg">{data[activeIndex].institution}</h5>
                    
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-auto mt-2 text-left">
                        {data[activeIndex].description}
                    </p>
        
                    {data[activeIndex].tags && (
                        <div className="flex flex-wrap gap-2 mt-6 justify-center w-full">
                            {data[activeIndex].tags.map((tag) => (
                                <span 
                                    key={tag} 
                                    className="text-xs sm:text-sm font-mono text-[#39FF14] bg-[#39FF14]/10 px-3 py-1.5 rounded-md border border-[#39FF14]/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    
                    {data[activeIndex].date && (
                        <p className="text-sm font-mono self-center text-purple-400 bg-purple-900/30 px-3 py-1 rounded-md mt-8">{data[activeIndex].date}</p>
                    )}
                </PopoutBlock>
            </div>
        </div>
    );
}