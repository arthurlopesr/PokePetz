import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

export const Container = styled.div`
  background-color: ${theme.colors.red};
  width: 100%;
  height: 187px;
  margin-bottom: 32px;

  padding: 32px 106px;
`;

export const Navigation = styled.div`
  width: 160px;
  font-size: 12px;
  color: ${theme.colors.white};
  font-weight: ${theme.font.bold};

  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 12px;

  h1 {
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: 32px;
  }

  span {
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    font-size: 12px;
    margin-top: 12px;
  }
`;
