import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins";
}
body{
  background: ${(props) => props.theme["primary"]};
  color: ${(props) => props.theme["secondary"]};
}
`;
