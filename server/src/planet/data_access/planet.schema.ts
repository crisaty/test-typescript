import * as mongoose from 'mongoose'

const PlanetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  diameter: {
    type: Number,
    required: true
  }
})

export const Planet = mongoose.model('Planet', PlanetSchema)
