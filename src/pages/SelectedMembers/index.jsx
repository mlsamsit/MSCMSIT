import React, { useState, useEffect } from "react";
import { Star,PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";

import { shortlistedData, shortlistedCategories } from "../../Data/shortlistedData";

const generateStats = () => ({
  confidence: Math.floor(Math.random() * 41) + 60,
  skills: Math.floor(Math.random() * 41) + 60,
  creativity: Math.floor(Math.random() * 41) + 60,
  teamwork: Math.floor(Math.random() * 41) + 60,
});

const StatBar = ({ label, value }) => (
  <div className="mb-2">
    <div className="flex justify-between text-xs text-gray-600 mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-2 bg-[#0078D4] rounded-full transition-all"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const CandidateCard = ({ member }) => {
  const [stats, setStats] = useState({});
  const [pokemonImg, setPokemonImg] = useState("");

  useEffect(() => {
    setStats(generateStats());
    const fetchImage = async () => {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${member.pokemon.toLowerCase()}`
        );
        const data = await res.json();
        const img = data.sprites.other["official-artwork"].front_default;
        setPokemonImg(img);
      } catch (err) {
        console.error("Failed to fetch Pokémon image:", err);
      }
    };
    fetchImage();
  }, [member.pokemon]);

  return (
    <div className="p-6 rounded-xl border border-gray-200 shadow-lg bg-gradient-to-br from-[#0078D4]/10 to-white hover:scale-105 transition-all">
      <h3 className="text-xl font-bold text-[#0078D4] mb-1">{member.name}</h3>
      <p className="text-gray-600 font-medium mb-4">Class {member.class}</p>
      {pokemonImg && (
        <img
          src={pokemonImg}
          alt={member.pokemon}
          className="w-40 h-40 mx-auto mb-4 drop-shadow-lg"
        />
      )}
      <StatBar label="Confidence" value={member.confidence} />
      <StatBar label="Skills" value={member.skills} />
    </div>
  );
};

const Pokeball = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" stroke="black" strokeWidth="4" fill="red" />
    <path d="M2 50h96a48 48 0 01-96 0z" fill="white" stroke="black" strokeWidth="3" />
    <circle cx="50" cy="50" r="12" fill="white" stroke="black" strokeWidth="3" />
    <circle cx="50" cy="50" r="6" fill="lightgray" />
  </svg>
);

const Balloons = () => {
  const colors = ["#FF3C38", "#FF9F1C", "#2EC4B6", "#E71D36", "#FF6B6B"];
  const balloonCount = 10;

  return (
    <div className="absolute w-full h-full top-0 left-0 z-30 pointer-events-none">
      {Array.from({ length: balloonCount }).map((_, i) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = 5 + Math.random() * 5;
        return (
          <div
            key={i}
            className="absolute w-10 h-14 rounded-full"
            style={{
              backgroundColor: color,
              left: `${left}%`,
              bottom: "-20px",
              animation: `floatUp ${duration}s ease-in forwards`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-200px) scale(1.1); }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default function Index() {
  const [filter, setFilter] = useState("all");
  const [visibleMembers, setVisibleMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [showBalloons, setShowBalloons] = useState(false);

  const triggerCelebration = () => {
    // setShowBalloons(true);
    confetti({
      particleCount: 1000,
      spread: 800,
      origin: { y: 0.4 },
    });
    // setTimeout(() => setShowBalloons(false), 5000);
  };

  useEffect(() => triggerCelebration(), []);

  useEffect(() => {
    setIsLoading(true);
    setVisibleMembers(filter === "all" ? Object.values(shortlistedData).flat() : shortlistedData[filter] || []);
    setIsLoading(false);
  }, [filter]);

  return (
    <div className="min-h-screen relative bg-white tracking-tighter">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0078D4]"></div>
        <div
          className="fixed inset-0 overflow-hidden pointer-events-none opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #ffffff33 0%, transparent 50%), radial-gradient(circle at 80% 70%, #ffffff22 0%, transparent 50%)`,
            backgroundSize: "500px 500px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <Pokeball className="absolute top-16 left-20 w-20 h-20 opacity-30 animate-float-slow rotate-12" />
          <Pokeball className="absolute bottom-20 right-24 w-28 h-28 opacity-40 animate-float-fast -rotate-12" />
          <Pokeball className="absolute top-1/2 left-1/2 -translate-x-1/2 w-40 h-40 opacity-10 animate-float-slower" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Star className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Shortlisted Members</span>
          </div>
          <button
            onClick={triggerCelebration}
            className="inline-flex md:ml-5 mt-2 md:mt-0 focus-none items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-12 py-2 border border-white/20"
          >
            <PartyPopper className="w-4 h-4 text-white"/>
            <span className="text-white text-sm font-medium">Celebrate</span>
          </button>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight uppercase drop-shadow-lg">
            Meet the Shortlisted
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Celebrating the brightest individuals who stood out with their dedication, skills, and passion. These are the ones who made it to the shortlist!
          </p>
        </div>
        <div className="container mx-auto px-4 -mt-8 relative z-20">
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {shortlistedCategories.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col items-center justify-center w-36 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="text-2xl font-bold text-white">{cat.count}</div>
                <div className="text-sm text-white/80 mt-1">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 p-3">
          <div className="flex flex-wrap justify-center gap-2">
            {shortlistedCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`group relative px-3 py-2 rounded-lg text-sm whitespace-nowrap font-medium transition-all duration-300 transform hover:scale-105 ${filter === category.id
                    ? "bg-[#0078D4] text-white shadow-lg"
                    : "bg-gray-200 hover:bg-gray-100 text-gray-700 hover:shadow-md"
                  }`}
              >
                <div className="flex items-center gap-1">
                  <span className="text-base">{category.icon}</span>
                  <span>{category.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${filter === category.id
                        ? "bg-white/20 text-white"
                        : "bg-white text-gray-600 border border-gray-200"
                      }`}
                  >
                    {category.count}
                  </span>
                </div>
                {filter === category.id && (
                  <div className="absolute inset-0 bg-[#0078D4] rounded-lg blur opacity-30 -z-10"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Member Cards */}
      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-[#0078D4] rounded-full border-t-transparent animate-spin"></div>
          </div>
        ) : visibleMembers.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 text-[#0078D4]">👥</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No shortlisted members</h3>
            <p className="text-gray-500">Try selecting a different department</p>
          </div>
        ) : (
          <div
            className="grid gap-6 justify-center mx-auto"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              maxWidth: "1024px",
            }}
          >
            {visibleMembers.map((member, idx) => (
              <CandidateCard key={idx} member={member} />
            ))}
          </div>
        )}
      </div>

      {/* {showBalloons && <Balloons />} */}

      <style jsx>{`
        @keyframes float-slow {0%,100%{transform:translateY(0) rotate(12deg);}50%{transform:translateY(-15px) rotate(12deg);}}
        @keyframes float-fast {0%,100%{transform:translateY(0) rotate(-12deg);}50%{transform:translateY(-20px) rotate(-12deg);}}
        @keyframes float-slower {0%,100%{transform:translate(-50%,0);}50%{transform:translate(-50%,-10px);}}
        .animate-float-slow{animation:float-slow 6s ease-in-out infinite;}
        .animate-float-fast{animation:float-fast 4s ease-in-out infinite;}
        .animate-float-slower{animation:float-slower 8s ease-in-out infinite;}
        @keyframes pulse-sine{0%,100%{transform:scale(1);}50%{transform:scale(1.05);}}
        .animate-pulse-sine{animation:pulse-sine 2s infinite ease-in-out;}
      `}</style>
    </div>
  );
}
