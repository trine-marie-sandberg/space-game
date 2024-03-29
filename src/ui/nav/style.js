import { styled } from "styled-components";

export const Navigation = styled.nav`
  padding: 5px;
`;

export const Ul = styled.ul`
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
`;

export const Li = styled.li`
  padding: 5px 10px;
  & a {
    color: white;
    text-decoration: none;
    font-size: 20px;
  }
  & a:hover {
    text-decoration: underline;
  }
  & .active {
    text-decoration: underline;
  }
`;