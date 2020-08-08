import { Context } from 'koa'

import fetch from 'node-fetch'
import Joi from 'joi'

interface IPlanet {
  name: string
  diameter: number
}

export const getPlanets = (getPlanetInfo: any) => async (planetId: number): Promise<IPlanet> => {
  const schema = Joi.object<IPlanet>({
    name: Joi.string().required(),
    diameter: Joi.number().required()
  }).options({
    allowUnknown: true
  })

  const response = await getPlanetInfo(`https://swapi.dev/api/planets/${planetId}`)

  const result = schema.validate(await response.json())

  if (result.error) {
    throw result.error
  } else {
    return result.value
  }
}

const getPlanetReady = getPlanets(fetch)

const getPlanet = async (ctx: Context) => {
  // console.log(ctx.params.planetName)
  const planetId = ctx.params.planetId
  const result = await getPlanetReady(planetId)
  // console.log(result)
  ctx.body = result
}

export default getPlanet
