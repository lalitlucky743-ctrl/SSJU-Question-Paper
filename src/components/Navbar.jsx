import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section (only works on home page)
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { id: '/', label: '🏠 Home', color: 'from-pink-500 to-rose-500', section: 'home' },
    { id: '/papers', label: '📄 Papers', color: 'from-blue-500 to-cyan-500', section: 'papers' },
    { id: '/departments', label: '🏛️ Departments', color: 'from-purple-500 to-indigo-500', section: 'departments' },
    { id: '/about', label: 'ℹ️ About', color: 'from-green-500 to-emerald-500', section: 'about' },
    { id: '/contact', label: '📧 Contact', color: 'from-orange-500 to-amber-500', section: 'contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ===== TOP HEADER BAR ===== */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0a1628] via-[#1a2a4a] to-[#0a1628] 
        border-b border-yellow-400/20 py-1.5 shadow-lg shadow-yellow-400/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 
                  rounded-full blur-lg opacity-30 animate-pulse">
                </div>
                <i className="fas fa-university text-yellow-400 text-sm md:text-base 
                  relative z-10 animate-pulse">
                </i>
              </div>
              <h1 className="text-xs sm:text-sm md:text-base font-bold tracking-wide text-center">
                <Link to="/" className="text-white hover:text-yellow-400 transition-colors duration-300">
                  Soban Singh Jeena University
                </Link>
                <span className="text-yellow-400/60 mx-1.5">|</span>
                <span className="text-gray-400 text-[10px] sm:text-xs md:text-sm 
                  hover:text-yellow-400/80 transition-colors duration-300">
                  Almora, Uttarakhand
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav className={`fixed top-[36px] sm:top-[38px] md:top-[42px] left-0 w-full z-40 
        transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0a1628]/95 backdrop-blur-xl shadow-2xl py-1' 
          : 'bg-gradient-to-r from-[#0a1628] via-[#1a2a4a] to-[#0a1628] py-2'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 
                  rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <i className="fas fa-university text-xl md:text-2xl text-yellow-400 
                  group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 
                  relative z-10">
                </i>
              </div>
              <div>
                <h2 className="text-sm md:text-xl font-bold bg-gradient-to-r 
                  from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent 
                  group-hover:scale-105 transition-transform duration-300">
                  SSJU Almora
                </h2>
                <p className="text-[7px] md:text-[9px] text-blue-300/60 font-light 
                  tracking-[0.2em] uppercase group-hover:text-blue-300/80 
                  transition-colors duration-300">
                  ✦ Question Paper Provider ✦
                </p>
              </div>
            </Link>

            {/* Desktop Horizontal Navbar */}
            <div className="hidden lg:flex items-center space-x-1 bg-white/5 
              backdrop-blur-sm rounded-full px-2 py-1 border border-white/10 
              shadow-lg shadow-blue-500/10">
              {navLinks.map((link) => {
                const active = isActive(link.id);
                // For home page, if we're on home and it's not the papers page, we can scroll
                const isHomePage = location.pathname === '/';
                const isPapersPage = location.pathname === '/papers';
                
                // Special handling for Papers link - navigate to papers page
                if (link.id === '/papers') {
                  return (
                    <Link
                      key={link.id}
                      to="/papers"
                      className={`relative px-4 py-2 rounded-full text-sm font-medium 
                        transition-all duration-300 group overflow-hidden
                        ${active ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                    >
                      <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${link.color} 
                        opacity-0 group-hover:opacity-20 transition-opacity duration-300
                        ${active ? 'opacity-30' : ''}`}>
                      </span>
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent 
                        via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] 
                        transition-transform duration-1000">
                      </span>
                      <span className="relative flex items-center gap-2">
                        <span className="text-lg">{link.label.split(' ')[0]}</span>
                        <span className="hidden xl:inline">{link.label.split(' ').slice(1).join(' ')}</span>
                      </span>
                      {active && (
                        <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                          w-2 h-2 rounded-full bg-gradient-to-r ${link.color} 
                          animate-bounce shadow-lg shadow-${link.color.split('-')[1]}-500/50`}>
                        </span>
                      )}
                    </Link>
                  );
                }

                // For other links - scroll on home page, navigate on other pages
                const handleClick = (e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    const sectionId = link.section;
                    if (sectionId) {
                      const element = document.getElementById(sectionId);
                      if (element) {
                        setIsOpen(false);
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }
                };

                return (
                  <Link
                    key={link.id}
                    to={link.id}
                    onClick={handleClick}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium 
                      transition-all duration-300 group overflow-hidden
                      ${active ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                  >
                    <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${link.color} 
                      opacity-0 group-hover:opacity-20 transition-opacity duration-300
                      ${active ? 'opacity-30' : ''}`}>
                    </span>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent 
                      via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] 
                      transition-transform duration-1000">
                    </span>
                    <span className="relative flex items-center gap-2">
                      <span className="text-lg">{link.label.split(' ')[0]}</span>
                      <span className="hidden xl:inline">{link.label.split(' ').slice(1).join(' ')}</span>
                    </span>
                    {active && (
                      <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                        w-2 h-2 rounded-full bg-gradient-to-r ${link.color} 
                        animate-bounce shadow-lg shadow-${link.color.split('-')[1]}-500/50`}>
                      </span>
                    )}
                    <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${link.color} 
                      opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500
                      group-hover:scale-150`}>
                    </span>
                  </Link>
                );
              })}
              
              {/* Download Button */}
              <Link to="/papers" className="ml-2 px-5 py-2 rounded-full font-bold text-sm 
                bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 
                text-white transform hover:scale-110 transition-all duration-500 
                shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 
                flex items-center gap-2 relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                  animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 blur-sm">
                </span>
                <span className="relative flex items-center gap-2">
                  <i className="fas fa-download group-hover:animate-bounce"></i>
                  <span className="hidden sm:inline">Papers</span>
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-sm 
                  border border-white/10 hover:border-yellow-400/50 
                  transition-all duration-300 group flex items-center justify-center"
              >
                <div className="w-5 h-4 md:w-6 md:h-5 flex flex-col justify-between items-center">
                  <span className={`block w-full h-0.5 rounded-full bg-gradient-to-r 
                    from-yellow-400 to-pink-500 transition-all duration-300 
                    ${isOpen ? 'rotate-45 translate-y-1.5 md:translate-y-2' : ''}`}>
                  </span>
                  <span className={`block w-full h-0.5 rounded-full bg-gradient-to-r 
                    from-blue-400 to-purple-500 transition-all duration-300 
                    ${isOpen ? 'opacity-0' : ''}`}>
                  </span>
                  <span className={`block w-full h-0.5 rounded-full bg-gradient-to-r 
                    from-green-400 to-cyan-500 transition-all duration-300 
                    ${isOpen ? '-rotate-45 -translate-y-1.5 md:-translate-y-2' : ''}`}>
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out 
            ${isOpen ? 'max-h-[600px] opacity-100 mt-3' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="grid grid-cols-1 gap-2 p-3 bg-white/5 backdrop-blur-xl 
              rounded-2xl border border-white/10 shadow-2xl">
              {navLinks.map((link) => {
                const active = isActive(link.id);
                const isHomePage = location.pathname === '/';
                
                const handleClick = () => {
                  setIsOpen(false);
                  if (isHomePage && link.section) {
                    const element = document.getElementById(link.section);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                };

                return (
                  <Link
                    key={link.id}
                    to={link.id}
                    onClick={handleClick}
                    className={`relative px-5 py-3.5 rounded-xl transition-all duration-300 
                      flex items-center gap-4 group overflow-hidden
                      ${active 
                        ? `bg-gradient-to-r ${link.color} text-white shadow-lg` 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent 
                      via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] 
                      transition-transform duration-1000">
                    </span>
                    <span className={`text-2xl ${active ? 'animate-bounce' : ''}`}>
                      {link.label.split(' ')[0]}
                    </span>
                    <span className="flex-1 text-left font-medium">
                      {link.label.split(' ').slice(1).join(' ')}
                    </span>
                    {active && (
                      <i className="fas fa-check-circle text-white animate-pulse"></i>
                    )}
                  </Link>
                );
              })}
              
              <Link to="/papers" className="mt-2 px-5 py-4 rounded-xl font-bold text-sm 
                bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 
                text-white transform hover:scale-[1.02] transition-all duration-500 
                shadow-lg shadow-purple-500/30 flex items-center justify-center gap-3">
                <i className="fas fa-download text-lg"></i>
                <span>Download Question Papers</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Gradient Border */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
          from-transparent via-yellow-400 via-pink-500 via-blue-500 via-green-400 to-transparent 
          animate-gradient-x bg-[length:200%_100%]">
        </div>
      </nav>

      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </>
  );
};


export default Navbar;