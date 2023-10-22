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

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 18px;
`;

export const RegisterTeamContainer = styled.div`
  margin-top: 32px;

  h1 {
    text-align: left;
    font-size: 12px;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray100};
  }

  span {
    text-align: left;
    font-size: 12px;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray25};
  }
`;

export const PokemonContainer = styled.div`
  justify-content: space-between;
  width: 100%;
  gap: 38px;

  button {
    width: auto;
    margin-top: 32px;
    margin-bottom: 32px;

    display: flex;
    align-items: center;
    padding: 14px;
    gap: 12px;
    font-size: 12px;

    font-size: 12px;
    font-style: ${theme.font.normal};
    font-weight: ${theme.font.bold};
    line-height: normal;

    border-radius: 30px;
    border: 1px solid #1d1d1d;
    background-color: transparent;
  }
`;

export const PokemonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 38px;

  margin-top: 16px;

  span {
    width: 90px;
    text-align: left;
    font-size: 12px;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray100};
  }
`;

export const TotalizerContainer = styled.div`
  p {
    color: ${theme.colors.gray25};

    font-size: 14px;
    font-style: ${theme.font.normal};
    margin-top: 8px;
  }
  p:last-child {
    margin-bottom: 8px;
  }
`;

export const TotalizerContent = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: #747474;
    font-size: 8px;
    font-style: normal;
  }
`;

export const ConcludeSchedulingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  span {
    font-size: 25px;
    font-weight: ${theme.font.bold};
  }
`;
