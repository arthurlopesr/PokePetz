import Image from "next/image";
import teste from "../../../public/images/pokemon-hero.jpg";
import { Container, Content } from "./styles";

export function HeroSection() {
  return (
    <Container>
      <Image src={teste} alt="Pokemon" />
      <Content>
        Cuidamos bem do seu pokémon, para ele cuidar bem de você!
      </Content>
    </Container>
  );
}
