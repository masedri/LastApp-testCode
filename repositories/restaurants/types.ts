export interface IRestaurantResponse {
  id: string
  name: string
  image: string
  logo: string
  ratings: IRatings
  coordinates: ICoordinates
  main?: boolean
}

export interface ICoordinates {
  latitude: number
  longitude: number
}

export interface IRatings {
  total: string
  average: string
}
