import Image from "next/image";
import React from "react";

const AnimalCard = ({animal}) => {
  console.log(animal.image);
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="relative h-60 w-full"> {/* Set your desired height here */}
  <Image
    src={animal.image}
    alt={animal.name}
    fill
    className="object-fill" 
  />
</figure>
      <div className="card-body">
        <h2 className="card-title text-green-600">{animal.name} - {animal.type}</h2>
        <p>
          {animal.breed}
        </p>
        <div className="card-actions justify-end">
          <button className="btn bg-green-500 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
