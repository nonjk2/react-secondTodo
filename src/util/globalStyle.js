import { createGlobalStyle } from "styled-components";
// @import ('https://fonts.googleapis.com/css2?family=Dongle&display=swap')

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: beige;
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
