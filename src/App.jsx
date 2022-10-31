import styled, { createGlobalStyle } from "styled-components";
import FontsStyle from "./assets/fonts";
import DynamicBackground from "./DynamicBackground";
import Footer from "./Footer";
import RoutesManager from "./RoutesManager";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;

    --main-color: #FFFFFF;
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
      <FontsStyle />
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
