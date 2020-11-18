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
//
router.get('/category/:colorcategory', async (req, res, next) => {
  const category = req.params.colorcategory
  const categoryArray = [
    'red',
    'blue',
    'green',
    'black',
    'yellow',
    'white',
    'gray',
    'orange',
    'purple',
    'aqua',
    'brown',
    'pink',
  ]
  if (categoryArray.includes(category)) {
    try {
      const colors = await colorModel.find({ category })
      res.json({ colors: colors })
    } catch (err) {
      res.status(500).json({ msg: 'Sever error' })
    }
  } else {
    res.status(400).json({ msg: 'Invalid credentials' })
  }
})
module.exports = router
