import Koa from 'koa'
import mount from 'koa-mount'

import logger from 'koa-logger'
import json from 'koa-json'
import { AddressInfo } from 'net'

import planetRoutes from './planet/planet.routes'
import mongoose from 'mongoose'

// Setup
require('dotenv').config()
const MONGO_URL: string = process.env.MONGO_URL || ''
const api = new Koa()

// Middlewares
api.use(json())
api.use(logger())

// Routes
api.use(mount('/api/v1', planetRoutes.routes()))
api.use(planetRoutes.allowedMethods())

// Database
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Mongo DB Connected')
    // API
    const server = api.listen(5000, () => {
      const { port } = server.address() as AddressInfo
      console.log(`\nServer listening on PORT ${port}\n`)
    })
  })
  .catch((err) => console.log(err))
