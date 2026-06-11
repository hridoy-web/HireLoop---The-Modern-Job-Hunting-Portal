
const RecentApplications = () => {
    
    const applications = [
        { name: 'Julianne Moore', role: 'Senior Product Designer', date: 'Oct 24, 2023', exp: '4 years', status: 'Interviewing', statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
        { name: 'Robert Downey', role: 'Backend Engineer', date: 'Oct 23, 2023', exp: '4 years', status: 'New', statusColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
        { name: 'Emma Stone', role: 'Marketing Lead', date: 'Oct 22, 2023', exp: '0 years', status: 'Reviewing', statusColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
        { name: 'Chris Pratt', role: 'Product Manager', date: 'Oct 21, 2023', exp: '5 years', status: 'Rejected', statusColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
    ];

    return (

        <div className="bg-[#111214] border border-zinc-800/80 rounded-xl p-4 md:p-6 w-full max-w-full flex-1 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white tracking-wide">Recent Applications</h3>
                <button className="text-xs font-semibold text-zinc-500 hover:text-white transition-colors">View All</button>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full text-zinc-400 border-separate border-spacing-y-3">
                    <thead>

                        <tr className="text-zinc-500 text-xs uppercase tracking-wider border-none whitespace-nowrap">
                            <th className="bg-transparent font-semibold pl-0">Candidate Name</th>
                            <th className="bg-transparent font-semibold">Role</th>
                            <th className="bg-transparent font-semibold">Date Applied</th>
                            <th className="bg-transparent font-semibold">Experience</th>
                            <th className="bg-transparent font-semibold pr-0 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app, index) => (
                            <tr key={index} className="hover:bg-zinc-900/30 transition-colors group whitespace-nowrap">
                                <td className="bg-transparent pl-0 py-4 border-b border-zinc-800/50 group-hover:border-zinc-700/50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center font-semibold text-xs text-white shrink-0">
                                            {app.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span className="font-medium text-white text-sm">{app.name}</span>
                                    </div>
                                </td>
                                <td className="bg-transparent py-4 text-sm border-b border-zinc-800/50 group-hover:border-zinc-700/50">{app.role}</td>
                                <td className="bg-transparent py-4 text-sm border-b border-zinc-800/50 group-hover:border-zinc-700/50 text-zinc-500">{app.date}</td>
                                <td className="bg-transparent py-4 text-sm border-b border-zinc-800/50 group-hover:border-zinc-700/50 text-zinc-500">{app.exp}</td>
                                <td className="bg-transparent py-4 border-b border-zinc-800/50 group-hover:border-zinc-700/50 pr-0 text-right">
                                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border inline-block ${app.statusColor}`}>
                                        {app.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentApplications;