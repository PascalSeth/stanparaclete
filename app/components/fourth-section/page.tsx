'use client'
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

// Array of images with details
const slides = [
    {
      id: 1,
      title: "Tranzbook",
      des: "Transportation services in Ghana",
      link: "https://tranzbook.netlify.app/",
      src: "/svg/projects/tranzbook.png"
    },
    {
      id: 2,
      title: "Acer Landing Page",
      des: "Transportation services in Ghana",
      link: "https://pascalseth.github.io/acerlanding/#",
      src: "/svg/projects/acer.png"
    },
    {
      id: 3,
      title: "Grand Canyon Landing Page",
      des: "Grand Canyon Landing",
      link: "https://pascalseth.github.io/grandcanyon/",
      src: "/svg/projects/grandcanyon.png"
    },
    {
      id: 4,
      title: "Travel Landing Page",
      des: "Travel Agent Landing Page",
      link: "https://main--travelguidets.netlify.app/",
      src: "/svg/projects/travelAgent.png"
    },
    {
      id: 6,
      title: "Car Hub",
      des: "E-commerce For Cars",
      link: "https://pascalcarhub.netlify.app/",
      src: "/svg/carhub.png"
    },
    {
      id: 7,
      title: "Bird Notion",
      des: "Inspired from Notion Website",
      link: "https://bird-notion.netlify.app/",
      src: "/svg/birdnotion.png"
    },
    // {
    //   id: 8,
    //   title: "AI Image SaaS - Canva Application",
    //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    //   link: "/svg/ui.aiimg.com",
    //   src: "/p3.svg"
    // },
    {
      id: 9,
      title: "Travel App",
      des: "Want to Travel Check out this Landing Page",
      link: "https://travelapplanding.netlify.app/",
      src: "/svg/travelApp.png"
    },
    {
      id: 10,
      title: "Dharma Kitchen",
      des: "Want a restaurant Online Check out this Landing Page",
      link: "https://thedharmakitchen.netlify.app/",
      src: "/svg/dharma.png"
    },
    {
      id: 11,
      title: "Fresco Restaurant",
      des: "Want a restaurant Online Check out this Landing Page",
      link: "https://fresco-food.netlify.app/",
      src: "/svg/fresco.png"
    },
    {
      id: 12,
      title: "EliteExclusiveApparrels",
      des: "Small Scale Clothing Shop For Men Women AND Kids with working Dashboard(add /dashboard to URL but u must be signed in to use this)",
      link: "https://eliltexclusiveapparels.netlify.app/",
      src: "/svg/apparel.png"
    }
  ]
function FourthSection() {
  const swiper = useSwiper();

  return (
    <div className="bg-[#171720] p-10 justify-center">
    <h1 className="
            bg-gradient-to-r from-purple-500 to-green-300 bg-clip-text text-transparent 
            text-4xl md:text-6xl font-bold pb-16 text-center
          ">Our Projects</h1>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      spaceBetween={50}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container justify-center items-center"
    >
     {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <img
              src={slide.src}
              alt={slide.title}
              className="rounded-xl object-center object-contain w-full"
            />
            <div className="text-center"> 
            <Link href={slide.link} target="_blank"> {/* Use Link component */}
                <h2 className="text-lg text-white font-semibold mt-4">{slide.title}</h2>
              </Link>     <p className="text-sm text-center px-4">
        <h2 className="bg-gradient-to-r font-semibold bg-clip-text  text-transparent from-white to bg-purple-800 ">
          {slide.des}</h2>
        
        </p>  </div>
        
          </SwiperSlide>
        ))}
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ArrowLeft name="arrow-back-outline"></ArrowLeft>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ArrowRight name="arrow-forward-outline"></ArrowRight>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  );
}

export default FourthSection;
