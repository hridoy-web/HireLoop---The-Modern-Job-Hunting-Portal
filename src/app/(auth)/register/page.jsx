"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaBriefcase } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, email, password, role } = Object.fromEntries(formData.entries());
        // console.log(name, email, password, role);

        // Password Length Validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long!");
            return;
        }

        // Uppercase Letter Validation
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must include at least one uppercase letter!");
            return;
        }

        // Lowercase Letter Validation
        if (!/[a-z]/.test(password)) {
            toast.error("Password must include at least one lowercase letter!");
            return;
        }

        const {data, error } = await authClient.signUp.email({
            email,
            password,
            name,
            role,
        });

        // console.log("error check", error, data);

        if (error) {
            toast.error(error?.message);
            return;
        } else {
            toast.success("Registration successful")
            router.push("/")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-6">
            <div className="w-full max-w-md bg-[#111111] border border-white/10 p-8 rounded-3xl shadow-2xl">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Create an account</h1>
                    <p className="text-gray-400">Join us to find your dream job</p>
                </div>

                <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-200 text-black font-semibold py-3 rounded-xl transition-all duration-300">
                    <FaGoogle className="text-xl" />
                    Sign up with Google
                </button>

                <div className="flex items-center gap-4 my-6">
                    <div className="h-px flex-1 bg-white/10"></div>
                    <span className="text-xs text-gray-500 uppercase">OR</span>
                    <div className="h-px flex-1 bg-white/10"></div>
                </div>

                <form className="space-y-5" onSubmit={handleSignup}>
                    {/* Name Field */}
                    <div className="relative">
                        <FaUser className="absolute left-4 top-4 text-gray-500" />
                        <input type="text" name="name" placeholder="Full Name" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all" />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
                        <input type="email" name="email" placeholder="Email Address" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all" />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <FaLock className="absolute left-4 top-4 text-gray-500" />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 pl-12 pr-12 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-4 text-gray-500 hover:text-white"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* role selector field */}
                    <div className="relative">
                        <FaBriefcase className="absolute left-4 top-4 text-gray-500 z-10" />
                        <select 
                            name="role" 
                            defaultValue=""
                            required 
                            className="select w-full bg-[#0a0a0a] border border-white/10 rounded-xl pl-12 py-3 h-auto min-h-0 focus:outline-none focus:border-blue-500 text-gray-400 focus:text-white transition-all appearance-none"
                        >
                            <option value="" disabled>Choose your role</option>
                            <option value="job_seeker" className="bg-[#111111] text-white">Job Seeker</option>
                            <option value="recruiter" className="bg-[#111111] text-white">Recruiter</option>
                        </select>
                    </div>

                    {/* register btn */}
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-sm text-gray-400 mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-500 hover:underline font-medium">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;