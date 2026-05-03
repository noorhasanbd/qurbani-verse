"use client";
import React, { useEffect, useState } from "react";
import data from "@/lib/data/data.json";
import AnimalCard from "@/components/shared/AnimalCard";
import filter from "daisyui/components/filter";

const AllAnimals = () => {
  const [category, setCategory] = useState("allCattle");
  const [isLoading, setIsLoading] = useState(true);
  const [sortPrice, setSortPrice] = useState("default");

  const filteredAndSorted = [...data] // Create a fresh copy
    .filter((animal) => {
      if (category === "allCattle") return true;
      return animal.type.toLowerCase() === category.toLowerCase();
    })
    .sort((a, b) => {
      // 2. Use the current state directly
      if (sortPrice === "low-to-high") return a.price - b.price;
      if (sortPrice === "high-to-low") return b.price - a.price;
      return 0;
    });
  //   console.log(filteredAnimal);
  const handleButtonAction = (action) => {
    setCategory(action);
  };
  const sortAction = (sort) => {
    setSortPrice(sort);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [category]);
  return (
    <div className="bg-slate-50 py-16 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-green-600 font-bold">All Animals</h2>
        <div className="bg-slate-50 border border-slate-200 p-2 rounded-full w-fit mx-auto flex justify-center items-center gap-1 shadow-sm">
          <button
            className={`btn btn-sm rounded-full transition-all duration-300 ${
              category === "allCattle"
                ? "bg-green-600 text-white border-none shadow-md shadow-green-200"
                : "btn-ghost text-slate-600 hover:bg-slate-100"
            } px-6`}
            onClick={() => handleButtonAction("allCattle")}
          >
            All Cattle
          </button>

          <button
            className={`btn btn-sm rounded-full transition-all duration-300 ${
              category === "cow"
                ? "bg-green-600 text-white border-none shadow-md shadow-green-200"
                : "btn-ghost text-slate-600 hover:bg-slate-100"
            } px-6`}
            onClick={() => handleButtonAction("cow")}
          >
            Cow
          </button>

          <button
            className={`btn btn-sm rounded-full transition-all duration-300 ${
              category === "goat"
                ? "bg-green-600 text-white border-none shadow-md shadow-green-200"
                : "btn-ghost text-slate-600 hover:bg-slate-100"
            } px-6`}
            onClick={() => handleButtonAction("goat")}
          >
            Goat
          </button>
        </div>
        <div className="flex items-center gap-1 bg-slate-200/50 p-2 rounded-full border border-slate-200/60 w-full my-4">
          <button
            className={`px-4 py-1.5 text-[11px] uppercase tracking-wider rounded-full transition-all duration-200 ${
              sortPrice === "low-to-high"
                ? "bg-white text-green-600 shadow-sm ring-1 ring-black/5 font-bold"
                : "text-slate-500 hover:text-slate-700 font-medium"
            }`}
            onClick={() => sortAction("low-to-high")}
          >
            ৳ Low to High
          </button>

          <button
            className={`px-4 py-1.5 text-[11px] uppercase tracking-wider rounded-full transition-all duration-200 ${
              sortPrice === "high-to-low"
                ? "bg-white text-green-600 shadow-sm ring-1 ring-black/5 font-bold"
                : "text-slate-500 hover:text-slate-700 font-medium"
            }`}
            onClick={() => sortAction("high-to-low")}
          >
            ৳ High to Low
          </button>
        </div>
        {isLoading ? (
          <div className="flex flex-col justify-center items-center w-full min-h-100">
            <span className="loading loading-ring loading-xl text-green-600"></span>
            <p className="text-slate-400 mt-4 font-medium animate-pulse">
              Loading your cattle...
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 my-6">
            {filteredAndSorted.map((d) => (
              <AnimalCard key={d.id} animal={d} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAnimals;
