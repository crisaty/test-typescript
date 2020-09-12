import { getPlanetsBuilder } from '../src/routes/getPlanet.route'
import { PlanetRepository } from 'src/planet/planet.repository'

describe('test_pruebas', () => {
  const mock_fetch = jest.fn()
  const mock_planet_repo = {
    savePlanet: jest.fn()
  }
  const getPlanetsService = getPlanetsBuilder(mock_fetch, mock_planet_repo)

  it('given valid id when call getPlanets then successfull answer', async () => {
    // preparation
    const expected_result = {
      name: 'Tatooine',
      diameter: 1000
    }

    mock_planet_repo.savePlanet.mockRejectedValue(new Error('var error'))

    mock_fetch.mockResolvedValue({
      json: () => Promise.resolve(expected_result)
    })

    // execution
    const result = await getPlanetsService(1)

    // assertion
    expect(mock_fetch).toBeCalled()
    expect(result.name).toEqual(expected_result.name)
    expect(result.diameter).toEqual(expected_result.diameter)

    expect(mock_planet_repo.savePlanet).toBeCalled()
  })
})
