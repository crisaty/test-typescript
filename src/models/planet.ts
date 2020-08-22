import mongoose, { Schema } from 'mongoose'

export const Planet = mongoose.model(
  'Planet',
  new Schema({
    name: String,
    diameter: Number,
    climate: String,
    gravity: String,
    terrain: String
  })
)
