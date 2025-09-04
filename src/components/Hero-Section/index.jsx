import AmoebaComponent from "../ui/Amoeba";
import CanvasCursor from "../ui/MousePointer";

export function HeroSection() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#0078D4] flex flex-col items-center justify-center pt-20" id="hero">
      
      <div className="relative select-none z-10 text-center text-white">
        <p className="text-xl mb-6 font-medium tracking-wide text-blue-100 animate-fade-in">MSC-MSIT</p>
        <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none mb-4 relative">
          <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
            MICROSOFT
            <br/>
            STUDENT CHAPTER
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-blue-300/30 to-cyan-300/20 blur-3xl -z-10 animate-pulse"></div>
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-70 animate-fade-in animation-delay-2000"></div>
      </div>
      <AmoebaComponent/>
      <CanvasCursor/>
    </div>
  );
}

export default HeroSection;
