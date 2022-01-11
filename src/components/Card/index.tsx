import { CardMock } from './CardMock'
import * as S from './styles'

export type CardTypes = {
  titulo?: string
  optionTitle?: string
  textButton?: string
  colors?: string
  backgroundColor?: string
}

const Card = ({
  textButton = CardMock.textButton,
  titulo = CardMock.titulo,
  optionTitle = CardMock.optionTitle,
  colors = CardMock.colors,
  backgroundColor = CardMock.backgroundColor
}: CardTypes) => (
  <S.Card backgroundColor={backgroundColor}>
    <S.ImgBx>
      <S.Img src="/img/shoes.png" />
    </S.ImgBx>
    <S.ContentBx>
      <S.TitleContent>{titulo}</S.TitleContent>
      <S.ColorSelect>
        <S.OptionTitle>{optionTitle}: </S.OptionTitle>
        <S.ItemsOptions colors={colors} />
        <S.ItemsOptions colors={colors} />
        <S.ItemsOptions colors={colors} />
      </S.ColorSelect>
      <S.Button>{textButton}</S.Button>
    </S.ContentBx>
  </S.Card>
)

export default Card
