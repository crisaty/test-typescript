import { PlanetEntity } from './data_access/planet.entity'
import { PlanetRepository } from '../planet/planet.repository'

const planetRepository = new PlanetRepository()

export class PlanetController {
  async getPlanets() {
    return await planetRepository.getPlanets()
  }

  async savePlanet(planet: PlanetEntity): Promise<void> {
    return planetRepository.savePlanet(planet)
  }
}
