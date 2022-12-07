import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --red-primary: #C13935;
    --blue-primary: #102B9C;
    --yellow-primary: #E7A62C;
    --white: #FFFFFF;
    --black: #000000;
    --gray: #808289;
    --gray-light: #F2F2F9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body {
    overflow-x: hidden;
    height: 100%;
  }
`
