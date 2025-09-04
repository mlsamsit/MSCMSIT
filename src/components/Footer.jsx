import React from "react";
import {
  Instagram,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Users,
  Code,
  ExternalLink,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer with Gradient Background */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-[#0078D4] relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full animate-pulse"></div>
          <div
            className="absolute top-20 -left-20 w-60 h-60 bg-gradient-to-br from-indigo-200/20 to-blue-300/20 rounded-full animate-bounce"
            style={{ animationDuration: "6s" }}
          ></div>
          <div
            className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-br from-sky-200/25 to-blue-500/25 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Logo & About Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-[5rem] h-[5rem]">
                  <img src="./mscmsitlogo.png" className="" alt="" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0078D4] to-blue-800 bg-clip-text text-transparent">
                    MSC-MSIT
                  </h2>
                  <p className="text-gray-600 font-medium">Student Chapter</p>
                </div>
                
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold text-[#0078D4]">
                    Microsoft Learn Student Chapter
                  </span>{" "}
                  at Maharaja Surajmal Institute of Technology
                </p>
                <p className="text-gray-600">
                  Empowering students through technology, innovation, and
                  collaborative learning in the Microsoft ecosystem.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-md">
                  <Users className="w-6 h-6 text-[#0078D4] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">5000+</div>
                  <div className="text-sm text-gray-600">Developers</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-md">
                  <Code className="w-6 h-6 text-[#0078D4] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">9</div>
                  <div className="text-sm text-gray-600">Departments</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-md">
                  <Calendar className="w-6 h-6 text-[#0078D4] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">25+</div>
                  <div className="text-sm text-gray-600">Events</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0078D4] to-blue-600 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Our Projects", icon: Code },
                  { name: "Upcoming Events", icon: Calendar },
                  { name: "Join Our Team", icon: Users },
                  { name: "Resources", icon: ExternalLink },
                ].map((link, index) => (
                  <li key={index} className="group">
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 hover:text-[#0078D4] transition-colors duration-300 py-2"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 relative">
                Connect With Us
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0078D4] to-blue-600 rounded-full"></div>
              </h3>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-[#0078D4] mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">MSIT Campus</p>
                    <p>C-4 Janakpuri, New Delhi - 110058</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-[#0078D4]" />
                  <span className="text-sm">mscmsit@gmail.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700">
                  Follow Our Journey
                </p>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: Instagram,
                      color: "from-purple-500 to-pink-500",
                      href: "https://www.instagram.com/mscmsit/",
                    },
                    {
                      icon: Github,
                      color: "from-gray-700 to-gray-900",
                      href: "https://github.com/mlsamsit",
                    },
                    {
                      icon: Linkedin,
                      color: "from-blue-600 to-blue-700",
                      href: "https://www.linkedin.com/company/mscmsit/posts/?feedView=all",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      target="_blank"
                      href={social.href}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transform transition-all duration-300 hover:-translate-y-1`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Gradient */}
      <div className="bg-gradient-to-r from-[#0078D4] via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm">
              <span>Created and Maintained by</span>
              <span className="font-semibold px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                MSC Leads
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span>© {new Date().getFullYear()} MSC MSIT, made with</span>
              <Heart
                className="w-4 h-4 text-red-300 animate-pulse"
                fill="currentColor"
              />
              <span>in Delhi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
