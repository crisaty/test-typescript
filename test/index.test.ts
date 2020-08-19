import { getPlanetsBuilder } from '../src/routes/getPlanet.route'

describe('test_pruebas', () => {
  const mock_fetch = jest.fn()
  const getPlanetsService = getPlanetsBuilder(mock_fetch)

  it('given valid id when call getPlanets then successfull answer', async () => {
    // preparation
    mock_fetch.mockResolvedValue({
      json: () => Promise.resolve({
        name: "Tatooine",
        diameter: 1000
      })
    })
    
    // execution
    const result = await getPlanetsService(1)

    // assertion
    expect(mock_fetch).toBeCalled()
    expect(result.name).toEqual("Tatooine")
    expect(result.diameter).toEqual(1000)
  })
})
