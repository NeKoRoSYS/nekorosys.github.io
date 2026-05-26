import { type ReactNode, type MouseEventHandler } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Animations } from '../shared/Animations';
import Colors from '../shared/Colors';

interface ButtonBaseProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  radiusClass: string;
  delay?: number;
  iconSrc?: string;
  invertIcon?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

function ButtonBase({ children, onClick, className = '', radiusClass, delay = 0, iconSrc, invertIcon = false, href, target, rel }: ButtonBaseProps) {
  const alignmentClass = children && iconSrc ? 'justify-center @[160px]:justify-start' : 'justify-center';

  const commonProps = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    style: { willChange: "auto" },
    onClick: onClick as any,
    className: `@container btn-base backdrop-blur-md cursor-pointer border px-3 @[160px]:px-4 py-3 w-full transition-all ${radiusClass} ${!className ? Colors.interactable : className} ${Animations.riseOnHover} flex items-center ${alignmentClass}`
  };

  const InnerContent = (
    <>
      {iconSrc && (
        <div className={`flex items-center justify-center shrink-0 transition-all ${
          children ? '@[160px]:w-12 @[160px]:border-r border-white/20 @[160px]:mr-2' : 'w-full'
        }`}>
          <img 
            src={iconSrc} 
            alt="icon" 
            className={`w-5 h-5 object-contain ${invertIcon ? 'invert' : ''}`} 
          />
        </div>
      )}
      
      {children && (
        <span className={iconSrc ? "hidden @[160px]:block whitespace-nowrap flex-1 text-center @[160px]:pr-14" : "block whitespace-nowrap w-full text-center"}>
          {children}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...commonProps as unknown as HTMLMotionProps<"a">}>
        {InnerContent}
      </motion.a>
    );
  }

  return (
    <motion.button {...commonProps as unknown as HTMLMotionProps<"button">}>
      {InnerContent}
    </motion.button>
  );
}

interface ButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  delay?: number;
  iconSrc?: string;
  invertIcon?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export function RectButton(props: ButtonProps) {
  return <ButtonBase radiusClass="rounded-xl" {...props} />;
}

export function PillButton(props: ButtonProps) {
  return <ButtonBase radiusClass="rounded-4xl" {...props} />;
}