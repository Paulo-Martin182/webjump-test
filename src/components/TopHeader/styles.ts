import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #231f20;
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: center;
`

export const ListItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 5px 40px;
  width: 100%;
  max-width: 1240px;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 5px 0;
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
  cursor: pointer;
`

export const Separator = styled.p`
  color: #ffffff;
  font-size: 14px;
  margin: 0 10px;
`
