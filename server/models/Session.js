const mongoose = require('mongoose')
const sessionSchema = new mongoose.Schema({
  _id: {type: String}
})
module.exports = mongoose.model('session', sessionSchema)
