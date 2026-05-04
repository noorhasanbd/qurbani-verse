import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-slate-50">
      <div className="text-center">
    
        <h1 className="text-[12rem] font-black text-green-500/10   select-none">
          404
        </h1>

        <div className="relative z-10">
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-4">
            Oops! Page <span className="text-green-500">Lost.</span>
          </h2>
          
      
          <p className="text-slate-500 text-lg md:text-xl max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <button className="btn btn-lg bg-green-500 hover:bg-green-600 border-none text-white px-8 shadow-lg shadow-green-200 transition-all hover:scale-105">
                Return Home
              </button>
            </Link>
            
            
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default NotFound;