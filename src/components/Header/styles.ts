import { lighten } from "polished";
import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.white};

  padding: 22px 83px;
`;

export const Wrapper = styled.div`
  align-items: end;
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
`;

export const Logo = styled.div`
  width: 62px;
  border-radius: 50%;
  padding: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.red};

  position: relative;

  a {
    width: 34px;
    height: 34px;
  }
`;

export const ScheduleAppointmentContainer = styled.div`
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  transition: background-color 0.2s ease-in-out;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 13px 24px;
  border-radius: 30px;

  &:hover {
    background-color: ${lighten(0.1, theme.colors.red)};
  }
`;
