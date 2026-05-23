import type { ReactNode } from "react";
import { Animations } from "../shared/Animations";
import { PopoutBlock } from "./PageRenderer";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function HoverCard({ children, className }: CardProps) {
    return (
        <PopoutBlock className={`${className} flex-1 ${ Animations.riseOnHover } transition-transform`}>
            {children}
        </PopoutBlock>
    )
}