// src/components/HeroUI.jsx
export default function HeroUI() {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center h-full p-8 lg:p-20 text-center lg:text-left z-10">
      <span className="font-sans text-textSecondary text-sm md:text-base tracking-widest mb-2 uppercase">
        Hola, soy
      </span>
      <h1 className="font-minecraft text-3xl md:text-5xl lg:text-6xl text-textPrimary mb-4">
        Juan Martín
      </h1>
      <h2 className="font-sans text-lg md:text-2xl text-accent mb-10 font-medium tracking-wide">
        Backend & AI Developer
      </h2>
      <button className="pointer-events-auto px-6 py-4 bg-primary text-white font-minecraft text-xs md:text-sm border-2 border-primary hover:bg-accent hover:border-accent transition-all duration-300 transform hover:scale-105 shadow-[0_5px_20px_rgba(29,45,43,0.3)]">
        VER PROYECTOS
      </button>
    </div>
  );
}