const mongoose = require('mongoose')
const colorSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
})
module.exports = new mongoose.model('color', colorSchema)
