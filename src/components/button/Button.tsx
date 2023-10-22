import { ComponentProps } from "react";
import { Container } from "./styles";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return <Container {...props} />;
}
