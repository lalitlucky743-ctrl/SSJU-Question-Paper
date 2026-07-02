import React from 'react';

const PageHero = ({ title, subtitle, image, breadcrumb }) => {
  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-transparent to-[#0a1628]/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Breadcrumb */}
          {breadcrumb && (
            <div className="inline-flex items-center gap-2 px-4 py-2 
              bg-white/10 backdrop-blur-sm rounded-full border border-white/20 
              mb-4 text-xs text-white/80">
              <span>Home</span>
              <span className="text-yellow-400">/</span>
              <span className="text-yellow-400">{breadcrumb}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
            leading-tight animate-fade-in-up">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-gray-200/90 
              max-w-2xl mx-auto mt-4 animate-fade-in-up animation-delay-200">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white/10"></path>
        </svg>
      </div>
    </div>
  );
};

export default PageHero;