import Search from 'components/Search'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Content>
      <S.MenuIcon />
      <S.LogoBx>
        <S.Logo src="/img/logo.png" />
      </S.LogoBx>
      <S.SearchBx>
        <Search />
      </S.SearchBx>
    </S.Content>
  </S.Wrapper>
)

export default Header
