import React from "react";

export default function Heading({ titulo, subtitulo }) {
  return (
    <div className="text-center mb-7 md:mb-10" data-aos="fade-up">
      <h2 className="text-[2.0625rem] sm:text-[2.5rem] montserrat-bold leading-10 md:leading-12">
        {titulo}
      </h2>
      <p className="text-[#5c5696] sm:text-[1.0625rem]">{subtitulo}</p>
    </div>
  );
}
