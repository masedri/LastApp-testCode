export interface IProductsResponse {
  name: string
  products: IProduct[]
}

export interface IProduct {
  name: string
  image: string
  price: number
  amount: number
}
