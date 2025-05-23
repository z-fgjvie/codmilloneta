import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#08243d] pt-12 md:pt-16">
      <div className="max-w-[75rem] mx-auto px-5 flex flex-col sm:flex-row sm:flex-wrap justify-between items-center sm:items-start gap-10 sm:gap-9 lg:gap-2">
        <div>
          <Image
            src="https://res.cloudinary.com/due4z1bf8/image/upload/f_auto,q_auto/v1747338460/logo-codifica-web_odijfw.png"
            alt="logo codifica"
            width="100"
            height="100"
            className="mb-4 mx-auto sm:mx-0"
          />
          <p className="text-[white] montserrat-semibold text-lg text-center sm:text-left">
            Aprende Haciendo
          </p>
        </div>

        <div>
          <h3 className="text-white montserrat-bold text-xl mb-4 text-center sm:text-left">
            Enlaces Rápidos
          </h3>
          <p className="text-white mb-2 text-[1.0625rem] text-center sm:text-left">
            - Inicio
          </p>
          <p className="text-white mb-2 text-[1.0625rem] text-center sm:text-left">
            - Nosotros
          </p>
          <p className="text-white mb-2 text-[1.0625rem] text-center sm:text-left">
            - Beneficios
          </p>
          <p className="text-white mb-2 text-[1.0625rem] text-center sm:text-left">
            - Testimonios
          </p>
          <p className="text-white  text-[1.0625rem] text-center sm:text-left">
            - Lo que aprenderas
          </p>
        </div>

        <div>
          <h3 className="text-white montserrat-bold text-xl mb-4 text-center sm:text-left">
            Datos de Empresa
          </h3>
          <p className="text-white mb-2 text-[1.0625rem] text-center sm:text-left">
            +51 907 993 141
          </p>
          <p className="text-white mb-2 text-[1.0625rem] text-center sm:text-left">
            codifica@gmail.com
          </p>
          <p className="text-white text-[1.0625rem] text-center sm:text-left">
            RUC: 20694825136
          </p>
        </div>

        <div>
          <h3 className="text-white montserrat-bold text-xl mb-4 text-center sm:text-left">
            Lema:
          </h3>
          <p className="text-white  montserrat-semibold text-[1.0625rem] text-center sm:text-left">
            "Aprende diferente. <br className="lg:block hidden" /> Codifica
            distinto."
          </p>
        </div>
      </div>
      <p className="text-center mt-20 sm:mt-22 py-4 text-white montserrat-semibold bg-[#051b2f]">
        © 2025 Codifica. Todos los derechos reservados.
      </p>
    </footer>
  );
}
