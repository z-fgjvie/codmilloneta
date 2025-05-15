import React from "react";
import Heading from "./heading";
import { FaFileCode } from "react-icons/fa";
import CardAprender from "./card-aprender";
import { FaJsSquare } from "react-icons/fa";
import { TabletSmartphone } from "lucide-react";
import { IoExtensionPuzzle } from "react-icons/io5";
import { BsClipboardCheckFill } from "react-icons/bs";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

export default function Aprender() {
  return (
    <section className="px-5 py-12 sm:py-16 top-section" id="aprender">
      <div className="max-w-[75rem] mx-auto">
        <Heading titulo="Lo que aprenderás" subtitulo="Aprende haciendo" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-7 sm:gap-5">
          <CardAprender
            icon={FaFileCode}
            titulo="HTML y CSS Pro"
            descripcion="Domina la base del desarrollo web con estructuras limpias, animaciones y diseños modernos."
          />
          <CardAprender
            icon={FaJsSquare}
            titulo="JavaScript desde cero"
            descripcion="Aprende el lenguaje más usado en la web desde lo básico hasta funcionalidades reales."
          />
          <CardAprender
            icon={IoExtensionPuzzle}
            titulo="Clones de páginas reales"
            descripcion="Replica páginas como Netflix, Airbnb y más. Aprende con proyectos reales que te prepararán para el mundo laboral."
          />
          <CardAprender
            icon={TabletSmartphone}
            titulo="Web 100% responsiva"
            descripcion="Crea sitios que se adapten a cualquier pantalla como los profesionales."
          />
          <CardAprender
            icon={BsClipboardCheckFill}
            titulo="Formularios y validaciónes"
            descripcion="Crea formularios funcionales con validaciones profesionales."
          />
          <CardAprender
            icon={SiPhp}
            titulo="PHP para el backend"
            descripcion="Construye la parte lógica de tus sitios y conéctalos con bases de datos fácilmente."
          />
          <CardAprender
            icon={SiMysql}
            titulo="Bases de datos con MySQL"
            descripcion="Aprende a crear, gestionar y conectar bases de datos como lo hacen las webs reales."
          />
          <CardAprender
            icon={FaGlobe}
            titulo="Proyecto final completo"
            descripcion="Termina con una web profesional lista para mostrar o postular a trabajos."
          />
        </div>
      </div>
    </section>
  );
}
