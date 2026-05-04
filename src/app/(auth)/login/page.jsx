"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    // console.log("Login Attempt:", data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
    });
    if (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    if (res) {
      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-green-500 p-8 text-center">
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="text-green-50 mt-2">
            Please enter your details to login
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-5">
            {/* Email Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium text-slate-700">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className={`input input-bordered w-full focus:outline-green-500 transition-all ${
                  errors.email ? "input-error" : "border-slate-200"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <span className="text-xs text-red-500 mt-1 ml-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Input */}
            <div className="form-control w-full">
              <div className="relative">
                <label className="label flex justify-between">
                  <span className="label-text font-medium text-slate-700">
                    Password
                  </span>

                  <Link
                    href="#"
                    className="label-text-alt text-green-600 hover:underline font-medium"
                  >
                    Forgot?
                  </Link>
                </label>
                <input
                  type={showPassword ? "text" : "password"} //
                  placeholder="••••••••"
                  className={`input input-bordered w-full focus:outline-green-500 transition-all ${
                    errors.password ? "input-error" : "border-slate-200"
                  }`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute -left-2 top-1/2 text-slate-500 hover:text-green-600 transition-colors z-10"
                >
                  {!showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </span>
              </div>
              {errors.password && (
                <span className="text-xs text-red-500 mt-1 ml-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-600 border-none w-full text-white text-lg font-semibold shadow-md shadow-green-200 mt-4 normal-case"
            >
              Login
            </button>

            {/* Footer Link */}
            <div className="text-center mt-6">
              <p className="text-slate-600">
                Don't have an account?{" "}
                <Link
                  className="text-green-600 font-bold hover:bg-green-50 px-2 py-1 rounded transition-colors"
                  href="/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
