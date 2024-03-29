import { styled } from "styled-components";

export const Main = styled.main`
  padding: 10px;
  background-color: ${(props) => props.theme.color.black};
  color: white;
  grid-area: middle;
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.color.black};
  color: white;
  grid-area: top;
`;

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.color.black};
  padding: 5px;
  color: white;
  grid-area: bottom;
`;

export const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "top"
    "middle"
    "bottom"
  ;
`;