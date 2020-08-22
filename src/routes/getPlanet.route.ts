import { Context } from 'koa'
import Joi from 'joi'
import fetch, { Response, RequestInfo, RequestInit } from 'node-fetch'
export type Fetcher = (url: RequestInfo, init?: RequestInit) => Promise<Response>

import { planetRepository } from '../repositories/planet.repository'

interface IPlanet {
  name: string
  diameter: number
}

type GetPlanetsService = (id: number) => Promise<IPlanet>
export const getPlanetsBuilder = (getPlanetInfo: Fetcher): GetPlanetsService => async (
  planetId: number
): Promise<IPlanet> => {
  const schema = Joi.object<IPlanet>({
    name: Joi.string().required(),
    diameter: Joi.number().required()
  }).options({ allowUnknown: true })

  const response = await getPlanetInfo(`https://swapi.dev/api/planets/${planetId}`)

  const result = schema.validate(await response.json())

  planetRepository.savePlanet(result.value)

  if (result.error) {
    throw result.error
  } else {
    return result.value
  }
}

const getPlanetService = getPlanetsBuilder(fetch)

const getPlanetRouteHandler = async (ctx: Context) => {
  const planetId = ctx.params.planetId
  const result = await getPlanetService(planetId)
  ctx.body = result
}

export default getPlanetRouteHandler
