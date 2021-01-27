import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({theme}) => css`
    font-size: 50px;
    color: ${theme.colors.primary};
  `}
`