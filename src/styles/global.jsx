import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --color-black: rgb(2, 17, 26);
    --color-grey: rgb(49, 56, 59);
    --color-blue: rgb(87, 128, 152);
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