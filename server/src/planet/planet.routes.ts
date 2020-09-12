import { PlanetController } from './planet.controller'
import Router from 'koa-router'

const planetController = new PlanetController()

const router = new Router({ prefix: '/planets' })

router.get('/', async (ctx) => {
  const data = await planetController.getPlanets()
  ctx.body = data
})
// router.get('/:planetId', (ctx): Promise<void> => planetController.getPlanetById())
router.post('/', (ctx): Promise<void> => planetController.savePlanet(ctx.body))

export default router
