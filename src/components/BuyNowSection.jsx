"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"; // Import useRouter

const BuyNowSection = () => {
  const router = useRouter(); // Initialize router
  const { data: session } = authClient.useSession();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the initial button click
  const handleOpenModal = () => {
    if (!session) {
      toast.info("Please login to continue purchase");
      return router.push("/login"); 
    }
    setIsOpen(true);
  };

  const handleBuy = (e) => {
    e.preventDefault();

    console.log({
      name: session?.user?.name,
      address,
      phone,
    });

    toast.success("Purchase Successful!");

    setAddress("");
    setPhone("");
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-outline border-slate-800 rounded-none h-14 hover:bg-green-500 hover:border-none hover:text-white w-full"
        onClick={handleOpenModal} 
      >
        BUY IT NOW
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative bg-white w-full max-w-md p-6 shadow-2xl border-t-4 border-green-500 z-10 rounded-none">
            <h3 className="font-black text-2xl uppercase italic text-slate-900 border-b pb-2">
              Complete Purchase
            </h3>

            <form onSubmit={handleBuy} className="py-6 space-y-5">
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs text-slate-500">
                    CUSTOMER NAME
                  </span>
                </label>
                <input
                  type="text"
                  value={session?.user?.name || ""}
                  disabled
                  className="input input-bordered rounded-none bg-slate-100 font-medium"
                />
              </div>

              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs text-slate-500">
                    PHONE NUMBER
                  </span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input input-bordered rounded-none focus:outline-green-500 border-slate-300"
                />
              </div>

              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs text-slate-500">
                    DELIVERY ADDRESS
                  </span>
                </label>
                <textarea
                  required
                  placeholder="House #, Road #, Area..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="textarea textarea-bordered rounded-none h-24 focus:outline-green-500 border-slate-300"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="btn btn-ghost rounded-none hover:bg-slate-100"
                  onClick={() => setIsOpen(false)}
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="btn bg-green-600 text-white rounded-none border-none hover:bg-green-700 px-10"
                >
                  BUY
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyNowSection;
