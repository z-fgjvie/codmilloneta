import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BtnFlotanteWssp() {
  const mensaje =
    "Hola, estoy interesado en el curso de desarrollo web. ¿Podrían brindarme más información?";
  const url = `https://api.whatsapp.com/send?phone=51907993141&text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <a
      href={url}
      className="bg-[#38CB4E] w-15 h-15 flex items-center justify-center rounded-full fixed md:bottom-7 md:right-8 right-5 bottom-6 z-50 cursor-pointer shadow-btn"
    >
      <FaWhatsapp className="text-white text-[2.5rem]" />
    </a>
  );
}
