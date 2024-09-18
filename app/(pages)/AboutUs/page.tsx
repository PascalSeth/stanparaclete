'use client'
import { StanModel } from '@/app/models/Avatar';
import { GirlModel } from '@/app/models/GirlModel';
import { QueenModel } from '@/app/models/QueenModel';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { radToDeg } from 'three/src/math/MathUtils.js';

const AboutPage = () => {
  return (
    <div className="bg-[#171720] h-full text-gray-900 font-sans">
      {/* About Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-semibold mb-4 text-white">About Us</h1>
        <p className="text-gray-300 mb-8">At Stan Paraclete, we drive success through cutting-edge strategies and innovative solutions, tailored to meet your unique needs.</p>
        <div className="flex justify-center items-center space-x-4">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <div className="flex space-x-2">
            <img src="user1.jpg" alt="user1" className="w-8 h-8 rounded-full" />
            <img src="user2.jpg" alt="user2" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </section>

      {/* Grid Section 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 py-12">
        <img src="https://images.unsplash.com/photo-1498409785966-ab341407de6e?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Office space"
         className="rounded-lg  w-full" />
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">Empowering Innovation, Achieving Excellence</h2>
          <p className="text-gray-300 mb-4">We specialize in crafting strategies that transform challenges into opportunities, setting new benchmarks in the industry.</p>
        </div>
      </section>

      {/* Grid Section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 py-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-white">Building Futures, Creating Success</h2>
          <p className="text-gray-300 mb-4">Our expertise lies in delivering solutions that foster growth, sustainability, and innovation across diverse sectors.</p>
          <ul className="list-none space-y-2 text-gray-300">
            <li>Visionary Strategies for Business Growth</li>
            <li>Commitment to Sustainability and Innovation</li>
            <li>Creative Solutions for Complex Challenges</li>
          </ul>
        </div>
        <Canvas>
          <Environment preset="sunset" />
          <mesh>
            <QueenModel scale={0.6} position-z={2} position-y={-1.2} rotation-x={radToDeg(90)}/>
          </mesh>
        </Canvas>
      </section>
    </div>
  );
};

export default AboutPage;
