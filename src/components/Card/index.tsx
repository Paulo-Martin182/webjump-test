import * as S from './styles'

const Card = () => (
  <S.Card>
    <S.ImgBx>
      <S.Img src="/img/shoes.png" />
    </S.ImgBx>
    <S.ContentBx>
      <S.TitleContent>Nike shoes</S.TitleContent>
      <S.ColorSelect>
        <S.OptionTitle>Cores: </S.OptionTitle>
        <S.ItemsOptions />
        <S.ItemsOptions />
        <S.ItemsOptions />
      </S.ColorSelect>
      <S.Button>Compre Agora</S.Button>
    </S.ContentBx>
  </S.Card>
)

export default Card
