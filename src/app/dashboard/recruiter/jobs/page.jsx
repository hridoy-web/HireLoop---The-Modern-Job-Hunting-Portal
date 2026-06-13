import { getCompanyJobs } from '@/lib/api/jobs';
import { FiBriefcase, FiMapPin, FiCalendar, FiDollarSign } from 'react-icons/fi';

const RecruiterJobs = async () => {
    const companyId = 'company_456';

    const jobs = await getCompanyJobs(companyId) || [];

    return (
        <div className="max-w-5xl mx-auto pt-6 pb-12 px-4 sm:px-6">

            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-white tracking-wide">Manage Jobs</h1>
                    <p className="text-zinc-500 text-xs mt-0.5">Here is a list of all jobs posted by your company.</p>
                </div>
                <div className="badge badge-zinc-800 border border-zinc-700 text-zinc-400 p-4 font-semibold text-xs">
                    Total Jobs: {jobs.length}
                </div>
            </div>

            {jobs.length === 0 ? (
                <div className="bg-[#111214] border border-zinc-800 rounded-xl p-12 text-center">
                    <FiBriefcase className="text-zinc-600 text-4xl mx-auto mb-3" />
                    <p className="text-sm font-medium text-white">No jobs posted yet</p>
                    <p className="text-xs text-zinc-500 mt-1">Click on Post a New Job to create your first listing.</p>
                </div>
            ) : (

                <div className="bg-[#111214] border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full text-zinc-300">
                            <thead>
                                <tr className="border-b border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider bg-zinc-950/50">
                                    <th className="py-4 px-6 font-semibold">Job Details</th>
                                    <th className="py-4 px-4 font-semibold">Category</th>
                                    <th className="py-4 px-4 font-semibold">Salary Range</th>
                                    <th className="py-4 px-4 font-semibold">Deadline</th>
                                    <th className="py-4 px-4 font-semibold">Status</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-zinc-800/50">
                                {jobs.map((job) => (
                                    <tr key={job._id || job.jobTitle} className="hover:bg-zinc-900/40 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="font-semibold text-white text-sm">{job.jobTitle}</div>
                                            <div className="flex items-center gap-3 mt-1.5 text-xs text-zinc-500">
                                                <span className="badge badge-sm bg-zinc-800 border-none text-zinc-300 font-medium rounded px-2 py-2">
                                                    {job.jobType}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FiMapPin className="text-zinc-600" />
                                                    {job.isRemote === "true" || job.isRemote === true ? (
                                                        <span className="text-emerald-500 font-medium">Remote</span>
                                                    ) : (
                                                        `${job.city}, ${job.country}`
                                                    )}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="py-4 px-4 text-sm text-zinc-400 align-middle">
                                            {job.jobCategory}
                                        </td>

                                        <td className="py-4 px-4 text-sm font-medium text-zinc-300 align-middle">
                                            <span className="flex items-center gap-1">
                                                <FiDollarSign className="text-zinc-500" />
                                                {job.minSalary} - {job.maxSalary} <span className="text-xs text-zinc-500 font-normal ml-0.5">{job.currency}</span>
                                            </span>
                                        </td>

                                        <td className="py-4 px-4 text-sm text-zinc-400 align-middle">
                                            <span className="flex items-center gap-1.5">
                                                <FiCalendar className="text-zinc-600" />
                                                {job.deadline}
                                            </span>
                                        </td>

                                        <td className="py-4 px-4 align-middle">
                                            <span className={`badge badge-sm font-semibold capitalize tracking-wide rounded border px-2.5 py-2.5
                                                ${job.status === 'active'
                                                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                                    : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                                                }`}
                                            >
                                                {job.status || 'Active'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecruiterJobs;