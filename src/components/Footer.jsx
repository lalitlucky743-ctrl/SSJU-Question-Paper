import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] 
      text-white/80 mt-6 relative overflow-hidden">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full 
          blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full 
          blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Glowing Border Top */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r 
        from-transparent via-yellow-400 via-pink-500 via-blue-500 to-transparent 
        animate-gradient-x bg-[length:200%_100%]">
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 
                  rounded-full blur-xl opacity-50 group-hover:opacity-100 
                  transition-opacity duration-500">
                </div>
                <i className="fas fa-university text-2xl text-yellow-400 
                  group-hover:scale-110 group-hover:rotate-6 
                  transition-all duration-500 relative z-10">
                </i>
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-400 
                  via-orange-400 to-pink-400 bg-clip-text text-transparent">
                  SSJU Almora
                </h3>
                <p className="text-[10px] text-blue-300/60 tracking-[0.15em] uppercase">
                  Question Paper Provider
                </p>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Soban Singh Jeena University, Almora – dedicated to providing quality 
              education and resources for students across Uttarakhand.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: 'fa-facebook-f', color: 'hover:bg-blue-600' },
                { icon: 'fa-twitter', color: 'hover:bg-sky-500' },
                { icon: 'fa-instagram', color: 'hover:bg-pink-600' },
                { icon: 'fa-youtube', color: 'hover:bg-red-600' },
                { icon: 'fa-linkedin-in', color: 'hover:bg-blue-700' }
              ].map((social, idx) => (
                <a key={idx} href="#" 
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 
                    flex items-center justify-center text-gray-400 
                    hover:text-white transition-all duration-300 
                    ${social.color} hover:border-transparent
                    hover:scale-110 hover:shadow-lg hover:shadow-${social.color.split('-')[1]}-500/30
                    group`}>
                  <i className={`fab ${social.icon} text-xs 
                    group-hover:scale-110 transition-transform duration-300`}>
                  </i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider 
              flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 
                rounded-full">
              </span>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: '🏠 Home', href: '#home' },
                { label: '📄 All Papers', href: '#papers' },
                { label: '🏛️ Departments', href: '#departments' },
                { label: 'ℹ️ About Us', href: '#about' },
                { label: '📧 Contact', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} 
                    className="text-sm text-gray-400 hover:text-yellow-400 
                      transition-all duration-300 flex items-center gap-2
                      group hover:translate-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/30 
                      group-hover:bg-yellow-400 group-hover:scale-150 
                      transition-all duration-300">
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments Quick Access */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider 
              flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 
                rounded-full">
              </span>
              Departments
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Computer Science', 'Botany', 'Zoology', 
                'BA', 'BFA', 'B.Sc', 'BBA', 'B.Com'
              ].map((dept, idx) => (
                <a key={idx} href="#departments"
                  className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 
                    rounded-full text-gray-400 hover:text-white 
                    hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 
                    hover:border-transparent transition-all duration-300
                    hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
                  {dept}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider 
              flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 
                rounded-full">
              </span>
              Contact Us
            </h4>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center 
                  justify-center text-yellow-400 group-hover:bg-yellow-400/20 
                  transition-all duration-300 flex-shrink-0">
                  <i className="fas fa-map-pin text-xs"></i>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 
                  transition-colors duration-300">
                  Almora, Uttarakhand
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center 
                  justify-center text-yellow-400 group-hover:bg-yellow-400/20 
                  transition-all duration-300 flex-shrink-0">
                  <i className="fas fa-envelope text-xs"></i>
                </div>
                <a href="mailto:papers@ssju.ac.in" 
                  className="text-sm text-gray-400 hover:text-yellow-400 
                    transition-colors duration-300 break-all">
                  papers@ssju.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center 
                  justify-center text-yellow-400 group-hover:bg-yellow-400/20 
                  transition-all duration-300 flex-shrink-0">
                  <i className="fas fa-phone text-xs"></i>
                </div>
                <a href="tel:+915962123456" 
                  className="text-sm text-gray-400 hover:text-yellow-400 
                    transition-colors duration-300">
                  +91-5962-123456
                </a>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-4 p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs text-gray-400 mb-2">
                📬 Subscribe for updates
              </p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" 
                  className="flex-1 px-3 py-1.5 text-xs bg-white/10 border border-white/10 
                    rounded-full text-white placeholder-gray-500 focus:outline-none 
                    focus:border-yellow-400/50 transition-all duration-300" />
                <button className="px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 
                  text-[#0a1628] rounded-full text-xs font-bold 
                  hover:scale-105 transition-all duration-300 
                  shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 
                  whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col 
          sm:flex-row items-center justify-between gap-4">
          
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {currentYear} Soban Singh Jeena University, Almora. 
            <span className="hidden sm:inline"> All rights reserved.</span>
          </p>
          
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="text-gray-500 hover:text-yellow-400 
              transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="w-0.5 h-3 bg-gray-600"></span>
            <a href="#" className="text-gray-500 hover:text-yellow-400 
              transition-colors duration-300">
              Terms of Service
            </a>
            <span className="w-0.5 h-3 bg-gray-600"></span>
            <a href="#" className="text-gray-500 hover:text-yellow-400 
              transition-colors duration-300">
              Help
            </a>
          </div>
        </div>
      </div>

      {/* Add Animation Keyframes */}
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
    </footer>
  );
};

export default Footer;