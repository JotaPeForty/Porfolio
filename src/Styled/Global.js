import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
  text-decoration: none;
  list-style-type: none;  
}

a{
  text-decoration: none;
  list-style-type: none;
}

body{
  position: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
  background: url(./Img/constellation.svg)
}
`;

export default GlobalStyle;