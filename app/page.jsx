"use client";
import Aprender from "@/components/aprender";
import Banner from "@/components/banner";
import Beneficios from "@/components/beneficios";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import PreguntasFrecuentes from "@/components/preguntas-frecuentes";
import Somos from "@/components/somos";
import Testimonios from "@/components/testimonios";
import { useEffect } from "react";
import Aos from "aos";
import BtnFlotanteWssp from "@/components/btn-flotante-wssp";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Somos />
      <Beneficios />
      <Aprender />
      <Testimonios />
      <Banner />
      <Contacto />
      <PreguntasFrecuentes />
      <BtnFlotanteWssp />
      <Footer />
    </>
  );
}
