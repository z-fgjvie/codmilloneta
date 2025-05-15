import React from "react";

export default function CardAprender({ icon: Icon, titulo, descripcion }) {
  return (
    <div className="shadow-card px-5 pb-5 rounded-xs" data-aos="zoom-in">
      <div className="bg-[#c9c3ff] w-fit p-3 rounded-br-xl mb-4">
        <Icon className="text-[#5f55bb] text-2xl" />
      </div>
      <h3 className="text-xl montserrat-bold mb-2 text-[#08243d]">{titulo}</h3>
      <p className="text-gray-600">{descripcion}</p>
    </div>
  );
}
