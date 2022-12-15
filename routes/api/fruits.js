const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/fruits')

// Index /api/fruits
router.get('/api', dataController.index, apiController.index)

// Delete /api/fruits/:id
router.delete('/api/:id', dataController.destroy, apiController.show)

// Update /api/fruits/:id
router.put('/api/:id', dataController.update, apiController.show)

// Create /api/fruits
router.post('/api', dataController.create, apiController.show)

// Show /api/fruits/:id
router.get('/api/:id', dataController.show, apiController.show)


module.exports = router