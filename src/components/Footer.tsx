import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-sky-500 text-white py-8 md:py-12 lg:py-10 xl:py-12 px-4 md:px-8 lg:px-12 xl:px-16 text-center">
      <Link href="/" className="font-bold text-xl">
        ALLO
      </Link>
      <p className="mt-2 md:mt-4">
        &#169; Avish Taukoorah All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
