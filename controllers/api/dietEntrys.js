const DietEntry = require('../../models/dietEntry')

const dataController = {
  index (req, res, next) {
    DietEntry.find({}, (err, foundDietEntrys) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.dietEntrys = foundDietEntrys
        next()
      }
    })
  },
  destroy (req, res, next) {
    DietEntry.findByIdAndDelete(req.params.id, (err, deletedDietEntry) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.dietEntry = deletedDietEntry
        next()
      }
    })
  },
  update (req, res, next) {
    DietEntry.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedDietEntry) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.dietEntry = updatedDietEntry
        next()
      }
    })
  },
  create (req, res, next) {
    DietEntry.create(req.body, (err, createdDietEntry) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.dietEntry = createdDietEntry
        next()
      }
    })
  },
  show (req, res, next) {
    DietEntry.findById(req.params.id, (err, foundDietEntry) => {
      if (err) {
        res.status(400).send({
          msg: err.message,
          output: 'Could not find a data with that ID'
        })
      } else {
        res.locals.data.dietEntry = foundDietEntry
        next()
      }
    })
  }
}

const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.dietEntrys)
  },
  show (req, res, next) {
    res.json(res.locals.data.dietEntry)
  }
}

module.exports = { dataController, apiController }