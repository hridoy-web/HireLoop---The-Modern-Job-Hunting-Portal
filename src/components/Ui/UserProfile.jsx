"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


const UserProfile = ({ user }) => {
    const router = useRouter()

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login")
                }
            }
        })
    }

    const getInitials = (fullName) => {
        if (!fullName) return "U";
        const names = fullName.trim().split(" ");
        if (names.length > 1) {
            return (names[0][0] + names[1][0]).toUpperCase();
        }
        return names[0][0].toUpperCase();
    };

    return (
        <div className="dropdown dropdown-end z-50">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle p-0 min-h-0 w-12 h-12 flex items-center justify-center overflow-visible"
            >
                {user?.image ? (
                    <div className="w-10 h-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-[#000000] relative">
                        <Image
                            src={user?.image}
                            alt={user?.name || "User Avatar"}
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                ) : (
                    <div className="w-10 h-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-[#000000] bg-neutral text-neutral-content uppercase select-none flex items-center justify-center overflow-visible">
                        <span className="text-xs font-semibold tracking-wider">{getInitials(user?.name)}</span>
                    </div>
                )}
            </div>

            {/* Dropdown Card */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-4 shadow-2xl bg-[#111111] border border-white/5 rounded-2xl w-64 text-gray-300 space-y-3">
                <div className="px-2 py-1 border-b border-white/5 pb-3">
                    <p className="text-white font-semibold text-base truncate">{user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>
                <li>
                    <Link href="/profile" className="hover:text-white py-2 rounded-lg transition-colors">
                        My Profile
                    </Link>
                </li>
                <li>
                    <button
                        onClick={handleSignOut} 
                        className="text-red-400 hover:text-red-500 hover:bg-red-500/10 py-2 rounded-lg w-full text-left transition-colors"
                    >
                        Sign Out
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default UserProfile;