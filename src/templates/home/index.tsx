import * as S from './styles'
import TopHeader from 'components/TopHeader'
import Header from 'components/Header'
import Menu from 'components/Menu'
import { HomeTemplateTypes } from './types'
import SidebarHome from 'components/SidebarHome'
import Card from 'components/Card'

export default function HomeTemplate({ categories }: HomeTemplateTypes) {
  return (
    <S.Wrapper>
      <TopHeader />
      <Header />
      <Menu categories={categories} />
      <S.Content>
        <S.Box>
          <S.SidebarBox>
            <SidebarHome categories={categories} />
          </S.SidebarBox>
          <S.Main>
            <S.ContentMain>
              <Card />
              <Card />
              <Card />
            </S.ContentMain>
            <S.TextBox>
              <S.Title> Seja bem-vindo!</S.Title>
              <S.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </S.Text>
            </S.TextBox>
          </S.Main>
        </S.Box>

        <S.CardBox />
      </S.Content>
    </S.Wrapper>
  )
}
