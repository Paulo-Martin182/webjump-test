import { useState, useEffect } from 'react'
import Filter from 'components/Filter'
import Header from 'components/Header'
import Menu from 'components/Menu'
import MenuPath from 'components/MenuPath'
import ProductGrid from 'components/ProductGrid'
import TopHeader from 'components/TopHeader'
import { ProductPerCategoryTypes } from 'pages/categoria/[id]'
import * as S from './styles'

export default function CategoriesTemplate({
  items = [],
  categoriesMenu = [],
  filters = [],
  path = ''
}: ProductPerCategoryTypes) {
  const FilterType = filters[0]
  const [products, setProducts] = useState(items)
  const [coresUn, setCores] = useState([0] as any)

  const colors = () => {
    const cores = items.map((item) => {
      const selecor = item.filter.map((cor: any) => {
        return cor.color
      })
      return selecor
    })
    setCores(cores)
  }

  useEffect(() => {
    colors()
  }, [items])

  useEffect(() => {
    setProducts(items)
  }, [items])

  const filteredGender = (selectGender: string) => {
    const freelancers = items
    const javascript_freelancers = freelancers.filter(function (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      freelancer: any
    ) {
      return freelancer.filter[0].gender == selectGender
    })
    setProducts(javascript_freelancers)
  }

  const filteredColor = (selectColor: string) => {
    const freelancers = items
    const javascript_freelancers = freelancers.filter(function (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      freelancer: any
    ) {
      return freelancer.filter[0].color == selectColor
    })
    setProducts(javascript_freelancers)
  }

  return (
    <S.Wrapper>
      <TopHeader />
      <Header />
      <Menu categories={categoriesMenu} />
      <MenuPath path={path} />
      <S.Main>
        <S.FilterBox>
          <Filter
            filterType={FilterType}
            categories={categoriesMenu}
            SelectGender={filteredGender}
            SelectColor={filteredColor}
            colorList={coresUn}
          />
        </S.FilterBox>
        <S.ItemsContainer>
          <ProductGrid products={products} />
        </S.ItemsContainer>
      </S.Main>
      <S.Content>
        <S.Footer />
      </S.Content>
    </S.Wrapper>
  )
}
