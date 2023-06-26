import * as restaurants from './restaurants/restaurants'
import * as catalog from './catalog/catalog'

export type Resources = 'restaurants' | 'catalog'

export interface IAPIRepositories {
  restaurants?: typeof restaurants
  catalog?: typeof catalog
}
