import React, { useState } from 'react';

const PaymentModal = ({ paper, onClose, onPaymentSuccess }) => {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    try {
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        alert('Payment gateway failed to load. Please try again.');
        setLoading(false);
        return;
      }

     const response = await fetch('https://SSJU-payment-backend.onrender.com/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 20,
          paperId: paper.id
        })
      });

      const orderData = await response.json();

      if (!orderData.success) {
        alert('Failed to create order. Please try again.');
        setLoading(false);
        return;
      }

      const options = {
        key: 'rzp_test_T5SmnMwS7qZw3z',
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'SSJU Question Paper',
        description: `Full Solution: ${paper.title}`,
        order_id: orderData.orderId,
        prefill: {
          name: 'Student',
          email: 'student@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#f5b042'
        },
        handler: function (response) {
          verifyPayment(response, orderData.orderId);
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error('Payment error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyPayment = async (paymentResponse, orderId) => {
    try {
      const verifyRes = await fetch('https://SSJU-payment-backend.onrender.com/api/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_order_id: orderId,
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_signature: paymentResponse.razorpay_signature
        })
      });

      const result = await verifyRes.json();

      if (result.success) {
        alert('✅ Payment successful! Full solution is now available.');
        onPaymentSuccess(paper.id);
        onClose();
      } else {
        alert('❌ Payment verification failed. Please contact support.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      alert('Payment verification failed. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-fade-in-up">
        <button onClick={onClose} className="float-right text-gray-400 hover:text-gray-600">
          <i className="fas fa-times"></i>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full 
            flex items-center justify-center text-white text-2xl mx-auto mb-3">
            <i className="fas fa-file-pdf"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{paper.title}</h3>
          <p className="text-sm text-gray-500">{paper.code} • {paper.department}</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 text-center mb-6">
          <p className="text-sm text-gray-600">Full Solution Price</p>
          <p className="text-3xl font-bold text-gray-800">₹20 <span className="text-sm font-normal text-gray-500">/paper</span></p>
          <p className="text-xs text-green-600 mt-1">✅ Instant access after payment</p>
        </div>

        <ul className="space-y-2 text-sm text-gray-600 mb-6">
          <li className="flex items-center gap-2">
            <i className="fas fa-check-circle text-green-500"></i>
            Complete step-by-step solutions
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-check-circle text-green-500"></i>
            Download PDF after payment
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-check-circle text-green-500"></i>
            Access from any device
          </li>
        </ul>

        <button
          onClick={handlePayment}
          disabled={loading}
          className={`w-full py-3 rounded-xl font-bold text-white text-center
            ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-[1.02]'}
            transition-all duration-300 shadow-lg shadow-yellow-500/30
            flex items-center justify-center gap-2`}
        >
          {loading ? (
            <>
              <i className="fas fa-spinner animate-spin"></i>
              Processing...
            </>
          ) : (
            <>
              <i className="fas fa-lock"></i>
              Pay ₹20 & Unlock Full Solution
            </>
          )}
        </button>

        <p className="text-center text-[10px] text-gray-400 mt-4">
          <i className="fas fa-shield-alt mr-1"></i>
          Secured by Razorpay • 100% Safe
        </p>
      </div>
    </div>
  );
};

export default PaymentModal;