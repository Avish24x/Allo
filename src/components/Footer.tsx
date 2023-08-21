import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-sky-500 text-white h-12 md:h-24 p-4 md:p-8 lg:p-12 xl:p-16 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        ALLO
      </Link>
      <p>&#169; Avish Taukoorah All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
