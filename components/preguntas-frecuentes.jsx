import React from "react";
import Heading from "./heading";
import Preguntas from "./preguntas";

export default function PreguntasFrecuentes() {
  return (
    <section className="px-5 py-12 md:py-16">
      <div className="max-w-[75rem] mx-auto">
        <Heading
          titulo="Preguntas Frecuentes"
          subtitulo="Tu camino, sin confusiones."
        />

        <Preguntas />
      </div>
    </section>
  );
}
