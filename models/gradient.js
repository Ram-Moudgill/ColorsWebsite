const mongoose = require('mongoose')
const gradientSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  gradient: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})
module.exports = new mongoose.model('gradient', gradientSchema)
