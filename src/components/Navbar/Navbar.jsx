import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Animals", path: "/all-animals" },
    { name: "My Profile", path: "/my-profile", private: true }, // Mark private routes
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
            {navLinks.map((l,i)=><NavLink key={i} navItem={l}/>)}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-green-600">QurbaniVerse</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* {Nav Elements will be here} */}
          {navLinks.map((l,i)=><NavLink key={i} navItem={l}/>)}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-green-600 text-white">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
