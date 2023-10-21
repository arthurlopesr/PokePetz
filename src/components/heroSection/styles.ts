import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  position: absolute;

  font-size: 32px;
  font-weight: ${theme.font.bold};
  color: ${theme.colors.white};

  text-align: center;

  width: 510px;
  height: 78px;
`;
