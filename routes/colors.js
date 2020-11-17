const express = require('express')
const colorModel = require('../models/color')
const router = express.Router()
router.get('/', async (req, res, next) => {
  try {
    const colors = await colorModel.find({})
    res.json({ colors: colors })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server err' })
  }
})
router.post('/', async (req, res, next) => {
  const { id, color, category } = req.body
  const colors = new colorModel({
    id,
    color,
    category,
  })
  try {
    await colors.save({})
    res.json({ msg: 'saved' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server err' })
  }
})
module.exports = router
