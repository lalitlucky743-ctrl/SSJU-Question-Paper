import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    { icon: 'fa-file-pdf', text: '500+ Question Papers', color: 'from-blue-400 to-cyan-400' },
    { icon: 'fa-graduation-cap', text: '12+ Departments', color: 'from-purple-400 to-pink-400' },
    { icon: 'fa-star', text: '4.9/5 Student Rating', color: 'from-yellow-400 to-orange-400' },
    { icon: 'fa-clock', text: '24/7 Free Access', color: 'from-green-400 to-emerald-400' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [highlights.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] 
      min-h-[70vh] flex items-center">
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full 
          blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full 
          blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-56 h-56 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-400 rounded-full 
          blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-10 left-1/4 w-20 h-20 bg-gradient-to-r 
        from-yellow-400 to-orange-400 rounded-full blur-2xl opacity-30 
        animate-float-slow">
      </div>
      <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-gradient-to-r 
        from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30 
        animate-float-slow delay-1000">
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 
              bg-white/10 backdrop-blur-sm rounded-full border border-white/10 
              animate-pulse">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
              <span className="text-xs text-white/70 font-medium tracking-wider">
                🎯 2025-2026 Academic Year
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">
                Access Previous Year
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 
                to-pink-400 bg-clip-text text-transparent 
                animate-gradient bg-[length:200%_100%]">
                Question Papers
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg">
              <span className="font-semibold text-yellow-400">Soban Singh Jeena University, Almora</span> 
              — Your one-stop platform for accessing comprehensive question papers 
              from all departments. Prepare smarter, score higher!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#papers" 
                className="group relative px-8 py-3.5 bg-gradient-to-r from-yellow-400 
                  to-orange-500 text-[#0a1628] font-bold rounded-full 
                  transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                  hover:shadow-yellow-500/50 flex items-center gap-3 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fas fa-download"></i>
                  Explore Papers
                  <i className="fas fa-arrow-right group-hover:translate-x-1 
                    transition-transform duration-300">
                  </i>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 
                  to-yellow-400 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300">
                </span>
              </a>
              
              <a href="#about" 
                className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border 
                  border-white/20 text-white font-medium rounded-full 
                  hover:bg-white/20 transition-all duration-300 
                  hover:scale-105 hover:shadow-xl flex items-center gap-2">
                <i className="fas fa-play-circle"></i>
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} 
                  className={`flex items-center gap-2 px-4 py-2 
                    bg-white/5 backdrop-blur-sm rounded-full border border-white/10
                    transform transition-all duration-500 hover:scale-110
                    hover:bg-white/10 cursor-default
                    ${idx === currentSlide ? 'scale-110 bg-white/15 border-yellow-400/30' : ''}`}>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} 
                    flex items-center justify-center text-white text-xs
                    ${idx === currentSlide ? 'animate-pulse' : ''}`}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <span className="text-xs text-white/80 font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Animated Illustration */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 
                to-pink-500/20 rounded-full blur-3xl animate-pulse">
              </div>
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 
                border border-white/10 shadow-2xl">
                {/* Animated Cards */}
                <div className="space-y-4">
                  {[
                    { icon: 'fa-file-pdf', color: 'from-red-400 to-rose-400', 
                      label: 'BBA101 - Management', year: '2023' },
                    { icon: 'fa-flask', color: 'from-blue-400 to-cyan-400', 
                      label: 'BSC102 - Chemistry', year: '2023' },
                    { icon: 'fa-palette', color: 'from-purple-400 to-pink-400', 
                      label: 'BA201 - History', year: '2022' }
                  ].map((item, idx) => (
                    <div key={idx} 
                      className={`flex items-center gap-4 p-4 rounded-2xl 
                        bg-gradient-to-r from-white/5 to-transparent 
                        border border-white/10 hover:border-white/20 
                        transition-all duration-300 hover:scale-[1.02]
                        group cursor-pointer
                        ${idx === 1 ? 'animate-float-slow' : ''}
                        ${idx === 2 ? 'animate-float-slow delay-700' : ''}`}
                      style={{ animationDelay: `${idx * 300}ms` }}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} 
                        flex items-center justify-center text-white shadow-lg
                        group-hover:scale-110 group-hover:rotate-6 
                        transition-all duration-500`}>
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white">
                          {item.label}
                        </h4>
                        <p className="text-xs text-gray-400 flex items-center gap-2">
                          <i className="far fa-calendar-alt"></i>
                          {item.year}
                          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                          <span className="text-green-400">● Available</span>
                        </p>
                      </div>
                      <i className="fas fa-chevron-right text-gray-500 
                        group-hover:text-yellow-400 group-hover:translate-x-1 
                        transition-all duration-300">
                      </i>
                    </div>
                  ))}
                </div>

                {/* Floating Download Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r 
                  from-green-400 to-emerald-500 text-white text-xs px-3 py-1.5 
                  rounded-full shadow-lg shadow-green-500/30 
                  animate-bounce flex items-center gap-1.5">
                  <i className="fas fa-download"></i>
                  Free Download
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 
        flex flex-col items-center gap-1 text-white/30">
        <span className="text-[10px] uppercase tracking-[0.2em] 
          animate-pulse">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 
          flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-yellow-400 rounded-full 
            animate-bounce">
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .delay-1000 { animation-delay: 1s; }
        .delay-700 { animation-delay: 0.7s; }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;