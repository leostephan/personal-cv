/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styled, { css } from "styled-components";
import { LightBubbleSvg } from "../../assets/svg";

const Wrapper = styled.div``;

const LightBubble = styled(LightBubbleSvg)`
  width: 5em;
  filter: drop-shadow(0 0 5em black);

  ${({ onClick }) => {
    if (onClick) {
      return css`
        cursor: pointer;
      `;
    }
  }}

  ${({ $isLightOn }) => {
    if ($isLightOn) {
      return css``;
    }

    return css``;
  }}
`;

const LightButton = ({ className = "", toggled, onToggle }) => {
  return (
    <Wrapper className={className} onClick={onToggle}>
      <LightBubble $isLightOn={toggled} />
    </Wrapper>
  );
};

export default LightButton;
