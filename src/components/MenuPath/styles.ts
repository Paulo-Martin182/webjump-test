import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  padding: 22px 50px;
  max-width: 1240px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 22px 20px;
  }
`

export const ListItems = styled.ul`
  display: flex;
  align-items: center;
`

export const Items = styled.li`
  ${({ theme }) => css`
    list-style: none;
    margin: 0 3px;
    &:first-child {
      color: ${theme.colors.ligthBlu};
      margin-left: 0;
      margin-right: 5px;
    }
    color: ${theme.colors.primary};
  `}
`

export const Item = styled.a`
  font-size: 14px;
`
