import * as S from './styles'

const Search = () => (
  <S.Wrapper>
    <S.CartIcon />
    <S.SearchBox>
      <S.SearchInput type="text" />
      <S.SearchButton>Buscar</S.SearchButton>
    </S.SearchBox>
  </S.Wrapper>
)

export default Search
