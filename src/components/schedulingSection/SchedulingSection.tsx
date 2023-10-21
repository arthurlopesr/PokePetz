import { useState } from "react";
import { useSchedulingForm } from "../../hooks/useSchedulingForm";
import { Dropdown } from "../dropdown/Dropdown";
import { Input } from "../input/Input";
import {
  Container,
  FormContainer,
  NameContainer,
  RegionContainer,
  Title,
} from "./styles";

export function SchedulingSection() {
  const { register, handleSubmit, errors } = useSchedulingForm();
  const [selected, seSelected] = useState("");

  return (
    <>
      <Container>
        <Title>Preencha o formulário abaixo para agendar sua consulta</Title>

        <FormContainer onSubmit={handleSubmit((data) => console.log(data))}>
          <NameContainer>
            <Input
              {...register("name")}
              type="text"
              label="Nome"
              placeholder="Digite seu nome"
              helperText={errors.name?.message}
            />
            <Input
              {...register("surmame")}
              type="text"
              label="Sobrenome"
              placeholder="Digite seu sobrenome"
              helperText={errors.surmame?.message}
            />
          </NameContainer>

          <RegionContainer>
            <Dropdown
              placeholder={"Selecione sua regiao"}
              label="Região"
              selected={selected}
              setSelected={seSelected}
            />
            <Dropdown
              placeholder={"Selecione sua cidade"}
              label="Cidade"
              selected={selected}
              setSelected={seSelected}
            />
          </RegionContainer>
          <button type="submit">Enviar</button>
        </FormContainer>
      </Container>
    </>
  );
}
