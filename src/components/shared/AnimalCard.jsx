"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AnimalCard = ({ animal }) => {
  const pathName = usePathname();
  const baseRoute = pathName === "/" ? "/all-animals" : pathName;

  return (
    <div className="group card bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <figure className="relative h-64 w-full overflow-hidden">
        <Image loading="lazy"
          src={animal.image}
          alt={animal.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest shadow-sm">
            {animal.type}
          </span>
        </div>
      </figure>

      <div className="p-5 flex flex-col gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors">
            {animal.name}
          </h2>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-tight">
            {animal.breed}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase">
              Price
            </span>
            <span className="text-xl font-black text-slate-900">
              ৳{animal.price}
            </span>
          </div>

          <Link
            href={`${baseRoute}/${animal.id}`}
            className="btn btn-circle bg-slate-900 border-none text-white hover:bg-green-600 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
