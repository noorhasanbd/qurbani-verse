"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (session) {
    redirect("/");
  }

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleLoginFunc = async (data) => {
    setIsLoading(true);
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message, { theme: "dark", transition: Bounce });
    }
    if (res) {
      toast.success("Login Successful", { theme: "dark", transition: Bounce });
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 p-8 text-center text-white">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-green-100 mt-2">Login to manage your account</p>
        </div>

        <div className="p-8">
          {/* Social Login */}
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-300 py-3 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm mb-6"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500 uppercase tracking-wider">
                Or email login
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-4">
            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                  errors.email ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid format" },
                })}
              />
              {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <Link href="#" className="text-xs text-green-600 hover:underline font-medium">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                    errors.password ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  }`}
                  {...register("password", { required: "Password is required" })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 ml-1">{errors.password.message}</p>}
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-green-100 transition-all transform active:scale-[0.98] mt-2 disabled:opacity-70"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center mt-8 text-slate-600 text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="text-green-600 font-bold hover:underline">
              Register Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;