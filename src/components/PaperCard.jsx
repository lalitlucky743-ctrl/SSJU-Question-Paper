import React, { useState, useEffect } from 'react';
import PaymentModal from './PaymentModal';

const PaperCard = ({ paper }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [showFullSolution, setShowFullSolution] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Check if already paid
  useEffect(() => {
    const paid = localStorage.getItem(`paper_${paper.id}_paid`);
    if (paid === 'true') {
      setIsPaid(true);
    }
  }, [paper.id]);

  // Preview questions (pehle 2 free)
  const previewQuestions = [
    'Q1. What is the meaning of management?',
    'Q2. Explain the functions of management.'
  ];

  // Full questions (after payment)
  const fullQuestions = [
    'Q1. What is the meaning of management?',
    'Q2. Explain the functions of management.',
    'Q3. What is the difference between management and administration?',
    'Q4. Explain the 14 principles of management by Henri Fayol.',
    'Q5. What is the importance of planning in management?',
    'Q6. Explain the steps in the decision-making process.',
    'Q7. What are the functions of a manager?',
    'Q8. Explain the concept of organizational behavior.'
  ];

  const handlePaymentSuccess = (paperId) => {
    setIsPaid(true);
    setShowFullSolution(true);
    localStorage.setItem(`paper_${paperId}_paid`, 'true');
    setShowPayment(false);
  };

  const handleViewClick = () => {
    const paid = localStorage.getItem(`paper_${paper.id}_paid`);
    if (paid === 'true' || isPaid) {
      setIsPaid(true);
      setShowFullSolution(true);
    } else {
      setShowPayment(true);
    }
  };

  const handleDownload = () => {
    const paid = localStorage.getItem(`paper_${paper.id}_paid`);
    if (paid === 'true' || isPaid) {
      setIsDownloading(true);
      // Simulate PDF download
      setTimeout(() => {
        alert(`📥 Downloading: ${paper.code} - ${paper.title}\n\nFull solution PDF is ready!`);
        setIsDownloading(false);
      }, 1500);
    } else {
      setShowPayment(true);
    }
  };

  const isPaperPaid = isPaid || localStorage.getItem(`paper_${paper.id}_paid`) === 'true';

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
        overflow-hidden border border-gray-100 hover:-translate-y-3 hover:scale-[1.02]
        relative">
        
        {/* Status Badge */}
        <div className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-bold
          ${isPaperPaid ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}
          shadow-lg ${isPaperPaid ? 'shadow-green-500/30' : 'shadow-yellow-500/30'}
          animate-pulse`}>
          {isPaperPaid ? '✅ Owned' : '🔒 ₹20'}
        </div>

        <div className="p-5">
          {/* Code & Semester */}
          <div className="flex items-start justify-between mb-3">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 
              text-white rounded-full text-xs font-bold shadow-lg shadow-blue-500/30">
              {paper.code}
            </span>
            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
              {paper.semester}
            </span>
          </div>

          {/* Title */}
          <h4 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-blue-600 
            transition-colors duration-300">
            {paper.title}
          </h4>

          {/* Department & Year */}
          <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
            <i className="fas fa-building text-blue-400"></i>
            {paper.department} • {paper.year}
          </p>

          {/* Preview Questions (Free) */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-3 mb-3 
            border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1">
              <i className="fas fa-eye text-blue-400"></i>
              Preview (First 2 Questions - Free)
            </p>
            {previewQuestions.map((q, idx) => (
              <p key={idx} className="text-xs text-gray-600 py-0.5 flex items-start gap-1">
                <span className="text-blue-400 mt-0.5">•</span>
                {q}
              </p>
            ))}
            {!isPaperPaid && (
              <p className="text-xs text-yellow-600 mt-1 flex items-center gap-1">
                <i className="fas fa-lock"></i>
                {fullQuestions.length - previewQuestions.length} more questions locked
              </p>
            )}
          </div>

          {/* Full Solution (Paid) */}
          {isPaperPaid && showFullSolution && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 
              border border-green-200 rounded-xl p-3 mb-3 animate-fade-in">
              <p className="text-xs font-semibold text-green-700 mb-2 flex items-center gap-1">
                <i className="fas fa-check-circle"></i>
                Full Solution Unlocked!
              </p>
              {fullQuestions.map((q, idx) => (
                <p key={idx} className="text-xs text-gray-700 py-0.5 flex items-start gap-1">
                  <span className="text-green-400 mt-0.5">•</span>
                  {q}
                </p>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-2 pt-3 border-t border-gray-100">
            {/* View Button */}
            <button
              onClick={handleViewClick}
              className={`w-full sm:flex-1 py-2.5 rounded-xl text-xs font-bold transition-all duration-300
                ${isPaperPaid
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105 shadow-lg shadow-green-500/30' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-105 shadow-lg shadow-blue-500/30'
                }
                flex items-center justify-center gap-2`}
            >
              {isPaperPaid ? (
                <>
                  <i className="fas fa-eye"></i> View Full
                </>
              ) : (
                <>
                  <i className="fas fa-eye"></i> Free Preview
                </>
              )}
            </button>

            {/* Download Button - Paid */}
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`w-full sm:flex-1 py-2.5 rounded-xl text-xs font-bold transition-all duration-300
                ${isPaperPaid
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:scale-105 shadow-lg shadow-yellow-500/30' 
                  : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                }
                flex items-center justify-center gap-2 relative overflow-hidden group`}
            >
              {isDownloading ? (
                <>
                  <i className="fas fa-spinner animate-spin"></i>
                  Downloading...
                </>
              ) : isPaperPaid ? (
                <>
                  <i className="fas fa-download group-hover:animate-bounce"></i>
                  Download PDF
                </>
              ) : (
                <>
                  <i className="fas fa-lock"></i> ₹20 Unlock & Download
                </>
              )}
            </button>
          </div>

          {/* Status Message */}
          <div className="mt-2 text-center">
            {isPaperPaid ? (
              <span className="text-[10px] text-green-600 flex items-center justify-center gap-1">
                <i className="fas fa-check-circle"></i>
                Full solution purchased • Download anytime
              </span>
            ) : (
              <span className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                <i className="fas fa-lock"></i>
                Preview only • ₹20 for full solution + PDF
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPayment && (
        <PaymentModal
          paper={paper}
          onClose={() => setShowPayment(false)}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease forwards;
        }
      `}</style>
    </>
  );
};

export default PaperCard;