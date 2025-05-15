import React from "react";
import Heading from "./heading";
import Informacion from "./informacion";
import FormularioContacto from "./formulario-contacto";

export default function Contacto() {
  return (
    <section className="px-5 py-12 md:py-16 top-section" id="contacto">
      <div className="max-w-[75rem] mx-auto">
        <Heading
          titulo="Solicita información"
          subtitulo="Regístrate y te contactamos"
        />

        <div
          className="grid lg:grid-cols-2 gap-5 md:gap-10 lg:gap-12"
          data-aos="fade-up"
        >
          <Informacion />
          <FormularioContacto />
        </div>
      </div>
    </section>
  );
}
