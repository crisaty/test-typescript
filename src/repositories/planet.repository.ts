import { Planet } from '../models/planet'

interface IPlanet {
  name: string
  diameter: number
}

export const planetRepository = {
  async savePlanet(planet: IPlanet) {
    await Planet.create(planet)
  }
}
