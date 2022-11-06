import React, { useCallback } from "react";
import styled, { keyframes } from "styled-components";
import FancyButton from "../components/FancyButton";
import { useNavigate } from "react-router-dom";
import { RoutesPatterns } from "../constants/routes";
import { THEME_CHANGE_TRANSITION_DURATION } from "../constants/ui";

const fadeAnimDuration = 2000; // ms

const fadeAnim = keyframes`
  50% {
    opacity: 1;
  }
`;

const startButtonFadeAnim = keyframes`
  0% {
    opacity: 0;
    pointer-events: auto;
  }

  100% {
    opacity: 100;
    pointer-events: auto;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    &:nth-child(n) {
      opacity: 0;
      animation: ${fadeAnim} ${fadeAnimDuration}ms ease-in-out forwards;
    }
    &:nth-child(1) {
      animation-delay: 0ms;
    }
    &:nth-child(2) {
      animation-delay: ${fadeAnimDuration}ms;
    }
    &:nth-child(3) {
      animation-delay: ${fadeAnimDuration * 2}ms;
    }
    &:nth-child(4) {
      animation: ${startButtonFadeAnim} ${fadeAnimDuration}ms ease-in-out
        forwards;
      animation-delay: ${fadeAnimDuration * 3}ms;
    }
  }
`;

const GreetingsLabel = styled.div`
  position: absolute;
  text-align: center;
  color: var(--primary-color-900);
  font-size: 15vmin;

  user-select: none;
  transition: color ${THEME_CHANGE_TRANSITION_DURATION}ms ease-in-out;
`;

const StartButton = styled(FancyButton)`
  color: var(--primary-color-900);
  font-size: 5vmin;
  pointer-events: none;
  transition: color ${THEME_CHANGE_TRANSITION_DURATION}ms ease-in-out;
`;

const LandingView = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(RoutesPatterns.RESUME);
  }, [navigate]);

  return (
    <Wrapper>
      <GreetingsLabel>Bonjour</GreetingsLabel>
      <GreetingsLabel>Hello</GreetingsLabel>
      <GreetingsLabel>你好</GreetingsLabel>
      <StartButton onClick={onClick}>Meet me!</StartButton>
    </Wrapper>
  );
};

export default LandingView;
