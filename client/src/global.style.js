import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Proxima Nova", sans-serif;
    font-size: 16px;
    line-height: 1.2;
    margin: 0;
    background-color: #FFFFFF;
    overflow-x: hidden;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  *:focus {
    outline: none !important;
  }
  
  a, button, label, p, span, select, option, input, textarea {
    transition: all .2s ease;
  }
  
  // Запрет масштабирования по двойному клику на сенсорных экранах
  a, button, input, label, select, textarea {
    touch-action: manipulation;
  }
  
  body, ul, ol, p, h1, h2, h3, h4, h5, h6, input, button, textarea, select, table, figure, li, label {
    padding: 0;
    margin: 0;
    font-weight: normal;
  }
  
  figcaption, figure, main, article, aside, footer, header, nav, section {
    display: block;
  }
  
  ol, ul {
    list-style: none;
  }
  
  a {
    color: #000000;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
  
    &:hover {
      opacity: 0.85;
      color: inherit;
      text-decoration: none;
    }
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    display: block;
    padding: 0;
    border: none;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    overflow: visible;
    -webkit-appearance: button;
  
    &:hover {
      opacity: 0.85;
    }
  
    &:disabled {
      opacity: 0.6;
      pointer-events: none;
      cursor: not-allowed;
    }
  }
  
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="search"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  input[type="submit"],
  input[type="reset"],
  input[type="file"],
  input[type="button"],
  select
  {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  
  input::-webkit-input-placeholder {
    opacity: 1;
    color: inherit;
    font-size: inherit;
  }
  
  input::-moz-placeholder {
    opacity: 1;
    color: inherit;
    font-size: inherit;
  }
  
  input:-moz-placeholder {
    opacity: 1;
    color: inherit;
    font-size: inherit;
  }
  
  input:-ms-input-placeholder {
    opacity: 1;
    color: inherit;
    font-size: inherit;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type='number'] {
    -moz-appearance: textfield;
  }
  
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 100%;
    outline: none;
    border-radius: 0;
  }
  
  textarea {
    overflow: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    border-width: 0;
    border-spacing: 0;
    border-color: transparent;
  
    th {
      font-weight: normal;
      text-align: left;
    }
  }
  
  [hidden] {
    display: none;
  }
  
  .text-gradient {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background-size: 0 0 !important;
    -webkit-background-size: contain !important;
  }
`;

export default GlobalStyle;