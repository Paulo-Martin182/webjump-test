import styled, { css } from 'styled-components'

export type ColorsFilterTypes = {
  color: string
}

export const Wrapper = styled.main``
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.colors.ligthRed};
    margin-bottom: 14px;
  `}
`
export const TitleCategory = styled.h3`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    color: ${theme.colors.ligthBlack};
    margin-bottom: 5px;
  `}
`
export const List = styled.ul`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.ligthBlack};
    padding: 5px 20px;
    margin-bottom: 20px;
  `}
`
export const Item = styled.li`
  margin: 5px 0;
  cursor: pointer;
  user-select: none;
`
export const Text = styled.a``

export const CategoryColorsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 25px;
`
export const CategoryColors = styled.li`
  list-style: none;
  margin: 0 3px;
`
export const Colors = styled.div<ColorsFilterTypes>`
  ${({ color = 'red' }) => css`
    width: 48px;
    height: 24px;
    background: ${color};
    border-radius: 2px;
    cursor: pointer;
  `}
`
