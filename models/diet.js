const { Schema, model } = require('mongoose')

const dietSchema = new Schema({
  duration: Number,
  bmr: Number,
  weight: Number,
  bodyFat: Number,
  userId: String
}, {
  timestamps: true
})

const Diet = model('Diet', dietSchema)

module.exports = Diet
