const { Schema, model } = require('mongoose');

const dietSchema = new Schema({
    date: String,
    calIn: Number,
    calOut: Number,
    weight: Number,
    bodyFat: Number
}, {
    timestamps: true
});

const Diet = model('Diet', dietSchema);

module.exports = Diet;