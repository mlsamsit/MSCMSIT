import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Menu items with routes
  const menuItems = [
    { name: 'Home', path: '/', hasDropdown: false, scrollTo: 'hero' },
    { name: 'Join MSC', path: '/joinmsc', hasDropdown: false },
    { name: 'About Us', path: '/', hasDropdown: false, scrollTo: 'about' }, // Special case for scrolling
    { name: 'Events', path: '/events', hasDropdown: false, scrollTo: null },
    { name: 'Blogs', path: 'https://dev.to/mscmsit', hasDropdown: false, scrollTo: null },
    { name: 'Members', path: '/members', hasDropdown: false, scrollTo: null },
    { name: 'Projects', path: '/projects', hasDropdown: false, scrollTo: null },
  ];

  // Handle scroll to section functionality
  const handleNavigation = (item) => {
    setActiveItem(item.name);
    if (item.scrollTo) {
      // If we're not on homepage, navigate to home first
      if (location.pathname !== '/') {
        // Use navigate to go to home, then scroll after navigation
        navigate('/', { state: { scrollTo: item.scrollTo } });
      } else {
        // We're already on homepage, just scroll
        scrollToSection(item.scrollTo);
      }
    } else {
      // Check if it's an external URL
      if (item.path.startsWith('http://') || item.path.startsWith('https://')) {
        // External URL - open in new tab
        window.open(item.path, '_blank', 'noopener,noreferrer');
      } else {
        // Internal route - use React Router navigate
        navigate(item.path);
      }
    }
    // Close mobile menu if open
    setIsOpen(false);
  };

  // Scroll to section helper
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Smooth scroll to section
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle hash-based scrolling on page load (for About Us from other pages)
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash && location.pathname === '/') {
      // Small delay to ensure component is fully rendered
      setTimeout(() => {
        scrollToSection(hash);
        // Clean up the hash from URL
        window.history.replaceState(null, null, '/');
      }, 1000);
    }
    // Handle scrollTo from navigation state (no reload)
    if (location.state && location.state.scrollTo && location.pathname === '/') {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 500);
    }
  }, [location.pathname, location.state]);

  // Determine active item based on current route and scroll position
  const getActiveItem = () => {
    const path = location.pathname;
    
    // Check if we're on the home page and need to highlight About based on scroll position
    if (path === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight/2 && rect.bottom > window.innerHeight/2;
        if (isVisible) {
          return 'About Us';
        }
      }
    }
    
    const item = menuItems.find(item => 
      path === item.path || 
      (path !== '/' && item.path !== '/' && path.startsWith(item.path))
    );
    return item ? item.name : 'Home';
  };

  const [activeItem, setActiveItem] = useState('Home');

  // Update active state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Only check for scroll-based active item on home page
      if (location.pathname === '/') {
        const newActiveItem = getActiveItem();
        if (newActiveItem !== activeItem) {
          setActiveItem(newActiveItem);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, activeItem]);

  // Update active item when route changes
  useEffect(() => {
    setActiveItem(getActiveItem());
  }, [location.pathname]);

  const toggleMobile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`fixed w-full sh top-0 left-0 z-50 transition-colors duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-100' 
          :  'bg-gradient-to-r from-[#0078D4]  via-[#1e96ff] to-[#00589b] shadow-lg'
      }`}>
        <div className="absolute top-[4.5rem] left-0 w-full -z-50 h-[20px] rounded-[1000%] pointer-events-none overflow-hidden">
           <div className="w-full h-[160px] -mt-[80px]
    bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.95)_0%,_rgba(180,220,255,0.6)_35%,_rgba(0,120,212,0.4)_60%,_transparent_100%)]
    blur-2xl opacity-90">
  </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo with normal navigation - no reload */}
            <button
              onClick={() => navigate('/')}
              className={`text-2xl font-black tracking-wide cursor-pointer transition-all duration-300 transform hover:scale-105 mr-8 ${
                isScrolled ? 'text-[#0078D4]' : 'text-white'
              }`}
            >
              <span className="relative">
                <img src="mscmsitlogo.png" alt="msc-msit-logo" className='h-16'/>
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'group-hover:w-full' : ''
                }`}></div>
              </span>
            </button>

            {/* Desktop Menu with Links - Changed from md: to lg: */}
            <ul className="hidden lg:flex items-center space-x-2">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`flex hover:cursor-pointer items-center space-x-2 px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-[#0078D4] hover:bg-blue-50' 
                        : 'text-white hover:text-gray-200 hover:bg-white/10'
                    } ${
                      activeItem === item.name 
                        ? isScrolled 
                          ? 'text-[#0078D4] bg-blue-50 shadow-md' 
                          : 'text-white bg-white/20 shadow-lg'
                        : ''
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </button>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/4 ${
                    activeItem === item.name ? 'w-3/4' : ''
                  }`}></div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0078D4]/20 to-[#106ebe]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 blur-sm transform scale-110"></div>
                </li>
              ))}
            </ul>

            {/* Mobile/Tablet Menu Button - Changed from md: to lg: */}
            <div className="lg:hidden ml-8">
              <button
                onClick={toggleMobile}
                className={`relative p-3 rounded-xl focus:outline-none transition-all duration-300 transform hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-blue-50' 
                    : 'text-white hover:bg-white/10'
                } ${isOpen ? 'rotate-90' : ''}`}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isOpen ? 'opacity-0 rotate-45 scale-0' : 'opacity-100 rotate-0 scale-100'
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-0'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu - Changed from md: to lg: */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-md border-t border-gray-100' 
              : 'bg-gradient-to-b from-[#0078D4] to-[#106ebe]'
          }`}>
            <ul className="px-8 py-6 space-y-4 max-h-[70vh] overflow-y-auto">
              {menuItems.map((item, index) => (
                <li key={index} className={`transform transition-all duration-500 delay-${index * 50} ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}>
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                      isScrolled
                        ? 'text-gray-700 hover:bg-blue-50 hover:text-[#0078D4]'
                        : 'text-white hover:bg-white/10'
                    } ${
                      activeItem === item.name 
                        ? isScrolled 
                          ? 'bg-blue-50 text-[#0078D4] shadow-lg' 
                          : 'bg-white/20 shadow-lg'
                        : ''
                    }`}
                  >
                    <span className="font-medium text-lg">{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-5 h-5 opacity-60" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Mobile menu decoration */}
            <div className="px-8 pb-6">
              <div className={`h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${
                isScrolled ? 'text-gray-400' : 'text-white'
              }`}></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet menu backdrop - Changed from md: to lg: */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;