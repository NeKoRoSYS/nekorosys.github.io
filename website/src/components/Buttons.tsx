import { type ReactNode, type MouseEventHandler } from 'react';
import { Animations } from '../shared/Animations';
import Colors from '../shared/Colors';

interface ButtonBaseProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  radiusClass: string;
}

function ButtonBase({ children, onClick, className = '', radiusClass }: ButtonBaseProps) {
  return (
    <button
      onClick={onClick}
      className={`btn-base ${className} cursor-pointer border ${radiusClass} ${
        !className ? Colors.interactable : ''
      } px-10 py-3 transition-all ${Animations.riseOnHover}`}
    >
      {children}
    </button>
  );
}

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function RectButton({ children, onClick, className }: ButtonProps) {
  return (
    <ButtonBase 
      onClick={onClick} 
      className={className} 
      radiusClass="rounded-xl"
    >
      {children}
    </ButtonBase>
  );
}

export function PillButton({ children, onClick, className }: ButtonProps) {
  return (
    <ButtonBase 
      onClick={onClick} 
      className={className} 
      radiusClass="rounded-4xl"
    >
      {children}
    </ButtonBase>
  );
}
