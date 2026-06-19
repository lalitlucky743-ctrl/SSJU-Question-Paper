import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const students = [
    {
      id: 1,
      name: 'Priya Sharma',
      course: 'BBA 3rd Year',
      photo: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=random&size=128',
      review: 'SSJU question paper portal ne meri preparation ko next level pe le gaya. Har paper ka pattern clear hai aur practice ke liye best platform hai!',
      rating: 5,
      department: 'Management'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      course: 'B.Sc 2nd Year',
      photo: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=random&size=128',
      review: 'Physics aur Chemistry ke papers ki variety amazing hai. Is website ki wajah se maine 80%+ marks score kiye!',
      rating: 5,
      department: 'Science'
    },
    {
      id: 3,
      name: 'Anjali Rawat',
      course: 'BA 3rd Year',
      photo: 'https://ui-avatars.com/api/?name=Anjali+Rawat&background=random&size=128',
      review: 'History aur Political Science ke papers ne mujhe exam mein bahut help ki. Highly recommended for all arts students!',
      rating: 4,
      department: 'Arts'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      course: 'BFA 2nd Year',
      photo: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=random&size=128',
      review: 'Fine Arts ke theory papers ka collection unique hai. Is website ne mera confidence badhaya!',
      rating: 5,
      department: 'Arts'
    },
    {
      id: 5,
      name: 'Neha Joshi',
      course: 'B.Sc (Botany) 1st Year',
      photo: 'https://ui-avatars.com/api/?name=Neha+Joshi&background=random&size=128',
      review: 'Botany ke papers bahut helpful the. Especially practical exam ke liye perfect guide!',
      rating: 4,
      department: 'Science'
    },
    {
      id: 6,
      name: 'Arjun Bisht',
      course: 'B.Com 3rd Year',
      photo: 'https://ui-avatars.com/api/?name=Arjun+Bisht&background=random&size=128',
      review: 'Commerce department ke papers se maine Financial Accounting aur Business Law clear kiya. Best website!',
      rating: 5,
      department: 'Management'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % students.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [students.length]);

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 
              rounded-full blur-2xl opacity-20 animate-pulse">
            </div>
            <h2 className="relative text-3xl md:text-4xl font-bold text-gray-800 inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                bg-clip-text text-transparent">
                About SSJU Almora
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r 
                from-blue-400 via-purple-400 to-pink-400 rounded-full 
                animate-pulse">
              </span>
            </h2>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Your trusted platform for accessing previous year question papers from 
            Soban Singh Jeena University, Almora
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl 
            border border-white/50 hover:shadow-2xl transition-all duration-500 
            group hover:scale-[1.01]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 
                rounded-2xl flex items-center justify-center text-white text-xl
                group-hover:rotate-12 transition-transform duration-500">
                <i className="fas fa-university"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Soban Singh Jeena University, Almora is committed to providing quality education 
              to students across Uttarakhand. Our question paper portal is designed to help 
              students prepare better for their examinations by providing access to previous 
              year papers from various departments including Science, Arts, Commerce, 
              Management, and Fine Arts.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                📚 500+ Papers
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs">
                🎓 12+ Departments
              </span>
              <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs">
                ⭐ 98% Success Rate
              </span>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl 
            border border-white/50 hover:shadow-2xl transition-all duration-500 
            group hover:scale-[1.01]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 
                rounded-2xl flex items-center justify-center text-white text-xl
                group-hover:rotate-12 transition-transform duration-500">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become the go-to platform for all SSJU students seeking quality study 
              materials and question papers. We aim to bridge the gap between students 
              and academic resources, making education accessible and preparation effective.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">12+</div>
                <div className="text-[10px] text-gray-500">Departments</div>
              </div>
              <div className="text-center p-2 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-[10px] text-gray-500">Papers</div>
              </div>
              <div className="text-center p-2 bg-pink-50 rounded-xl">
                <div className="text-2xl font-bold text-pink-600">100%</div>
                <div className="text-[10px] text-gray-500">Free Access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
              bg-clip-text text-transparent">
              ✨ What Our Students Say
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, index) => (
            <div
              key={student.id}
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl 
                transition-all duration-500 border-2 hover:border-transparent
                group relative overflow-hidden
                ${index === activeTestimonial ? 'scale-[1.02] shadow-2xl' : 'scale-100'}
                hover:-translate-y-2`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r 
                from-pink-500 via-purple-500 to-blue-500 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500">
              </div>
              
              <div className="relative bg-white rounded-3xl p-4">
                {/* Student Photo */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 
                      rounded-full blur-xl opacity-30 group-hover:opacity-60 
                      transition-opacity duration-500 animate-pulse">
                    </div>
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-14 h-14 rounded-full border-2 border-white shadow-lg 
                        group-hover:scale-110 group-hover:rotate-6 
                        transition-all duration-500 relative z-10"
                    />
                    <div className={`absolute -top-1 -right-1 w-4 h-4 
                      bg-green-400 rounded-full border-2 border-white z-20
                      ${index === activeTestimonial ? 'animate-ping' : ''}`}>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-purple-600 
                      transition-colors duration-300">
                      {student.name}
                    </h4>
                    <p className="text-xs text-gray-500">{student.course}</p>
                    <span className="inline-block px-2 py-0.5 bg-gray-100 rounded-full 
                      text-[10px] text-gray-500 mt-0.5 group-hover:bg-gradient-to-r 
                      group-hover:from-purple-100 group-hover:to-pink-100 
                      transition-all duration-300">
                      {student.department}
                    </span>
                  </div>
                </div>

                {/* Review */}
                <p className="text-sm text-gray-600 leading-relaxed italic mb-3">
                  "{student.review}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} 
                      className={`fas fa-star text-xs 
                        ${i < student.rating ? 'text-yellow-400' : 'text-gray-200'}
                        ${i < student.rating && 'animate-pulse'}`}>
                    </i>
                  ))}
                </div>

                {/* Decorative Icon */}
                <div className="absolute bottom-2 right-2 text-4xl text-gray-100 
                  group-hover:text-purple-100 transition-colors duration-500">
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Counter */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: 'fa-users', label: 'Active Students', value: '5,000+' },
            { icon: 'fa-file-pdf', label: 'Papers Available', value: '500+' },
            { icon: 'fa-graduation-cap', label: 'Passing Rate', value: '98%' },
            { icon: 'fa-star', label: 'Student Rating', value: '4.9/5' }
          ].map((stat, index) => (
            <div key={index} 
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center 
                shadow-lg hover:shadow-2xl transition-all duration-500 
                hover:-translate-y-1 group border border-white/50">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 
                rounded-full flex items-center justify-center text-white text-xl
                group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 
                mb-2 shadow-lg shadow-blue-400/30">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="text-xl font-bold text-gray-800 group-hover:text-purple-600 
                transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;