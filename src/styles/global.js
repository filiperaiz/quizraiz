import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      font-family: 'Lato', sans-serif;
      color: ${theme.colors.contrastText};
    }

    html, body {
      min-height: 100vh;
    }
    
    #__next {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
`}
`

export default GlobalStyles
