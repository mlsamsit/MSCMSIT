import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Users, Calendar, Clock, Star, GitFork, Eye, Zap, Award, Sparkles } from 'lucide-react';

function Projects() {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Project data
  const projectsData = [
    {
      id: 1,
      title: "MSC MSIT Official Website",
      description: "A modern website for Microsoft Student Chapter MSIT built with React, Tailwind CSS and Three.js for interactive elements.",
      image: "/projects/web-1.png",
      category: "web",
      repoUrl: "https://github.com/mscmsit/msc-website",
      liveUrl: "https://mscmsit.in",
      featured: true,
      status: "Live"
    },
    {
      id: 2,
      title: "Bloggr",
      description: "A space where your voice finds clarity, your stories find purpose, and your ideas reach the world. Bloggr isn’t just a platform; it’s a thoughtfully designed home for creators who believe in the power of words to inspire, connect, and lead.",
      image: "/projects/web-2.png",
      category: "web",
      repoUrl: "https://github.com/Nithin0620/Bloggr",
      liveUrl: "https://bloggr-y7gx.onrender.com/",
      status: "Live"
    },
    {
      id: 3,
      title: "AI-Powered Portfolio Website Generator",
      description: "AI-powered study schedule optimizer using machine learning to adapt to individual learning patterns and preferences.",
      image: "/projects/AI-1.png",
      category: "ai",
      repoUrl: "https://github.com/Kashika221/resume_to_portfolio",
      liveUrl: "https://launchmyfolio.vercel.app/",
      status: "Live"
    },
    {
      id: 4,
      title: "AgriBuzz",
      description: "Agribuzz uses AI and technology to help farmers optimize operations and boost productivity. Together, we’re building a smarter, sustainable future for agriculture.",
      image: "/projects/AI-2.png",
      category: "ai",
      repoUrl: "https://github.com/Kashika221/Crop-Recommendation",
      liveUrl: "https://agribuzzz.onrender.com/agribuzz",
      status: "Live"
    },
    {
      id: 5,
      title: "0xCampus",
      description: "0xCampus is a decentralized educational platform where educators are rewarded fairly and learners get incentives for completing courses.",
      image: "/projects/web3.png",
      category: "web3",
      repoUrl: "https://github.com/takokan/0xCampus",
      liveUrl: "https://v0-video-posting-contract.vercel.app/",
      status: "Live"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🚀', count: projectsData.length },
    { id: 'featured', name: 'Featured', icon: '⭐', count: projectsData.filter(p => p.featured).length },
    { id: 'web', name: 'Web Development', icon: '💻', count: projectsData.filter(p => p.category === 'web').length },
    { id: 'ai', name: 'AI & ML', icon: '🤖', count: projectsData.filter(p => p.category === 'ai').length },
    { id: 'web3', name: 'Emerging Tech', icon: '🔮', count: projectsData.filter(p => p.category === 'web3').length },
  ];

  const statusColors = {
    'Live': 'bg-white text-[#0078D4] border-[#0078D4]/30',
    'Beta': 'bg-[#0078D4]/10 text-[#0078D4] border-[#0078D4]/30',
    'Alpha': 'bg-gray-100 text-gray-600 border-gray-300',
    'Development': 'bg-gray-100 text-gray-600 border-gray-300'
  };

  // Filter projects when filter changes
  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      const filteredProjects = filter === 'all' 
        ? projectsData 
        : filter === 'featured' 
          ? projectsData.filter(project => project.featured)
          : projectsData.filter(project => project.category === filter);
      
      setVisibleProjects(filteredProjects);
      setIsLoading(false);
    }, 300);
  }, [filter]);

  const getRandomImage = (category, id) => {
    const keywords = {
      web: 'coding,website,development',
      ai: 'artificial-intelligence,machine-learning',
      web3: 'blockchain,technology,future'
    };
    return `https://source.unsplash.com/800x500/?${keywords[category] || 'technology'}&sig=${id}`;
  };

  return (
    <div className="min-h-screen bg-white tracking-tighter">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #0078D4 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #0078D4 0%, transparent 50%)
          `,
          backgroundSize: '400px 400px',
          opacity: '0.03'
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0078D4]"></div>
        
        {/* Subtle geometric patterns */}
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
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Student Innovation Hub</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight uppercase">
              Our Projects
            </h1>
            
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1.5 bg-white/50 rounded-full"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Where innovation meets collaboration. Discover cutting-edge projects built by passionate students 
              pushing the boundaries of technology.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-lg mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl font-bold text-white">{projectsData.length}</div>
                <div className="text-sm text-white/80">Total Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl font-bold text-white">{projectsData.filter(p => p.featured).length}</div>
                <div className="text-sm text-white/80">Featured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Filter Section */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 p-2 overflow-x-auto">
          <div className="flex items-center justify-center gap-2 min-w-max">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`group relative px-6 py-3 rounded-xl whitespace-nowrap font-medium transition-all duration-300 transform hover:scale-105 ${
                  filter === category.id
                    ? 'bg-[#0078D4] text-white shadow-lg'
                    : 'bg-gray-200 hover:bg-gray-100 text-gray-700 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    filter === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-white text-gray-600 border border-gray-200'
                  }`}>
                    {category.count}
                  </span>
                </div>
                
                {filter === category.id && (
                  <div className="absolute inset-0 bg-[#0078D4] rounded-xl blur opacity-30 -z-10"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-[#0078D4] rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-4 text-gray-600 font-medium">Loading amazing projects...</p>
          </div>
        ) : visibleProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 text-[#0078D4]">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category to explore more projects</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6 xl:gap-8 max-w-7xl mx-auto">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-2xl transition-all duration-300 border border-gray-100 w-full max-w-sm md:max-w-md lg:max-w-full flex flex-col overflow-hidden hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Status badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border bg-white/80 text-[#0078D4] border-[#0078D4]/30`}>{project.status}</div>
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-[#0078D4] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>
                {/* Card Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#0078D4] transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4 font-medium line-clamp-3 leading-relaxed">{project.description}</p>
                  <div className="mt-auto flex gap-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl transition-all duration-300 group-hover:shadow-md font-medium border border-gray-200 cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0078D4] hover:bg-blue-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Enhanced CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0078D4]"></div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-40 h-40 border border-white/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-32 h-32 border border-white/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Join Our Community</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              Have a Project Idea?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your innovative concepts into reality with our supportive community, 
              cutting-edge resources, and expert mentorship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <button className="group px-8 py-4 bg-white text-[#0078D4] font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Submit Project Proposal
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                Join Existing Project
              </button>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>50+ Active Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
                <span>200+ Contributors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-600"></div>
                <span>Global Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;