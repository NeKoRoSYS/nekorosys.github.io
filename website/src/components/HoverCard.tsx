import type { ReactNode } from "react";
import { Animations } from "../shared/Animations";
import { PopoutBlock } from "./PageRenderer";

interface CardProps {
  children: ReactNode;
}

export default function HoverCard({ children }: CardProps) {
    return (
        <PopoutBlock className={`flex-1 ${ Animations.riseOnHover } transition-transform`}>
            {children}
        </PopoutBlock>
    )
}