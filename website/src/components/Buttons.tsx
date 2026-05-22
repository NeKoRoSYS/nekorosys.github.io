import Colors from '../shared/Colors';

export function Rectangular({ children, onClick, className }) {
  return (
    <button 
      onClick={onClick} 
      className={`btn-base ${className} cursor-pointer border rounded-xl ${!className ? Colors.interactable : undefined} px-10 py-3 transition-all ${ Colors.riseOnHover }`}
    >
      {children}
    </button>
  );
}

export function Pill({ children, onClick, className }) {
  return (
    <button 
      onClick={onClick} 
      className={`btn-base ${className} cursor-pointer border rounded-4xl ${!className ? Colors.interactable : undefined} px-10 py-3 transition-all ${ Colors.riseOnHover }`}
    >
      {children}
    </button>
  );
}