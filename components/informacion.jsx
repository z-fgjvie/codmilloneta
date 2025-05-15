import { RiGraduationCapLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { MdPushPin } from "react-icons/md";
import CardInfo from "./card-info";

export default function Informacion() {
  return (
    <div>
      <CardInfo
        icon={RiGraduationCapLine}
        titulo="Aprende de expertos"
        descripcion="Instructores con experiencia real en la industria."
      />
      <CardInfo
        icon={FaLaptopCode}
        titulo="100% práctico"
        descripcion="Clases enfocadas en proyectos reales."
      />
      <CardInfo
        icon={LuClock}
        titulo="Horarios flexibles"
        descripcion="Elige el turno que mejor se adapte a ti."
      />
      <div className="hidden md:grid grid-cols-[auto_1fr] gap-2">
        <MdPushPin className="text-[#08243d] text-lg mt-1" />
        <p>
          <span className="montserrat-medium">Nota:</span> Luego de enviar el
          formulario, nuestro equipo se pondrá en contacto contigo para
          brindarte más información.
        </p>
      </div>
    </div>
  );
}
