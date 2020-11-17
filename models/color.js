const mongoose = require('mongoose')
const colorSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})
module.exports = new mongoose.model('color', colorSchema)
