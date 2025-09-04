import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Add custom scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      .custom-scrollbar::-webkit-scrollbar {
        width: 5px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: rgba(0, 120, 212, 0.3);
        border-radius: 20px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 120, 212, 0.5);
      }
      .custom-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: rgba(0, 120, 212, 0.3) transparent;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const items = [
    {
      id: 1,
      heading: "Goals",
      hoverPara: "Our primary goal at MSC MSIT is to empower students with industry-relevant skills that bridge the gap",
      para: [
        {
          id: 1,
          paraHeading: "",
          subPara: "Our primary goal at MSC MSIT is to empower students with industry-relevant skills that bridge the gap between classroom learning and professional demands. We aim to equip students with the technical expertise and practical knowledge needed to excel in today's competitive landscape.",
        },
        {
          id: 2,
          paraHeading: "",
          subPara: "To achieve this, we organize engaging technical workshops, hackathons, and seminars designed to enhance learning and spark innovation. These initiatives provide hands-on experience and encourage students to think critically and creatively about solving real-world challenges.",
        },
        {
          id: 3,
          paraHeading: "",
          subPara: "We also focus on creating valuable networking opportunities by connecting students with industry professionals, mentors, and peers. By building a strong, collaborative community, we strive to nurture the next generation of tech leaders who are ready to make a meaningful impact in their fields.",
        }
      ],
      icon: "🚀"
    },
    {
      id: 2,
      heading: "Mission & Vision",
      hoverPara: "To bridge academics with industry by equipping students with practical skills and fostering an innovative, collaborative community of future tech leaders.",
      para: [
        {
          id: 1,
          paraHeading: "Mission",
          subPara: "Our mission is to bridge the gap between academic learning and industry requirements. We aim to equip students with practical skills, knowledge, and experience that align with the evolving demands of the tech industry. Through targeted initiatives and real-world exposure, we strive to ensure that students are well-prepared to thrive in their professional careers.",
        },
        {
          id: 2,
          paraHeading: "Vision",
          subPara: "We envision creating a community of skilled professionals who are not only proficient in their technical fields but also contribute meaningfully to the growth and advancement of the tech industry. By fostering innovation, collaboration, and continuous learning, we aspire to shape the next generation of tech leaders who will make a lasting impact on the world.",
        },
        {
          id: 3,
          paraHeading: "",
          subPara: "",
        }
      ],
      icon: "🎯"
    },
    {
      id: 3,
      heading: "Perks",
      hoverPara: "As a member of MSC MSIT, you gain exclusive access to a wide range of opportunities designed to propel your career and personal growth",
      para: [
        {
          id: 1,
          paraHeading: "",
          subPara: "As a member of MSC MSIT, you gain exclusive access to a wide range of opportunities designed to propel your career and personal growth. Our workshops are led by industry experts who cover the latest technological advancements and in-demand skills. These workshops provide hands-on learning experiences, allowing you to develop a deeper understanding of emerging fields like AI, IoT, and web development, among others.",
        },
        {
          id: 2,
          paraHeading: "",
          subPara: "We also offer mentorship programs, connecting you with seasoned professionals who guide you in navigating both academic and career challenges. Whether you need advice on technical concepts, career pathways, or personal development, our mentors are here to help you reach your potential and accelerate your growth.",
        },
        {
          id: 3,
          paraHeading: "",
          subPara: "As a member, you will benefit from valuable industry connections that open doors to internships, job opportunities, and collaborations. Networking with like-minded peers and professionals enhances your chances of building a successful career in tech.",
        },
        {
          id: 4,
          paraHeading: "",
          subPara: "We also provide courses, which allow you to acquire credentials that demonstrate your expertise in key areas. These certifications make you more competitive in the job market and equip you with the skills employers are looking for.",
        },
        {
          id: 5,
          paraHeading: "",
          subPara: "Lastly, our hands-on projects give you real-world experience, helping you apply your knowledge and stand out to future employers. Join MSC MSIT today and take the first step toward accelerating your career in the tech industry!",
        },
      ],
      icon: "💎"
    },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative min-h-screen" id="about">
      {/* Single smooth gradient from blue to white */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0078D4] via-[#4aa3e4] via-[#87ceeb] via-[#b8dff0] via-[#d9ebf9] to-white"></div>

      {/* Content */}
      <div className="relative w-full flex justify-center px-4">
        <div className="pt-24 md:pt-40 lg:pt-60 text-gray-800 flex flex-col gap-6 md:gap-10 justify-center items-center w-full max-w-7xl" style={{ fontFamily: "Bebas Neue" }}>
          {/* Heading - responsive sizing */}
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl tracking-wide text-center">ABOUT US</h1>
            <div className="w-40 sm:w-60 md:w-80 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto opacity-70 animate-fade-in animation-delay-2000"></div>
          </div>
          <div>
            <img src="/group.jpg" alt="Group-Image" className="rounded-2xl md:h-[40rem]"/>
          </div>
          
          {/* Description - responsive text size */}
          <div className="px-4 sm:px-8 md:px-12">
            <p className="text-justify md:text-center text-gray-700 font-extralight text-lg sm:text-xl md:text-2xl">
              Microsoft Student Chapter MSIT is a dynamic community at Maharaja Surajmal Institute of Technology, dedicated to fostering innovation, leadership, and technical excellence. Through workshops, hackathons, seminars, and collaborative projects, we bridge the gap between academics and real-world applications. Rooted in creativity, teamwork, and continuous learning, MSC MSIT empowers students to build in-demand skills, connect with peers, and grow into future leaders and innovators.
            </p>
          </div>
          
          {/* Cards container */}
          <div className="w-full py-8 md:py-12 lg:py-16">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {items.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.id * 0.2 }}
                  whileHover={{ 
                    y: isMobile ? 0 : -10,
                    boxShadow: "0 25px 30px -12px rgba(0, 120, 212, 0.28)",
                  }}
                  className="w-full sm:w-80 h-72 sm:h-80 rounded-3xl bg-gradient-to-br from-[#0078D4]/95 via-[#1a88da]/95 to-[#2e96e6]/90 text-white overflow-hidden cursor-pointer relative group backdrop-blur-md border border-white/30 hover:border-white/50 transition-all duration-500"
                  onClick={() => openModal(item)}
                >
                  {/* Keep decorative elements */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full -mr-12 -mt-12 backdrop-blur-md group-hover:bg-white/10 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-8 -mb-8 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-500"></div>
                  
                  {/* Background texture */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 right-0 h-full w-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-400/10 rounded-3xl transition-all duration-700 group-hover:shadow-[inset_0px_0px_60px_rgba(66,153,225,0.25)]"></div>
                  
                  <div className="h-full w-full p-4 sm:p-8 flex flex-col items-center justify-center relative z-10">
                    {/* Icon */}
                    {/* <div className={`text-4xl sm:text-5xl absolute top-6 sm:top-8 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all duration-500 group-hover:animate-pulse`}>
                      {item.icon}
                    </div> */}
                    
                    {/* Title - initially centered, moves to top on hover */}
                    <h2 
                      className={`text-5xl sm:text-5xl md:text-6xl text-center font-bold tracking-wide drop-shadow-md transition-all duration-500 absolute transform ${isMobile ? 'translate-y-[-40px]' : 'group-hover:translate-y-[-40px] md:group-hover:translate-y-[-60px]'} ${isMobile ? 'text-2xl sm:text-3xl' : 'group-hover:text-2xl sm:group-hover:text-3xl'}`}
                      style={{
                        textShadow: "0 2px 10px rgba(0,0,0,0.1)"
                      }}
                    >
                      {item.heading}
                    </h2>
                    
                    {/* Text visible on hover or always on mobile */}
                    <div className={`${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transform translate-y-5 ${isMobile ? 'translate-y-0' : 'group-hover:translate-y-0'} transition-all duration-500 ease-out text-center max-w-[90%] mx-auto mt-10 sm:mt-14`}>
                      <p className="text-white/95 text-sm sm:text-lg font-normal leading-relaxed line-clamp-3 mb-3 sm:mb-5 px-2 py-1 rounded-lg">
                        {item.hoverPara}...
                      </p>
                      
                      {/* Button */}
                      <span className="py-1 sm:py-1.5 px-3 sm:px-4 bg-white/20 hover:bg-white/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md transform group-hover:scale-100 hover:scale-105 flex items-center gap-1 sm:gap-2 justify-center mx-auto">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal/Popup - Responsive sizing */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh]"
          >
            <div className="relative p-4 sm:p-6 md:p-8 max-h-[90vh] sm:max-h-[80vh] overflow-y-auto custom-scrollbar">
              {/* Close button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 font-bold text-xl z-10"
              >
                ×
              </button>
              
              <div className="mb-2 flex items-center pt-1">
                <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">{selectedItem.icon}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0078D4]">{selectedItem.heading}</h3>
              </div>
              
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#0078D4] to-blue-600 mb-4 sm:mb-6"></div>
              
              {/* Paragraph content */}
              <div className="space-y-3 sm:space-y-4">
                {selectedItem.para.map((paragraph) => (
                  paragraph.subPara && (
                    <div key={paragraph.id}>
                      {paragraph.paraHeading && (
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                          {paragraph.paraHeading}
                        </h4>
                      )}
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {paragraph.subPara}
                      </p>
                    </div>
                  )
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                <button
                  onClick={closeModal}
                  className="bg-[#0078D4] hover:bg-blue-700 text-white py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default About;