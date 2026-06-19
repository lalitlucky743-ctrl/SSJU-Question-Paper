import React from 'react';
import PaperCard from './PaperCard';

const PaperGrid = ({ papers, totalPapers }) => {
  if (papers.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl shadow-sm border-2 border-dashed 
        border-gray-200 hover:border-blue-300 transition-all duration-500 
        group">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 
            rounded-full blur-2xl opacity-20 group-hover:opacity-40 
            transition-opacity duration-500 animate-pulse">
          </div>
          <i className="fas fa-file-circle-exclamation text-6xl text-gray-300 
            group-hover:text-blue-400 transition-colors duration-500 
            relative z-10 group-hover:scale-110 group-hover:rotate-12 
            transition-transform duration-500">
          </i>
        </div>
        <h3 className="text-2xl font-bold text-gray-600 mt-4 
          group-hover:text-gray-800 transition-colors duration-300">
          No papers found
        </h3>
        <p className="text-gray-400 group-hover:text-gray-500 
          transition-colors duration-300">
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Animated Grid Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 
              rounded-full blur-xl opacity-30 animate-pulse">
            </div>
            <span className="relative inline-flex items-center gap-2 px-4 py-2 
              bg-gradient-to-r from-blue-50 to-purple-50 rounded-full text-sm 
              font-semibold text-gray-700 border border-blue-100">
              <i className="fas fa-file-alt text-blue-500"></i>
              {papers.length} Papers Found
            </span>
          </div>
          
          <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 
            rounded-full border border-gray-100">
            <i className="fas fa-layer-group mr-1"></i>
            Total: {totalPapers}
          </span>
        </div>
        
        {/* Animated Counter */}
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></div>
          <span className="text-xs text-gray-400">Live</span>
        </div>
      </div>

      {/* Grid with Stagger Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {papers.map((paper, index) => (
          <div
            key={paper.id}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${index * 80}ms`,
              animationFillMode: 'both'
            }}
          >
            <PaperCard paper={paper} />
          </div>
        ))}
      </div>

      {/* Footer Counter with Animation */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 
          bg-gradient-to-r from-gray-50 to-gray-100 
          rounded-full text-xs text-gray-500 border border-gray-200
          hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 
          transition-all duration-500 group cursor-default">
          <i className="fas fa-info-circle text-gray-400 
            group-hover:text-blue-500 group-hover:rotate-12 
            transition-all duration-300">
          </i>
          <span className="group-hover:text-gray-700 transition-colors duration-300">
            Showing <span className="font-bold text-gray-700">{papers.length}</span> 
            of <span className="font-bold text-gray-700">{totalPapers}</span> papers
          </span>
          <div className="w-1 h-1 rounded-full bg-gray-300 
            group-hover:bg-blue-400 group-hover:animate-pulse 
            transition-all duration-300">
          </div>
          <span className="group-hover:text-blue-500 transition-colors duration-300">
            ✦ Updated
          </span>
        </div>
      </div>

      {/* Add CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Hover Animation for Cards */
        .card-hover-glow {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover-glow:hover {
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }
      `}</style>
    </>
  );
};

export default PaperGrid;