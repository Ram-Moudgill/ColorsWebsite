const express = require('express')
const gradientModel = require('../models/gradient')
const router = express.Router()
router.get('/', async (req, res, next) => {
  try {
    const gradients = await gradientModel.find({})
    res.json({ gradients: gradients })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server err' })
  }
})
router.post('/', async (req, res, next) => {
  const { id, gradient, category } = req.body
  const gradients = new gradientModel({
    id,
    gradient,
    category,
  })
  try {
    await gradients.save({})
    res.json({ msg: ' gradient saved' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server err' })
  }
})
module.exports = router
