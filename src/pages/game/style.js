import styled from "styled-components";

export const GameScreen = styled.div`
  background-color: black;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.color.green};
`;