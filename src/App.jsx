import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import RoutesManager from "./RoutesManager";
import { useEffect } from "react";
import { changeTheme, ThemeIds } from "./style/theme";
import DynamicBackgroundContainer from "./components/DynamicBackground/DynamicBackgroundContainer";
import { useDispatch } from "react-redux";
import { setTheme } from "./actionCreators/theme";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;

    font-family: "Poppins";
    font-weight: 100;
  }

  &:root {
    --primary-color-900: #FFFFFF;
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

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setTheme(ThemeIds.COLORFUL));
    }, 5000);
  }, []);

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
