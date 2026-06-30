import React, { useState, useEffect } from 'react';

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenLoginPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenLoginPopup', 'true');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert('✅ Login Successful! Welcome to SSJU Question Paper Portal!');
    handleClose();
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert('✅ Account Created Successfully! Please login.');
    setIsLogin(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-fade-in-up relative">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 
            transition-colors duration-300 text-xl z-10"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Icon with Image */}
        <div className="text-center mb-4">
          <div className="w-20 h-20 mx-auto mb-3 relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 
              rounded-full shadow-lg shadow-yellow-500/30 animate-pulse">
            </div>
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
              <i className="fas fa-user-graduate"></i>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p className="text-gray-500 text-sm">
            {isLogin 
              ? 'Login to access your question papers' 
              : 'Start your learning journey today'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl 
                  focus:ring-2 focus:ring-yellow-400 focus:border-transparent 
                  outline-none transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-yellow-400 focus:border-transparent 
                outline-none transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl 
                focus:ring-2 focus:ring-yellow-400 focus:border-transparent 
                outline-none transition-all duration-300"
              placeholder="••••••••"
            />
          </div>
          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-sm text-yellow-500 hover:text-yellow-600 
                transition-colors duration-300">
                Forgot Password?
              </a>
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 
              text-white font-bold rounded-xl hover:scale-[1.02] 
              transition-all duration-300 shadow-lg shadow-yellow-500/30"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle Login/Signup */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-yellow-500 hover:text-yellow-600 font-semibold 
                transition-colors duration-300"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>

        {/* Guest Access */}
        <div className="mt-3 text-center">
          <button
            onClick={handleClose}
            className="text-xs text-gray-400 hover:text-gray-600 
              transition-colors duration-300"
          >
            Continue as Guest →
          </button>
        </div>
      </div>

      {/* CSS Animation */}
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
          animation: fadeInUp 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default LoginPopup;