import { styled } from "styled-components";

export const Ul = styled.ul`
  margin: 5px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid white;
`;

export const Li = styled.li`
  padding: 10px;
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