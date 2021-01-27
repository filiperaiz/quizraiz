import styled, { css } from 'styled-components'

const QuizBackground = styled.div`
  ${({ theme, backgroundImage }) => css`
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${backgroundImage});
    background-color: ${theme.colors.mainBg};
    flex: 1;

    @media screen and (max-width: 500px) {
      background-image: none;
      &:after {
        content: '';
        background-size: cover;
        background-position: center;
        background-image: linear-gradient(transparent, ${theme.colors.mainBg}),
          url(${backgroundImage});
        display: block;
        width: 100%;
        height: 210px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }

      *:first-child {
        position: relative;
        z-index: 10;
      }
    }
  `}
`

export default QuizBackground