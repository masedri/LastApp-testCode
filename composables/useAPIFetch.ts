import { RuntimeConfig } from 'nuxt/schema'

export const useAPIFetch: typeof useFetch = (request, opts?) => {
  const config: RuntimeConfig = useRuntimeConfig()
  return useFetch(request, { baseURL: config.public.baseURL, ...opts })
}
