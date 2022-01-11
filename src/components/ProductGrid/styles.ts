import styled, { css } from 'styled-components'
import { Grid3x3GapFill } from '@styled-icons/bootstrap/Grid3x3GapFill'
import { List } from '@styled-icons/fa-solid/List'

export type ProductStylesTypes = {
  listStyle: 'grid' | 'list' | string
}

export const Wrapper = styled.main`
  hr {
    width: calc(100% - 40px);
    margin: 10px 0;
    background: #e2dedc;
    border: 1px solid #e2dedc;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
`
export const Box = styled.div<ProductStylesTypes>`
  ${({ listStyle }) => css`
    display: ${listStyle === 'grid' ? 'flex' : 'block'};
    flex-wrap: wrap;
    padding: 10px 0;
    align-items: start;
    justify-content: start;
    transition: 0.5s ease-in-out;
    @media (max-width: 600px) {
      align-items: center;
      justify-content: center;
    }
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.ligthRed};
    font-size: 28px;
    font-weight: 500;
    text-transform: uppercase;
  `}
`

export const OptionsBox = styled.div``
export const OrderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
  @media (max-width: 600px) {
    padding-right: 0;
  }
`
export const OrderText = styled.h3`
  font-size: 11px;
  font-weight: bold;
  color: #808185;
  margin-right: 10px;
  text-transform: uppercase;
`
export const SelectBox = styled.div`
  display: flex;
  align-items: center;
`
export const TextSelect = styled.span`
  font-size: 14px;
`
export const Select = styled.select`
  ${({ theme }) => css`
    width: 216px;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #e2dedc;
    color: ${theme.colors.ligthBlack};
    font-size: 14px;
  `}
`

export const IconGrid = styled(Grid3x3GapFill)`
  ${({ theme }) => css`
    width: 22px;
    margin-right: 10px;
    cursor: pointer;
    color: ${theme.colors.ligthRed};
    @media (max-width: 600px) {
      display: none;
    }
  `}
`
export const IconList = styled(List)`
  ${({ theme }) => css`
    cursor: pointer;
    width: 22px;
    color: ${theme.colors.ligthBlu};
    @media (max-width: 600px) {
      display: none;
    }
  `}
`

export const CardProduct = styled.div`
  margin: 15px 0;
  margin-right: 25px;
  text-align: center;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 15px;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  width: 210px;
  max-height: 360px;
  @media (max-width: 768px) {
    min-width: 150px;
    width: 100%;
    margin: 20px 0;
    padding: 10px;
  }
`
export const ImageProduct = styled.div`
  border: 1px solid #e2dedc;
  padding: 10px;
  width: 100%;
  height: 215px;
  margin-bottom: 8px;
  min-width: 180px;
  overflow: hidden;
`
export const Image = styled.img`
  width: 120px;
  object-fit: contain;
`

export const TitleProduct = styled.h3`
  font-size: 14px;
  color: #626262;
  margin: 0 auto;
  margin-bottom: 18px;
  font-weight: 400;
  text-transform: uppercase;
`
export const PriceProduct = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.ligthBlack};
    font-weight: 700;
    font-size: 18px;
    margin: 0 auto;
    margin-bottom: 15px;

    span {
      font-size: 14px;
      text-decoration: line-through;
      color: #808185;
      font-weight: 500;
      margin-right: 5px;
    }
  `}
`

export const ButtonProduct = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.ligthBlu};
    padding: 8px 40px;
    border-radius: 5px;
    font-size: 14px;
    margin: 0 auto;
    text-transform: uppercase;
    color: #ffff;
    font-weight: 700;
    cursor: pointer;
  `}
`
