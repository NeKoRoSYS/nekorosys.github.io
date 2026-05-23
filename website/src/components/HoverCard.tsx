import { Animations } from "../shared/Animations";
import { PopoutBlock } from "./PageRenderer";

export default function HoverCard({ children }) {
    return (
        <PopoutBlock className={`flex-1 ${ Animations.riseOnHover } transition-transform`}>
            {children}
        </PopoutBlock>
    )
}