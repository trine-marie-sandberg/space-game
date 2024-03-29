import styled from "styled-components";

export const GameScreen = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.color.green};
`;

export const Button = styled.button`
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