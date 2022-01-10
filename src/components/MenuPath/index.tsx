import * as S from './styles'

export type MenuPath = {
  path: string
}

const MenuPath = ({ path }: MenuPath) => (
  <S.Wrapper>
    <S.ListItems>
      <S.Items>
        <S.Item>
          Página inicial <span>&gt;</span>
        </S.Item>
      </S.Items>
      <S.Items>
        <S.Item>{path}</S.Item>
      </S.Items>
    </S.ListItems>
  </S.Wrapper>
)

export default MenuPath
