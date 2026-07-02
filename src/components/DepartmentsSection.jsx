

import React, { useState } from 'react';

const DepartmentsSection = () => {
  const [activeDept, setActiveDept] = useState(null);

  const departments = [
    {
      id: 1,
      name: 'Computer Science',
      icon: 'fa-laptop-code',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      description: 'Modern computing and programming education',
      subjects: ['Data Structures', 'Algorithms', 'Python Programming', 'Java', 'Database Management', 'Operating Systems', 'Computer Networks', 'Web Development', 'Machine Learning', 'Cybersecurity']
    },
    {
      id: 2,
      name: 'Botany',
      icon: 'fa-leaf',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      description: 'Study of plants and their physiology',
      subjects: ['Plant Physiology', 'Ecology', 'Taxonomy', 'Genetics', 'Plant Anatomy', 'Fungi & Lichens', 'Algae & Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms']
    },
    {
      id: 3,
      name: 'Zoology',
      icon: 'fa-paw',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      description: 'Study of animals and their behavior',
      subjects: ['Animal Physiology', 'Evolution', 'Ecology', 'Genetics', 'Embryology', 'Taxonomy', 'Insect Biology', 'Fish Biology', 'Mammalogy', 'Wildlife Conservation']
    },
    {
      id: 4,
      name: 'BA (Arts)',
      icon: 'fa-palette',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      description: 'Humanities and social sciences education',
      subjects: ['History', 'Political Science', 'Sociology', 'Economics', 'Geography', 'Psychology', 'Philosophy', 'English Literature', 'Hindi Literature', 'Sanskrit', 'Urdu', 'Public Administration']
    },
    {
      id: 5,
      name: 'BFA (Fine Arts)',
      icon: 'fa-paintbrush',
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50',
      description: 'Creative and visual arts education',
      subjects: ['Drawing', 'Painting', 'Sculpture', 'Printmaking', 'Photography', 'Art History', 'Aesthetics', 'Graphic Design', 'Digital Art', 'Art Criticism', 'Portfolio Design']
    },
    {
      id: 6,
      name: 'B.Sc (Science)',
      icon: 'fa-flask',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      description: 'General science and research education',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Statistics', 'Biology', 'Computer Science', 'Environmental Science', 'Biotechnology', 'Microbiology', 'Biochemistry', 'Geology']
    },
    {
      id: 7,
      name: 'BBA (Management)',
      icon: 'fa-chart-line',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-50',
      description: 'Business and management education',
      subjects: ['Management Principles', 'Marketing', 'Finance', 'Human Resources', 'Operations', 'Business Law', 'Economics', 'Accounting', 'Business Ethics', 'Entrepreneurship', 'Organizational Behavior', 'Strategic Management']
    },
    {
      id: 8,
      name: 'B.Com (Commerce)',
      icon: 'fa-coins',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      description: 'Commerce and financial education',
      subjects: ['Financial Accounting', 'Corporate Accounting', 'Business Law', 'Economics', 'Taxation', 'Auditing', 'Management', 'Marketing', 'Business Statistics', 'Banking', 'Insurance', 'International Business']
    }
  ];

  return (
    <section id="departments" className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 
              rounded-full blur-2xl opacity-20 animate-pulse">
            </div>
            <h2 className="relative text-3xl md:text-4xl font-bold text-gray-800 inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 
                bg-clip-text text-transparent">
                🏛️ Departments at SSJU
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r 
                from-indigo-400 via-blue-400 to-cyan-400 rounded-full 
                animate-pulse">
              </span>
            </h2>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Explore our diverse academic departments and their subject offerings
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                transition-all duration-500 group cursor-pointer
                hover:-translate-y-2 border-2 border-transparent
                hover:border-${dept.color.split('-')[1]}-200
                ${activeDept === dept.id ? 'scale-[1.02] shadow-2xl' : 'scale-100'}`}
              onMouseEnter={() => setActiveDept(dept.id)}
              onMouseLeave={() => setActiveDept(null)}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${dept.bgColor} 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
              </div>

              {/* Glowing Border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${dept.color} 
                rounded-2xl blur-md opacity-0 group-hover:opacity-30 
                transition-opacity duration-500 group-hover:animate-pulse`}>
              </div>

              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${dept.color} 
                  flex items-center justify-center text-white text-2xl
                  group-hover:scale-110 group-hover:rotate-6 
                  transition-all duration-500 mb-4 shadow-lg shadow-${dept.color.split('-')[1]}-300/30`}>
                  <i className={`fas ${dept.icon}`}></i>
                </div>

                {/* Department Name */}
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 
                  transition-colors duration-300">
                  {dept.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{dept.description}</p>

                {/* Subjects Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {dept.subjects.slice(0, 4).map((subject, idx) => (
                    <span key={idx} 
                      className={`text-[10px] px-2 py-0.5 rounded-full bg-gray-100 
                        text-gray-600 group-hover:bg-gradient-to-r group-hover:${dept.color} 
                        group-hover:text-white transition-all duration-300
                        ${activeDept === dept.id ? 'animate-fade-in-up' : ''}`}
                      style={{ animationDelay: `${idx * 50}ms` }}>
                      {subject}
                    </span>
                  ))}
                  {dept.subjects.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 
                      text-gray-400">
                      +{dept.subjects.length - 4} more
                    </span>
                  )}
                </div>

                {/* View All Subjects Button */}
                <button className={`w-full mt-2 py-2 rounded-xl text-xs font-medium
                  bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r 
                  group-hover:${dept.color} group-hover:text-white 
                  transition-all duration-500 transform group-hover:scale-[1.02]
                  flex items-center justify-center gap-2`}>
                  <span>View All Subjects</span>
                  <i className="fas fa-arrow-right text-[10px] 
                    group-hover:translate-x-1 transition-transform duration-300">
                  </i>
                </button>

                {/* Subject Count Badge */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 
                  bg-gradient-to-r ${dept.color} rounded-full 
                  flex items-center justify-center text-white text-xs font-bold 
                  shadow-lg transform group-hover:scale-110 group-hover:rotate-12 
                  transition-all duration-500`}>
                  {dept.subjects.length}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Department Details Expanded View */}
        {activeDept && (
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 
            animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r 
                ${departments.find(d => d.id === activeDept)?.color} 
                flex items-center justify-center text-white text-xl`}>
                <i className={`fas ${departments.find(d => d.id === activeDept)?.icon}`}></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  {departments.find(d => d.id === activeDept)?.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {departments.find(d => d.id === activeDept)?.subjects.length} Subjects
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {departments.find(d => d.id === activeDept)?.subjects.map((subject, idx) => (
                <span key={idx}
                  className={`px-3 py-1.5 bg-gradient-to-r 
                    ${departments.find(d => d.id === activeDept)?.color} 
                    text-white rounded-full text-xs font-medium
                    transform hover:scale-110 transition-all duration-300
                    shadow-lg shadow-${departments.find(d => d.id === activeDept)?.color.split('-')[1]}-300/30
                    animate-fade-in-up`}
                  style={{ animationDelay: `${idx * 50}ms` }}>
                  {subject}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default DepartmentsSection;