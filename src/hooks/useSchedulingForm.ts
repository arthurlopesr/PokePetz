"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const shchema = z.object({
  name: z.string().nonempty({ message: "Nome é obrigatório" }),
  surmame: z.string().nonempty({ message: "Sobrenome é obrigatório" }),
  pokemons: z.array(
    z.object({
      id: z.number().max(6),
      pokemon: z.string(),
    })
  ),
});

type DataProps = z.infer<typeof shchema>;

export function useSchedulingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<DataProps>({
    mode: "onBlur",
    resolver: zodResolver(shchema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "pokemons",
    control: control,
  });

  return {
    register,
    handleSubmit,
    errors,
    fields,
    append,
    remove,
  };
}
