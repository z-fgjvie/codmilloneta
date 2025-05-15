import React from "react";

export default function Banner() {
  return (
    <section
      className="bg-[url('https://res.cloudinary.com/due4z1bf8/image/upload/f_auto,q_auto/v1747338459/banner-codifica_llpnjw.jpg')] bg-cover bg-no-repeat bg-top h-[20rem] sm:h-[23rem] md:h-[25rem] lg:h-[33rem] relative after:absolute after:content-[''] after:inset-0 after:bg-black/60 after:sm:bg-black/50"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="flex flex-col h-full items-center justify-center text-white relative z-10 px-5">
        <h2 className="text-3xl sm:text-[2.375rem] md:text-[2.6875rem] lg:text-5xl montserrat-extrabold mb-3 sm:mb-4 text-center md:leading-12 sm:leading-11 leading-8">
          ¿Listo para cambiar tu vida con código?
        </h2>
        <p className="sm:text-lg montserrat-medium mb-5 text-center sm:max-w-[80%] lg:max-w-[100%]">
          Empieza hoy mismo y construye el futuro que mereces, paso a paso y con
          proyectos reales.
        </p>
        <a
          href="#"
          className="bg-[#5c5696] px-6 py-4 rounded-sm block montserrat-medium"
        >
          ¡Empieza ya mismo!
        </a>
      </div>
    </section>
  );
}
