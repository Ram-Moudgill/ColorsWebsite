const express = require('express')
const Port = process.env.PORT || 4000
const cors = require('cors')
const db = require('./config/db')
const colors = require('./routes/colors')
const gradients = require('./routes/gradients')
const palettes = require('./routes/palettes')
const app = express()
//body parser
app.use(express.json({ extended: false }))
//cors
app.use(cors())
//mongo connection
db()
// routes
app.use('/api/colors', colors)
app.use('/api/gradients', gradients)
app.use('/api/palettes', palettes)
app.listen(Port, () => {
  console.log(`Server is listening on http://localhost:${Port}`)
})
