const Diet = require('../../models/diet')

const dataController = {
  index (req, res, next) {
    Diet.find({}, (err, foundDiets) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.diets = foundDiets
        next()
      }
    })
  },
  destroy (req, res, next) {
    Diet.findByIdAndDelete(req.params.id, (err, deletedDiet) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.diet = deletedDiet
        next()
      }
    })
  },
  update (req, res, next) {
    Diet.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedDiet) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.diet = updatedDiet
        next()
      }
    })
  },
  create (req, res, next) {
    Diet.create(req.body, (err, createdDiet) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.diet = createdDiet
        next()
      }
    })
  },
  show (req, res, next) {
    Diet.findById(req.params.id, (err, foundDiet) => {
      if (err) {
        res.status(400).send({
          msg: err.message,
          output: 'Could not find a data with that ID'
        })
      } else {
        res.locals.data.diet = foundDiet
        next()
      }
    })
  }
}

const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.diets)
  },
  show (req, res, next) {
    res.json(res.locals.data.diet)
  }
}

module.exports = { dataController, apiController }
