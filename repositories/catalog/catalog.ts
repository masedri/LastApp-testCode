import { useAPIFetch } from '~/composables/useAPIFetch'
import { Resources } from '@/repositories/types'
import { IProductsResponse, IProduct } from '@/repositories/catalog/types'

const catalog: Resources = 'catalog'
const restaurants: Resources = 'restaurants'

export const getCatalog = async (id: string) => {
  const { data } = await useAPIFetch<IProductsResponse[]>(`${restaurants}/${id}/${catalog}`)
  const entities: Record<string, IProduct[]> = toEntities(data.value!)
  const categories = Object.keys(entities)
  return { entities, categories }
}
