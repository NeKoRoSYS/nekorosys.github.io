import { type ReactNode, type MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { Animations } from '../shared/Animations';
import Colors from '../shared/Colors';

interface ButtonBaseProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  radiusClass: string;
  delay?: number;
}

function ButtonBase({ children, onClick, className = '', radiusClass, delay = 0 }: ButtonBaseProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "auto" }}
      onClick={onClick}
      className={`btn-base backdrop-blur-md cursor-pointer border px-10 py-3 transition-all ${radiusClass} ${Colors.interactable} ${Animations.riseOnHover} ${className}`}
    >
      {children}
    </motion.button>
  );
}

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  delay?: number;
}

export function RectButton({ children, onClick, className, delay }: ButtonProps) {
  return (
    <ButtonBase onClick={onClick} className={className} radiusClass="rounded-xl" delay={delay}>
      {children}
    </ButtonBase>
  );
}

export function PillButton({ children, onClick, className, delay }: ButtonProps) {
  return (
    <ButtonBase onClick={onClick} className={className} radiusClass="rounded-4xl" delay={delay}>
      {children}
    </ButtonBase>
  );
}