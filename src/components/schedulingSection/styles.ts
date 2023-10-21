import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Title = styled.h1`
  color: ${theme.colors.gray100};
  font-size: 24px;
  font-weight: 600;

  margin: auto;
`;

export const FormContainer = styled.form`
  width: 550px;
  margin: auto;
  margin-top: 32px;
  margin-bottom: 70px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 18px;
`;

export const RegionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 18px;
`;
