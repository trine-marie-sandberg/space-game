import { styled } from "styled-components";

export const Main = styled.main`
  padding: 10px;
  background-color: ${(props) => props.theme.color.black};
  color: white;
  grid-area: b;
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.color.black};
  color: white;
  grid-area: a;
`;

export const Footer = styled.footer`
  background-color: white;
  grid-area: c;
`;

export const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "a"
    "b"
    "c"
  ;
`;