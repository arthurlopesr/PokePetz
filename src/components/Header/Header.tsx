import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/white-pokeball.svg";
import {
  Container,
  Logo,
  ScheduleAppointmentContainer,
  Wrapper,
} from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <Logo>
          <Link href="/">
            <Image alt="logo" src={logo} width={34} height={34} />
            <p>Centro Pokémon</p>
          </Link>
        </Logo>

        <Wrapper>
          <Link href="/about">Quem Somos</Link>
          <ScheduleAppointmentContainer>
            <Link href="/scheduling">Agendar Consulta</Link>
          </ScheduleAppointmentContainer>
        </Wrapper>
      </Container>
    </>
  );
}
