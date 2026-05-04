"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
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

  const handleRegistrationFunc = async (data) => {
    setIsLoading(true);
    const { email, name, photoUrl, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoUrl,
      callbackURL: "/",
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message, { theme: "light", transition: Bounce });
    }

    if (res) {
      toast.success("User Created Successfully", {
        theme: "light",
        transition: Bounce,
      });
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl border border-slate-100 overflow-hidden">
        <div className="bg-green-600 p-8 text-center text-white">
          <h2 className="text-3xl font-bold">Create Account</h2>
          <p className="text-green-100 mt-2">Join our community today</p>
        </div>

        <div className="p-8">
          <button
            onClick={handleGoogleSignin}
            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-300 py-3 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm mb-6"
          >
            <FaGoogle className="text-red-500" />
            Sign up with Google
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-white text-slate-400 tracking-widest">
                Or use email
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(handleRegistrationFunc)}
            className="space-y-4"
          >
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                  errors.name
                    ? "border-red-500 bg-red-50"
                    : "border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                }`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-xs text-red-500 ml-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                  errors.email
                    ? "border-red-500 bg-red-50"
                    : "border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-500 ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Photo URL
              </label>
              <input
                type="text"
                placeholder="https://example.com/photo.jpg"
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                  errors.photoUrl
                    ? "border-red-500 bg-red-50"
                    : "border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                }`}
                {...register("photoUrl", { required: "Photo URL is required" })}
              />
              {errors.photoUrl && (
                <p className="text-xs text-red-500 ml-1">
                  {errors.photoUrl.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                    errors.password
                      ? "border-red-500 bg-red-50"
                      : "border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  }`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-green-100 transition-all transform active:scale-[0.98] mt-4 disabled:opacity-70"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center mt-8 text-slate-600 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-green-600 font-bold hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
