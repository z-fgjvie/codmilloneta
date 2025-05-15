import { dataPreguntas } from "@/data/data-preguntas";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Preguntas() {
  return (
    <Accordion type="single" collapsible className="w-full" data-aos="fade-up">
      {dataPreguntas.map((pregunta) => (
        <AccordionItem
          value={pregunta.item}
          key={pregunta.id}
          className="mb-1 sm:mb-2"
        >
          <AccordionTrigger className="text-[1.0725rem] sm:text-lg">
            {pregunta.pregunta}
          </AccordionTrigger>
          <AccordionContent className="text-[0.9475rem] sm:text-[1.0125rem] text-gray-600">
            {pregunta.respuesta}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
