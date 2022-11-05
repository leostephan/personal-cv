import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import FancyButton from "./FancyButton";
import delayedCallback from "./utils/delayedCallback";
import { CSSTransition } from "react-transition-group";

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
  transition: opacity ${fadeAnimDuration}ms ease-in-out;

  opacity: 0;

  &.bonjour-transitions-enter,
  &.bonjour-transitions-enter-done {
    opacity: 1;
  }

  &.bonjour-transitions-exit,
  &.bonjour-transitions-exit-done {
    opacity: 0;
  }

  &.hello-transitions-enter,
  &.hello-transitions-enter-done {
    opacity: 1;
  }

  &.hello-transitions-exit,
  &.hello-transitions-exit-done {
    opacity: 0;
  }

  &.nihao-transitions-enter,
  &.nihao-transitions-enter-done {
    opacity: 1;
  }

  &.nihao-transitions-exit,
  &.nihao-transitions-exit-done {
    opacity: 0;
  }
`;

const StartButton = styled(FancyButton)`
  opacity: 0;

  transition: opacity ${fadeAnimDuration}ms ease-in-out;
  color: var(--main-color);
  font-size: 5vmin;
  
  &.meet-me-transitions-enter,
  &.meet-me-transitions-enter-done {
    opacity: 1;
  }

  &.meet-me-transitions-exit,
  &.meet-me-transitions-exit-done {
    opacity: 0;
  
`;

const LandingPage = () => {
  const [which, setWhich] = useState(0);
  const called = useRef(0);

  useEffect(() => {
    const asyncCallback = async () => {
      await delayedCallback(() => {
        setWhich((prev) => prev + 1);
      }, fadeAnimDuration);
      await delayedCallback(() => {
        setWhich((prev) => prev + 1);
      }, fadeAnimDuration);
      await delayedCallback(() => {
        setWhich((prev) => prev + 1);
      }, fadeAnimDuration);
      await delayedCallback(() => {
        setWhich((prev) => prev + 1);
      }, fadeAnimDuration);
    };
    if (!called.current) {
      asyncCallback();
    }
    called.current++;
  }, []);

  return (
    <Wrapper>
      <CSSTransition
        in={which === 1}
        timeout={fadeAnimDuration}
        classNames="bonjour-transitions"
        unmountOnExit
        mountOnEnter
      >
        <GreetingsLabel>Bonjour</GreetingsLabel>
      </CSSTransition>
      <CSSTransition
        in={which === 2}
        timeout={fadeAnimDuration}
        classNames="hello-transitions"
        unmountOnExit
        mountOnEnter
      >
        <GreetingsLabel>Hello</GreetingsLabel>
      </CSSTransition>
      <CSSTransition
        in={which === 3}
        timeout={fadeAnimDuration}
        classNames="nihao-transitions"
        unmountOnExit
        mountOnEnter
      >
        <GreetingsLabel>你好</GreetingsLabel>
      </CSSTransition>

      <CSSTransition
        in={which === 4}
        timeout={fadeAnimDuration}
        classNames="meet-me-transitions"
        unmountOnExit
        mountOnEnter
      >
        <StartButton>Meet me!</StartButton>
      </CSSTransition>
    </Wrapper>
  );
};

export default LandingPage;
