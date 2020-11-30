const express = require('express')
const Port = process.env.PORT || 5000
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
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('colorwebsite/build'))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'colorwebsite', 'build', 'index.html'))
  )
}
app.listen(Port, () => {
  console.log(`Server is listening on http://localhost:${Port}`)
})
