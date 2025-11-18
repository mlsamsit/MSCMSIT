import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AmoebaComponent from "../ui/Amoeba";
import CanvasCursor from "../ui/MousePointer";

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(true);

  const hack = {
    name: "CTRL + ALT + VIBE",
    date: "21st November 2025",
    location: "MSIT - 06 Seminal Hall ",
    img: "https://ctrlaltvibe.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F4ab65cc19d21495d8d95356ba2e67b06%2Fassets%2Fcover%2F56.png&w=1440&q=100",
    link: "https://ctrlaltvibe.devfolio.co/",
  };

  return (
    <>
      {/* ---------------------- MODAL ---------------------- */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[700px] overflow-hidden animate-fade-in">
            {/* Close Button */}
            <div className="flex justify-end p-3">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 cursor-pointer hover:scale-105 duration-200 hover:text-red-500 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center px-6 pb-6 gap-6">
              <img
                src={hack.img}
                className="w-full md:w-1/2 rounded-xl shadow-md"
                alt="Hackathon Banner"
              />

              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-[#0078D4]">{hack.name}</h2>
                <p className="text-gray-700 mt-2">
                  📍 {hack.location}
                  <br />🗓️ {hack.date}
                </p>

                <a href={hack.link} target="_blank">
                  <button className="mt-4 px-5 py-2 rounded-full font-semibold bg-[#0078D4] text-white hover:bg-blue-600 transition-all shadow">
                    Register Now →
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------- HERO SECTION ---------------------- */}
      <div
        className="min-h-screen w-full overflow-hidden bg-[#0078D4] flex flex-col items-center justify-center pt-20"
        id="hero"
      >
        <div className="relative select-none z-10 text-center text-white">
          <p className="text-xl mb-6 font-medium tracking-wide text-blue-100 animate-fade-in">
            MSC-MSIT
          </p>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none mb-4 relative">
            <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
              MICROSOFT
              <br />
              STUDENT CHAPTER
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-blue-300/30 to-cyan-300/20 blur-3xl -z-10 animate-pulse"></div>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-70 animate-fade-in animation-delay-2000"></div>

          {/* JOIN COMMUNITY BUTTON */}
          <a href="https://linktr.ee/mscmsit" target="_blank">
            <button className="mt-10 px-5 py-2 rounded-full font-semibold text-sm md:text-base tracking-wide bg-gradient-to-br from-white via-blue-100 to-cyan-200 text-[#0078D4] border border-[#0078D4] shadow-sm hover:bg-blue-50 hover:text-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer">
              Join our Community
            </button>
          </a>

          {/* ---------------------- HACKATHON PREVIEW BELOW MSC TITLE ---------------------- */}
          <div
            onClick={() => setIsOpen(true)}
            className="mt-12 mx-auto w-[90%] md:w-[600px] bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-lg border border-white/20 cursor-pointer hover:scale-[1.02] transition-all flex items-center gap-4"
          >
            <img
              src={hack.img}
              alt="hack preview"
              className="w-20 h-20 rounded-lg object-cover shadow-md"
            />

            <div className="text-left">
              <h3 className="text-white text-xl font-semibold">{hack.name}</h3>
              <p className="text-blue-100 text-sm">
                📍 {hack.location} | 🗓️ {hack.date}
              </p>
            </div>
          </div>
        </div>

        <AmoebaComponent />
        <CanvasCursor />
      </div>
    </>
  );
}

export default HeroSection;
