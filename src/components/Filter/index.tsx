import { useRouter } from 'next/router'
import { CategoriesTypes } from 'templates/home/types'
import { TiposMock } from './mockTypesFIlter'
import * as S from './styles'

export type FilterTypes = {
  categories: CategoriesTypes[]
}

const Filter = ({ categories = [] }: FilterTypes) => {
  const filterColor = true
  const router = useRouter()

  const PushLink = (link: number | string, path: string) => {
    router.push(`/categoria/${path}?id=${link}`)
  }

  return (
    <S.Wrapper>
      <S.Title>Filtre por</S.Title>
      <S.TitleCategory>Categorias</S.TitleCategory>
      <S.List>
        {categories.map((item) => (
          <S.Item key={item.id} onClick={() => PushLink(item.id, item.name)}>
            <S.Text>{item.name}</S.Text>
          </S.Item>
        ))}
      </S.List>

      {filterColor ? (
        <>
          <S.TitleCategory>Cores</S.TitleCategory>
          <S.CategoryColorsList>
            <S.CategoryColors>
              <S.Colors color="#CB0D1F" />
            </S.CategoryColors>
            <S.CategoryColors>
              <S.Colors color="#F26324" />
            </S.CategoryColors>
            <S.CategoryColors>
              <S.Colors color="#27A3A9" />
            </S.CategoryColors>
          </S.CategoryColorsList>
        </>
      ) : null}

      <S.TitleCategory>Tipo</S.TitleCategory>
      <S.List>
        {TiposMock.map((item) => (
          <S.Item key={item.id}>
            <S.Text>{item.name}</S.Text>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  )
}

export default Filter
