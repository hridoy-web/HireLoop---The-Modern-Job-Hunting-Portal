'use client'

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        // console.log(data, "data from clg");

        if (error) {
            toast.error(error?.message)
            return;
        } else
            toast.success(`Welcome ${data?.user?.name}`)
        router.push("/")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-6">
            <div className="w-full max-w-md bg-[#111111] border border-white/10 p-8 rounded-3xl shadow-2xl">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Please enter your details to sign in</p>
                </div>

                {/* Google Sign In */}
                <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-200 text-black font-semibold py-3 rounded-xl transition-all duration-300">
                    <FaGoogle className="text-xl" />
                    Sign in with Google
                </button>

                <div className="flex items-center gap-4 my-6">
                    <div className="h-px flex-1 bg-white/10"></div>
                    <span className="text-xs text-gray-500 uppercase">OR</span>
                    <div className="h-px flex-1 bg-white/10"></div>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleLogin} >
                    {/* Email */}
                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                    </div>

                    {/* Password */}
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

                    <div className="text-right">
                        <Link href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</Link>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                        Sign In
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-400 mt-6">
                    Dont have an account?{" "}
                    <Link href="/signup" className="text-blue-500 hover:underline font-medium">Sign up</Link>
                </p>
            </div>
        </div>
    );
}