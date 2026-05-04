"use client";

import Image from "next/image";
import React from "react";
import Hero from "../../../public/images/cow1.jpg";
import Link from "next/link";
import { useSpring, animated, config } from "@react-spring/web";

const HeroSection = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: config.gentle,
  });

  const imageSpring = useSpring({
    from: { opacity: 0, scale: 0.9, x: 50 },
    to: { opacity: 1, scale: 1, x: 0 },
    config: config.slow,
    delay: 300,
  });

  const badgeSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <div className="relative bg-slate-50 flex items-center overflow-hidden py-16">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        <animated.div style={fadeIn} className="left-div space-y-6">
          <span className="inline-block px-4 py-1.5 mb-2 text-sm font-semibold tracking-wider text-green-600 uppercase bg-blue-50 rounded-full">
            Trusted by 500+ Companies
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            The Most <span className="text-green-600">Reliable</span> Vendor for
            Your Business.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-lg">
            We provide seamless logistics and high-quality supply chain
            solutions tailored to help your enterprise scale faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/all-animals"
              className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300 shadow-lg shadow-blue-200"
            >
              Explore Now
            </Link>
          </div>
        </animated.div>

        <div className="right-div flex justify-center">
          <animated.div
            style={imageSpring}
            className="relative w-full max-w-lg"
          >
            <animated.div
              style={badgeSpring}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden lg:block border border-gray-100 z-10"
            >
              <p className="text-sm font-bold text-gray-800">99.9% Uptime</p>
              <p className="text-xs text-gray-500">Service Reliability</p>
            </animated.div>

            <Image
              src={Hero}
              alt="Business Illustration"
              className="w-full h-auto drop-shadow-2xl rounded-2xl"
              priority
            />
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
