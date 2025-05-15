import Image from "next/image";
import React from "react";
import Navbar from "./nav";
import NavMobile from "./nav-mobile";

export default function Header() {
  return (
    <header className="py-4 px-5 sticky top-0 z-30 bg-white">
      <div className="max-w-[75rem] mx-auto flex items-center justify-between">
        <div className="flex flex-grow basis-0">
          <Image
            src="/logo-solo.png"
            alt="logo codifica"
            width="75"
            height="75"
          />
        </div>

        <Navbar />

        <div className="md:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
