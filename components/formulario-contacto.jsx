"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FormularioContacto() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    control,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      horario: "",
    },
  });

  const formatearCelular = (value) => {
    const valor = value.replace(/\D/g, "").slice(0, 9);
    return valor;
  };

  const handleFormato = (e) => {
    const valorFormateado = formatearCelular(e.target.value);
    setValue("numero", valorFormateado);
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleEnvio = async (data) => {
    setLoading(true);

    try {
      const respuesta = await fetch("/api/enviar-datos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resultado = await respuesta.json();

      if (resultado.success) {
        reset();
        toast("Formulario enviado correctamente", {
          description: "En breve nos contactaremos contigo.",
        });
        setToggle(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleEnvio)}>
      <div className="grid sm:grid-cols-2 gap-x-7 gap-y-6 mb-5">
        <div>
          <label htmlFor="nombre" className="block mb-2">
            Nombre Completo:
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            autoComplete="off"
            className="border border-slate-300 rounded-sm p-3 py-[0.455rem] outline-none w-full text-[0.9375rem]"
            {...register("nombre", {
              required: true,
            })}
          />
        </div>
        <div>
          <label htmlFor="correo" className="block mb-2">
            Correo Electronico:
          </label>
          <input
            type="email"
            name="correo"
            id="correo"
            autoComplete="off"
            className="border border-slate-300 rounded-sm p-3 py-[0.455rem] outline-none w-full text-[0.9375rem]"
            {...register("correo", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="numero" className="block mb-2">
            Número de teléfono:
          </label>
          <input
            type="tel"
            name="numero"
            id="numero"
            autoComplete="off"
            onInput={handleFormato}
            maxLength={9}
            className="border border-slate-300 rounded-sm p-3 py-[0.455rem] outline-none w-full text-[0.9375rem]"
            {...register("numero", {
              required: true,
              maxLength: 9,
              minLength: 9,
            })}
          />
        </div>
        <div>
          <label htmlFor="horario" className="block mb-2">
            ¿En qué horario te interesa?
          </label>
          <Controller
            name="horario"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un horario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>--Selecciona--</SelectLabel>
                    <SelectItem value="lunes">
                      Lunes, Miercoles y Viernes
                    </SelectItem>
                    <SelectItem value="martes">
                      Martes, Jueves y Sábado
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>
      <div>
        <label htmlFor="asunto" className="block mb-2">
          Mensaje (opcional)
        </label>
        <textarea
          name="asunto"
          id="asunto"
          className="border h-[6.25rem] resize-none border-slate-300 rounded-sm p-3 py-[0.455rem] outline-none w-full text-[0.9375rem]"
          {...register("asunto")}
        />
      </div>
      <div className="mt-4 mb-6">
        <label
          htmlFor="politica"
          className="grid grid-cols-[auto_1fr] gap-3 cursor-pointer"
        >
          <input
            type="checkbox"
            name="politica"
            id="politica"
            onClick={handleClick}
            className={`appearance-none w-5 h-5 rounded-[0.1875rem] border relative after:content-[''] after:absolute after:w-[.4rem] after:h-[.7rem] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:right-[0.380rem] after:lg:right-[0.3125rem] after:top-[0.125rem] after:opacity-0 cursor-pointer ${
              toggle ? "bg-[#5f55bb] after:opacity-100 border-[#5f55bb]" : ""
            } `}
            {...register("politica", {
              required: true,
            })}
          />
          <span className="montserrat-medium text-[0.9375rem]">
            Acepto las{" "}
            <span className="text-[#5f55bb] underline underline-offset-2">
              políticas de privacidad
            </span>{" "}
            y los{" "}
            <span className="text-[#5f55bb] underline underline-offset-2">
              términos y condiciones
            </span>
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`${
          isValid ? "bg-[#5f55bb]" : "bg-[#5f55bb]/50"
        } text-white h-[3rem] sm:w-[9rem] rounded-md w-full montserrat-medium  cursor-pointer`}
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin text-white text-2xl mx-auto" />
        ) : (
          "Enviar"
        )}
      </button>
    </form>
  );
}
