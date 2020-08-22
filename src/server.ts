import Koa from 'koa'
import Router from 'koa-router'

import logger from 'koa-logger'
import json from 'koa-json'
import { AddressInfo } from 'net'

import getPlanet from './routes/getPlanet.route'
import mongoose from 'mongoose'
require('dotenv').config()
const MONGO_URL: any = process.env.MONGO_URL

// Database
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Mongo DB Connected'))
  .catch((err) => console.log(err))

const api = new Koa()
const router = new Router()

// Routes
router.get('/', async (ctx, next) => {
  ctx.body = { message: 'Hello world!' }
})
router.get('/health', async (ctx, next) => {
  ctx.body = { message: 'OK' }
})
router.get('/planets/:planetId', getPlanet)

// Middlewares
api.use(json())
api.use(logger())

// Set Routes
api.use(router.routes()).use(router.allowedMethods())

const server = api.listen(5000, () => {
  const { port } = server.address() as AddressInfo
  console.log(`\nServer listening on PORT ${port}\n`)
})
