import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BtnFlotanteWssp() {
  return (
    <Link
      href="#"
      className="bg-[#38CB4E] w-15 h-15 flex items-center justify-center rounded-full fixed md:bottom-7 md:right-8 right-5 bottom-6 z-50 cursor-pointer shadow-btn"
    >
      <FaWhatsapp className="text-white text-[2.5rem]" />
    </Link>
  );
}
