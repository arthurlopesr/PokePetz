import { Arrow } from "../icons/Arrow";
import { Container, Navigation, Wrapper } from "./styles";

interface PagesHeaderProps {
  navigation: string;
  title: string;
  description: string;
}

export function PagesHeader({
  navigation,
  description,
  title,
}: PagesHeaderProps) {
  return (
    <Container>
      <Navigation>
        Home
        <Arrow />
        {navigation}
      </Navigation>

      <Wrapper>
        <h1>{title}</h1>
        <span>{description}</span>
      </Wrapper>
    </Container>
  );
}
