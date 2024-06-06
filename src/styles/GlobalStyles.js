import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  :root &,
  &.light-mode {
    --color-grey-light: #f9f7f7;
    --color-grey-medium: #dbe2ef;
    --color-blue-light: #3f72af;
    --color-blue-dark: #112d4e;
    --color-black: #000;
    --color-white: #fff;
    --color-red: #e84545;
  }

  &.dark-mode {
    --color-grey-light: #03001c;
    --color-grey-medium: #1b1b2f;
    --color-blue-light: #3f72af;
    --color-blue-dark: #dbe2ef;
    --color-black: #000;
    --color-white: #03001c;
    --color-red: #c70039;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: var(--color-grey-light);
    color: var(--color-blue-dark);
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    transition: all 0.4s;
  }

  *:disabled {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  h1 {
    font-size: 2.25rem;
    text-transform: capitalize;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyles;
