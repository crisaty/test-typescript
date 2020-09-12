import { PlanetEntity } from './data_access/planet.entity'
import { Planet } from './data_access/planet.schema'
import { getPlanetsUseCase } from './use_cases/get_planets.case'
import { savePlanetUseCase } from './use_cases/save_planet.case'

export class PlanetRepository {
  async getPlanets() {
    return await getPlanetsUseCase()
  }

  savePlanet(planet: PlanetEntity): void {
    savePlanetUseCase(planet)
  }
}
