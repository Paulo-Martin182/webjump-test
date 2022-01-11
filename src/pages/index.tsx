import HomeTemplate from 'templates/home'
import { InferGetStaticPropsType } from 'next'
import list from 'mock-api/list.json'

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
  const data = list
  const categories: CategoriesTypes[] = data.items
  return {
    props: {
      categories
    }
  }
}
