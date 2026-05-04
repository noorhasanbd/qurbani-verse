"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import userAvatar from "@/assets/user.png";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  console.log(user, "User");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Animals", path: "/all-animals" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* Nav Elements will go here */}
            {navLinks.map((l, i) => (
              <NavLink key={i} navItem={l} />
            ))}
          </ul>
        </div>
        <a className="text-xl bg-slate-800 p-2 rounded-xl">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Qurbani<span className="text-green-500">Verse</span>
          </h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* {Nav Elements will be here} */}
          {navLinks.map((l, i) => (
            <NavLink key={i} navItem={l} />
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex flex-row gap-4 items-center justify-between">
          {isPending ? (
            <span className="loading loading-ring loading-lg text-green-500"></span>
          ) : session?.user ? (
            <>
              {" "}
              <Link href="/">
                <Image
                  src={user?.image || userAvatar}
                  width={40}
                  height={40}
                  alt="userAvatar"
                  className="rounded-full object-cover aspect-square w-full h-full "
                ></Image>
              </Link>
              <Link
                href="/profile"
                className="btn bg-green-600 text-white"
                
              >
                Edit Profile
              </Link>
              <Link
                href="/"
                className="btn bg-green-600 text-white"
                onClick={async () =>
                  await authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        toast.success("Logout Successful", {
                          position: "top-right",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                          transition: Bounce,
                        });
                        router.push("/");
                      },
                    },
                  })
                }
              >
                Logout
              </Link>
            </>
          ) : (
            <Link href="/login" className="btn bg-green-600 text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
