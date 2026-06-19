import React from 'react';

const Header = () => {
    return (
        <header className="bg-university text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <i className="fas fa-university text-3xl gold-accent"></i>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">SSJU Almora</h1>
                        <p className="text-xs opacity-80 font-light tracking-wider">Question Paper Provider</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                        <i className="fas fa-file-alt gold-accent"></i>
                        <span className="hidden sm:inline">Papers: 12</span>
                    </span>
                    <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                        <i className="fas fa-calendar-alt gold-accent"></i>
                        <span>2022–2023</span>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;