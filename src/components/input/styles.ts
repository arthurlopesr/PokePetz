import { lighten } from "polished";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: ${theme.font.bold};
  color: ${theme.colors.gray100};
  margin-bottom: 8px;
`;

export const InputContainer = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: ${theme.spacings.xxsmall};

  border-radius: 8px;
  border: 1px solid ${theme.colors.gray};

  &:focus {
    outline: 2px solid ${lighten(0.2, theme.colors.gray)};
    border: 1px solid ${theme.colors.gray100};
  }

  &::placeholder {
    color: ${theme.colors.gray25};
    font-size: 14px;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border: 1px solid ${theme.colors.red};
    `}
`;

export const HelperText = styled.span`
  color: ${theme.colors.red};
  font-size: 12px;
  margin-top: 4px;
`;
