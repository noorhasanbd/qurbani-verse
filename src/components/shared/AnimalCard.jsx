"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AnimalCard = ({ animal }) => {

  // console.log(animal.image);
  const pathName = usePathname();
  // console.log(pathName);

  const baseRoute = pathName === "/" ? "/all-animals" : pathName;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="relative h-60 w-full">
        {" "}

        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-green-600">
          {animal.name} - {animal.type}
        </h2>
        <p>{animal.breed}</p>
        <div className="card-actions justify-end">
          <Link
            href={`${baseRoute}/${animal.id}`}
            className="btn bg-green-500 text-white"
          >
            Animal Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
