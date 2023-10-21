import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

export const Container = styled.div`
  margin-top: 10px;
  margin: auto;

  width: 410px;
  height: auto;

  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 18px;
    color: ${theme.colors.black};
  }

  h2 {
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.black};
    margin-top: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;

    color: ${theme.colors.black};

    margin-top: 16px;
    text-align: left;
  }

  p:last-child {
    margin-bottom: 70px;
  }
`;
