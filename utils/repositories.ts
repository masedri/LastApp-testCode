import { IAPIRepositories } from '@/repositories/types'
import * as restaurants from '@/repositories/restaurants/restaurants'
import * as catalog from '@/repositories/catalog/catalog'

export const repositories: IAPIRepositories = {
  restaurants,
  catalog,
}
