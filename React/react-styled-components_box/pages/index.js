import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { BoxWithStyledComponents } from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

const FlexContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export default function HomePage() {
  return (
    <div>
      <FlexContainer>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
        <BoxWithStyledComponents />
        <BoxWithStyledComponents isBlack />
      </FlexContainer>
    </div>
  );
}
