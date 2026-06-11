"use client"
import DashboardCard from '@/components/Ui/DashboardCard';
import { FiFileText, FiUsers, FiZap, FiCheckCircle } from 'react-icons/fi';
import { useSession } from '@/lib/auth-client';
import RecentApplications from '@/components/dashboard/RecentApplications';
import TopCompanies from '@/components/dashboard/TopCompanies';

const RecruiterPage = () => {

    const statsData = [
        {
            title: 'Total Job Posts',
            value: '48',
            icon: FiFileText,
        },
        {
            title: 'Total Applicants',
            value: '1,284',
            icon: FiUsers,
        },
        {
            title: 'Active Jobs',
            value: '18',
            icon: FiZap,
        },
        {
            title: 'Jobs Closed',
            value: '32',
            icon: FiCheckCircle,
        },
    ]

    const { data: session, isPending } = useSession();
    if (isPending) {
        return (
            <div className='min-h-screen flex justify-center'>
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
                <span className="loading loading-ring loading-xl"></span>
            </div>
        )
    }

    const user = session?.user;
    // console.log(user, 'session ');

    return (
        <div className="space-y-6">

            <div className="mb-2">
                <h1 className="text-2xl md:text-3xl mb-5 font-bold text-white tracking-wide">Welcome back, {user?.name}</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {statsData.map((stat, index) => (
                    <DashboardCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                    />
                ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-start">
                <RecentApplications />
                <TopCompanies />
            </div>
        </div>
    );
};

export default RecruiterPage;