import React, { useLayoutEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import RoutesManager from "./RoutesManager";
import DynamicBackgroundContainer from "./components/DynamicBackground/DynamicBackgroundContainer";
import LightButtonContainer from "./components/LightButton/LightButtonContainer";
import { changeTheme, ThemeIds } from "./style/theme";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;

    font-family: "Poppins";
    font-weight: 100;
  }
`;

const Root = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const Background = styled(DynamicBackgroundContainer)`
  position: absolute;
  z-index: -1;
`;

const LightButton = styled(LightButtonContainer)`
  position: absolute;
  top: 0;
  right: 0;
`;

const App = () => {
  useLayoutEffect(() => {
    changeTheme(ThemeIds.DARK);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Root>
        <LightButton />
        <Background />
        <RoutesManager />
        <Footer />
      </Root>
    </>
  );
};

export default App;
