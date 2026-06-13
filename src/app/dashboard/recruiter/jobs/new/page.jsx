'use client';

import { createJob } from '@/lib/actions/jobs';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import { FiBriefcase, FiDollarSign, FiMapPin, FiCalendar, FiFileText, FiAward } from 'react-icons/fi';

const NewPostJobPage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        // from reset variable
        const form = e.currentTarget;

        // all from data collection
        const formData = new FormData(e.currentTarget);

        // checkbox value handle
        const isRemoteOnly = formData.has('isRemote');
        formData.set('isRemote', String(isRemoteOnly));

        // all from data convert object format
        const jobData = Object.fromEntries(formData.entries());

        // Add extra properties
        jobData.status = "active";
        jobData.companyId = "company_456";

        // console.log('Submitted Job Data:', jobData);
        // return;

        // database api connection
        const response = await createJob(jobData);

        if (response?.insertedId) {
            toast.success('Job posted successfully')
            form.reset();
            redirect('/dashboard/recruiter')
        } else {
            toast.error('Something went wrong.')
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8 pb-12 pt-6">

            <div>
                <h1 className="text-2xl font-bold text-white tracking-wide">Post a New Job</h1>
                <p className="text-zinc-500 text-sm mt-1">Fill in the details below to publish a new job opening.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div className="bg-[#111214] border border-zinc-800 rounded-xl p-6 space-y-6">
                    <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                        <FiBriefcase className="text-zinc-400 text-lg" />
                        <h2 className="text-base font-semibold text-white">Job Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Job Title</label>
                            <input
                                type="text"
                                name="jobTitle"
                                required
                                placeholder="e.g. Senior React Developer"
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Job Category</label>
                            <select
                                name="jobCategory"
                                required
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-700 cursor-pointer"
                            >
                                <option value="">Select Category</option>
                                <option value="Software Development">Software Development</option>
                                <option value="Design">UI/UX Design</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Management">Product Management</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Job Type</label>
                            <select
                                name="jobType"
                                required
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-700 cursor-pointer"
                            >
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Remote">Remote</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                                <FiCalendar className="text-zinc-400" /> Application Deadline
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                required
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-700"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                            <FiDollarSign className="text-zinc-400" /> Salary Range
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                            <input
                                type="number"
                                name="minSalary"
                                placeholder="Min (e.g. 40000)"
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                            />
                            <input
                                type="number"
                                name="maxSalary"
                                placeholder="Max (e.g. 70000)"
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                            />
                            <select
                                name="currency"
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-700 cursor-pointer"
                            >
                                <option value="USD">USD ($)</option>
                                <option value="BDT">BDT (৳)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="GBP">GBP (£)</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4 pt-2">
                        <div className="flex items-center justify-between bg-zinc-950 p-4 rounded-lg border border-zinc-850">
                            <div className="flex items-center gap-2">
                                <FiMapPin className="text-zinc-400" />
                                <div>
                                    <p className="text-sm font-medium text-white">Remote Job Only</p>
                                    <p className="text-xs text-zinc-500">Check this if applicants can work from anywhere.</p>
                                </div>
                            </div>

                            <input
                                type="checkbox"
                                name="isRemote"
                                className="w-9 h-5 bg-zinc-700 checked:bg-white rounded-full appearance-none cursor-pointer relative before:content-[''] before:absolute before:h-4 before:w-4 before:bg-zinc-900 before:rounded-full before:top-0.5 before:left-0.5 checked:before:translate-x-4 before:transition-all duration-200"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="e.g. Chittagong"
                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="e.g. Bangladesh"
                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#111214] border border-zinc-800 rounded-xl p-6 space-y-6">
                    <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                        <FiFileText className="text-zinc-400 text-lg" />
                        <h2 className="text-base font-semibold text-white">Job Description & Details</h2>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Key Responsibilities</label>
                        <textarea
                            name="responsibilities"
                            required
                            rows={4}
                            placeholder="Write core duties and daily tasks..."
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 resize-y"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Requirements / Qualifications</label>
                        <textarea
                            name="requirements"
                            required
                            rows={4}
                            placeholder="Write required skills, experience, or tools..."
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 resize-y"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                            <FiAward className="text-zinc-400" /> Perks & Benefits <span className="text-zinc-600 text-[10px] uppercase font-normal ml-1">(Optional)</span>
                        </label>
                        <textarea
                            name="benefits"
                            rows={3}
                            placeholder="e.g. Remote freedom, Medical insurance, 2x Festival bonus..."
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 resize-y"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-4">
                    <button
                        type="button"
                        className="px-5 py-2.5 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2.5 rounded-lg text-sm font-bold text-[#0b0c0e] bg-white hover:bg-zinc-200 transition-all shadow-md cursor-pointer"
                    >
                        Publish Job
                    </button>
                </div>

            </form>
        </div>
    );
};

export default NewPostJobPage;