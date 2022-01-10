import styled, { css } from 'styled-components'

export const Wrapper = styled.main``
export const Main = styled.div`
  width: 100%;
  min-height: 700px;
  padding: 0px 50px;
  padding-right: 0;
  display: flex;
  align-items: start;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  @media (max-width: 1160px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
  }
`

export const FilterBox = styled.div`
  max-width: 265px;
  width: 262px;
  min-height: 475px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  margin-right: 22px;
  padding: 14px 18px;
  border-radius: 2px;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.08);
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ItemsContainer = styled.div`
  width: 100%;
  margin-top: -10px;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    margin-top: 30px;
    text-align: center;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    width: 100%;
    max-width: 1140px;
    height: 176px;
    margin-bottom: 31px;
  `}
`
