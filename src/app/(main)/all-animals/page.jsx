import React from "react";
import data from "@/lib/data/data.json";
import AnimalCard from "@/components/shared/AnimalCard";

const AllAnimals = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-green-600 font-bold">All Animals</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 my-6">
          {data.map((d) => (
            <AnimalCard key={d.id} animal={d}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAnimals;
