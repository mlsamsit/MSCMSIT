import React, { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { membersData, categories, departmentInfo} from "../../components/membersData";
import MemberCard from "../../components/MemberCard";

function Members() {
  const sections = [
    {
      key: "teacherCoordinators",
      title: "Academic Coordinators",
      data: membersData.teacherCoordinators,
    },
    { key: "leads", title: "Society Leadership", data: membersData.leads },
    { key: "advisors", title: "Advisors", data: membersData.advisors },
    {
      key: "heads",
      title: "Department Heads",
      data: Object.values(membersData)
        .flat()
        .filter((m) => m.position === "Head"),
    },
    {
      key: "deputyHeads",
      title: "Deputy Heads",
      data: Object.values(membersData)
        .flat()
        .filter((m) => m.position === "Deputy Head"),
    },
  ];

  const [filter, setFilter] = useState("all");
  const [visibleMembers, setVisibleMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const totalMembers = Object.values(membersData).flat().length;

  useEffect(() => {
    setIsLoading(true);
    console.log("filtering", filter);
    if (filter === "all") {
      setVisibleMembers(Object.values(membersData).flat());
    } else {
      setVisibleMembers(membersData[filter]);
    }
    setIsLoading(false);
  }, [filter]);

  return (
    <div className="min-h-screen bg-white tracking-tighter">
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, #0078D4 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #0078D4 0%, transparent 50%)
          `,
            backgroundSize: "400px 400px",
            opacity: "0.03",
          }}
        ></div>
      </div>

      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0078D4]"></div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/30 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-white/20 rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Users className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">
                Meet Our Team
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight uppercase">
              Our Team
            </h1>

            <div className="flex justify-center mb-6">
              <div className="w-24 h-1.5 bg-white/50 rounded-full"></div>
            </div>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate individuals driving innovation and excellence
              in our society. Together, we're building the future of technology.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl font-bold text-white">{21}</div>
                <div className="text-sm text-white/80">Team Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl font-bold text-white">{9}</div>
                <div className="text-sm text-white/80">Departments</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-white/80">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 p-3">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`group relative px-3 py-2 rounded-lg text-sm whitespace-nowrap font-medium transition-all duration-300 transform hover:scale-105 ${
                  filter === category.id
                    ? "bg-[#0078D4] text-white shadow-lg"
                    : "bg-gray-200 hover:bg-gray-100 text-gray-700 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="text-base">{category.icon}</span>
                  <span>{category.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      filter === category.id
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

      {filter === "all" && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          {sections.map((section) => (
            <div key={section.key} className="mb-16">
              <div className="text-center mb-10">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#0078D4" }}
                >
                  {section.title}
                </h2>
                <div
                  className="w-24 h-1 mx-auto rounded-full"
                  style={{ backgroundColor: "#0078D4" }}
                ></div>
              </div>

              <div
                className="grid gap-8 mx-auto"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, 320px)",
                  justifyContent: "center",
                }}
              >
                {section.data.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {filter !== "all" && (
        <div>
          {departmentInfo[filter] && (
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-3 bg-[#0078D4]/10 rounded-full px-6 py-3 mb-6">
                  <span className="text-3xl">
                    {departmentInfo[filter].icon}
                  </span>
                  <span className="text-[#0078D4] font-bold text-lg">
                    {departmentInfo[filter].title}
                  </span>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {departmentInfo[filter].description}
                </p>

                <div className="w-24 h-1 bg-[#0078D4] rounded-full mx-auto"></div>
              </div>
            </div>
          )}

          <div className="container mx-auto px-4 pb-16">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-64">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
                  <div className="absolute inset-0 w-16 h-16 border-4 border-[#0078D4] rounded-full border-t-transparent animate-spin"></div>
                </div>
                <p className="mt-4 text-gray-600 font-medium">
                  Loading our amazing team...
                </p>
              </div>
            ) : visibleMembers.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4 text-[#0078D4]">👥</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  No members found
                </h3>
                <p className="text-gray-500">
                  Try selecting a different department to explore our team
                </p>
              </div>
            ) : (
              <div
                className="grid gap-8 justify-center mx-auto"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 320px))",
                  maxWidth:
                    visibleMembers.length < 3
                      ? `${visibleMembers.length * 340}px`
                      : "1024px",
                }}
              >
                {visibleMembers.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Members;
