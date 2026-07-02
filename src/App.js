
import LoginPopup from './components/LoginPopup';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { papersData } from './data/papers';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DepartmentsSection from './components/DepartmentsSection';
import FilterBar from './components/FilterBar';
import PaperGrid from './components/PaperGrid';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import WaveBackground from './components/WaveBackground';







// ============================================
// HOME PAGE - Sirf HeroSection (No extra sections)
// ============================================
const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* Home page pe sirf HeroSection hai, baaki sab alag pages mein */}
    </>
    
  );
};


// ============================================
// ABOUT PAGE - Sirf AboutSection
// ============================================
const AboutPage = () => {
  return (
    <div className="pt-4">
      <AboutSection />
    </div>
  );
};

// ============================================
// DEPARTMENTS PAGE - Sirf DepartmentsSection
// ============================================
const DepartmentsPage = () => {
  return (
    <div className="pt-4">
      <DepartmentsSection />
    </div>
  );
};

// ============================================
// PAPERS PAGE - Sirf Papers
// ============================================
const PapersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDept, setFilterDept] = useState('all');
  const [filterSem, setFilterSem] = useState('all');
  const [filteredPapers, setFilteredPapers] = useState(papersData);

  const departments = ['all', ...new Set(papersData.map(p => p.department))];
  const semesters = ['all', ...new Set(papersData.map(p => p.semester))];

  useEffect(() => {
    let result = papersData;
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(p =>
        p.code.toLowerCase().includes(term) ||
        p.title.toLowerCase().includes(term)
      );
    }
    if (filterDept !== 'all') {
      result = result.filter(p => p.department === filterDept);
    }
    if (filterSem !== 'all') {
      result = result.filter(p => p.semester === filterSem);
    }
    setFilteredPapers(result);
  }, [searchTerm, filterDept, filterSem]);

  const clearFilters = () => {
    setSearchTerm('');
    setFilterDept('all');
    setFilterSem('all');
  };

  return (
    <div className="pt-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          📚 All Question Papers
        </h1>
        <p className="text-gray-500 mt-2">Browse all available question papers</p>
      </div>
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterDept={filterDept}
        setFilterDept={setFilterDept}
        filterSem={filterSem}
        setFilterSem={setFilterSem}
        departments={departments}
        semesters={semesters}
        clearFilters={clearFilters}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PaperGrid papers={filteredPapers} totalPapers={papersData.length} />
      </main>
    </div>
  );
};

// ============================================
// MAIN APP WITH ROUTER
// ============================================
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">



      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/papers" element={<PapersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

// ============================================
// WRAPPED APP WITH ROUTER
// ============================================
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);






export default AppWrapper;