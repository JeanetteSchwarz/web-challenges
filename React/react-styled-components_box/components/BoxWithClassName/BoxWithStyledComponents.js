import styled, { css } from "styled-components";

export function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox $isBlack={isBlack}></StyledBox>;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
