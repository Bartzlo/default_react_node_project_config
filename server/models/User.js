const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  group: {
    type: String,
    default: 'user'
  }
})

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10)
    .then(res => {
      this.password = res
      next()
    })
    .catch(err => next(err))
})

module.exports = mongoose.model('users', userSchema)
