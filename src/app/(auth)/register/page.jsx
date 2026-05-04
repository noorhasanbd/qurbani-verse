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
  const { data: session, isPending } = authClient.useSession();
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
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleRegistrationFunc = async (data) => {
    console.log("Form Data:", data);

    const { email, name, photoUrl, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoUrl,
      callbackURL: "/",
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
        theme: "light",
        transition: Bounce,
      });
    }

    if (res) {
      toast.success("User Created Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      router.push("/");
    }
    console.log(error, "Error");
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-extrabold text-green-600">
              Create Account
            </h2>
            <p className="text-base-content/60 text-sm mt-2">
              Join us today! It only takes a minute.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleRegistrationFunc)}
            className="space-y-4"
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={`input input-bordered w-full focus:outline-green-500 transition-all ${errors.name ? "input-error" : ""}`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.name.message}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className={`input input-bordered w-full focus:outline-green-500 transition-all ${errors.email ? "input-error" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                </label>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                className={`input input-bordered w-full focus:outline-green-500 transition-all ${errors.photo ? "input-error" : ""}`}
                {...register("photoUrl", {
                  required: "Photo URL is required",
                })}
              />
              {errors.photo && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.photo.message}
                  </span>
                </label>
              )}
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs text-green-600 hover:underline font-medium"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                    errors.password
                      ? "border-red-500 bg-red-50"
                      : "border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200"
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

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-green-500 btn-block text-white uppercase tracking-wider"
              >
                Register
              </button>
            </div>
          </form>

          <div className="divider text-xs text-base-content/40">OR</div>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="link text-green-600 font-bold no-underline hover:underline"
            >
              Log In
            </Link>
          </p>
          <button
            className="btn bg-green-600 text-white font-bold no-underline hover:underline"
            onClick={handleGoogleSignin}
          >
            <FaGoogle />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
