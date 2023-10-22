import { lighten } from "polished";
import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

export const Container = styled.button`
  width: auto;

  background-color: ${theme.colors.red};
  border: none;
  border-radius: 30px;

  padding: 13px;

  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.white};

  &:hover {
    background-color: ${lighten(0.1, theme.colors.red)};
  }
`;
