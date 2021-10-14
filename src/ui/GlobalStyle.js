import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Roboto", "Montserrat", sans-serif;
  font-size: 1em;
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  border: none;
}

body{
  min-height: 100vh;
  background-color: ${({theme}) => theme.background};
}
`