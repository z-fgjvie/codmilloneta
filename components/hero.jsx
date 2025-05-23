import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      className="bg-[url('https://res.cloudinary.com/due4z1bf8/image/upload/f_auto,q_auto/v1747338460/heroco_yeu8dr.jpg')] bg-cover bg-no-repeat bg-top h-[33rem] sm:h-[32rem] md:h-[35rem] lg:h-[38.5rem] top-section relative after:absolute after:content-[''] after:inset-0 after:bg-black/40 md:after:bg-black/20"
      id="inicio"
    >
      <div className="max-w-[75rem] mx-auto h-full flex flex-col justify-center px-5 relative z-10">
        <h1 className="text-white text-[2.1875rem] md:text-[2.75rem] lg:text-6xl  sm:max-w-[75%] md:max-w-[65%] lg:max-w-[70%] montserrat-extrabold lg:leading-16 md:leading-12 leading-[2.375rem] mb-6 ">
          Aprende desarrollo web creando proyectos reales.
        </h1>
        <p className="text-white text-[1.0625rem] md:text-xl max-w-[95%] sm:max-w-[60%] md:max-w-[56%] lg:max-w-[50%] mb-6 md:mb-9 ">
          Aprende creando proyectos reales desde el primer día. Rápido, directo
          y sin vueltas.
        </p>
        <Link
          href="#contacto"
          className="bg-[#5c5696] w-fit px-5 py-4 rounded-md text-white montserrat-medium hover:bg-[#524d84] transition-all duration-300"
        >
          ¡Quiero aprender!
        </Link>
      </div>
    </section>
  );
}
