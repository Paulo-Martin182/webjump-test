import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #231f20;
  width: 100%;
  max-width: 1200px;
  height: 31px;
`

export const ListItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 5px 0px;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const Items = styled.li`
  list-style: none;
  margin: 0 10px;
  display: flex;
`

export const Item = styled.a`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
`

export const Separator = styled.p`
  color: #ffffff;
  font-size: 14px;
  margin: 0 10px;
`
