import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --color-black: rgb(1, 15, 15);
    --color-grey: rgb(49, 56, 59);
    --color-blue: rgb(87, 128, 152);
    --color-green: rgb(87, 152, 103);
  }
  body {
    padding: 0;
    margin: 0;
  }
  i {
    padding: 5px;
  }
`;
export default GlobalStyle;