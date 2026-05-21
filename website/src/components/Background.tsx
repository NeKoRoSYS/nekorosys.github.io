import backgroundImage from '../assets/a.jpeg';

export default function Background() {
  return (
    <div 
      className="fixed inset-0 z-0 bg-cover bg-center bg-purple-950 opacity-20 pointer-events-none" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
}