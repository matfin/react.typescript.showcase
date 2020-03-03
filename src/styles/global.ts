import { createGlobalStyle } from 'styled-components';
import { defaultFont } from './vars';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: ${defaultFont};
  }
`;

export default GlobalStyle;
