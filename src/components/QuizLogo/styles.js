import styled from 'styled-components'

export const QuizLogo = styled.svg`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }

  svg {
    height: 16rem;
    pointer-events: none;
  }
`
