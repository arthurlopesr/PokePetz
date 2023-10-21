import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const shchema = z.object({
  name: z.string().nonempty({ message: "Nome é obrigatório" }),
  surmame: z.string().nonempty({ message: "Sobrenome é obrigatório" }),
});

type DataProps = z.infer<typeof shchema>;

export function useSchedulingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>({
    mode: "onBlur",
    resolver: zodResolver(shchema),
  });

  return {
    register,
    handleSubmit,
    errors,
  };
}
