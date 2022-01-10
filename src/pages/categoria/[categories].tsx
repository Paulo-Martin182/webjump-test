import CategoriesTemplate from 'templates/categories'

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

export const getServerSideProps = async (ctx: {
  query: { id: number; categories: string }
}) => {
  const id = ctx.query?.id
  const pathName = ctx.query?.categories
  const res = await fetch(`http://localhost:8888/api/V1/categories/${id}`)
  const menuList = await fetch('http://localhost:8888/api/V1/categories/list')
  const data: ProductPerCategoryTypes = await res.json()
  const categoriesMenu = await menuList.json()
  return {
    props: {
      categoriesMenu: categoriesMenu?.items,
      path: pathName,
      items: data.items,
      filters: data?.filters
    }
  }
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
