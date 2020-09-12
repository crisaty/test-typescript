import { PlanetEntity } from '../data_access/planet.entity'
import { Planet } from '../data_access/planet.schema'

export const savePlanetUseCase = async (planet: PlanetEntity) => {
  return await Planet.create(planet)
}
