// const { getPlanets } = require('../src/routes/getPlanet.route')
import { getPlanets } from '../src/routes/getPlanet.route'

describe('test_pruebas', () => {
  it('given valid id when call getPlanets then successfull answer', () => {
    // preparation
    const mock_fetch = jest.fn()
    const planet_id = 1

    // execution
    const result = getPlanets(planet_id)

    // assertion
    console.log(result)
  })
})
