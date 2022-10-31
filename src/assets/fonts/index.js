import PoppinsBlack from "./Poppins-Black.ttf";

import { createGlobalStyle } from "styled-components";

const FontsStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBlack});
    font-weight: 900;
    font-style: normal;
  }
`;

export default FontsStyle;
