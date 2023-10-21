import { Container, Content } from "./styles";

type MainProps = {
  children?: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
