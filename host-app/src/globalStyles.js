import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  h1, h2, h3, h4, h5, h6,
  p, ul, li, ol,
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: inherit;
    line-height: inherit;
  }

  html, body {
    font-family: 'Open Sans', sans-serif;
  }

`;