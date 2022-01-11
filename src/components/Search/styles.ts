import styled, { css } from 'styled-components'
import { ShoppingCart } from '@styled-icons/material/ShoppingCart'

export const Wrapper = styled.div``

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 600px) {
    display: none;
  }
`

export const CartIcon = styled(ShoppingCart)`
  display: none;
  width: 32px;
  @media (max-width: 600px) {
    display: block;
  }
`

export const SearchInput = styled.input`
  padding: 14px 10px;
  width: 300px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #959595;
  outline: none;
`

export const SearchButton = styled.a`
  ${({ theme }) => css`
    padding: 13px 15px;
    background: ${theme.colors.ligthBlu};
    color: #ffff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    margin-left: -3px;
    cursor: pointer;
  `}
`
