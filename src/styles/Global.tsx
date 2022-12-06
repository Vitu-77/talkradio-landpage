import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --red-primary: #C13935;
    --blue-primary: #102B9C;
    --yellow-primary: #E7A62C;
    --white: #FFFFFF;
    --black: #000000;
    --grey: #808289;
    --grey-light: #F2F2F9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    height: 100%;
  }
`
