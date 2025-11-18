import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AmoebaComponent from "../ui/Amoeba";
import CanvasCursor from "../ui/MousePointer";

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");

  const targetDate = new Date("2025-11-21T08:00:00"); // 21st Nov 8AM

  const hack = {
    name: "CTRL + ALT + VIBE",
    date: "21st November 2025",
    location: "MSIT - 06 Seminal Hall",
    img: "https://ctrlaltvibe.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F4ab65cc19d21495d8d95356ba2e67b06%2Fassets%2Fcover%2F56.png&w=1440&q=100",
    link: "https://ctrlaltvibe.devfolio.co/",
  };

  // ---------------- COUNTDOWN LOGIC ----------------
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate - now;

      // Time window after event start (9 hours in ms)
      const eventDuration = 9 * 60 * 60 * 1000;

      // If countdown finished AND within 9 hours after start
      if (diff <= 0 && Math.abs(diff) <= eventDuration) {
        setTimeLeft("Event has Started 🎉");
        return;
      }

      // If event is over after 9 hours
      if (diff <= -eventDuration) {
        setTimeLeft("The Event is over now. 🔚");
        return;
      }

      // Normal countdown (before start)
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d : ${hours}h : ${mins}m : ${secs}s`);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <>
      {/* ------------------ MODAL ------------------ */}
      {isOpen && (
        <div className="fixed inset-0 bg-blue-900/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-blue-300 to-blue-600 text-white rounded-2xl shadow-2xl w-[90%] md:w-[700px] overflow-hidden animate-fade-in border border-blue-300/20">

            {/* Close Button */}
            <div className="flex justify-end p-3">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 cursor-pointer hover:text-red-300 hover:scale-110 duration-200 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center px-6 pb-6 gap-6 text-white">
              <img
                src={hack.img}
                className="w-full md:w-1/2 rounded-xl shadow-xl"
                alt="Hackathon Banner"
              />

              <div className="text-center md:text-left">
                <h2 className="text-[1.90rem] font-extrabold bg-gradient-to-r 
                    from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent 
                    drop-shadow-xl tracking-tight">
                  {hack.name}
                </h2>

                <h3 className="text-lg font-medium text-cyan-200">
                  A vibe coding hackathon
                </h3>


                <p className="mt-2 text-blue-100 leading-relaxed">
                  📍 {hack.location}
                  <br />🗓️ {hack.date}
                </p>

                {/* Countdown inside modal */}
                <p className="mt-3 text-lg font-semibold text-yellow-300">
                  Starts in: {timeLeft}
                </p>

                <a href={hack.link} target="_blank">
                  <button className="mt-4 px-5 py-2 rounded-full cursor-pointer font-semibold bg-white text-blue-700 hover:bg-blue-50 transition-all shadow">
                    Register Now →
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------ HERO SECTION ------------------ */}
      <div
        className="min-h-screen w-full overflow-hidden bg-[#0078D4] flex flex-col items-center justify-center pt-20"
        id="hero"
      >
        <div className="relative select-none z-10 text-center text-white">
          <p className="text-xl mb-6 font-medium tracking-wide text-blue-100 animate-fade-in">
            MSC-MSIT
          </p>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none mb-4 relative">
            <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
              MICROSOFT
              <br />
              STUDENT CHAPTER
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-blue-300/30 to-cyan-300/20 blur-3xl -z-10 animate-pulse"></div>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-70 animate-fade-in animation-delay-2000"></div>

          {/* Join Button */}
          <a href="https://linktr.ee/mscmsit" target="_blank">
            <button className="mt-10 px-5 py-2 rounded-full font-semibold text-sm md:text-base tracking-wide bg-gradient-to-br from-white via-blue-100 to-cyan-200 text-[#0078D4] border border-[#0078D4] shadow-sm hover:bg-blue-50 hover:text-blue-500 transition-all duration-200 cursor-pointer">
              Join our Community
            </button>
          </a>

          {/* ----------- EVENT PREVIEW WITH COUNTDOWN ---------- */}
          <div
            onClick={() => setIsOpen(true)}
            className="mt-12 mx-auto w-[90%] md:w-[600px] bg-white/10 backdrop-blur-xl p-[0.6rem] rounded-xl shadow-lg border border-white/20 cursor-pointer hover:scale-[1.02] transition-all flex items-center gap-4"
          >
            <img
              src={hack.img}
              alt="hack preview"
              className="w-27 h-27 rounded-lg object-cover shadow-md"
            />

            <div className="text-left w-full">
              <h1 className="text-xl md:text-[1.40rem] font-bold text-center text-cyan-200 mb-2 tracking-wide">
                Upcoming Hackathon
              </h1>


              <h3 className="text-cyan-100 ml-3 text-xl font-semibold">{hack.name}</h3>

              <p className="text-blue-100 text-sm">
                📍 {hack.location} | 🗓️ {hack.date}
              </p>

              <p className="text-yellow-300 text-sm mt-1 font-semibold">
                ⏳ Starts in: {timeLeft}
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
