/* eslint-disable @typescript-eslint/no-explicit-any */
export const OrderBy = ({ value, items, setItems }: any) => {
  if (value === 'alfabetica') {
    const alfa = [...items].sort(function (
      a: { name: number },
      b: { name: number }
    ) {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    setItems(alfa)
  }

  if (value === 'menorPreco') {
    const menorPreco = [...items].sort(function (
      a: { price: number },
      b: { price: number }
    ) {
      if (a.price > b.price) {
        return 1
      }
      if (a.price < b.price) {
        return -1
      }
      return 0
    })

    setItems(menorPreco)
  }

  if (value === 'maiorPreco') {
    const maiorPreco = [...items].sort(function (
      a: { price: number },
      b: { price: number }
    ) {
      if (a.price < b.price) {
        return 1
      }
      if (a.price > b.price) {
        return -1
      }
      return 0
    })
    setItems(maiorPreco)
  }

  if (value === 'desc') {
    const desc = [...items].sort(function (
      a: { name: number },
      b: { name: number }
    ) {
      if (a.name < b.name) {
        return 1
      }
      if (a.name > b.name) {
        return -1
      }
      return 0
    })
    setItems(desc)
  }
}
