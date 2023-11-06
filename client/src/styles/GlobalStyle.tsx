// globalStyle.tsx
import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  // Reset CSS
  ${reset}
  * {
    box-sizing: border-box;
    color: #ffffff;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background-color: #000000;
    white-space: pre-wrap;
    -ms-overflow-style: none;
    font-family: "Montserrat-Regular";
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
