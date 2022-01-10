import { CategoriesTypes } from 'templates/home/types'
import * as S from './styles'

export type SidebarHomeTypes = {
  categories: CategoriesTypes[]
}

const SidebarHome = ({ categories = [] }: SidebarHomeTypes) => (
  <S.Wrapper>
    <S.ListItems>
      <S.Items>
        <S.Item> Página Inicial </S.Item>
      </S.Items>
      {categories.map((items) => (
        <S.Items key={items.id}>
          <S.Item>{items.name}</S.Item>
        </S.Items>
      ))}
      <S.Items>
        <S.Item> Contato </S.Item>
      </S.Items>
    </S.ListItems>
  </S.Wrapper>
)

export default SidebarHome
