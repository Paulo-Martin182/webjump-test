import * as S from './styles'
import { ProductTypes } from 'pages/categoria/[id]'
import { ChangeEvent, useEffect, useState } from 'react'
import { OrderBy } from 'utils/FormatterOrder'

const PUBLIC_API = process.env.NEXT_PUBLIC_API

export type ProductsGridTypes = {
  products: ProductTypes[]
}

const ProductGrid = ({ products }: ProductsGridTypes) => {
  const [productOrderBy, setProductOrderBy] = useState(products)
  const [displayList, setDisplayList] = useState('grid')
  const Formatter = (price: number) => {
    if (price)
      return price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
  }

  useEffect(() => {
    setProductOrderBy(products)
  }, [products])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    OrderBy({ value: value, items: products, setItems: setProductOrderBy })
  }

  return (
    <S.Wrapper>
      <S.Title>Sapatos</S.Title>
      <hr />
      <S.OptionsBox>
        <S.OrderBox>
          <div>
            <S.IconGrid onClick={() => setDisplayList('grid')} />
            <S.IconList onClick={() => setDisplayList('list')} />
          </div>
          <S.SelectBox>
            <S.OrderText>Ordenar Por: </S.OrderText>
            <S.Select onChange={handleChange}>
              <option defaultValue="desc">Preço</option>
              <option value="desc">Decrescente</option>
              <option value="menorPreco">Menor Preço</option>
              <option value="maiorPreco">Maior Preço</option>
              <option value="alfabetica">Ordem Alfabetica</option>
            </S.Select>
          </S.SelectBox>
        </S.OrderBox>
      </S.OptionsBox>
      <S.Box listStyle={displayList}>
        {productOrderBy.map((item) => (
          <S.CardProduct key={item.id}>
            <S.ImageProduct>
              <S.Image src={PUBLIC_API + item.image} />
            </S.ImageProduct>

            <S.TitleProduct> {item.name}</S.TitleProduct>
            <S.PriceProduct>
              {!!item.specialPrice && (
                <span>{Formatter(item.specialPrice)} </span>
              )}
              {Formatter(item.price)}
            </S.PriceProduct>

            <S.ButtonProduct> Comprar </S.ButtonProduct>
          </S.CardProduct>
        ))}
      </S.Box>
    </S.Wrapper>
  )
}
export default ProductGrid
