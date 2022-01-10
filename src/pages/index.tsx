import HomeTemplate from 'templates/home'
import { InferGetStaticPropsType } from 'next'

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
  const res = await fetch('http://localhost:8888/api/V1/categories/list')
  const data = await res.json()
  const categories: CategoriesTypes[] = data.items
  return {
    props: {
      categories
    }
  }
}
