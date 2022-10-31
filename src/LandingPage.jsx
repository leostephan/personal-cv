import styled, { keyframes } from "styled-components";

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

const Label = styled.div`
  position: absolute;
  text-align: center;
  color: var(--main-color);
  font-size: 10em;
  font-family: "Poppins";

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

const LandingPage = () => {
  return (
    <Wrapper>
      <Label>Bonjour</Label>
      <Label>Hello</Label>
      <Label>你好</Label>
    </Wrapper>
  );
};

export default LandingPage;
