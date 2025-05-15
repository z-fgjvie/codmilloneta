import React from "react";

export default function CardInfo({ icon: Icon, titulo, descripcion }) {
  return (
    <div className="border border-slate-300 px-4 md:px-6 py-4 rounded-md mb-4 md:mb-6">
      <div className="flex gap-3 mb-1">
        <Icon className="text-[#08243d] text-3xl" />
        <div>
          <p className="text-lg montserrat-medium">{titulo}</p>
          <p className="text-slate-500">{descripcion}</p>
        </div>
      </div>
    </div>
  );
}
