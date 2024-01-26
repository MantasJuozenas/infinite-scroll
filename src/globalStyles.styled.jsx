import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Reset default styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: rgb(231, 231, 231);
    font-family: 'Inter', sans-serif;
  }
  `;
