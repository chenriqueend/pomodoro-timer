import { styled, css } from "styled-components";

export type buttonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "greenItaly"
  | "redItaly"
  | "whiteItaly"
  | "black";

interface ButtonContainerProps {
  variant: buttonVariant;
  colorText: buttonVariant;
}

const buttonVariants = {
  primary: "blue",
  black: "#000000",
  secondary: "orange",
  danger: "red",
  success: "greenyellow",
  greenItaly: "#008C45",
  redItaly: "#CD212A",
  whiteItaly: "#F4F9FF",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 4px;
  width: 104px;
  height: 40px;
  border: 0px;
  margin: 8px;
  background-color: ${(props) => buttonVariants[props.variant]};
  color: ${(props) => buttonVariants[props.colorText]};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }} */
`;
