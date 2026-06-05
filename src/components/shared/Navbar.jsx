"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { authClient } from "@/lib/auth-client";
import UserProfile from "../Ui/UserProfile";

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = session?.user;
    // console.log(user);
    const menuItems = [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Companies", href: "/companies" },
        { name: "Pricing", href: "/pricing" },
    ];
    return (
        <nav className="sticky top-0 z-50 w-full pt-2 px-3">

            <div className="navbar max-w-7xl mx-auto bg-[#222222] text-white rounded-xl px-4 shadow-lg border border-white/5">

                {/* Navbar Start: Logo */}
                <div className="navbar-start">
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="hireloop logo"
                            width={140}
                            height={35}
                            priority
                        />
                    </Link>
                </div>

                {/* Navbar Center: Desktop Menu */}
                <div className="navbar-center hidden md:flex">
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

                {/* Navbar End */}
                <div className="navbar-end gap-4">
                    {user ? (
                        <UserProfile user={user} />
                    ) : (
                        <div className="hidden md:flex items-center gap-4">
                            <Link href="/login" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                                Sign In
                            </Link>
                            <Link href="/register" className="btn btn-primary btn-sm rounded-lg border-none bg-blue-600 hover:bg-blue-700 text-white">
                                Get Started
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu Icon Toggle */}
                    <button
                        className="btn btn-ghost btn-square md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <ImCross size={16} /> : <RiMenuUnfold2Fill size={25} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="bg-[#000000] p-6 mt-2 rounded-xl lg:hidden flex flex-col gap-4 shadow-xl border border-white/5">
                    <ul className="menu w-full text-white space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-lg font-medium hover:bg-white/5 rounded-lg py-2 transition-colors">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {!user && (
                        <>
                            <div className="h-px bg-white/10 my-1" />
                            <div className="flex flex-col gap-3">
                                <Link href="/login" className="text-gray-300 font-medium text-center hover:text-white py-2 transition-colors">
                                    Sign In
                                </Link>
                                <Link href="/register" className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 border-none text-white">
                                    Get Started
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;