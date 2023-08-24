import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link
      href="/cart"
      className="flex items-center gap-4 text-white hover:text-sky-500"
    >
      <div className="relative w-8 h-8 md:w-5 md:h-5 ">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart (4)</span>
    </Link>
  );
};

export default CartIcon;
