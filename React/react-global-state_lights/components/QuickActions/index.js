import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onAllLightsOn,
  onAllLightsOff,
  lightSum,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={lightSum === 0 ? true : false}
        onClick={() => {
          onAllLightsOff();
          console.log("Turn all lights off");
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        disabled={lightSum === 8 ? true : false}
        onClick={() => {
          onAllLightsOn();
          console.log("Turn all lights on");
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
