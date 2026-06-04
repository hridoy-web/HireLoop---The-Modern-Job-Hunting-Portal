'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";

function Navbar() {

    const menuItems = [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Companies", href: "/companies" },
        { name: "Pricing", href: "/pricing" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full pt-4 px-3 md:px-0">
            <div className="navbar max-w-7xl mx-auto bg-[#000000] text-white rounded-xl px-4 shadow-lg">

                {/* Logo section */}
                <div className="navbar-start">
                    <Link href="/">
                        <Image
                            src={'/images/logo.png'}
                            alt="hireloop logo"
                            width={140}
                            height={35}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="navbar-end hidden lg:flex gap-4">
                    <Link href="/login" className='text-gray-300 hover:text-white text-lg font-medium transition-colors'>
                        Sign In
                    </Link>
                    <Link href="/register" className="btn btn-primary btn-sm rounded-lg border-none bg-blue-600 hover:bg-blue-700 text-white">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="navbar-end lg:hidden">
                    <button
                        className="btn btn-ghost btn-square"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <ImCross /> : <RiMenuUnfold2Fill size={25} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {isMenuOpen && (
                <div className="bg-[#000000] p-6 mt-2 rounded-xl lg:hidden flex flex-col gap-4 shadow-xl border border-gray-800">
                    <ul className="menu w-full text-white">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-lg font-medium hover:bg-gray-800 rounded-lg">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="h-px bg-gray-700 my-0"></div>
                    <div className="flex flex-col gap-3">
                        <Link href="/login" className="text-gray-300 font-medium text-center hover:text-white">
                            Sign In
                        </Link>
                        <Link href="/register" className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 border-none text-white">
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;