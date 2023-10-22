import { lighten } from "polished";
import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme/theme";

export const DropdownContainer = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: ${theme.font.bold};
  color: ${theme.colors.gray100};
  margin-bottom: 8px;
`;

export const DropdownButton = styled.div`
  padding: 12px;
  background-color: transparent;

  color: #fff;
  border: none;
  cursor: pointer;

  border-radius: 8px;
  border: 1px solid #d5d5d5;

  color: ${theme.colors.gray25};

  width: 100%;

  p {
    color: #747474;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const dropIn = keyframes`
from {
  top: -100%;
}

to {
  top: 0;
}
`;

export const DropdownContent = styled.ul`
  margin-top: -5px;
  display: flex;
  flex-direction: column;
  height: 250px;
  overflow: scroll;

  animation: ${dropIn} 0.2s ease-in-out;

  gap: 8px;

  border-radius: 0px 0px 8px 8px;
  border: 1px solid #d5d5d5;

  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.09);
  list-style: none;
`;

export const DropdownItem = styled.div`
  color: ${theme.colors.gray25};

  display: block;

  font-size: 14px;
  font-weight: ${theme.font.normal};
  margin: 0px;
  padding: 8px 14px;

  cursor: pointer;

  list-style: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${lighten(0.5, theme.colors.gray25)};
    color: ${theme.colors.gray100};
  }
`;
