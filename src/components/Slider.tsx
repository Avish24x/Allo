"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// this is the data for the items
const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slider1.jpg",
  },

  {
    id: 2,
    title: "We deliver your order whenever you are in Mauritius",
    image: "/slider2.jpg",
  },

  {
    id: 3,
    title: "the best burgers to share with your family",
    image: "/slider3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, SetCurrentSlide] = useState(0);

  // useEffect to change the slider images interval 2000

  useEffect(() => {
    const interval = setInterval(
      // slider on 3 break down need to add this to prevent need to loop through it
      () =>
        SetCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-sky-500 font-bold lg:h-full lg:w-1/2 bg-sky-100">
        <h1 className="text-5xl text-center uppercase p-4  md:p-10 md:text-6xl xl:text-7xl">
          {/* importing datatitle from titles */}
          {data[currentSlide].title}
        </h1>
        <button className="bg-sky-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          // importing slideimage from imagedata
          src={data[currentSlide].image}
          alt="slider image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
