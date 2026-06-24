import React, { useState } from 'react';
import PaymentModal from './PaymentModal';

const PaperCard = ({ paper }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [showFullSolution, setShowFullSolution] = useState(false);

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
  };

  const handleViewClick = () => {
    // Check if already paid
    const paid = localStorage.getItem(`paper_${paper.id}_paid`);
    if (paid === 'true' || isPaid) {
      setIsPaid(true);
      setShowFullSolution(true);
    } else {
      setShowPayment(true);
    }
  };

  const handleDownload = () => {
    if (isPaid || localStorage.getItem(`paper_${paper.id}_paid`) === 'true') {
      alert(`📥 Downloading: ${paper.code} - ${paper.title}\n\nFull solution PDF is ready!`);
    } else {
      setShowPayment(true);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
        overflow-hidden border border-gray-100 hover:-translate-y-2 group">
        <div className="p-5">
          {/* Code & Semester */}
          <div className="flex items-start justify-between mb-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
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
          <p className="text-sm text-gray-500 mb-3">
            <i className="fas fa-building mr-1"></i>
            {paper.department} • {paper.year}
          </p>

          {/* Preview Questions (Free) */}
          <div className="bg-gray-50 rounded-xl p-3 mb-3">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              📝 Preview (First 2 Questions - Free)
            </p>
            {previewQuestions.map((q, idx) => (
              <p key={idx} className="text-xs text-gray-600 py-0.5">
                {q}
              </p>
            ))}
            {!isPaid && !localStorage.getItem(`paper_${paper.id}_paid`) && (
              <p className="text-xs text-yellow-600 mt-1">
                🔒 {fullQuestions.length - previewQuestions.length} more questions locked
              </p>
            )}
          </div>

          {/* Full Solution (Paid) */}
          {(isPaid || localStorage.getItem(`paper_${paper.id}_paid`) === 'true') && showFullSolution && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-3 animate-fade-in">
              <p className="text-xs font-semibold text-green-700 mb-2">
                ✅ Full Solution Unlocked!
              </p>
              {fullQuestions.map((q, idx) => (
                <p key={idx} className="text-xs text-gray-700 py-0.5">
                  {q}
                </p>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
            {/* View Button */}
            <button
              onClick={handleViewClick}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all duration-300
                ${(isPaid || localStorage.getItem(`paper_${paper.id}_paid`) === 'true')
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-105'}
                shadow-lg shadow-blue-500/30`}
            >
              {(isPaid || localStorage.getItem(`paper_${paper.id}_paid`) === 'true') ? (
                <>
                  <i className="fas fa-eye mr-1"></i> View Full
                </>
              ) : (
                <>
                  <i className="fas fa-eye mr-1"></i> Free Preview
                </>
              )}
            </button>

            {/* Download Button - Paid */}
            <button
              onClick={handleDownload}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all duration-300
                ${(isPaid || localStorage.getItem(`paper_${paper.id}_paid`) === 'true')
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:scale-105 shadow-lg shadow-yellow-500/30' 
                  : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}
                flex items-center justify-center gap-1`}
            >
              {(isPaid || localStorage.getItem(`paper_${paper.id}_paid`) === 'true') ? (
                <>
                  <i className="fas fa-download"></i> Download PDF
                </>
              ) : (
                <>
                  <i className="fas fa-lock"></i> ₹20 Unlock
                </>
              )}
            </button>
          </div>

          {/* Status Badge */}
          <div className="mt-2 text-center">
            {(isPaid || localStorage.getItem(`paper_${paper.id}_paid`) === 'true') ? (
              <span className="text-[10px] text-green-600">
                <i className="fas fa-check-circle mr-1"></i> Full solution purchased
              </span>
            ) : (
              <span className="text-[10px] text-gray-400">
                <i className="fas fa-lock mr-1"></i> Preview only • ₹20 for full solution
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
    </>
  );
};

export default PaperCard;