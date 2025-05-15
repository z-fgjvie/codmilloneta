import React from "react";
import { Separator } from "./ui/separator";

export default function DatosEmpresa() {
  return (
    <div className="mt-12 md:mt-20 mb-3 flex md:flex-row flex-col justify-between items-center ">
      <div className="flex flex-col items-center" data-aos="zoom-in">
        <p className="text-4xl montserrat-bold text-[#08243d] mb-1">+200</p>
        <p className="text-lg text-slate-700 text-center">
          estudiantes formados
        </p>
      </div>
      <div
        className="h-16 items-center space-x-4 hidden md:flex"
        data-aos="fade-up"
      >
        <Separator orientation="vertical" className="bg-[#08243d]" />
      </div>
      <Separator className="md:hidden my-7" />
      <div className="flex flex-col items-center" data-aos="zoom-in">
        <p className="text-4xl montserrat-bold text-[#08243d] mb-1">+15</p>
        <p className="text-lg text-slate-700 text-center">
          proyectos prácticos
        </p>
      </div>
      <div
        className="h-16 items-center space-x-4 hidden md:flex"
        data-aos="fade-up"
      >
        <Separator orientation="vertical" className="bg-[#08243d]" />
      </div>
      <Separator className="md:hidden my-7" />
      <div className="flex flex-col items-center" data-aos="zoom-in">
        <p className="text-4xl montserrat-bold text-[#08243d] mb-1">+3</p>
        <p className="text-lg text-slate-700 text-center">
          años enseñando desarrollo web
        </p>
      </div>
    </div>
  );
}
