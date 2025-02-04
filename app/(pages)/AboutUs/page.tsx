'use client'
import React from "react";
import { motion } from "framer-motion";
type Props = {};

function AboutUs({}: Props) {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-gray-900 text-center"
    >
      Welcome to Our Vision
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="text-lg text-gray-600 text-center mt-4 max-w-3xl"
    >
      We are committed to redefining experiences through innovation, design, and seamless technology.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full max-w-6xl flex flex-col md:flex-row items-center mt-12 gap-12"
    >
      <motion.img
        src="/images/custom-image-1.jpg"
        alt="Experience"
        className="w-full md:w-1/2 rounded-xl shadow-xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="text-center md:text-left max-w-lg"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-gray-900">Experience the Future</h2>
        <p className="text-gray-600 mt-4">
          Our approach blends cutting-edge technology with user-centered design to create unparalleled experiences.
        </p>
      </motion.div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.6 }}
      className="mt-16 flex flex-col md:flex-row gap-8 w-full max-w-5xl"
    >
      <motion.div 
        className="bg-white p-8 rounded-xl shadow-lg flex-1 hover:shadow-2xl transition"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800">Innovation</h3>
        <p className="text-gray-600 mt-3">Pushing boundaries to create new possibilities.</p>
      </motion.div>
      
      <motion.div 
        className="bg-white p-8 rounded-xl shadow-lg flex-1 hover:shadow-2xl transition"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800">Design</h3>
        <p className="text-gray-600 mt-3">Crafting seamless and intuitive experiences.</p>
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-xl shadow-lg flex-1 hover:shadow-2xl transition"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800">Technology</h3>
        <p className="text-gray-600 mt-3">Empowering change through cutting-edge solutions.</p>
      </motion.div>
    </motion.div>
  </div>
  );
}

export default AboutUs;
