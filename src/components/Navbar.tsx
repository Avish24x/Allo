import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-sky-500 p-4 flex items-center  justify-between border-b-2 border-b-sky-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* on medium screen the homepage menu and contact will be display */}

      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1 ">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Allo.</Link>
      </div>

      {/* mobile menu */}
      {/* on mobile screen the menu will be hidden displaying only burger menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* right links */}
      <div className="hidden md:flex gap-4 items-center  justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer text-white bg-sky-500/50 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>57561103</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
