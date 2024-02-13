const { Schema, model } = require('mongoose')

const dietEntrySchema = new Schema({
  date: String,
  calIn: Number,
  calOut: Number,
  weight: Number,
  bodyFat: Number,
  userId: String,
  completed: { type: Boolean, default: false }
}, {
  timestamps: true
})

const DietEntry = model('DietEntry', dietEntrySchema)

module.exports = DietEntry
