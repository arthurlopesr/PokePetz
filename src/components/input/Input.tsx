import { forwardRef, useId } from "react";
import { Container, HelperText, InputContainer, Label } from "./styles";

type InputProps = {
  label: string;
  helperText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type, label, helperText, ...props }, ref) => {
    const inputId = useId();
    const hasError = helperText?.length > 0;

    return (
      <Container>
        <Label htmlFor={inputId}>{label}</Label>
        <InputContainer
          id={inputId}
          ref={ref}
          name={name}
          type={type}
          hasError={hasError}
          {...props}
        />

        {hasError && <HelperText>{helperText}</HelperText>}
      </Container>
    );
  }
);
