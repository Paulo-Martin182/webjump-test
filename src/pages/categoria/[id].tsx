import { GetStaticProps } from 'next'
import list from 'mock-api/list.json'
import CategoriesTemplate from 'templates/categories'
import category1 from 'mock-api/1.json'
import category2 from 'mock-api/2.json'
import category3 from 'mock-api/3.json'

type CategoriesTypes = {
  id: number
  name: string
  path: string
}

type filterTypes = {
  color?: string
}

export type ProductTypes = {
  id: number
  sku: string
  path: string
  name: string
  image: string
  price: number
  specialPrice: number
  filter: []
}

export type ProductPerCategoryTypes = {
  filters: filterTypes[]
  items: ProductTypes[]
  categoriesMenu: any
  path: string
}

export default function Categories({
  items,
  filters,
  categoriesMenu,
  path
}: ProductPerCategoryTypes) {
  return (
    <CategoriesTemplate
      categoriesMenu={categoriesMenu}
      items={items}
      filters={filters}
      path={path}
    />
  )
}

export const getStaticPaths = async () => {
  const paths = list.items.map(({ id }) => ({
    params: { id: id.toString() }
  }))
  return {
    fallback: true,
    paths
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id
  function SelectCategory() {
    if (id === '1') return category1
    if (id === '2') return category2
    if (id === '3') return category3
  }
  function SelectPathName() {
    if (id === '1') return list.items[0]
    if (id === '2') return list.items[1]
    if (id === '3') return list.items[2]
  }

  const pathName = SelectPathName()?.name
  const data: any = SelectCategory()
  const menuList: CategoriesTypes[] = list.items

  return {
    props: {
      categoriesMenu: menuList,
      path: pathName,
      items: data.items,
      filters: data?.filters
    },
    revalidate: 10
  }
}
