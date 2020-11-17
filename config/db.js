const mongoose = require('mongoose')
const config = require('config')
const conn = async () => {
  try {
    await mongoose.connect(config.get('MongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    })
    console.log('connected')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
module.exports = conn
