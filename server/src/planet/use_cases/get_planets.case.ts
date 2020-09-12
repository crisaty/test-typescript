import { PlanetEntity } from '../data_access/planet.entity'
import { Planet } from '../data_access/planet.schema'
import fetch from 'node-fetch'
import Joi from 'joi'

export const getPlanetsUseCase = async () => {
  try {
    return await fetch('https://swapi.dev/api/planets').then((data) => {
      return data.body
    })
  } catch (error) {
    throw error
  }
}
