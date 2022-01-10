import Filter from 'components/Filter'
import Header from 'components/Header'
import Menu from 'components/Menu'
import MenuPath from 'components/MenuPath'
import ProductGrid from 'components/ProductGrid'
import TopHeader from 'components/TopHeader'
import { ProductPerCategoryTypes } from 'pages/categoria/[categories]'
import * as S from './styles'

export default function CategoriesTemplate({
  items = [],

  categoriesMenu = [],
  path = ''
}: ProductPerCategoryTypes) {
  return (
    <S.Wrapper>
      <TopHeader />
      <Header />
      <Menu categories={categoriesMenu} />
      <MenuPath path={path} />
      <S.Main>
        <S.FilterBox>
          <Filter categories={categoriesMenu} />
        </S.FilterBox>
        <S.ItemsContainer>
          <ProductGrid products={items} />
        </S.ItemsContainer>
      </S.Main>
      <S.Content>
        <S.Footer />
      </S.Content>
    </S.Wrapper>
  )
}
