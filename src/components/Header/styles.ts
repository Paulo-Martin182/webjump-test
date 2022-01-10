import styled from 'styled-components'
import { Menu } from '@styled-icons/heroicons-outline/Menu'

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 50px;
  @media (max-width: 600px) {
    padding: 40px 10px;
  }
`
export const LogoBx = styled.div`
  width: 140px;
`

export const Logo = styled.img`
  width: 100%;
  object-fit: content;
`

export const SearchBx = styled.div``

export const MenuIcon = styled(Menu)`
  width: 32px;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`
