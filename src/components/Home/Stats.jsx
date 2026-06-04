"use client";

import React from "react";
import Image from "next/image";
import { FaBriefcase, FaBuilding, FaUsers, FaStar } from "react-icons/fa";

const Stats = () => {
  const statsData = [
    { id: 1, icon: FaBriefcase, value: "50K+", label: "Active Jobs" },
    { id: 2, icon: FaBuilding, value: "12K+", label: "Companies" },
    { id: 3, icon: FaUsers, value: "2M+", label: "Job Seekers" },
    { id: 4, icon: FaStar, value: "97%", label: "Satisfaction" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] py-16 md:py-32 px-4">
      
      {/* Background: Globe image with gradient masking */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-20 md:opacity-40">
        <div className="relative w-full h-full">
          <Image
            src="/images/globe.png" 
            alt="Globe Backdrop"
            fill
            priority
            className="object-contain md:object-cover scale-[2.5] md:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        </div>
      </div>

      {/* Visual: Ambient neon glow for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-[600px] h-64 md:h-[600px] bg-blue-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        
        {/* Header: Centered with responsive typography */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-24">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Assisting over{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              15,000 job seekers
            </span>{" "}
            find their dream careers.
          </h2>
        </div>

        {/* Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative bg-[#0e0e11]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-2"
              >
                {/* Inner Glow: Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  {/* Icon: Styled box with hover scale */}
                  <div className="inline-flex p-3 rounded-lg bg-white/5 text-blue-400 mb-5 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={24} />
                  </div>
                  
                  {/* Data: Value and Label */}
                  <div>
                    <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-1 tracking-tight">
                      {stat.value}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;