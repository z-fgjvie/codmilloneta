"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonios } from "@/data/data-testimonios";
import Image from "next/image";

export default function CarouselTestimonios() {
  return (
    <div className="mt-6 md:mt-14 md:mb-8" data-aos="fade-up">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4500,
            stopOnInteraction: false,
          }),
        ]}
        className="max-w-[75%] md:max-w-[85%] lg:max-w-[90%] mx-auto "
      >
        <CarouselContent className="mx-auto">
          {testimonios.map((testimonio) => (
            <CarouselItem
              key={testimonio.id}
              className="md:basis-1/2 lg:basis-1/3 px-1 md:px-5 lg:px-7 "
            >
              <Image
                src={testimonio.perfil}
                alt="perfil"
                width="80"
                height="80"
                className="rounded-full w-16 h-16 mx-auto object-cover mb-2"
              />
              <div>
                <h3 className="text-lg text-center montserrat-semibold text-[#34393d] mb-2">
                  {testimonio.nombre}
                </h3>
                <p className="text-center text-[#393f44]">
                  {testimonio.testimonio}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
