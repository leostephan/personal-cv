import styled, { keyframes } from "styled-components";
import FancyButton from "./FancyButton";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fadeAnimDuration = 1500; // ms

const fadeAnim = keyframes`
  50% {
    opacity: 1;
  }
`;

const startButtonFadeAnim = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 100;
  }
`;

const GreetingsLabel = styled.div`
  position: absolute;
  text-align: center;
  color: var(--main-color);
  font-size: 15vmin;

  user-select: none;

  opacity: 0;
  animation: ${fadeAnim} ${fadeAnimDuration}ms ease-in-out forwards;

  &:nth-child(1) {
    animation-delay: 0ms;
  }
  &:nth-child(2) {
    animation-delay: ${fadeAnimDuration}ms;
  }
  &:nth-child(3) {
    animation-delay: ${fadeAnimDuration * 2}ms;
  }
`;

const StartButton = styled(FancyButton)`
  opacity: 0;
  animation: ${startButtonFadeAnim} ${fadeAnimDuration}ms ease-in-out
    ${fadeAnimDuration * 3}ms forwards;

  color: var(--main-color);
  font-size: 5vmin;
`;

const LandingPage = () => {
  return (
    <Wrapper>
      <GreetingsLabel>Bonjour</GreetingsLabel>
      <GreetingsLabel>Hello</GreetingsLabel>
      <GreetingsLabel>你好</GreetingsLabel>
      <StartButton>Meet me</StartButton>
    </Wrapper>
  );
};

export default LandingPage;
