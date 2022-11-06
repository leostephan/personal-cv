import styled, { createGlobalStyle } from "styled-components";
import DynamicBackground from "./DynamicBackground";
import Footer from "./Footer";
import RoutesManager from "./RoutesManager";
import { useEffect } from "react";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;

    --main-color: #FFFFFF;
    font-family: "Poppins";
    font-weight: 100;
  }
`;

const Root = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const Background = styled(DynamicBackground)`
  position: absolute;
  z-index: -1;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Root>
        <Background />
        <RoutesManager />
        <Footer />
      </Root>
    </>
  );
};

export default App;
