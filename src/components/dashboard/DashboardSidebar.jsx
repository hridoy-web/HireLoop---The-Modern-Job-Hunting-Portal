'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiGrid, FiFolder, FiBriefcase, FiSettings } from 'react-icons/fi';
import { IoCardOutline } from 'react-icons/io5';

const DashboardSidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', href: "/dashboard/recruiter", icon: <FiGrid className="text-xl" /> },
        { name: 'My Company', href: "/dashboard/recruiter/company", icon: <FiFolder className="text-xl" /> },
        { name: 'Manage Jobs', href: "/dashboard/recruiter/jobs", icon: <FiBriefcase className="text-xl" /> },
        { name: 'Create A Job', href: "/dashboard/recruiter/jobs/new", icon: <IoCardOutline className="text-xl" /> },
        { name: 'Settings', href: "/dashboard/recruiter/settings", icon: <FiSettings className="text-xl" /> },
    ];

    return (
        <div className="flex flex-col w-64 min-h-full bg-[#111214] text-zinc-400 p-6 border-r border-zinc-800">

            <div className="flex flex-col items-start gap-3 mb-8 px-2">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-[#1d1e20] ring-offset-base-100 ring-offset-2">
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100"
                                alt="Alex Sterling"
                                height={40}
                                width={40}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wide">Alex Sterling</h3>
                        <p className="text-xs text-zinc-500 font-medium">Recruiter</p>
                    </div>
                </div>

                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 rounded">
                    Premium Account
                </span>
            </div>

            <div className="space-y-1.5 flex-1">
                {menuItems.map((item, index) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`w-full flex items-center justify-between px-3 py-3 rounded transition-all relative ${isActive
                                    ? 'bg-zinc-800/80 text-white font-medium'
                                    : 'hover:bg-zinc-900/50 hover:text-white'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <span className={isActive ? 'text-white' : 'text-zinc-500'}>
                                    {item.icon}
                                </span>
                                <span className="text-sm">{item.name}</span>
                            </div>

                            {isActive && (
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white rounded-l"></div>
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default DashboardSidebar;