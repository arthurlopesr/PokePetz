import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

export const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray100};

  p {
    font-size: 14px;
    color: ${theme.colors.white};
  }
`;
