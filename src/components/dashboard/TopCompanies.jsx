
const TopCompanies = () => {

    const companies = [
        { name: 'Google Inc.', location: 'Mountain View', jobs: 24, logo: 'G' },
        { name: 'Meta Platforms', location: 'Menlo Park', jobs: 18, logo: 'M' },
        { name: 'Stripe', location: 'San Francisco', jobs: 12, logo: 'S' },
        { name: 'Tesla', location: 'Palo Alto', jobs: 21, logo: 'T' },
    ];

    return (
        <div className="bg-[#111214] border border-zinc-800/80 rounded-xl p-6 w-full lg:w-90">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white tracking-wide">My Top Companies</h3>
                <button className="text-xs font-semibold text-zinc-500 hover:text-white transition-colors">View All</button>
            </div>

            <div className="space-y-4">
                {companies.map((company, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/10 hover:border-zinc-700/50 transition-all group">
                        <div className="flex items-center gap-3">

                            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center font-bold text-white border border-zinc-700/20 group-hover:bg-zinc-700 transition-colors">
                                {company.logo}
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-white tracking-wide">{company.name}</h4>
                                <p className="text-xs text-zinc-500 font-medium">{company.location}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-bold text-white">{company.jobs}</span>
                            <p className="text-[10px] uppercase tracking-wider font-bold text-zinc-500">Active Jobs</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCompanies;