import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Box = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1240px;
  width: 100%;
  padding: 24px 50px;
  margin-bottom: 24px;
`

export const SidebarBox = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.ligthGray};
    width: 262px;
    margin-right: 25px;
    height: 530px;
    padding: 25px;
  `}
`
export const Main = styled.div`
  width: 954px;
`

export const ContentMain = styled.div`
  min-height: 281px;
  display: flex;
  flex-wrap: wrap;
`

export const TextBox = styled.div`
  margin-top: 15px;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 26px;
    color: ${theme.colors.darkBlack};
    margin-bottom: 5.5px;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.darkBlack};
  `}
`

export const CardBox = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    width: 100%;
    max-width: 1140px;
    height: 176px;
    margin: 0 auto;
    margin-bottom: 31px;
  `}
`
