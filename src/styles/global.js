import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    box-sizing: border-box;
  }

  body {
    color: ${theme.colors.contrastText};
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    min-height: 100vh;
  }

  #__next {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`}
`

export default GlobalStyles
