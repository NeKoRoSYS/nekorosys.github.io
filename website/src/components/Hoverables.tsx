import type { ReactNode } from "react";
import { Animations } from "../shared/Animations";
import { PopoutBlock } from "./Popouts";

interface CardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function HoverCard({ children, className, animate }: CardProps) {
    return (
        <PopoutBlock animate={animate} className={`${className} flex-1 ${ Animations.riseOnHover } transition-transform`}>
            {children}
        </PopoutBlock>
    )
}

interface ItemProps {
  name: string;
  iconSrc: string;
}

export function HoverItem({ name, iconSrc }: ItemProps) {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 p-2 w-16 h-20 sm:w-20 sm:h-24 transition-transform">
      <img
        src={iconSrc}
        alt={name}
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain rotate-0 saturate-50 opacity-50 group-hover:rotate-8 group-hover:saturate-100 group-hover:scale-125 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300"
      />
      <span className="text-[10px] sm:text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-[#39FF14] transition-opacity duration-300 text-center">
        {name}
      </span>
    </div>
  );
}