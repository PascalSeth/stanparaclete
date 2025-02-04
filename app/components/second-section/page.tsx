'use client';

import React from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { radToDeg } from "three/src/math/MathUtils.js";
import { QueenModel } from "@/app/models/QueenModel";

const features = [
  {
    name: "Custom Solutions",
    description:
      "Tailored software solutions to meet the unique needs of your business, crafted with precision and innovation.",
    image: "/images/icon-cloud.png",
    alt: "Custom Solutions",
  },
  {
    name: "Performance-Driven",
    description:
      "Engineered for speed and efficiency, ensuring your applications deliver an exceptional user experience.",
    image: "/images/icon-fast.png",
    alt: "Performance-Driven",
  },
  {
    name: "Seamless Integrations",
    description:
      "Effortlessly connect your business with the tools and platforms you rely on for success.",
    image: "/images/icon-journey.png",
    alt: "Seamless Integrations",
  },
  {
    name: "Full-Stack Expertise",
    description:
      "Leverage the power of full-stack development to build robust and scalable applications.",
    image: "/images/icon-layer.png",
    alt: "Full-Stack Expertise",
  },
  {
    name: "Client-Centric Approach",
    description:
      "Your success is our priority. We partner with you to ensure every solution aligns with your business goals.",
    image: "/images/icon-location.png",
    alt: "Client-Centric Approach",
  },
  {
    name: "24/7 Support",
    description:
      "Our team is always available to provide expert assistance and ensure smooth operations.",
    image: "/images/icon-support-1.png",
    alt: "24/7 Support",
  },
];

const SecondSection = () => {
  return (
    <div className="bg-[#171720] text-white">
      {/* Hero Section */}
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 items-center  px-10 gap-10">
        <div className="p-5">
          <h1 className="
            bg-gradient-to-r from-purple-500 to-green-300 bg-clip-text text-transparent 
            text-4xl md:text-6xl font-bold pb-10
          ">
            Empowering Your Business with Innovative Digital Solutions
          </h1>
          <p className="text-2xl  mb-8">
            At Stan Paraclete, we build software that drives growth, efficiency, and impact for businesses of all sizes.
          </p>
          <button className="
            bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors
          ">
            Get Started
          </button>
        </div>

        <div className="flex justify-center h-full">
        <Canvas className="h-full">
        <Environment preset="sunset" />
            <mesh>
              <QueenModel scale={0.6} position-z={2} position-y={-1.2} rotation-x={radToDeg(90)} />
            </mesh>
          </Canvas>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="
          text-3xl md:text-5xl font-bold pt-5 pb-10 
          bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent
        ">
          Core Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center justify-center text-center space-y-6 
                p-8 border rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-500
              "
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                width={300}
                height={300}
                className="h-20 w-20 object-contain mb-6"
              />
              <h3 className="
                text-2xl font-semibold bg-gradient-to-t from-gray-400 to-gray-100 
                bg-clip-text text-transparent
              ">
                {feature.name}
              </h3>
              <p className="
                text-lg bg-gradient-to-r from-gray-300 to-gray-600 
                bg-clip-text text-transparent
              ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
