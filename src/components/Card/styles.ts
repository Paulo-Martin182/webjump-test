import styled, { css } from 'styled-components'
import { CardTypes } from '.'

export type CardStylesTypes = Pick<CardTypes, 'colors' | 'backgroundColor'>

export const Wrapper = styled.main``

export const ImgBx = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
  width: 100%;
  height: 220px;
  transition: 1.5s;
`
export const Img = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-25deg);
  width: 220px;
`

export const ContentBx = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  transition: 1s;
  z-index: 10;
`

export const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: #ffff;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: #111;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  cursor: pointer;
`

export const ColorSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
`

export const Card = styled.div<CardStylesTypes>`
  ${({ backgroundColor }) => css`
    position: relative;
    width: 250px;
    height: 270px;
    background: #232323;
    border-radius: 20px;
    overflow: hidden;
    margin: 5px 10px;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${backgroundColor ? backgroundColor : 'black'};
      clip-path: circle(150px at 80% 20%);
      transition: 0.5s ease-in-out;
    }

    &:after {
      content: 'Nike';
      position: absolute;
      top: 30%;
      left: -15%;
      font-size: 17em;
      font-weight: 800;
      font-style: italic;
      color: rgba(255, 255, 255, 0.04);
    }

    &:hover {
      ${ImgBx} {
        top: 0%;
        transform: translateY(-100%);
      }
      ${ContentBx} {
        height: 210px;
      }

      ${Button} {
        opacity: 1;
        transform: translateY(20px);
        transition-delay: 0.7s;
      }

      ${ColorSelect} {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
      }

      &:before {
        clip-path: circle(300px at 80% -20%);
      }
    }
  `}
`

export const TitleContent = styled.h2`
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  transition: 0.5s;
`

export const OptionTitle = styled.h3`
  color: #ffff;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
`
export const ItemsOptions = styled.span<CardStylesTypes>`
  ${({ colors }) => css`
    width: 20px;
    height: 20px;
    &:last-child {
      background: green;
    }
    background: ${colors ? colors : 'blue'};
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  `}
`
