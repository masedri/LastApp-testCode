import { IProductsResponse } from '~/repositories/catalog/types'

export const toEntities = (collection: IProductsResponse[]) => {
  return collection.reduce(
    (prev, next) => ({
      ...prev,
      [next.name]: next.products.map((product) => ({ ...product, amount: product.amount | 0 })),
    }),
    {}
  )
}

export function isImgUrl(url: string) {
  return fetch(url, { method: 'HEAD' }).then((res) => {
    return res.headers.get('Content-Type')?.startsWith('image/png')
  })
}
