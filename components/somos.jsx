import Image from "next/image";
import React from "react";
import DatosEmpresa from "./datos-empresa";

export default function Somos() {
  return (
    <section className="px-5 py-12 sm:py-16 top-section" id="nosotros">
      <div className="max-w-[75rem] mx-auto">
        <div className="text-center mb-7 md:mb-10">
          <h2 className="text-[2.0625rem] sm:text-[2.5rem] montserrat-bold leading-10 md:leading-12">
            ¿Quiénes somos?
          </h2>
          <p className="text-[#5c5696] sm:text-[1.0625rem]">
            Conoce la esencia de Codifica.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 items-center gap-7 md:gap-10 lg:gap-0">
          <div
            className="grid md:grid-cols-2 lg:grid-cols-1 gap-4"
            data-aos="zoom-in"
          >
            <Image
              src="https://res.cloudinary.com/due4z1bf8/image/upload/f_auto,q_auto/v1747338465/somos_cazzpo.jpg"
              alt="somos"
              width="450"
              height="450"
              className="rounded-lg mx-auto w-full sm:w-[28.125rem] md:h-[19.375rem] lg:h-auto object-cover"
            />

            <Image
              src="/somos-dos.jpg"
              alt="somos"
              width="450"
              height="450"
              className="rounded-lg mx-auto object-cover h-[19.375rem] hidden md:flex lg:hidden"
              loading="lazy"
            />
          </div>
          <div data-aos="fade-up">
            <p className="mb-3">
              En <strong>Codifica</strong>, no enseñamos con pizarras ni te
              llenamos de teoría aburrida. Aquí aprendes programando desde el
              primer click. Somos una iniciativa que nació con una idea clara:
              enseñarte desarrollo web de verdad, con un método 100% práctico,
              usando proyectos reales, y sin perder tiempo en conceptos que no
              aplicarás.
            </p>
            <p className="mb-3">
              Mientras muchos institutos siguen con clases llenas de teoría,
              tareas sin sentido y métodos viejos, en Codifica lo hacemos
              diferente: <strong>aprendes haciendo</strong>.{" "}
              <strong>Cada clase es un proyecto</strong>. Cada proyecto te
              acerca a convertirte en un verdadero desarrollador.
            </p>
            <p className="hidden md:block">
              <strong>Codifica</strong> no es un instituto tradicional. Es una
              experiencia para quienes quieren resultados, no excusas. Acá no
              vas a memorizar, vas a crear.
            </p>
          </div>
        </div>
        <DatosEmpresa />
      </div>
    </section>
  );
}
