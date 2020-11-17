const express = require('express')
const paletteModel = require('../models/palette')
const router = express.Router()
router.get('/', async (req, res, next) => {
  try {
    const palettes = await paletteModel.find({})
    res.json({ palettes: palettes })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server err' })
  }
})
router.post('/', async (req, res, next) => {
  const { id, color1, color2, color3, color4 } = req.body
  const palettes = new paletteModel({
    id,
    color1,
    color2,
    color3,
    color4,
  })
  try {
    await palettes.save({})
    res.json({ msg: 'palettes saved' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server err' })
  }
})
module.exports = router
