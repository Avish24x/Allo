import React from "react";
import Image from "next/image";
// import CountDown from "./CountDown";

const Offer = () => {
  // if more images need to be added lets say a carrousel images for the offerproducts
  // const images = [
  //   {
  //     id: 1,
  //     Image: "",
  //   },
  // ];
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh] lg:w-[100vw]">
      {/* TEXT Container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-xl drop-shadow-lg ">
          Prepare to be wowed by our diverse menu that caters to every palate.
        </h1>
        <p className="text-white xl:text-xl">Passion Meets Service.</p>
        {/* <p>
          <CountDown />
        </p> */}
        <button className="bg-blue-500 text-white rounded-md px-5 py-4">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER*/}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
