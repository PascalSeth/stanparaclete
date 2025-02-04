import React from "react";
import { motion } from "framer-motion";

type Props = {};

function AboutUs({}: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-gray-900 mb-6"
      >
        Our Story
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg text-gray-700 text-center max-w-3xl"
      >
        We are dedicated to transforming urban living through sustainability and innovation.
        Our journey started with a mission to create smarter, cleaner cities.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full max-w-4xl flex flex-col md:flex-row items-center mt-10 gap-6"
      >
        <motion.img 
          src="/images/about-image-1.jpg" 
          alt="About Us" 
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <motion.div 
          className="text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            We strive to make waste management effortless, engaging, and rewarding for communities.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
