import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover  md:h-3/4  relative" // Added 'relative' class here
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div
            className={`text-${category.color} text-sm w-1/2 absolute inset-0 flex flex-col justify-center items-center backdrop-filter backdrop-blur-md text-white p-4  `}
          >
            <h1 className="uppercase font-bold font-xllg:text-sm md:text-lg sm:text-xs">
              {category.title}
            </h1>
            <p className="lg:text-sm md:text-xs sm:text-xs my-8">
              {category.desc}
            </p>
            <button
              className={`hidden hover:scale-105 duration-200 2xl:block bg-${category.color} py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
