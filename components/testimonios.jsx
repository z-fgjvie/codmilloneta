import React from "react";
import Heading from "./heading";
import CarouselTestimonios from "./carousel-testimonios";

export default function Testimonios() {
  return (
    <section className="px-5 py-12 sm:py-16 top-section" id="opiniones">
      <div className="max-w-[75rem] mx-auto">
        <Heading
          titulo="Opiniones reales"
          subtitulo="Lo que dicen nuestros estudiantes"
        />
      </div>

      <CarouselTestimonios />
    </section>
  );
}
