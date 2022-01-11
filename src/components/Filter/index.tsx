/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router'
import { CategoriesTypes } from 'templates/home/types'
import { ColorsGrid } from 'utils/ColorsSelect'
import { TiposMock } from './mockTypesFIlter'
import * as S from './styles'

export type FiltersTypesOptions = {
  color?: string
  gender?: string
}

export type FilterTypes = {
  categories: CategoriesTypes[]
  filterType: FiltersTypesOptions
  SelectGender: (value: string) => void
  SelectColor: (value: string) => void
  colorList: any[]
}

const Filter = ({
  categories = [],
  filterType,
  SelectGender = () => null,
  SelectColor = () => null,
  colorList = []
}: FilterTypes) => {
  const filterColor = filterType?.color
  const filterGender = filterType?.gender
  const router = useRouter()

  const PushLink = (link: number | string) => {
    router.push(`/categoria/${link}`)
  }

  return (
    <S.Wrapper>
      <S.Title>Filtre por</S.Title>
      <S.TitleCategory>Categorias</S.TitleCategory>
      <S.List>
        {categories.map((item) => (
          <S.Item key={item.id} onClick={() => PushLink(item.id)}>
            <S.Text>{item.name}</S.Text>
          </S.Item>
        ))}
      </S.List>

      {filterColor ? (
        <>
          <S.TitleCategory>Cores</S.TitleCategory>
          <S.CategoryColorsList>
            {colorList.map((item, index) => (
              <S.CategoryColors key={index} onClick={() => SelectColor(item)}>
                <S.Colors color={ColorsGrid(`${item}`)} />
              </S.CategoryColors>
            ))}
          </S.CategoryColorsList>
        </>
      ) : null}

      {!!filterGender && (
        <>
          <S.TitleCategory>Tipo</S.TitleCategory>
          <S.List>
            {TiposMock.map((item) => (
              <S.Item key={item.id} onClick={() => SelectGender(item.name)}>
                <S.Text>{item.name}</S.Text>
              </S.Item>
            ))}
          </S.List>
        </>
      )}
    </S.Wrapper>
  )
}

export default Filter
