import React from 'react';

const FilterBar = ({ 
    searchTerm, 
    setSearchTerm, 
    filterDept, 
    setFilterDept, 
    filterSem, 
    setFilterSem, 
    departments, 
    semesters, 
    clearFilters 
}) => {
    return (
        <div className="bg-gray-50/80 sticky top-0 z-10 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-3">
                <div className="flex-1 min-w-[200px]">
                    <div className="relative">
                        <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="text"
                            placeholder="Search by code or title..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#2a4f7a] focus:border-transparent outline-none bg-white/90"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <select
                        value={filterDept}
                        onChange={(e) => setFilterDept(e.target.value)}
                        className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#2a4f7a] outline-none"
                    >
                        {departments.map(dept => (
                            <option key={dept} value={dept}>
                                {dept === 'all' ? 'All Departments' : dept}
                            </option>
                        ))}
                    </select>
                    <select
                        value={filterSem}
                        onChange={(e) => setFilterSem(e.target.value)}
                        className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#2a4f7a] outline-none"
                    >
                        {semesters.map(sem => (
                            <option key={sem} value={sem}>
                                {sem === 'all' ? 'All Semesters' : sem}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={clearFilters}
                        className="text-sm text-[#1e3a5f] underline underline-offset-2 hover:no-underline px-2"
                    >
                        <i className="fas fa-undo-alt mr-1"></i> Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;