"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isUpdating, setIsUpdating] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      image: "",
    }
  });

  // Sync session data to form when it loads
  useEffect(() => {
    if (session?.user) {
      setValue("name", session.user.name);
      setValue("image", session.user.image || "");
    }
  }, [session, setValue]);

  const handleUpdate = async (data) => {
    setIsUpdating(true);
    
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });

    if (error) {
      toast.error(error.message || "Failed to update profile");
    } else {
      toast.success("Profile updated successfully!");
      router.refresh(); // Refresh to show new data in Navbar/etc
    }
    setIsUpdating(false);
  };

  if (isPending) return <div className="text-center py-20">Loading...</div>;
  if (!session) return <div className="text-center py-20">Please login to view this page.</div>;

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
        <div className="text-center mb-8">
          {/* Profile Preview Circle */}
          <div className="avatar mb-4">
            <div className="w-24 h-24 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2 mx-auto overflow-hidden bg-slate-200">
              {session.user.image ? (
                <img src={session.user.image} alt="Profile Preview" />
              ) : (
                <div className="flex items-center justify-center h-full text-3xl font-bold text-slate-400">
                  {session.user.name?.charAt(0)}
                </div>
              )}
            </div>
          </div>
          <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">My Profile</h2>
          <p className="text-slate-500 text-sm italic">{session.user.email}</p>
        </div>

        <form onSubmit={handleSubmit(handleUpdate)} className="space-y-6">
          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-slate-600">DISPLAY NAME</span>
            </label>
            <input
              type="text"
              placeholder="Your Full Name"
              className={`input input-bordered rounded-lg focus:outline-green-500 ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
          </div>

          {/* Photo URL Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-slate-600">PHOTO URL</span>
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered rounded-lg focus:outline-green-500 border-slate-300"
              {...register("image")}
            />
            <label className="label">
              <span className="label-text-alt text-slate-400">Use a direct link to an image (JPEG/PNG)</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <button
              type="submit"
              disabled={isUpdating}
              className={`btn bg-slate-900 text-white hover:bg-green-600 border-none rounded-lg h-12 ${isUpdating ? 'loading' : ''}`}
            >
              {isUpdating ? "SAVING CHANGES..." : "UPDATE PROFILE"}
            </button>
            
            <button
              type="button"
              onClick={() => router.back()}
              className="btn btn-ghost text-slate-500 hover:bg-slate-100 rounded-lg"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;