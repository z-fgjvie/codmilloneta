import React from "react";
import NavEnlaces from "./nav-enlaces";

export default function Navbar() {
  return (
    <nav className="hidden md:flex items-center gap-7 ">
      <NavEnlaces />
    </nav>
  );
}
