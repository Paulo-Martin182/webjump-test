import { CategoriesTypes } from 'templates/home/types'
import * as S from './styles'
import { useRouter } from 'next/router'

export type MenuTypes = {
  categories: CategoriesTypes[]
}

const Menu = ({ categories = [] }: MenuTypes) => {
  const router = useRouter()

  const PushLink = (link: number | string, path: string) => {
    router.push(`/categoria/${path}?id=${link}`)
  }

  const ContactMe =
    'https://api.whatsapp.com/send?phone=5565993085699&text=Contato%20atraves%20do%20teste'

  return (
    <S.Wrapper>
      <S.ListItem>
        <S.Items>
          <S.Item onClick={() => router.push('/')}> Página Inicial </S.Item>
        </S.Items>
        {categories.map((items) => (
          <S.Items
            key={items.id}
            onClick={() => PushLink(items.id, items.name)}
          >
            <S.Item>{items.name}</S.Item>
          </S.Items>
        ))}
        <S.Items>
          <S.Item href={ContactMe} target="_blank">
            Contato
          </S.Item>
        </S.Items>
      </S.ListItem>
    </S.Wrapper>
  )
}

export default Menu
