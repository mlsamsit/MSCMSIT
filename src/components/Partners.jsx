import React from 'react';
import { motion } from 'framer-motion';

function Partners() {
  // Partner logos data with company name and logo URL
  const partners = [
    { 
      id: 1, 
      name: "Microsoft", 
      logo: "/logo/microsoft.png",
      url: "https://microsoft.com"
    },
    { 
        id: 2, 
        name: "xyz", 
        logo: "/logo/xyz.png",
        url: "https://gen.xyz/"
    },
    { 
        id: 3, 
        name: "Reskill", 
        logo: "/logo/reskill.png",
        url: "https://reskilll.com/"
    },
    { 
        id: 4, 
        name: "Azure Developer Community", 
        logo: "/logo/azure-developer-community.jpg",
        url: "https://azdev.reskilll.com/"
    },
    { 
        id: 5, 
        name: "PW", 
        logo: "/logo/pw.png",
        url: "https://www.pw.live/"
    },
    { 
        id: 6, 
        name: "Hackquest", 
        logo: "/logo/hackquest.svg",
        url: "https://www.hackquest.io/"
    },
    { 
        id: 7, 
        name: "Open Campus", 
        logo: "/logo/open-campus.png",
        url: "https://opencampus.xyz/"
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR PARTNERS</h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#0078D4] to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading technology companies to bring the best learning experiences to our community.
          </p>
        </motion.div>

        {/* Partners Carousel */}
        <div className="relative">
          {/* First scrolling row - left to right */}
          <div className="mb-8 overflow-hidden">
            <motion.div 
              className="flex space-x-8"
              animate={{ x: ["-10%", "-60%"] }}
              transition={{ 
                repeat: Infinity, 
                duration: 25,
                ease: "linear",
                repeatType: "loop" 
              }}
            >
              {/* Double the partners to ensure continuous loop */}
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`} 
                  className="flex-shrink-0"
                >
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="h-24 w-48 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex items-center justify-center p-4 group-hover:transform group-hover:scale-105">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-h-16 max-w-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/150x80/f8f9fa/0078D4?text=${partner.name}`;
                        }}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second scrolling row - right to left */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex space-x-8"
              animate={{ x: ["-60%", "-10%"] }}
              transition={{ 
                repeat: Infinity, 
                duration: 28,
                ease: "linear",
                repeatType: "loop" 
              }}
            >
              {/* Double the partners and reverse for visual variety */}
              {[...partners, ...partners].reverse().map((partner, index) => (
                <div 
                  key={`${partner.id}-rev-${index}`} 
                  className="flex-shrink-0"
                >
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="h-24 w-48 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 group-hover:transform group-hover:scale-105">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-h-16 max-w-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/150x80/f8f9fa/0078D4?text=${partner.name}`;
                        }}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth fade effect on edges */}
          <div className="absolute top-0 bottom-0 left-0 w-5 md:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-5 md:w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="inline-block bg-white p-6 rounded-xl shadow-lg border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interested in partnering with us?</h3>
            <p className="text-gray-600 mb-4">
              Join our ecosystem and help shape the next generation of tech talent.
            </p>
            <button className="bg-[#0078D4] hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors duration-300 flex items-center mx-auto cursor-pointer" onClick={() => window.location.href="https://www.linkedin.com/company/mscmsit/"}>
              <span>Become a Partner</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Partners;