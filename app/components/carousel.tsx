"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    url: "/svg/re.svg",
    alt: "React",
  },
  {
    url: "/svg/next.svg",
    alt: "Next.js",
  },
  {
    url: "/svg/tail.svg",
    alt: "Tailwind CSS",
  },
  {
    url: "/svg/three.svg",
    alt: "three.js",
  },
  {
    url: "/svg/git.svg",
    alt: "Git",
  },
  {
    url: "/svg/gsap.svg",
    alt: "gsap",
  },
  {
    url: "/svg/exp1.svg",
    alt: "Django",
  },
  {
    url: "/svg/c.svg",
    alt: "GraphQL",
  },
  {
    url: "/svg/dock.svg",
    alt: "Docker",
  },
  {
    url: "/svg/fm.svg",
    alt: "Framer Motion",
  },
  {
    url: "/svg/cloud.svg",
    alt: "Cloud",
  },
  {
    url: "/svg/ts.svg",
    alt: "TypeScript",
  },
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === technologies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className=" bg-[#171720] ">
      <div
        className="items-center justify-center flex text-3xl font-bold md:pb-10 px-10
        bg-gradient-to-r
        from-purple-500
        to-pink-300
        bg-clip-text
        text-transparent
        "
      >
        Expertise in Cutting-Edge Programming Languages and Frameworks
      </div>

      <div className="grid grid-cols-3 p-4 md:flex">
        <AnimatePresence custom={currentImageIndex}>
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.8,
                scale: index === currentImageIndex ? 1.2 : 1,
                transition: { duration: 0.5 },
              }}
              className="flex  items-center justify-center h-40 w-40"
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={tech.url}
                alt={tech.alt}
                width={200}
                height={200}
                className="object-contain h-20 w-20 items-center justify-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
