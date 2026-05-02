import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Qurbani<span className="text-green-500">Verse</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted digital marketplace for high-quality Qurbani animals.
              We bridge the gap between ethical farmers and buyers for a
              seamless, transparent, and spiritually fulfilling experience.
            </p>
          </div>

         
          <div className="md:justify-self-center">
            <h2 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-animals"
                  className="hover:text-green-400 transition-colors"
                >
                  All Animals
                </Link>
              </li>
              <li>
                <Link
                  href="/my-profile"
                  className="hover:text-green-400 transition-colors"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h2 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h2>
            <div className="flex flex-col space-y-2 text-sm">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-400 transition-colors"
              >
                Facebook
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-sky-400 transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-pink-400 transition-colors"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} QurbaniVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
