import React, { useState, useEffect } from 'react';
import './App.css';
import { papersData } from './data/papers';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DepartmentsSection from './components/DepartmentsSection';
import FilterBar from './components/FilterBar';
import PaperGrid from './components/PaperGrid';
import Footer from './components/Footer';

function App() {
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section id="home" className="pt-1">
        <HeroSection />
      </section>
      
      <AboutSection />
      
      <DepartmentsSection />
      
      <section id="papers">
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
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <PaperGrid papers={filteredPapers} totalPapers={papersData.length} />
        </main>
      </section>
      
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;