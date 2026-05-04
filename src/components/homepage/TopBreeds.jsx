"use client";

import React from "react";
import Image from "next/image";
import { Zap, ArrowRight } from "lucide-react";
import { useSpring, animated, useInView, config } from "@react-spring/web";

const TopBreed = ({ data }) => {
  const [ref, inView] = useInView({
    rootMargin: "-15% 0%",
    once: true,
  });

  // 1. Immediate Data Validation
  // We handle the "Error" state directly during render
  const breed = data?.[0];
  const hasError = !breed || !breed.image || !breed.name;

  // 2. Define Animations
  const headerSpring = useSpring({
    to: { opacity: inView ? 1 : 0, y: inView ? 0 : -20 },
    config: config.gentle,
  });

  const imageSpring = useSpring({
    to: { opacity: inView ? 1 : 0, scale: inView ? 1 : 1.05 },
    config: { mass: 1, tension: 120, friction: 40 },
  });

  const contentSpring = useSpring({
    to: { opacity: inView ? 1 : 0, x: inView ? 0 : 30 },
    delay: 200,
    config: config.slow,
  });

  // 3. Conditional Rendering (Error State)
  if (hasError) {
    return (
      <section className="py-16 bg-white min-h-[600px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-2">⚠️ Failed to load top breed</p>
          <p className="text-slate-600 text-sm">Please check your data source</p>
        </div>
      </section>
    );
  }

  // 4. Main Render
  return (
    <section ref={ref} className="py-16 bg-white overflow-hidden min-h-[600px]">
      <div className="container mx-auto px-4">
        <animated.div style={headerSpring} className="flex items-center gap-4 mb-12">
          <div className="h-px bg-slate-900 flex-grow"></div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">
            Top<span className="text-green-600">Breed</span>
          </h2>
          <div className="h-px bg-slate-900 flex-grow"></div>
        </animated.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-slate-900 overflow-hidden">
          <animated.div
            style={imageSpring}
            className="lg:col-span-7 relative h-[400px] lg:h-[600px] bg-slate-100 overflow-hidden group"
          >
            <Image
              src={breed.image}
              alt={breed.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 70vw"
              priority
            />
          </animated.div>

          <animated.div
            style={contentSpring}
            className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center bg-slate-50 border-t-2 lg:border-t-0 lg:border-l-2 border-slate-900"
          >
            <div className="flex items-center gap-2 text-green-600 font-bold text-sm mb-4">
              <Zap size={16} fill="currentColor" />
              {breed.category} — {breed.type}
            </div>

            <h3 className="text-5xl font-black text-slate-900 uppercase mb-2 leading-none">
              {breed.name}
            </h3>
            <p className="text-xl font-bold text-slate-500 uppercase mb-6">
              {breed.breed}
            </p>

            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              {breed.description} Currently located in{" "}
              <span className="font-bold text-slate-800">{breed.location}</span>.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <StatBox label="Weight" value={`${breed.weight} KG`} />
              <StatBox label="Age" value={`${breed.age} Years`} />
            </div>

            <div className="flex items-center justify-between border-t-2 border-slate-900 pt-8 mt-auto">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Asking Price
                </p>
                <p className="text-3xl font-black text-slate-900">
                  ৳{breed.price?.toLocaleString() || "Contact for Price"}
                </p>
              </div>

              <button className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 font-bold hover:bg-green-600 transition-colors">
                VIEW DETAILS
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

// Helper Component to keep the main render clean
const StatBox = ({ label, value }) => (
  <div className="flex flex-col p-3 bg-white border border-slate-200 shadow-sm">
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
      {label}
    </span>
    <span className="text-lg font-black text-slate-800">{value}</span>
  </div>
);

export default TopBreed;