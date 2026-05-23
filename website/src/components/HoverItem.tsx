interface HoverItemProps {
  name: string;
  iconSrc: string;
}

export default function HoverItem({ name, iconSrc }: HoverItemProps) {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 p-2 w-16 h-20 sm:w-20 sm:h-24 transition-transform">
      <img
        src={iconSrc}
        alt={name}
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain saturate-0 opacity-50 group-hover:saturate-100 group-hover:scale-125 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300"
      />
      <span className="text-[10px] sm:text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-green-400 transition-opacity duration-300 text-center">
        {name}
      </span>
    </div>
  );
}