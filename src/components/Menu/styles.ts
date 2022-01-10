import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${theme.colors.primary};
    height: 54px;
    @media (max-width: 600px) {
      display: none;
    }
  `}
`
export const ListItem = styled.ul`
  display: flex;
  width: 100%;
  max-width: 1240px;
  justify-content: start;
  align-items: center;
  padding: 0 40px;
  @media (max-width: 550px) {
    display: none;
  }
`
export const Items = styled.li`
  margin: 0 10px;
  list-style: none;
`
export const Item = styled.a`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
