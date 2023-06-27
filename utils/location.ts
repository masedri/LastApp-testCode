import { Coordinates } from '@/utils/types'

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180

const getCoordsInRadians = (coords: Coordinates) => ({
  latitude: degreesToRadians(coords.latitude),
  longitude: degreesToRadians(coords.longitude),
})

const getDistanceInKm = (startRadians: Coordinates, finalRadians: Coordinates, radiusEarthInKm = 6571) => {
  return (
    // Haversine equation
    Math.round(
      Math.acos(
        Math.sin(startRadians.latitude) * Math.sin(finalRadians.latitude) +
          Math.cos(startRadians.latitude) * Math.cos(finalRadians.latitude) * Math.cos(finalRadians.longitude - startRadians.longitude)
      ) * radiusEarthInKm
    )
  )
}

export const getDistance = (startCoords: Coordinates, finalCoords: Coordinates) => {
  return getDistanceInKm(getCoordsInRadians(startCoords), getCoordsInRadians(finalCoords))
}
