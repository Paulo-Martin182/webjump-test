import HomeTemplate from 'templates/home'
import { InferGetStaticPropsType } from 'next'

const BACKEND_API = process.env.API_BACKEND

export default function Home({
  categories
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomeTemplate categories={categories} />
}

type CategoriesTypes = {
  id: number
  name: string
  path: string
}

export const getStaticProps = async () => {
  const res = await fetch(`${BACKEND_API}/api/categorias/list`)
  const data = await res.json()
  const categories: CategoriesTypes[] = data.items
  return {
    props: {
      categories
    }
  }
}
