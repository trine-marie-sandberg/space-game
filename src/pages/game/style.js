import styled from "styled-components";

export const GameScreen = styled.div`
  background-color: black;
  height: 95%;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.color.green};
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuitBtn = styled.button`
  background-color: black;
  cursor: pointer;
  align-self: flex-start;
  border: none;
  color: white;
`;

export const StartBtn = styled.button`
  margin: 25% auto;
  padding: 10px 15px;
  border: 2px dashed ${(props) => props.theme.color.green};
  background-color: black;
  color: white;
  font-size: 40px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 2px solid ${(props) => props.theme.color.green};
  }
`;