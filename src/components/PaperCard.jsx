import React, { useState } from 'react';

const PaperCard = ({ paper }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleDownload = () => {
    setIsClicked(true);
    alert(`📄 Downloading: ${paper.code} - ${paper.title}`);
    setTimeout(() => setIsClicked(false), 500);
  };

  // Color mapping for departments
  const getDepartmentColors = (dept) => {
    const colors = {
      'Management': {
        bg: 'from-emerald-50 to-teal-50',
        border: 'hover:border-emerald-300',
        shadow: 'hover:shadow-emerald-200/50',
        badge: 'bg-emerald-100 text-emerald-700',
        icon: 'text-emerald-500',
        gradient: 'from-emerald-400 to-teal-400'
      },
      'Science': {
        bg: 'from-blue-50 to-cyan-50',
        border: 'hover:border-blue-300',
        shadow: 'hover:shadow-blue-200/50',
        badge: 'bg-blue-100 text-blue-700',
        icon: 'text-blue-500',
        gradient: 'from-blue-400 to-cyan-400'
      },
      'Arts': {
        bg: 'from-purple-50 to-pink-50',
        border: 'hover:border-purple-300',
        shadow: 'hover:shadow-purple-200/50',
        badge: 'bg-purple-100 text-purple-700',
        icon: 'text-purple-500',
        gradient: 'from-purple-400 to-pink-400'
      }
    };
    return colors[dept] || colors['Management'];
  };

  const colors = getDepartmentColors(paper.department);

  return (
    <div 
      className={`group relative bg-white rounded-2xl overflow-hidden 
        transition-all duration-500 ease-out
        border-2 border-gray-100 ${colors.border}
        ${colors.shadow}
        ${isHovered ? 'shadow-2xl -translate-y-3 scale-[1.02]' : 'shadow-md'}
        transform-gpu`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Animated Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} 
        opacity-0 group-hover:opacity-100 transition-opacity duration-700 
        pointer-events-none`}>
      </div>

      {/* Shimmer Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent 
        via-white/30 to-translate -translate-x-full 
        group-hover:translate-x-full transition-transform duration-1000 
        pointer-events-none`}>
      </div>

      {/* Glowing Border Animation */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.gradient} 
        rounded-2xl blur-sm opacity-0 group-hover:opacity-20 
        transition-opacity duration-500 group-hover:animate-pulse`}>
      </div>

      <div className="relative p-5">
        {/* Header - Code & Semester */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 
              rounded-full text-xs font-bold ${colors.badge}
              group-hover:scale-110 transition-transform duration-300`}>
              <i className={`fas fa-hashtag ${colors.icon} text-[10px]`}></i>
              {paper.code}
            </span>
            
            {/* Animated Badge */}
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 
              rounded-full text-[10px] font-medium bg-gray-100 text-gray-600
              group-hover:bg-gradient-to-r ${colors.gradient} 
              group-hover:text-white transition-all duration-300
              group-hover:shadow-lg`}>
              <i className={`fas fa-graduation-cap ${colors.icon}`}></i>
              {paper.semester}
            </span>
          </div>
          
          {/* Floating Year Badge */}
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 
            rounded-full text-[10px] font-medium bg-gray-50 text-gray-500
            group-hover:bg-white group-hover:shadow-md 
            transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`}>
            <i className="far fa-calendar-alt text-gray-400"></i>
            {paper.year}
          </span>
        </div>

        {/* Title */}
        <h4 className={`text-base font-bold text-gray-800 mb-2 
          group-hover:text-gray-900 transition-colors duration-300
          group-hover:translate-x-1 transition-transform duration-300`}>
          {paper.title}
        </h4>

        {/* Department */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <div className={`w-1.5 h-1.5 rounded-full ${colors.icon} 
            group-hover:scale-150 transition-transform duration-300`}>
          </div>
          <span className="group-hover:text-gray-700 transition-colors duration-300">
            <i className={`fas fa-building ${colors.icon} mr-1`}></i>
            {paper.department}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 
          group-hover:border-gray-200 transition-colors duration-300">
          
          {/* PDF Status with Animation */}
          <div className="flex items-center gap-1.5">
            <div className={`relative w-3 h-3 ${isHovered ? 'animate-pulse' : ''}`}>
              <span className={`absolute inset-0 rounded-full bg-green-400 
                ${isHovered ? 'animate-ping opacity-75' : ''}`}>
              </span>
              <span className={`absolute inset-0.5 rounded-full bg-green-500 
                ${isHovered ? 'animate-pulse' : ''}`}>
              </span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium 
              group-hover:text-gray-600 transition-colors duration-300">
              PDF Available
            </span>
          </div>

          {/* View Button with Light Color Effect */}
          <button
            onClick={handleDownload}
            disabled={isClicked}
            className={`relative overflow-hidden px-4 py-1.5 rounded-full 
              text-xs font-bold transition-all duration-300
              ${isClicked ? 'scale-95' : 'group-hover:scale-105'}
              ${isHovered ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg shadow-${colors.gradient.split('-')[1]}-200/50` 
                : 'bg-gray-100 text-gray-600'}
              transform-gpu`}
          >
            {/* Button Shine */}
            <span className={`absolute inset-0 bg-gradient-to-r from-transparent 
              via-white/30 to-transparent -translate-x-full 
              ${isHovered ? 'group-hover:translate-x-full' : ''} 
              transition-transform duration-700`}>
            </span>
            
            <span className="relative flex items-center gap-1.5">
              {isClicked ? (
                <>
                  <i className="fas fa-spinner animate-spin"></i>
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <i className={`fas fa-download text-[10px] 
                    ${isHovered ? 'animate-bounce' : ''}`}>
                  </i>
                  <span>View</span>
                  {isHovered && (
                    <i className="fas fa-arrow-right text-[10px] 
                      animate-pulse ml-0.5">
                    </i>
                  )}
                </>
              )}
            </span>
          </button>
        </div>

        {/* Decorative Corner Accent */}
        <div className={`absolute -top-1 -right-1 w-8 h-8 
          bg-gradient-to-br ${colors.gradient} 
          opacity-0 group-hover:opacity-20 transition-opacity duration-500 
          rounded-bl-2xl`}>
        </div>
      </div>
    </div>
  );
};

export default PaperCard;