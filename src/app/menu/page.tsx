import { MenuType } from "@/types/types";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const MenuPage = async () => {
  const menu: MenuType = await getData();
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <div
          key={category.id}
          className="w-full h-1/3 bg-cover md:h-3/4 relative"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <Link
            href={`/menu/${category.slug}`}
            className="w-full h-full absolute inset-0"
          >
            <div
              className={`text-${category.color} text-sm w-1/2 absolute inset-0 flex flex-col justify-center items-center backdrop-filter backdrop-blur-md text-white p-4 `}
            >
              <h1 className="uppercase font-bold font-xllg:text-sm md:text-lg sm:text-xs">
                {category.title}
              </h1>
              <p className="hidden sm:block  lg:text-sm md:text-xs sm:text-xs  my-8">
                {category.desc}
              </p>
              <button
                className={`hidden hover:scale-105 duration-200 2xl:block bg-${category.color} py-2 px-4 rounded-md`}
              >
                Explore
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
