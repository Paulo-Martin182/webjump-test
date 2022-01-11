import CategoriesTemplate from 'templates/categories'

const BACKEND_API = process.env.API_BACKEND

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
  const res = await fetch(`${BACKEND_API}/api/categorias/items/${id}`)
  const menuList = await fetch(`${BACKEND_API}/api/categorias/list`)
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
