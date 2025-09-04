import React from 'react';
import { motion } from 'framer-motion';

function Carousel() {
  // Gallery images data
  const images = [
    { id: 1, img: "/moments/pic1.png", alt: "MSC Event 1" },
    { id: 2, img: "/moments/pic2.png", alt: "MSC Workshop" },
    { id: 3, img: "/moments/pic3.png", alt: "Team Celebration" },
    { id: 4, img: "/moments/pic4.png", alt: "Hackathon" },
    { id: 5, img: "/moments/pic5.png", alt: "Community Meetup" },
    { id: 6, img: "/moments/pic1.png", alt: "Women in Engineering" },
    { id: 7, img: "/moments/pic2.png", alt: "Microsoft Visit" },
    { id: 8, img: "/moments/pic3.png", alt: "Tech Talk" },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR MOMENTS</h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#0078D4] to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Highlights from our workshops, hackathons, and community events
          </p>
        </motion.div>

        {/* Images Carousel */}
        <div className="relative">
          {/* First scrolling row - left to right */}
          <div className="mb-8 overflow-hidden">
            <motion.div 
              className="flex gap-4"
              animate={{ x: ["-10%", "-60%"] }}
              transition={{ 
                repeat: Infinity, 
                duration: 25,
                ease: "linear",
                repeatType: "loop" 
              }}
            >
              {/* Double the images to ensure continuous loop */}
              {[...images, ...images].reverse().map((item, index) => (
                <div 
                  key={`${item.id}-rev-${index}`} 
                  className="flex-shrink-0"
                  style={{ 
                    transform: `rotate(${index % 2 === 0 ? '1.5deg' : '-1.5deg'})`,
                  }}
                >
                  <div className="h-60 w-60 md:h-56 md:w-72 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white p-1 hover:scale-105">
                    <div className="relative h-full w-full">
                      <img 
                        src={item.img} 
                        alt={item.alt}
                        className="h-full w-full object-cover rounded-lg"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://source.unsplash.com/random/800x600/?technology,event&sig=${index + 20}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-3">
                        <p className="text-white text-sm font-medium">{item.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second scrolling row - right to left */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-4"
              animate={{ x: ["-60%", "-10%"] }}
              transition={{ 
                repeat: Infinity, 
                duration: 28,
                ease: "linear",
                repeatType: "loop" 
              }}
            >
              {/* Double the images and reverse for visual variety */}
              {[...images, ...images].reverse().map((item, index) => (
                <div 
                  key={`${item.id}-rev-${index}`} 
                  className="flex-shrink-0"
                  style={{ 
                    transform: `rotate(${index % 2 === 0 ? '1.5deg' : '-1.5deg'})`,
                  }}
                >
                  <div className="h-60 w-60 md:h-56 md:w-72 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white p-1 hover:scale-105">
                    <div className="relative h-full w-full">
                      <img 
                        src={item.img} 
                        alt={item.alt}
                        className="h-full w-full object-cover rounded-lg"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://source.unsplash.com/random/800x600/?technology,event&sig=${index + 20}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-3">
                        <p className="text-white text-sm font-medium">{item.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth fade effect on edges */}
          <div className="absolute top-0 bottom-0 left-0 w-5 md:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-5 md:w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

      </div>
    </div>
  );
}

export default Carousel;