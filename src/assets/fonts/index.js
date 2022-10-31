import PoppinsThin from "./Poppins-Thin.ttf";
import PoppinsRegular from "./Poppins-Regular.ttf";
import PoppinsBlack from "./Poppins-Black.ttf";

import { createGlobalStyle } from "styled-components";

const FontsStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBlack});
    font-weight: 900;
    font-style: normal;
  }
  
   @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular});
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsThin});
    font-weight: 100;
    font-style: normal;
  }
`;

export default FontsStyle;
