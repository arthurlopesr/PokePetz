import { useState } from "react";
import { useSchedulingForm } from "../../hooks/useSchedulingForm";
import { Button } from "../button/Button";
import { Dropdown } from "../dropdown/Dropdown";
import { Plus } from "../icons/Plus";
import { Input } from "../input/Input";
import { Separator } from "../separator/Separator";
import {
  ConcludeSchedulingContainer,
  Container,
  Content,
  FormContainer,
  PokemonContainer,
  PokemonContent,
  RegisterTeamContainer,
  Title,
  TotalizerContainer,
  TotalizerContent,
} from "./styles";

export function SchedulingSection() {
  const { register, handleSubmit, errors } = useSchedulingForm();
  const [selectedRegion, seSelectedRegion] = useState("");
  const [selectedCity, seSelectedCity] = useState("");
  const [selectedDate, seSelectedDate] = useState("");
  const [selected, seSelected] = useState("");
  const [selectedTime, seSelectedTime] = useState("");

  return (
    <>
      <Container>
        <Title>Preencha o formulário abaixo para agendar sua consulta</Title>

        <FormContainer onSubmit={handleSubmit((data) => console.log(data))}>
          <Content>
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
          </Content>

          <Content>
            <Dropdown
              placeholder={"Selecione sua regiao"}
              label="Região"
              selected={selectedRegion}
              setSelected={seSelectedRegion}
            />
            <Dropdown
              placeholder={"Selecione sua cidade"}
              label="Cidade"
              selected={selectedCity}
              setSelected={seSelectedCity}
            />
          </Content>

          <RegisterTeamContainer>
            <h1>Cadastre seu time</h1>
            <span>Atendemos até 06 pokémons por vez</span>

            <PokemonContainer>
              <PokemonContent>
                <span>Pokemon 01</span>
                <Dropdown
                  placeholder={"Selecione seu pokémon"}
                  selected={selected}
                  setSelected={seSelected}
                />
              </PokemonContent>
              <PokemonContent>
                <span>Pokemon 01</span>
                <Dropdown
                  placeholder={"Selecione seu pokémon"}
                  selected={selected}
                  setSelected={seSelected}
                />
              </PokemonContent>
              <PokemonContent>
                <span>Pokemon 01</span>
                <Dropdown
                  placeholder={"Selecione seu pokémon"}
                  selected={selected}
                  setSelected={seSelected}
                />
              </PokemonContent>
              <PokemonContent>
                <span>Pokemon 01</span>
                <Dropdown
                  placeholder={"Selecione seu pokémon"}
                  selected={selected}
                  setSelected={seSelected}
                />
              </PokemonContent>

              <button type="button">
                Adicionar novo pokémon ao time... <Plus />
              </button>
            </PokemonContainer>
          </RegisterTeamContainer>

          <Content>
            <Dropdown
              placeholder={"Selecione uma data"}
              label="Data para Atendimento"
              selected={selectedDate}
              setSelected={seSelectedDate}
            />
            <Dropdown
              placeholder={"Horário de Atendimento"}
              label="Cidade"
              selected={selectedTime}
              setSelected={seSelectedTime}
            />
          </Content>

          <Separator />

          <TotalizerContainer>
            <TotalizerContent>
              <p>Número de pokémons a serem atendidos:</p>
              <p>10</p>
            </TotalizerContent>
            <TotalizerContent>
              <p>Atendimento unitário por pokémon: </p>
              <p>R$ 10,00</p>
            </TotalizerContent>
            <TotalizerContent>
              <p>Atendimento unitário por pokémon: </p>
              <p>R$ 10,00</p>
            </TotalizerContent>
            <TotalizerContent>
              <p>Subtotal: </p>
              <p>R$ 10,00</p>
            </TotalizerContent>
            <TotalizerContent>
              <p>Taxa geracional*: </p>
              <p>R$ 10,00</p>
            </TotalizerContent>
            <TotalizerContent>
              <span>
                *adicionamos uma taxa de 3%, multiplicado pelo número da geração
                mais alta do time, com limite de até 30%
              </span>
            </TotalizerContent>
          </TotalizerContainer>

          <ConcludeSchedulingContainer>
            <span>Valor Total: R$ 100,00</span>
            <Button type="submit">Concluir Agendamento</Button>
          </ConcludeSchedulingContainer>
        </FormContainer>
      </Container>
    </>
  );
}
