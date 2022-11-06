import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { GOLDEN_RATIO } from "../constants/ui";

const BORDER_SQUARE_DIM = 0.2; // em
const BORDER_ANIM_DURATION = 2500;

const StyleReceiver = styled.div`
  position: relative;

  ${({ $width, $height }) => {
    if ($width && $height) {
      return css`
        --f-width: ${$width}px;
        --f-height: ${$height}px;
      `;
    }
  }}
`;

const BorderWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 0.3em ${0.3 * GOLDEN_RATIO}em;
  cursor: pointer;
  transition: background 200ms ease-in-out;
  font-family: "Poppins";
  font-weight: 100;

  &:hover {
    background: #21212177;
    & > ${BorderWrapper} {
      opacity: 1;
    }
  }
`;

const borderSharedStyle = css`
  position: absolute;
  width: ${BORDER_SQUARE_DIM}em;
  height: ${BORDER_SQUARE_DIM}em;

  opacity: 0;

  animation-duration: ${BORDER_ANIM_DURATION}ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const borderTopAnim = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    12.5% {
      width: calc(calc(var(--f-width) + ${BORDER_SQUARE_DIM}em) / 2);
    }
    25% {
        transform: translateX(calc(var(--f-width) + ${BORDER_SQUARE_DIM}em));
        opacity: 1;
        width: ${BORDER_SQUARE_DIM}em;
    }
    26% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

const borderRightAnim = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    12.5% {
      height: calc(calc(var(--f-height) + ${BORDER_SQUARE_DIM}em) / 2);
    }
    25% {
        transform: translateY(calc(var(--f-height) + ${BORDER_SQUARE_DIM}em));
        opacity: 1;
        height: ${BORDER_SQUARE_DIM}em;
    }
    26% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

const borderBottomAnim = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    12.5% {
      width: calc(calc(var(--f-width) + ${BORDER_SQUARE_DIM}em) / 2);
    }
    25% {
        transform: translateX(calc(0px - calc(var(--f-width)) - ${BORDER_SQUARE_DIM}em));
        opacity: 1;
        width: ${BORDER_SQUARE_DIM}em;
    }
    26% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

const borderLeftAnim = keyframes`
    0% {
        transform: translate(0);
        opacity: 1;
    }
    12.5% {
      height: calc(calc(var(--f-height) + ${BORDER_SQUARE_DIM}em) / 2);
    }
    25% {
        transform: translateY(calc(0px - calc(var(--f-height)) - ${BORDER_SQUARE_DIM}em));
        opacity: 1;
        height: ${BORDER_SQUARE_DIM}em;
    }
    26% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

const BorderTop = styled.div`
  ${borderSharedStyle}
  top: -${BORDER_SQUARE_DIM}em;
  left: -${BORDER_SQUARE_DIM}em;
  background: linear-gradient(to right, transparent, white);
  animation-name: ${borderTopAnim};
  animation-delay: ${BORDER_ANIM_DURATION}ms;
`;

const BorderRight = styled.div`
  ${borderSharedStyle}
  top:  -${BORDER_SQUARE_DIM}em;
  right: -${BORDER_SQUARE_DIM}em;
  background: linear-gradient(to bottom, transparent, white);
  animation-name: ${borderRightAnim};
  animation-delay: ${BORDER_ANIM_DURATION * 0.25}ms;
`;

const BorderBottom = styled.div`
  ${borderSharedStyle}
  top: 100%;
  right: -${BORDER_SQUARE_DIM}em;
  background: linear-gradient(to left, transparent, white);
  animation-name: ${borderBottomAnim};
  animation-delay: ${BORDER_ANIM_DURATION * 0.5}ms;
`;

const BorderLeft = styled.div`
  ${borderSharedStyle}
  top: 100%;
  left: -${BORDER_SQUARE_DIM}em;
  background: linear-gradient(to top, transparent, white);
  animation-name: ${borderLeftAnim};
  animation-delay: ${BORDER_ANIM_DURATION * 0.75}ms;
`;

const FancyButton = ({ className = "", onClick, children }) => {
  const ref = useRef();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const node = ref.current;

    const callback = () => {
      if (node) {
        const { width, height } = node.getBoundingClientRect();
        setWidth(width);
        setHeight(height);
      }
    };
    window.addEventListener("resize", callback);
    callback();

    return () => {
      window.removeEventListener("resize", callback);
    };
  }, []);

  return (
    <StyleReceiver
      className={className}
      $width={width}
      $height={height}
      ref={ref}
      onClick={onClick}
    >
      <Wrapper>
        <BorderWrapper>
          <BorderTop />
          <BorderRight />
          <BorderBottom />
          <BorderLeft />
        </BorderWrapper>

        {children}
      </Wrapper>
    </StyleReceiver>
  );
};

export default FancyButton;
