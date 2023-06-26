import { useAPIFetch } from '~/composables/useAPIFetch'
import { Resources } from '@/repositories/types'
import { IRestaurantResponse } from '@/repositories/restaurants/types'

const RESOURCE: Resources = 'restaurants'

export const getRestaurants = async () => {
  const { data } = await useAPIFetch<IRestaurantResponse[]>(RESOURCE)
  return data
}
