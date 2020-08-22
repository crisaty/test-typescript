interface IPlanet {
  name: string
  diameter: number
}

export const planetRepository = {
  savePlanet(planet: IPlanet) {
    console.log(planet)
  }
}
