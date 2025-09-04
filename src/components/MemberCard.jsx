import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const MemberCard = ({ member }) => {
  return (
    <div className="bg-gradient-to-b from-[#0078D4] via-[#a2d0ff] to-[#edf6ff] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img 
          src={member.photo} 
          alt={member.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-center text-gray-800 mb-1">
          {member.name}
        </h3>

        <p className="text-sm font-medium text-center text-gray-600 mb-1">
          {member.department}
        </p>

        <p className="text-sm text-center font-semibold mb-3" style={{ color: '#0078D4' }}>
          {member.position}
        </p>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {member.about}
        </p>
        
        <div className="flex justify-center space-x-3">
          {member.linkedin && (
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              style={{ color: '#0078D4' }}
            >
              <Linkedin size={20} />
            </a>
          )}
          {member.instagram && (
            <a 
              href={member.instagram || "https://msc-website-iota.vercel.app/members"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              style={{ color: '#E4405F' }} 
            >
              <Instagram size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
