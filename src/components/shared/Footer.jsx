"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const footerData = {
    product: ["Job discovery", "Worker AI", "Companies", "Salary data"],
    navigations: ["Help center", "Career library", "Contact"],
    resources: ["Brand Guideline", "Newsroom"],
  };

  return (
    <footer className="w-full bg-[#0a0a0a] py-16 px-6 md:px-20 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* Logo */}
        <div className="md:col-span-2 space-y-4">
          <Image
            src="/images/logo.png"
            alt="hireloop logo"
            width={140}
            height={35}
            priority
          />
          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            The AI-native career platform. Built for people who take their work seriously.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Link href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors">
              <FaFacebook size={18} />
            </Link>
            <Link href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors">
              <FaPinterest size={18} />
            </Link>
            <Link href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors">
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Dynamic sections*/}
        {Object.entries(footerData).map(([key, links]) => (
          <div key={key}>
            <h3 className="text-white font-medium capitalize mb-6">{key}</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs gap-4">
        <p>Copyright 2026 - HireLoop</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white text-gray-400 transition-colors">Terms & Policy</Link>
          <Link href="#" className="hover:text-white text-gray-400 transition-colors">Privacy Guideline</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;