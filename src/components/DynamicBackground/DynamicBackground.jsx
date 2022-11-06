/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { THEME_CHANGE_TRANSITION_DURATION } from "../../constants/ui";
import { ThemeIds } from "../../style/theme";

const CANVAS_DIMENSION = 50;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  transition: filter ${THEME_CHANGE_TRANSITION_DURATION}ms ease-in-out;
  will-change: filter;

  ${({ $showColors }) => {
    if (!$showColors) {
      return css`
        filter: grayscale(1) brightness(0.07);
      `;
    }
  }}
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

const DynamicBackground = ({ className = "", themeId }) => {
  const canvasRef = useRef();
  const ctxRef = useRef();

  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");
      ctxRef.current = context;
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = ctxRef.current;

    if (ctx) {
      const getR = (x, y, t) => {
        return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
      };

      const getG = (x, y, t) => {
        return Math.floor(
          192 +
            64 * Math.sin((x * x * Math.cos(t / 4) + y * Math.sin(t / 3)) / 300)
        );
      };

      const getB = (x, y, t) => {
        return Math.floor(
          192 +
            64 *
              Math.sin(
                5 * Math.sin(t / 9) +
                  ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
              )
        );
      };

      const drawPixel = (x, y, t) => {
        const r = getR(x, y, t);
        const g = getG(x, y, t);
        const b = getB(x, y, t);

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, y, 1, 1);
      };

      const loop = function (t) {
        for (let y = 0; y < CANVAS_DIMENSION; y++) {
          for (let x = 0; x < CANVAS_DIMENSION; x++) {
            drawPixel(x, y, t / 1000);
          }
        }
        requestAnimationFrame(loop);
      };

      requestAnimationFrame(loop);
    }
  }, []);

  return (
    <Wrapper className={className} $showColors={themeId === ThemeIds.COLORFUL}>
      <Canvas
        ref={canvasRef}
        width={CANVAS_DIMENSION}
        height={CANVAS_DIMENSION}
      />
    </Wrapper>
  );
};

export default DynamicBackground;
