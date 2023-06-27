import { Coordinates } from '~/utils/types'

export const useLocation = () => {
  const coords = ref<Coordinates | undefined>(undefined)
  if (process.client) {
    if (navigator?.geolocation) {
      navigator?.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        coords.value = { latitude: position.coords.latitude, longitude: position.coords.longitude }
      })
    }
  }
  return { coords }
}
