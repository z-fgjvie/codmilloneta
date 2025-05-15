import { dataLinks } from "@/data/data-links";
import Link from "next/link";
export default function NavEnlaces({ onClickLink }) {
  return (
    <>
      {dataLinks.map((link) => (
        <Link
          href={link.ruta}
          key={link.id}
          className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.125rem] after:bg-[#08243d] after:transition-all after:duration-300 hover:after:w-full after:rounded-full"
          onClick={onClickLink}
        >
          {link.nombre}
        </Link>
      ))}
    </>
  );
}
