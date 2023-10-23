import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  html {
    font-size: 6.25%;//16px
  }

  body,
  input,
  button,
  textarea {
    outline: none;
    font-size: 16rem;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-height: 100vh;
  }

  button {
    border: none;
    background-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover,
  a:hover {
    filter: brightness(0.9);
  }

  a:visited {
    color: inherit;
  }

  svg {
    font-size: inherit;
    color: inherit;
    line-height: inherit;
  }
`;
