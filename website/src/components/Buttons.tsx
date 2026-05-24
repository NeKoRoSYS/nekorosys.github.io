import { type ReactNode, type MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { Animations } from '../shared/Animations';
import Colors from '../shared/Colors';

interface ButtonBaseProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  radiusClass: string;
  delay?: number;
  iconSrc?: string;
  invertIcon?: boolean;
}

function ButtonBase({ children, onClick, className = '', radiusClass, delay = 0, iconSrc, invertIcon = false }: ButtonBaseProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "auto" }}
      onClick={onClick}
      className={`btn-base backdrop-blur-md cursor-pointer border px-4 md:px-6 py-3 w-full transition-all ${radiusClass} ${!className ? Colors.interactable : className} ${Animations.riseOnHover} flex items-center justify-center`}
    >
      {iconSrc && (
        <div className={`flex items-center justify-center ${children ? 'md:border-r border-white/20 md:pr-4 md:mr-2' : ''}`}>
          <img 
            src={iconSrc} 
            alt="icon" 
            className={`w-5 h-5 object-contain shrink-0 ${invertIcon ? 'invert' : ''}`} 
          />
        </div>
      )}
      
      {children && (
        <span className={iconSrc ? "hidden md:block whitespace-nowrap flex-1 text-center pr-2" : "block whitespace-nowrap w-full text-center"}>
          {children}
        </span>
      )}
    </motion.button>
  );
}

interface ButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  delay?: number;
  iconSrc?: string;
  invertIcon?: boolean;
}

export function RectButton({ children, onClick, className, delay, iconSrc, invertIcon }: ButtonProps) {
  return (
    <ButtonBase onClick={onClick} className={className} radiusClass="rounded-xl" delay={delay} iconSrc={iconSrc} invertIcon={invertIcon}>
      {children}
    </ButtonBase>
  );
}

export function PillButton({ children, onClick, className, delay, iconSrc, invertIcon }: ButtonProps) {
  return (
    <ButtonBase onClick={onClick} className={className} radiusClass="rounded-4xl" delay={delay} iconSrc={iconSrc} invertIcon={invertIcon}>
      {children}
    </ButtonBase>
  );
}