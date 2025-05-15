import Image from "next/image";
import React from "react";
import { IoIosRocket } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import CardBeneficios from "./card-beneficios";

export default function Beneficios() {
  return (
    <section
      className="px-5 py-12 sm:py-16 bg-[#08243d] top-section"
      id="beneficios"
    >
      <div
        className="max-w-[75rem] mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-0  items-center"
        data-aos="zoom-in"
      >
        <Image
          src="https://res.cloudinary.com/due4z1bf8/image/upload/f_auto,q_auto/v1747338459/code-b_u3hykr.png"
          alt="coding"
          width="450"
          height="450"
          className=" mx-auto"
        />

        <div data-aos="fade-up">
          <span className="text-sm text-[#7a73bc] montserrat-semibold mb-1 block tracking-wide">
            BENEFICIOS
          </span>
          <h2 className="text-white text-3xl montserrat-bold mb-2">
            Lo que convierte tu aprendizaje en resultados reales
          </h2>
          <p className="text-white mb-5">
            Cero teoría aburrida. Aquí aprendes haciendo, con acompañamiento
            real y proyectos que hablan por ti.
          </p>

          <div>
            <CardBeneficios
              icon={IoIosRocket}
              titulo="Proyectos reales"
              descripcion="Aprende construyendo páginas desde el primer día. "
            />
            <CardBeneficios
              icon={HiTrendingUp}
              titulo="Enfocado en lo que sí se usa"
              descripcion="Solo tecnologías actuales. Nada de relleno ni cosas viejas."
            />
            <CardBeneficios
              icon={FaGraduationCap}
              titulo="Culminas con nivel avanzado"
              descripcion="Sales listo para aplicar a trabajos o freelancear con confianza."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
