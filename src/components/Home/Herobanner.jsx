'use client';

import React from 'react';
import { FiSearch, FiMapPin, FiBriefcase } from "react-icons/fi";

const Herobanner = () => {
  return (
    <section className="w-full bg-[#0a0a0a] py-16 md:py-20 px-4 text-center text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm mb-6 md:mb-8">
          <FiBriefcase size={16} className="text-orange-500" />
          <span className="tracking-wide text-gray-300">50,000+ NEW JOBS THIS MONTH</span>
        </div>

        {/* Heading text */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
          Find Your Dream Job Today
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-lg mb-8 md:mb-10 leading-relaxed px-2">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl bg-[#111111] p-2 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center gap-2 mb-8 shadow-2xl">
          
          <div className="flex items-center gap-3 px-3 py-2 w-full">
            <FiSearch size={20} className="text-gray-500 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Job title, skill or company" 
              className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm md:text-base"
            />
          </div>
          
          <div className="hidden md:block h-8 w-px bg-white/10" />
          
          <div className="flex items-center gap-3 px-3 py-2 w-full">
            <FiMapPin size={20} className="text-gray-500 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Location or Remote" 
              className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm md:text-base"
            />
          </div>

          {/* search */}
          <button className="btn btn-primary min-h-12 h-12 w-full md:w-14 rounded-xl flex items-center justify-center border-none">
            <FiSearch size={20} className="text-white" />
          </button>
        </div>

        {/* Trending Positions */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-sm w-full">
          <span className="text-gray-500 mb-2 md:mb-0">Trending Position</span>
          <div className="flex flex-wrap justify-center gap-2">
            {["Product Designer", "AI Engineering", "Dev-ops Engineer"].map((tag) => (
              <button 
                key={tag} 
                className="px-4 py-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-xs md:text-sm bg-transparent text-gray-300"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Herobanner;