import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const ListItems = styled.ul``
export const Items = styled.li``
export const Item = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlack};
    font-size: 18px;
    text-align: left;
  `}
`
