const mongoose = require('mongoose')
const paletteSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  color1: {
    type: String,
    required: true,
  },
  color2: {
    type: String,
    required: true,
  },
  color3: {
    type: String,
    required: true,
  },
  color4: {
    type: String,
    required: true,
  },
})
module.exports = new mongoose.model('palette', paletteSchema)
