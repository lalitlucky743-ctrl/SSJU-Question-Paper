import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // University images (free stock images)
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=600&fit=crop',
      title: 'Welcome to SSJU Question Paper Portal',
      subtitle: 'Your one-stop platform for previous year question papers',
      buttonText: 'Explore Papers',
      buttonLink: '#papers'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1600&h=600&fit=crop',
      title: 'Access 500+ Question Papers',
      subtitle: 'From all departments - Management, Science, Arts & more',
      buttonText: 'View All',
      buttonLink: '/papers'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1600&h=600&fit=crop',
      title: 'Prepare Smarter, Score Higher',
      subtitle: 'Get full solutions & PDF downloads for just ₹20 per paper',
      buttonText: 'Get Started',
      buttonLink: '/papers'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden h-[60vh] md:h-[70vh] lg:h-[80vh]">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex-shrink-0"
          >
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay - for better text visibility */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-transparent to-[#0a1628]/40"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center text-white">
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 
                  bg-white/10 backdrop-blur-sm rounded-full border border-white/20 
                  animate-pulse mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                  <span className="text-xs text-white/80 font-medium tracking-wider">
                    🎯 2025-2026 Academic Year
                  </span>
                </div>

                {/* Main Heading with Animation */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 
                  animate-fade-in-up">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-gray-200/90 max-w-2xl mx-auto mb-8
                  animate-fade-in-up animation-delay-200">
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <a
                  href={slide.buttonLink}
                  className="inline-flex items-center gap-2 px-8 py-3.5 
                    bg-gradient-to-r from-yellow-400 to-orange-500 
                    text-[#0a1628] font-bold rounded-full 
                    transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                    hover:shadow-yellow-500/50 animate-fade-in-up animation-delay-400"
                >
                  <span>{slide.buttonText}</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 
        flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${currentSlide === index 
                ? 'bg-yellow-400 w-8' 
                : 'bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 
        flex flex-col items-center gap-1 text-white/40 z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] animate-pulse">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 
          flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-10 bg-black/40 backdrop-blur-sm 
        px-3 py-1.5 rounded-full border border-white/10">
        <span className="text-white/80 text-xs font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;